import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity,
          ActivityIndicator, Platform } from 'react-native';

class DialogInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputModal:''}
  }
  render(){
    let title = this.props.title || '';
    let hintInput = this.props.hintInput || '';
    return(
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.isDialogVisible}
	onRequestClose={() => {
	  this.props.closeDialog();
	}}>
        <View style={styles.container}>
          <View style={styles.modal_container}>
            <View style={styles.modal_body}>
              <Text style={styles.title_modal}>{title}</Text>
              <Text style={[this.props.message ? styles.message_modal : {height:0} ]}>{this.props.message}</Text>
              <TextInput style={styles.input_container}
                underlineColorAndroid='transparent'
                placeholder={hintInput}
                onChangeText={(inputModal) => this.setState({inputModal})}
                />
            </View>
            <View style={styles.btn_container}>
              <TouchableOpacity style={styles.touch_modal}
                onPress={() => {
                  this.props.closeDialog();
                }}>
                <Text style={styles.btn_modal_left}>{(Platform.OS === 'ios' ? 'Cancel' : 'CANCEL')}</Text>
              </TouchableOpacity>
	      <View style={styles.divider_btn}></View>
              <TouchableOpacity  style={styles.touch_modal}
                onPress={() => {
                  this.props.submitInput(this.state.inputModal);
                }}>
                <Text style={styles.btn_modal_right}>{(Platform.OS === 'ios' ? 'Submit' : 'SUBMIT')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android:{
        backgroundColor: 'rgba(0,0,0,0.62)'
      }
    }),
  },
  modal_container:{
    marginLeft: 30,
    marginRight: 30,
    ...Platform.select({
      ios: {
        backgroundColor:'rgba(220,220,220, 0.6)',
        borderRadius: 10,
        minWidth: 300,
      },
      android: {
        backgroundColor:'#fff',
        elevation: 24,
        minWidth: 280,
        borderRadius: 5,
      },
    }),
  },
  modal_body:{
    ...Platform.select({
      ios: {
        padding: 10,
      },
      android: {
        padding: 24,
      },
    }),
  },
  title_modal:{
    fontWeight: 'bold',
    fontSize: 20,
    ...Platform.select({
      ios: {
        marginTop: 10,
        textAlign:'center',
        marginBottom: 5,
      },
      android: {
        textAlign:'left',
      },
    }),
  },
  message_modal:{
    fontSize: 16,
    ...Platform.select({
      ios: {
        textAlign:'center',
        marginBottom: 10,
      },
      android: {
        textAlign:'left',
        marginTop: 20
      },
    }),
  },
  input_container:{
    textAlign:'left',
    fontSize: 16,
    color: 'rgba(0,0,0,0.54)',
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 5,
	      borderWidth: 1,
        borderColor: '#B0B0B0',
        paddingBottom: 5,
        paddingLeft: 10,
        marginBottom: 15,
        marginTop: 10,
      },
      android: {
        paddingTop: 8,
      },
    }),
  },
  btn_container:{
    flex: 1,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#B0B0B0',
        maxHeight: 48,
      },
      android:{
        alignSelf: 'flex-end',
        maxHeight: 52,
        paddingTop: 8,
        paddingBottom: 8,
      }
    }),
  },
  divider_btn:{
    ...Platform.select({
      ios:{
      	width: 1,
        backgroundColor: '#B0B0B0',
      },
      android:{
	      width: 0
      },
    }),
  },
  touch_modal:{
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android:{
        paddingRight: 8,
        minWidth: 64,
        height: 36,
      }
    }),
  },
  btn_modal_left:{
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize:18,
        color:'#2699FF',
        textAlign:'center',
        borderRightWidth: 5,
        borderColor: '#B0B0B0',
        padding: 10,
	      height: 48,
	      maxHeight: 48,
      },
      android: {
        textAlign:'right',
        color:'#009688',
        padding: 8
      },
    }),
  },
  btn_modal_right:{
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize:18,
        color:'#2699FF',
        textAlign:'center',
        padding: 10,
      },
      android: {
        textAlign:'right',
        color:'#009688',
        padding: 8
      },
    }),
  },
});
export default DialogInput;

