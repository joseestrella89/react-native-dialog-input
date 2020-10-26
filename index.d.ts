declare module 'react-native-dialog-input' {
  import { Component } from 'react';
  import { StyleProp, ViewStyle } from 'react-native';

  interface Props {
    isDialogVisible: boolean;
    title?: string;
    message?: string;
    hintInput?: string;
    initValueTextInput?: string;
    textInputProps?: AutoCorrectProps;
    modalStyle?: StyleProp<ViewStyle>;
    dialogStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<ViewStyle>;
    cancelText?: string;
    submitText?: string;
    submitInput: (inputText?: string) => void;
    closeDialog: () => void;
  }

  interface AutoCorrectProps {
    autoCorrect?: boolean;
    autoCapitalize?: boolean;
    clearButtonMode?: boolean;
    clearTextOnFocus?: boolean;
    keyboardType?: boolean;
    secureTextEntry?: boolean;
    maxLength?: number;
  }

  export default class DialogInput extends Component<Props, {}> {}
}
