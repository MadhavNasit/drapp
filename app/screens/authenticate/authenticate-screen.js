import React, { useRef, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Keyboard, StatusBar, ScrollView, Alert, TouchableOpacity, Animated, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LogIn from '../../components/log-in';
import SignUp from '../../components/sign-up';
import TabComponent from '../../components/tab-component';
import TextField from '../../components/text-field';
import { color } from '../../theme';
import { typography } from '../../theme/fonts/typography';
import { icons } from '../../theme/icons';
import Scale, { verticalScale } from '../../utils/Scale';

import Styles from './authenticate-style';

const AuthenticateScreen = () => {

  /**
   * true - Sign Up
   * false - Log In
   */
  const [isFirstScreen, setIsFirstScreen] = useState(true);

  /**
   * Heading View - with brand name and brand slogan
   */
  const HeadingView = () => {
    return (
      <View style={Styles.headingView}>
        <Text style={Styles.brandName}>{`Dr.Linen`}</Text>
        <Text style={Styles.brandSlogan}>{`Get started and discover the best offers around you`}</Text>
      </View>
    )
  }

  const SocialMediaButton = ({ icon, name, bgColor }) => {
    return (
      <TouchableOpacity style={[Styles.socialMediaButton, { backgroundColor: bgColor }]}>
        <Image source={icons[icon]} style={Styles.socialMediaIcon} />
        <Text style={Styles.socialMediaButtonText}>{name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={color.primary} />
      {/* Render Heading */}
      <HeadingView />

      {/* Form View */}
      <View style={Styles.contentView}>
        {/* Tab View */}
        <TabComponent
          firstScreenName={'Sign Up'}
          secondScreenName={'Log In'}
          setIsFirstScreen={(flag) => setIsFirstScreen(flag)}
          activeScreen={isFirstScreen}
        />
        <View>
          {isFirstScreen ? (
            <SignUp
              containerStyle={Styles.formContainerSignUp}
            />
          ) : (
              <LogIn
                containerStyle={Styles.formContainerLogIn}
              />
            )}
        </View>
      </View>
      <View style={Styles.signupViaView}>
        <Text style={Styles.textLight}>{`or Sign up via`}</Text>
        <View
          style={Styles.socialMediaView}
        >
          <SocialMediaButton
            icon='facebook'
            name='Facebook'
            bgColor={color.facebook}
          />
          <SocialMediaButton
            icon='gmail'
            name='Google'
            bgColor={color.google}
          />
          <SocialMediaButton
            icon='apple'
            name='Apple'
            bgColor={color.apple}
          />
        </View>
        {isFirstScreen &&
          <>
            <Text style={Styles.agreeText}>{`By Signing Up you agree with our`}</Text>
            <Text style={Styles.tcText}>{`Terms & Conditions & Provacy Policy`}</Text>
          </>
        }
        <Text style={Styles.guestText}>{`Skip & Continue as Guest`}</Text>
      </View>
    </SafeAreaView >
  );
}

export default AuthenticateScreen;