import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../../utils/header';
import { AppConsumer } from '../../../context/AppProvider';

export default class SettingsScreen extends Component {

  constructor(args) {
    super(args);
  }

  componentDidMount() {
    this.context.setCurrentContext(this);
  }

  onBackPress = () => {
    this.context.goBack(this);
  }

   onConnectStripe() {
   if(!this.context.currentUser.stripe_account_id) {
    const redirectLink = 'https://us-central1-staffa-13e8a.cloudfunctions.net/getStripeToken'
    Linking.openURL(
      `https://connect.stripe.com/express/oauth/authorize?redirect_uri=${redirectLink}
      &client_id=ca_G7avMzAcG0pABNlEcaGIT1q3s8pGTG3C&state=${this.context.currentUser.uid}&stripe_user[business_type]=individual`
    ).catch(err => console.error('An error occurred', err))
   }
 }

  render() {
    const platformHeaderProps = {}
    platformHeaderProps['leftItem'] = {
      title: 'Menu',
      icon: require('../../../images/back.png'),
      layout: 'icon',
      onPress: this.onBackPress
    }
    return (
      <AppConsumer>
        {(context) => (
          <View style={context.utilities.styles.root} ref={(ref) => { this.context = context; }}>
            <Header title="Settings" {...platformHeaderProps} />
            <Text style = {context.utilities.styles.NewToAppTextStyle}>Stripe account to be paid into</Text>
            <TouchableOpacity onPress={ () => this.onConnectStripe()}>
                <Text style = {context.utilities.styles.LoginButtonEnableTextStyle}>{!!context.currentUser.stripe_account_id ? 'Connect with Stripe' : 'Connected to Stripe'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </AppConsumer>
    );
  }
}