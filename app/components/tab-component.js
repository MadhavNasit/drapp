/**
 * Tab View for navigate between two screen
 * Use animated API for smoother animation
 */

import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color } from '../theme';
import Scale from '../utils/Scale';

const TabComponent = (props) => {

  const {
    setIsFirstScreen,
    firstScreenName,
    secondScreenName,
    activeScreen
  } = props;

  const animatedActiveTab = useRef(new Animated.Value(0)).current;

  const AnimateTab = (activeFlag) => {
    setIsFirstScreen(activeFlag);
    if (activeFlag) {
      Animated.timing(animatedActiveTab, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(animatedActiveTab, {
        toValue: Scale(134),
        duration: 400,
        useNativeDriver: false
      }).start()
    }
  }

  // Tab button view
  const TabView = ({ screenName, flag, textColor }) => {
    return (
      <TouchableOpacity
        style={Styles.tabButton}
        onPress={() => AnimateTab(flag)}
      >
        <Text style={[Styles.screenName, textColor]}>{screenName}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={Styles.tabOuterView}>
      <View style={Styles.tabView}>
        {/* Animated active tab View */}
        <Animated.View style={[Styles.activeTab, { left: animatedActiveTab }]}></Animated.View>
        {/* Screen Tabs */}
        <TabView
          screenName={firstScreenName}
          textColor={activeScreen ? Styles.activeScreenName : Styles.inactiveScreenName}
          flag={true} />
        <TabView
          screenName={secondScreenName}
          textColor={!activeScreen ? Styles.activeScreenName : Styles.inactiveScreenName}
          flag={false} />
      </View>
    </View>
  )
}

// Tab styles
const Styles = StyleSheet.create({
  tabOuterView: {
    alignItems: 'center',
  },
  tabView: {
    width: Scale(274),
    height: Scale(38),
    marginTop: -Scale(19),
    borderRadius: Scale(19),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
    shadowColor: 'rgba(0,0,0,0.9)',
    shadowOffset: {
      width: 0,
      height: Scale(4),
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tabButton: {
    height: Scale(38),
    width: Scale(137),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    position: 'absolute',
    height: Scale(38),
    width: Scale(145),
    backgroundColor: color.activeTab,
    borderRadius: Scale(19)
  },
  screenName: {
    fontSize: Scale(14),
    lineHeight: Scale(16),
    fontWeight: 'bold'
  },
  activeScreenName: {
    color: color.primaryFont,
  },
  inactiveScreenName: {
    color: color.secondoryFont,
  }
});

export default TabComponent;