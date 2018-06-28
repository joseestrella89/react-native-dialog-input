# react-native-dialog-input
Dialog with input for React Native on iOS and Android.

## Examples

![React Native Dialog Input iOS](https://res.cloudinary.com/joseestrella/image/upload/c_scale,w_279/v1525120807/dialog-ios.png)
![React Native Dialog Input Android](https://res.cloudinary.com/joseestrella/image/upload/c_limit,w_279/v1526156639/dialog-android.png)

## Setup

```bash
npm install --save react-native-dialog-input
```

## Usage

```javascript
import DialogInput from 'react-native-dialog-input';
...
<DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"DialogInput 1"}
            message={"Message for DialogInput #1"}
            hintInput ={"HINT INPUT"}
            submitInput={ (inputText) => {this.sendInput(inputText)} }
            closeDialog={ () => {this.showDialog(false)}}>
</DialogInput>
...
```
## Properties

 name                  | description                                 | type     
:--------------------- |:------------------------------------------- | --------
 isDialogVisible       | Condition to show or hide the DialogInput   |   Boolean
 title                 | Title to show in the DialogInput            |   String (OPTIONAL)
 message               | Message to show in the DialogInput          |   String (OPTIONAL)
 hintInput             | Text hint to show in the TextInput          |   String (OPTIONAL)
 textInputProps        | Additional properties to add to the TextInput.   In the form: textInputProps={{autoCorrect:false}}  Supports autoCorrect, autoCapitalize, clearButtonMode, clearTextOnFocus keyboardType           |    Object (OPTIONAL)
modalBackgroundStyle   | Styles for the modal background             |   Object (OPTIONAL)
modalStyle             | Styles for the modal                        |   Object (OPTIONAL)
cancelText             | Replacement text for the Cancel button      |   String (OPTIONAL)
submitText             | Replacement text for the Submit button      |   String (OPTIONAL)

## Methods

 name           | description                                        | returns
:-------------- |:-------------------------------------------------- | -------:
 submitInput()  | Event fired when the user press the SUBMIT button  |  String
 closeDialog()  | Event fired when the user press the CLOSE button   |    -
