import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Colors, Fonts, Palette } from '@/constants/theme';

// SVG Icon Imports
import BackIcon from '@/assets/images/Icon.svg';
import EmailIcon from '@/assets/images/Icon (3).svg';
import GoogleIcon from '@/assets/images/flat-color-icons_google.svg';
import FacebookIcon from '@/assets/images/akar-icons_facebook-fill.svg';

interface SignUpOptionsScreenProps {
  onBack?: () => void;
  onSignUpWithEmail?: () => void;
  onSignUpWithGoogle?: () => void;
  onSignUpWithFacebook?: () => void;
  onLogin?: () => void;
}

export default function SignUpOptionsScreen({
  onBack,
  onSignUpWithEmail,
  onSignUpWithGoogle,
  onSignUpWithFacebook,
  onLogin,
}: SignUpOptionsScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.7}>
            <BackIcon width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sign Up</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {/* Sign Up with Email */}
          <TouchableOpacity
            style={styles.emailButton}
            onPress={onSignUpWithEmail}
            activeOpacity={0.85}
          >
            <View style={styles.iconContainer}>
              <EmailIcon width={20} height={20} />
            </View>
            <Text style={styles.emailText}>Sign Up with Email</Text>
          </TouchableOpacity>

          {/* Sign Up with Google */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={onSignUpWithGoogle}
            activeOpacity={0.85}
          >
            <View style={styles.iconContainer}>
              <GoogleIcon width={20} height={20} />
            </View>
            <Text style={styles.googleText}>Sign Up with Google</Text>
          </TouchableOpacity>

          {/* Sign Up with Facebook */}
          <TouchableOpacity
            style={styles.facebookButton}
            onPress={onSignUpWithFacebook}
            activeOpacity={0.85}
          >
            <View style={styles.iconContainer}>
              <FacebookIcon width={20} height={20} fill="#FFFFFF" />
            </View>
            <Text style={styles.facebookText}>Sign Up with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Already have an account? Login */}
        <View style={styles.loginContainer}>
          <Text style={styles.alreadyText}>Already have an account? </Text>
          <TouchableOpacity onPress={onLogin} activeOpacity={0.7}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Terms Footer */}
        <View style={styles.footer}>
          <Text style={styles.termsText}>
            By continuing, you agree to the{' '}
            <Text style={styles.boldText}>Terms of Services</Text>
            {'\n'}& <Text style={styles.boldText}>Privacy Policy</Text>.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEEFC',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 32,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: Fonts.medium,
    fontSize: 24,
    fontStyle: 'normal',
    color: '#0C092A',
    textAlign: 'center',
    lineHeight: 36,
  },
  buttonContainer: {
    gap: 16,
    marginBottom: 32,
  },
  emailButton: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: Palette.royalBlue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
  },
  googleButton: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: '#0C092A',
    textAlign: 'center',
    lineHeight: 24,
  },
  facebookButton: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#0056B3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
  },
  iconContainer: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  alreadyText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#858494',
    lineHeight: 24,
  },
  loginText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Palette.royalBlue,
    lineHeight: 24,
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  termsText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 19.6,
    color: '#858494',
    textAlign: 'center',
  },
  boldText: {
    fontFamily: Fonts.bold,
    color: '#0C092A',
  },
});
