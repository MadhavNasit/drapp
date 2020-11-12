import React, { useRef, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Keyboard, StatusBar, ScrollView, Alert, TouchableOpacity, Animated } from 'react-native';
import TabComponent from '../../components/tab-component';
import TextField from '../../components/text-field';
import { color } from '../../theme';
import Scale from '../../utils/Scale';

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

            <TextField
              placeholder={'asd'}
            />

          ) : (<Text>{`Log In`}</Text>)}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AuthenticateScreen;