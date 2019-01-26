import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import DialogInput from 'react-native-dialog-input';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isDialogVisible: false,
    }
  }
  showDialog(isShow){
    this.setState({isDialogVisible: isShow});
  }
  sendInput(inputText){
    console.log("sendInput (DialogInput#1): "+inputText);
  }
  render() {
    return (
      <View style={styles.container}>
        <DialogInput isDialogVisible={this.state.isDialogVisible}
                    title={"DialogInput 1"}
                    message={"Message for DialogInput #1"}
                    hintInput ={"HINT INPUT"}
                    inputMaxLength={10}
                    inputSecureTextEntry={false}
                    inputStyle={styles.inputStyle}
                    cancelStyle={styles.cancelStyle}
                    submitStyle={styles.submitStyle}
                    submitInput={ (inputText) => {this.sendInput(inputText)} }
                    closeDialog={ () => {this.showDialog(false)}}>
        </DialogInput>
        <TouchableOpacity onPress={()=>{this.showDialog(true)}} style={{padding:10}}>
          <Text>Show DialogInput #1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    textAlign:'left',
    fontSize: 16,
    color: 'rgba(0,0,0,0.54)',
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 5,
	      borderWidth: 1,
        borderColor: '#c32f2d',
        paddingBottom: 5,
        paddingLeft: 10,
        marginBottom: 15,
        marginTop: 10,
      },
      android: {
        marginTop: 8,
        borderBottomWidth: 2,
        borderColor: '#c32f2d',
      },
    }),
  },
  submitStyle: {
    ...Platform.select({
      fontWeight: "bold",
      ios: {
        fontSize:18,
        color: '#c32f2d',
        textAlign:'center',
        padding: 10,
      },
      android: {
        textAlign:'right',
        color: '#c32f2d',
        padding: 8
      },
    }),
  },
  cancelStyle:{
    ...Platform.select({
      fontWeight: "bold",
      ios: {
        fontSize:18,
        color:'#c32f2d',
        textAlign:'center',
        borderRightWidth: 5,
        borderColor: '#B0B0B0',
        padding: 10,
	      height: 48,
	      maxHeight: 48,
      },
      android: {
        textAlign:'right',
        color:'#c32f2d',
        padding: 8
      },
    }),
  },
});

