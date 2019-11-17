import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Header from '../../../utils/header';
import {AppConsumer} from '../../../context/AppProvider';
import Strings from '../../../utils/res/Strings'

export default class MyContractsScreen extends Component {
 constructor(args) {
   super(args);
   this.state = {
     bidsData: []
    }
 }

 componentDidMount(){
   this.context.setCurrentContext(this);
    this.context.apiService.getBids(this.context.currentUser.uid, true, (err, res) => {
      this.setState({bidsData: res})
    })
 }

 showShift = (item) => () => {
  this.context.moveToScreenPayload(this, Strings.APP_BID_SCREEN, {item} );
 }
 
 toggleDrawer = () => {
  this.context.toggleDrawer(true)
 }
 render() {
    const platformHeaderProps = {}
    platformHeaderProps['leftItem'] = {
      title: 'Menu',
      icon: require('../../../images/menu.png'),
      layout: 'icon',
      onPress: this.toggleDrawer
    }
   return (
    <AppConsumer>
    {(context) => (
      <View style={context.utilities.styles.root} ref={(ref) => { this.context = context; }}>
          <Header title="My Contracts" {...platformHeaderProps} />
          <View style = {context.utilities.styles.baseStyle1}>
          
          <FlatList
            extraData={this.state.bidsData}
            data={this.state.bidsData}
            renderItem={({ item, index }) =>
            <View style={[context.utilities.styles.QualificationListRowBGStyle, {padding: 10}]}>
              <Text style={context.utilities.styles.jobStyles}>Job Name : {item.name}</Text>
              <Text style={context.utilities.styles.jobStyles}>Time Slots: {item.times.join(", ")}</Text>
              <Text style={context.utilities.styles.jobStyles}>Price: {item.price}</Text>
              <Text style={context.utilities.styles.jobStyles}>Date: {item.date}</Text>
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