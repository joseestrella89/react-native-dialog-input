declare module 'react-native-dialog-input' {
  import { Component } from 'react';
  import { StyleProp, ViewStyle, TextInputProps } from 'react-native';

  interface Props {
    isDialogVisible: boolean;
    title?: string;
    message?: string;
    hintInput?: string;
    initValueTextInput?: string;
    textInputProps?: TextInputProps;
    modalStyle?: StyleProp<ViewStyle>;
    dialogStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<ViewStyle>;
    cancelText?: string;
    submitText?: string;
    submitInput: (inputText?: string) => void;
    closeDialog: () => void;
  }

  export default class DialogInput extends Component<Props, {}> {}
}
