import React, { useRef, useState } from 'react';
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color } from '../theme';
import { typography } from '../theme/fonts/typography';
import Scale, { verticalScale } from '../utils/Scale';
import TextField from './text-field';

const LogIn = (props) => {

  const {
    containerStyle,
  } = props;

  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={containerStyle}>
      <TextField
        value={email}
        forwardedRef={emailRef}
        icon='email'
        outerStyle={Styles.textInputOuterView}
        style={Styles.inputStyle}
        activeStyle={Styles.focusedInput}
        placeholder='Email'
        placeholderColor={color.placeholder}
        onTextChange={(value) => setEmail(value)}
        returnkeyType='next'
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <TextField
        value={password}
        forwardedRef={passwordRef}
        icon='key'
        iconRight='private'
        outerStyle={Styles.textInputOuterView}
        style={Styles.inputStyle}
        activeStyle={Styles.focusedInput}
        placeholder='Password'
        placeholderColor={color.placeholder}
        onTextChange={(value) => setPassword(value)}
        returnkeyType='done'
        onSubmitEditing={() => Keyboard.dismiss()}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={Styles.submitButton}
      >
        <Text style={Styles.buttonText}>{`Log In`}</Text>
      </TouchableOpacity>
      <Text style={Styles.forgotText}>{`Forgot Password ?`}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  textInputOuterView: {
    marginBottom: Scale(13)
  },
  inputStyle: {
    height: Scale(40),
    borderWidth: 1,
    borderRadius: Scale(20),
    borderColor: 'rgb(219,219,219)',
    paddingLeft: Scale(56)
  },
  focusedInput: {
    height: verticalScale(40),
    borderWidth: 1,
    borderRadius: Scale(20),
    borderColor: 'blue',
    color: 'blue',
    paddingLeft: Scale(56)
  },
  submitButton: {
    marginTop: verticalScale(13),
    marginBottom: verticalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scale(22),
    backgroundColor: color.buttonDisabled,
    height: verticalScale(44)
  },
  buttonText: {
    fontSize: Scale(14),
    fontFamily: typography.bold,
    color: color.primaryFont,
    textAlign: 'center',
    lineHeight: Scale(16)
  },
  forgotText: {
    color: color.charcoalGrey,
    textAlign: 'center',
    fontSize: Scale(13),
    fontFamily: typography.medium
  }
})

export default LogIn;