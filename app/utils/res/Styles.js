/*
  Defines styles for each UI Component
*/
'use strict';
import {StyleSheet,Dimensions} from 'react-native';
import Colors from './Colors';
import Strings from './Strings';

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({

  root: {
    flex: 1,
    backgroundColor: Colors.appBGColor
  },

  splashLogoTextStyle: {
    fontSize:30,
    fontFamily:Strings.FONT_QMA, 
    color:Colors.black
  },

  headerLogoTextStyle: {
    fontSize:17,
    fontFamily:Strings.FONT_QMA, 
    color:Colors.black
  },

  headerInfoTextStyle: {
    fontSize:15,
    marginTop:2,
    fontStyle:'normal',
    color:Colors.black
  },

  baseStyle1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  InputTextBoxStyle: {
    borderColor:Colors.lightGrayDark,
    borderRadius:5,
    borderWidth:1,
    height:45,
    marginLeft:40,
    marginRight:40,
    marginTop:15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },

  InputTextDisableStyle: {
    flex:1,
    fontSize:15,
    color: Colors.hintColor,
    marginRight:10
  },

  InputTextEnableStyle: {
    flex:1,
    fontSize:15,
    textAlign:'center',
    color: Colors.black,
    marginRight:10
  },

  InputTextEnableLeftStyle: {
    flex:1,
    fontSize:15,
    color: Colors.black,
    marginRight:10
  },

  ForgotPasswordLinkTextStyle: {
    fontSize:13, 
    alignSelf: 'flex-end', 
    color:Colors.mediumGray,
    marginRight:40,
    marginTop:7
  },

  NewToAppTextStyle: {
    fontSize:12,
    justifyContent:'center',
    alignItems:'center', 
    textAlign:'center', 
    color:Colors.mediumGray, 
    marginTop:50
  },

  RegisterLinkTextStyle: {
    textDecorationLine:"underline",
    fontSize:14,
    fontWeight:'bold', 
    color:Colors.appColor
  },

  LoginButtonEnableTextStyle: { 
    fontWeight:'bold',
    color:Colors.white,
    borderRadius: 50,
    backgroundColor: Colors.appColor,
    marginLeft:50,
    marginRight:50,
    padding:15,
    marginTop:20,
    textAlign: 'center'
  },

  MarkReadTextStyle: { 
    padding:5,
    fontSize:9,
    color:Colors.mediumGray,
    borderRadius: 5,
    borderWidth:1,
    borderColor: Colors.mediumGray,
    textAlign: 'center',
    textAlignVertical:'center'
  },

  QualificationScanButtonStyle: { 
    fontWeight:'bold',
    color:Colors.white,
    borderRadius: 10,
    backgroundColor: Colors.appColor,
    marginLeft:5,
    marginRight:5,
    padding:12,
    textAlign: 'center',
    width:90,
    marginTop:5,
  },

  LoginButtonBackgroundStyle: { 
    width:windowWidth,
    height:50,
    backgroundColor: Colors.appColor,
    justifyContent: 'center',
    alignItems: 'center'
  },

  TNCBackgroundViewStyle: { 
    borderColor:Colors.black, 
    borderWidth:1,
    width:windowWidth - 50,
    height:350,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.white, 
    marginTop:30,
    padding:1,
  },

  TNCPDFViewStyle: { 
    borderColor:Colors.black, 
    borderWidth:1,
    width:windowWidth - 53,
    height:347,
  },

  TNCFixBackgroundViewStyle: { 
    borderColor:Colors.black, 
    borderWidth:1,
    height:200,
    backgroundColor:Colors.white, 
    margin:30,
    padding:10
  },

  TNCTextStyle: {
    fontSize:11,
    justifyContent:'center',
    alignItems:'center', 
    textAlign:'center', 
    color:Colors.mediumGray
  },

  CheckBoxContainerStyle: {
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'transparent', 
    borderRadius:0, 
    marginLeft:40, 
    marginTop:10,
    marginRight:40
  },

  CheckBoxLeftContainerStyle: {
    backgroundColor:'transparent',
    borderColor:'transparent', 
    borderRadius:0, 
    width:windowWidth-80,
    marginLeft:40, 
    marginRight:40
  },

  CheckBoxTextStyle: {
    fontSize:12,
    color:Colors.mediumGray
  },

  LeftDrawerRootViewStyle: {
    height:windowHeight,
    width:280, 
    position:'absolute', 
    alignItems: 'center', 
    backgroundColor:Colors.white
  },

  LeftDrawerImageStyle: {
    height:100, 
    width: 100,
    borderColor:Colors.black,
    borderWidth:1,
    borderRadius:50, 
    alignSelf: 'center',
    marginTop:20
  },

  LeftDrawerUserNameTextStyle: {
    fontSize:13,
    marginTop:2,
    color:Colors.black
  },

  LeftDrawerCloseImageStyle: {
    height:20,
    width:20,
    position:'absolute',
    left:20,
    top:15
  },

  LeftDrawerModelViewStyle: {
    width:windowWidth, 
    height: windowHeight,
    position:'absolute',
    backgroundColor:Colors.alertTransparentColor
  },

  
  LeftDrawerOptionsDividerStyle: {
    height:1,
    backgroundColor:Colors.lightGray
  },

  LeftDrawerOptionsViewStyle: {
    width:280,
    backgroundColor:Colors.white,
    padding: 15,
    flexDirection:'row'
  },

  ProfileOptionsViewStyle: {
    width:windowWidth,
    backgroundColor:Colors.white,
    padding: 15,
    flexDirection:'row'
  },

  LeftDrawerBadgeStyle: {
    fontSize:12,
    fontWeight:'bold',
    width:23, 
    height:23,
    textAlign:'center',
    textAlignVertical: "center",    
    color:Colors.white,
    marginRight:5,
    backgroundColor:Colors.headerBGColor,
    borderRadius:100,
  },

  LeftDrawerOptionsTextStyle: {
    fontSize:16,
    flex:1,
    color:Colors.black,
    marginLeft:10,
    marginRight:10,
  },

  LeftDrawerOptionsIconStyle: {
    width:30,
    height:30,
  },

  TabIndicatorViewPagerStyle:{
    flex: 1, 
    flexDirection: 'column-reverse'
  },

  TabIndicatorStyle:{
    backgroundColor: Colors.lightGray,
    height: 48
  },

  TabIndicatorTextStyle:{
    fontSize: 14,
    color: Colors.headerBGColor
  },

  TabIndicatorSelectedTextStyle:{
    fontSize: 14,
    color: Colors.headerBGColor,
    fontWeight:'bold'
  },

  TabIndicatorSelectedBorderStyle:{
    height: 3,
    backgroundColor: Colors.headerBGColor
  },

  ContactsRowStyle:{
    flex:1, 
    flexDirection:'row',
    padding:10, 
    alignItems:'center', 
    borderBottomColor:Colors.lightGray, 
    borderBottomWidth:1
  },

  ContactsProfileImageStyle:{
    width:45,
    height:45,
    borderRadius:100,
    borderColor:Colors.black,
    borderWidth:0.5
  },

  ContactsUserNameTextStyle:{
    color:Colors.black,
    fontSize:14,
    marginLeft:10,
    marginRight:10
  },

  ChatsViewTopicNameTextStyle:{
    color:Colors.mediumGray,
    fontSize:12,
    fontWeight:'bold',
    marginRight:10
  },

  ChatsViewLastMessageTextStyle:{
    flex:1,
    color:Colors.mediumGray,
    fontSize:12,
    marginLeft:10,
    marginRight:10
  },

  ChatsViewLastMessageDateStyle:{
    color:Colors.mediumGray,
    fontSize:12,
    marginRight:10
  },

  ChatViewReceiverStyle:{
    width: '60%', 
    alignSelf: "flex-start",
    backgroundColor: "#7cb342", 
    borderRadius: 5, 
    marginBottom: 5, 
    marginTop: 5
  },

  ChatViewSenderStyle:{
    width: '60%', 
    alignSelf: "flex-end",
    backgroundColor: "#00897b", 
    borderRadius: 5, 
    marginBottom: 5, 
    marginTop: 5
  },

  ChatViewMessageStyle:{
    color: Colors.white, 
    paddingLeft: 7, 
    paddingRight: 7, 
    paddingTop: 7, 
    fontSize: 16
  },

  ChatViewDateStyle:{
    color: Colors.mediumGray, 
    paddingRight: 3, 
    paddingBottom: 3, 
    fontSize: 10, 
    alignSelf: 'flex-end'
  },

  NoDataTextStyle:{
    color:Colors.mediumGray,
    fontSize:14,
    marginLeft:20,
    marginRight:20
  },

  CenterDataViewStyle:{
    flex:1,
    height:windowHeight,
    justifyContent:'center',
    alignItems:'center'
  },

  ChatHeaderViewStyle:{
    height:55, 
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:Colors.headerBGColor
  },

  ChatProfileImageStyle:{
    width:43,
    height:43,
    borderRadius:100,
    borderColor:Colors.white,
    borderWidth:0.5,
    marginLeft:0
  },

  ChatReceiverNameTextStyle:{
    color:Colors.white,
    fontWeight:'bold',
    fontSize:15,
    flex:1,
    marginLeft:10,
    marginRight:10
  },
  container: { width:windowWidth,flex: 1,backgroundColor: Colors.appBGColor},

  QualificationListRowBGStyle:{
    width: windowWidth - 20,
    margin: 10, 
    backgroundColor: Colors.lightGray, 
    borderColor: Colors.black, 
    borderWidth: 1, 
    borderRadius: 10
  },

  QualificationListRowImageStyle:{
    flex: 1, 
    height: 170, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
  },

  QualificationListRowNameStyle:{
    color:Colors.black,
    fontSize:12,
    fontWeight:'bold',
    margin:10
  },

  QualificationListRowOptionBGStyle:{
    position: 'absolute', 
    alignSelf: 'flex-end', 
    marginRight: 5 
  },

  QualificationListRowOptionBGInnerStyle:{
    flexDirection: 'row', 
    marginLeft: 5, 
    marginTop: 5, 
    marginRight: 5, 
    borderRadius: 10, 
    backgroundColor: Colors.alertTransparentColor
  },
  QualificationListTopImageStyle:{
    width: 30, 
    height: 30 
  },

  AddQualificationImageBGStyle:{
    margin: 10, 
    height: 200, 
    width: windowWidth - 20, 
    borderColor: Colors.black, 
    borderWidth: 1, 
    borderRadius: 1 
  },

  AddQualificationImageStyle:{
    width: windowWidth - 22, 
    height: 198
  },

  AddQualificationUploadButtonStyle:{
    width:90,
    height:50,
    fontWeight:'bold',
    color:Colors.white,
    borderRadius: 10,
    backgroundColor: Colors.appColor,
    marginLeft:50,
    marginRight:50,
    padding:15,
    marginTop:5,
    textAlign: 'center'
  },

  /**
    Alert Dialog style
  **/
  Alert_Main_BG:{ height:'100%', flex:1, alignItems: 'center', justifyContent: 'center',backgroundColor:Colors.alertTransparentColor },

  Alert_Main_View:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : Colors.white,
    height: 200 ,
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius:4
  },

  Alert_Title:{
      fontSize: 20,
      fontWeight:'bold',
      color: Colors.black,
      textAlign: 'center',
      padding: 10
    },

    Alert_Option:{
      fontSize: 17,
      color: Colors.darkGray,
      padding: 10
    },

  Alert_Message:{
      fontSize: 17,
      color: Colors.darkGray,
      textAlign: 'center',
      padding: 20
    },

  Alert_ButtonStyle: {
      width: '50%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
  },

  Alert_TextStyle:{
      color:Colors.headerBGColor,
      textAlign:'center',
      fontSize: 15
  }
});
