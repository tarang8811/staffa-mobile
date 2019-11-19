const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_qnWHaI8DUOaDcUdNDNoccnZZ00tjXgzQ9D');

const FS_COLLECTION_USERS = "Users";
const FS_COLLECTION_PAYMENTS = "payments";
var cors = require('cors')({origin: true});   

// when user is created register them with stripe
exports.createStripeCustomer = functions.auth.user().onCreate((event) => {
  return stripe.customers.create({
    email: event.email,
  }).then((customer) => {
    return admin.firestore().collection(FS_COLLECTION_USERS)
      .doc(event.uid)
      .update({stripe_id: customer.id});
  });
});

exports.getStripeToken = functions.https.onRequest((req, res) => {
  if(req.method === 'GET'){
    const code = req.query.code
    const uid = req.query.state
    console.log(req.query)
    return stripe.oauth.token({
      grant_type: 'authorization_code',
      code: code,
    }).then(response => {
      admin.firestore().collection(FS_COLLECTION_USERS)
      .doc(uid)
      .update({stripe_account_id: response.stripe_user_id});
      return res.status(200).json({
        message: 'Success. Please go back to the app'
      })
    });
  } else{
    return res.status(500).json({
        message: 'Invalid Request'
    })
  }
});

exports.createCheckoutSession = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if(req.method === 'POST'){
      // Creating session data from payload
      const body = JSON.parse(req.body);
      const lineItem = {
        name: body.name,
        description: 'add funds to make this shift live',
        amount: Number(body.amount) * 100,
        currency: 'EUR',
        quantity: 1,
      }
      console.log(req.body, lineItem)
      return stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [lineItem],
        customer: body.customerId,
        success_url: 'https://staffa-13e8a.firebaseapp.com/createJob?response=success',
        cancel_url: 'https://staffa-13e8a.firebaseapp.com/createJob?response=failed',
      }).then(session => {
        // Getting the session id
        var sessionId = session.id;
        return res.status(200).json({
          sessionId: sessionId
        })
      }).catch(error => {
        return res.status(500).json({
          message: error
        })
      });
    } else{
      return res.status(500).json({
          message: 'Invalid Request'
      })
    }
  })
});


exports.scheduledPayoutCrontab = functions.pubsub.schedule('0 8 * * *').timeZone("GMT").onRun((context) => {
    return admin.firestore().collection(FS_COLLECTION_PAYMENTS).where("status", "==", "PENDING").get()
    .then(snapshot => {
      let promises = []
      promises = snapshot.docs.map(doc => {
        const d = doc.data()
        if(isGreaterThanSevenDays(d.date)) {
          return admin.firestore().collection(FS_COLLECTION_USERS).where("uid", "==", d.freelancerId).get()
          .then(snapshot => {
            let user = snapshot.docs.map(d => d.data())
            user = user[0]
            return stripe.payouts.create(
              {
                amount: d.amount * 100,
                currency: 'gbp',
              },
              {stripe_account: 'acct_1FbjLqBZIUWX5iRM'}
            ).then(p => {
              return doc.update({status: "PAID", payoutId: p.id})
            })
            .catch(e => Promise.resolve(e))
          }).catch(error => {
            return Promise.resolve(error.message);   
          })
        } else {
          return Promise.resolve('dont update'); 
        }
      })
      return Promise.all(promises).then(p => {
        return res.status(200).json({
          data: p
        })
      })
    }).catch(error => {
      return res.status(500).json({
        message: error.message
      })    
    })
}); 

isGreaterThanSevenDays = (date) => {
  console.log(date)
  const sevenDaysInMillis = 7 * (86400 * 1000)
  const myDate = new Date(date)
  const todayDate = new Date()

  return Math.abs(todayDate - myDate) > sevenDaysInMillis
}