import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
});

