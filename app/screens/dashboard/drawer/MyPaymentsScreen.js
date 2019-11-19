import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Header from '../../../utils/header';
import {AppConsumer} from '../../../context/AppProvider';
import Strings from '../../../utils/res/Strings'

export default class MyPaymentsScreen extends Component {
 constructor(args) {
   super(args);
   this.state = {
    paymentsData: []
    }
 }

 componentDidMount(){
   this.context.setCurrentContext(this);
   this.context.apiService.getPayments(this.context.currentUser.uid, (err, res) => {
    this.setState({paymentsData: res})
  })
 }
 
 onBackPress = () => {
  this.context.goBack(this);
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
          <Header title="My Payments" {...platformHeaderProps} />
          <View style = {context.utilities.styles.baseStyle1}>
          
          <FlatList
            extraData={this.state.paymentsData}
            data={this.state.paymentsData}
            renderItem={({ item, index }) =>
            <View style={[context.utilities.styles.QualificationListRowBGStyle, {padding: 10}]}>
              <Text style={context.utilities.styles.jobStyles}>Approved Date : {item.date}</Text>
              <Text style={context.utilities.styles.jobStyles}>Agency Name: {item.agencyName}</Text>
              <Text style={context.utilities.styles.jobStyles}>Amount: {item.amount}</Text>
              {
                item.paidDate && 
                <Text style={context.utilities.styles.jobStyles}>Paid Date: {item.paidDate}</Text>
              }
              <Text style={context.utilities.styles.jobStyles}>Status: {item.status}</Text>
            </View>
            }
          />
          </View>
      </View>
     )}
     </AppConsumer> 
   );
 }
}