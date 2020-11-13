import { StyleSheet } from 'react-native';
import { typography } from '../../theme/fonts/typography';
import { color } from '../../theme/index';
import Scale, { verticalScale } from '../../utils/Scale';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const AuthenticateStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },

  // HeadingStyles
  headingView: {
    height: verticalScale(172) - getStatusBarHeight(true),
    paddingLeft: Scale(27),
    paddingRight: Scale(25),
    justifyContent: 'center'
  },
  brandName: {
    color: color.primaryFont,
    fontSize: Scale(21),
    lineHeight: Scale(24),
    textAlign: 'left',
    fontFamily: typography.bold,
    marginBottom: Scale(12)
  },
  brandSlogan: {
    fontFamily: typography.regular,
    color: color.primaryFont,
    fontSize: Scale(15),
    lineHeight: Scale(18),
    textAlign: 'left',
  },

  // Content view styles
  contentView: {
    backgroundColor: color.white,
    borderTopStartRadius: Scale(10),
    borderTopEndRadius: Scale(10),
    marginTop: -verticalScale(4),
  },
  formContainerSignUp: {
    height: verticalScale(298),
    paddingTop: verticalScale(54),
    paddingHorizontal: Scale(32)
  },
  formContainerLogIn: {
    height: verticalScale(282),
    paddingTop: verticalScale(54),
    paddingHorizontal: Scale(32)
  },

  // Bottom view style
  signupViaView: {
    flexGrow: 1,
    height: verticalScale(172),
    backgroundColor: color.paleGrey,
    alignItems: 'center'
  },
  textLight: {
    marginVertical: verticalScale(15),
    color: color.placeholder,
    fontSize: Scale(11),
    lineHeight: Scale(13),
    fontFamily: typography.regular
  },
  socialMediaView: {
    flexDirection: 'row',
    marginHorizontal: Scale(20),
    marginBottom: verticalScale(15)
  },
  socialMediaButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: Scale(110),
    marginRight: Scale(2),
    paddingVertical: verticalScale(11),
    borderRadius: Scale(19)
  },
  socialMediaIcon: {
    height: Scale(14),
    width: Scale(17),
    resizeMode: 'contain',
    marginRight: Scale(6)
  },
  socialMediaButtonText: {
    fontFamily: typography.bold,
    fontSize: Scale(14),
    lineHeight: Scale(16),
    color: color.primaryFont
  },
  agreeText: {
    fontFamily: typography.light,
    fontSize: Scale(13),
    lineHeight: Scale(15),
    color: color.placeholder,
    marginBottom: verticalScale(9)
  },
  tcText: {
    fontFamily: typography.medium,
    fontSize: Scale(13),
    lineHeight: Scale(15),
    color: color.charcoalGrey,
    marginBottom: verticalScale(9)
  },
  guestText: {
    fontFamily: typography.medium,
    fontSize: Scale(15),
    lineHeight: Scale(18),
    color: color.placeholder,
    marginBottom: verticalScale(9)
  }

});

export default AuthenticateStyle;