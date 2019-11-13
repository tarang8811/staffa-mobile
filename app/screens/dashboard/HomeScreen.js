import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import Header from '../../utils/header';
import {AppConsumer} from '../../context/AppProvider';


export default class HomeScreen extends Component {
 constructor(args) {
   super(args);
   this.state = {
     shiftsData: []
    }
 }

 componentDidMount(){
   this.context.setCurrentContext(this);
   navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      this.context.apiService.getShiftsData(coords.latitude, coords.longitude, 10, "km", (data) => {
        this.setState({shiftsData: data})
       })
    },
    (err) => {
      alert("Please share your location")
      __DEV__ && console.log('NO LOCATION FOUND', err)
    },
    { enableHighAccuracy: true, timeout: 10000 }
  )
   
   if(this.context.openFromNotification){
    this.context.performNotificationAction(this);
   }
 }
 
 toggleDrawer = () => {
  this.context.toggleDrawer(true)
 }
 render() {
    const platformHeaderProps = {}
    platformHeaderProps['leftItem'] = {
      title: 'Menu',
      icon: require('../../images/menu.png'),
      layout: 'icon',
      onPress: this.toggleDrawer
    }
   return (
    <AppConsumer>
    {(context) => (
      <View style={context.utilities.styles.root} ref={(ref) => { this.context = context; }}>
          <Header title="Jobs" {...platformHeaderProps} />
          <View style = {context.utilities.styles.baseStyle1}>
          
          <FlatList
            extraData={this.state.shiftsData}
            data={this.state.shiftsData}
            renderItem={({ item, index }) =>
              <View style={[context.utilities.styles.QualificationListRowBGStyle, {padding: 10}]}>
                <Text style={context.utilities.styles.jobStyles}>Job Number : {item.jobNo}</Text>
                <Text style={context.utilities.styles.jobStyles}>Job Name: {item.name}</Text>
                <Text style={context.utilities.styles.jobStyles}>Budget: {item.cost}</Text>
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