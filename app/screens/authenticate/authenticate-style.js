import { StyleSheet } from 'react-native';
import { typography } from '../../theme/fonts/typography';
import { color } from '../../theme/index';
import Scale from '../../utils/Scale';

const AuthenticateStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },

  // HeadingStyles
  headingView: {
    height: Scale(192),
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
    height: Scale(304),
    backgroundColor: color.white,
    borderTopStartRadius: Scale(10),
    borderTopEndRadius: Scale(10),
    marginTop: -Scale(4)
  },

});

export default AuthenticateStyle;