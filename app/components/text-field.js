import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { icons } from '../theme/icons';
import Scale, { verticalScale } from '../utils/Scale';

const TextField = (props) => {

  const {
    outerStyle,
    value,
    icon,
    placeholder,
    onTextChange,
    activeStyle,
    style,
    forwardedRef,
    iconRight,
    ...rest
  } = props;

  const [isFocused, setIsFocussed] = useState(false);

  return (
    <View style={outerStyle} >
      <Image source={icons[icon]} resizeMode='contain' style={Style.iconStyle} />
      <TextInput
        ref={forwardedRef}
        value={value}
        style={isFocused ? activeStyle : style}
        onFocus={() => setIsFocussed(true)}
        onBlur={() => setIsFocussed(false)}
        placeholder={placeholder}
        onChangeText={(value) => onTextChange(value)}
        {...rest}
      />
      {iconRight &&
        <Image source={icons[iconRight]} resizeMode='contain' style={Style.rightIconStyle} />
      }
    </View>
  )
}

const Style = StyleSheet.create({
  iconStyle: {
    height: verticalScale(24),
    width: Scale(24),
    position: 'absolute',
    top: verticalScale(8),
    left: verticalScale(14)
  },
  rightIconStyle: {
    height: verticalScale(20),
    width: Scale(15),
    position: 'absolute',
    top: verticalScale(10),
    right: Scale(14)
  }
})

export default TextField;