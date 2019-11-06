import React, {Component} from 'react';
import {Text, View,TextInput, TouchableWithoutFeedback,Image,TouchableOpacity} from 'react-native';
import Picker from 'react-native-wheel-picker';
import {AppConsumer} from '../../../context/AppProvider'; 

export default class BioScreen extends Component {
 constructor(args) {
   super(args);
   this.state = {
      shortDesc:'',
      travelDistance:'',
      avatarSource:'',
      profilePicURL:'',
    }
 }

 onImageClick(){
  this.context.showImagePickerAlert((image) => {
    this.setState({avatarSource:image});
   });
 }
 
 onNextClick(){
  if(this.state.bio === ""){
    this.context.showToast("Please enter short bio");
     return;
  }
  if(this.state.avatarSource === ""){
      this.context.showToast("Please select profile picture");
      return false;
  }

  this.uploadImage();
 }

 uploadImage() {
  this.context.showLoading(true);
  var filePath = this.context.currentUser.uid +"/"+this.context.utilities.strings.FS_FILE_DIR_PROFILE;
  this.context.apiService.uploadImage(filePath,this.state.avatarSource,(error, response) => {
    console.log("onNextClick response : " + response);
    console.log("onNextClick error : " + error);
    if(response.length > 0){
      this.updateData(response);
    } else {
      this.context.showToast("File not uploaded");
    }
  })
 }

 updateData(imageURL) {
  var data =  {
    bio:{
      shortDesc:this.state.shortDesc,
      travelDistance:this.state.travelDistance,
      profilePicURL :  imageURL
  }};
  this.context.apiService.updateFirestoreUserData(this.context.currentUser.uid,data);
  this.context.updateUserData((user) => {
    this.context.showLoading(false);
    this.context.replaceScreen(this,this.context.utilities.strings.APP_SCREEN_SUCCESS);
  });
 }

 render() {
   return (
    <AppConsumer>
    {(context) => (
     <View style={context.utilities.styles.root} ref={(ref) => { this.context = context; }}>
        <View style={{marginTop:10, flexDirection:'row'}}>
          <View style={{alignItems:'center', flex:1}} >
            <Text style = {context.utilities.styles.headerLogoTextStyle}>{context.utilities.strings.appName}</Text>
            <Text style = {context.utilities.styles.headerInfoTextStyle}>Nearly Done!</Text>
          </View>
        </View>
        <View style = {context.utilities.styles.baseStyle1}>

            <TouchableWithoutFeedback onPress={() => {this.onImageClick()}}>
              {(this.state.avatarSource === "" && this.state.profilePicURL === "") ?  
                <Image style={{alignSelf: 'center',width: 100, height: 100, borderRadius: 100/2, marginTop:20}} source={require('../../../images/user.png')} />
                : 
                <Image style={{alignSelf: 'center',width: 100, height: 100, borderRadius: 100/2, marginTop:20}} source={{uri: this.state.avatarSource.length > 0 ?  this.state.avatarSource : this.state.profilePicURL}} />
              }
            </TouchableWithoutFeedback>
                    <View style = {[context.utilities.styles.InputTextBoxStyle, {marginTop:50,height:100}]}>
                        <TextInput
                           style = {this.state.shortDesc === '' ? context.utilities.styles.InputTextDisableStyle : context.utilities.styles.InputTextEnableStyle}
                           placeholder = "Short Bio"
                           onChangeText = {(text) => {this.setState({shortDesc:text})}}
                           returnKeyType= { "done" }
                           underlineColorAndroid='transparent'
                           placeholderTextColor={context.utilities.colors.hintColor}
                           textAlign={'center'}
                           value = {this.state.shortDesc}
                         />
                    </View>
                    <Text style = {context.utilities.styles.ForgotPasswordLinkTextStyle}>150 Characters</Text>

            <Text style = {[context.utilities.styles.NewToAppTextStyle,{marginTop:30}]}>Distance prepared to travel</Text>
            <View style = {[context.utilities.styles.InputTextBoxStyle, {marginTop:2}]}>
              <Picker style={{height: 45, flex:1}}
                    selectedValue={this.state.travelDistance}
                    itemStyle={{color:context.utilities.colors.black, fontSize:17,padding:6}}
                    onValueChange={(index) => {
                      console.log("onValueChange : "  +  index);
                      this.setState({travelDistance: context.utilities.strings.DISTANCE_MILES[index].name})
                    }}>
                    {context.utilities.strings.DISTANCE_MILES.map((item, index) => {
                      return (<Picker.Item label={item.name} value={index}/>);
                    })}  
                </Picker>
            </View>
            <Text style = {[context.utilities.styles.NewToAppTextStyle,{marginTop:10}]}>You can change this at any time from Settings</Text>
            
        </View>

        <TouchableOpacity style = {{width:context.screenWidth}} onPress={ () => this.onNextClick()}>
          <Text style = {[context.utilities.styles.LoginButtonEnableTextStyle, {marginTop:10, marginBottom:30}]}>NEXT</Text>
        </TouchableOpacity>
     </View>
     )} 
     </AppConsumer>
   );
 }
}

