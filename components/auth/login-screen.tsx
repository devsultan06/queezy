import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors, Fonts, Palette } from '@/constants/theme';

// SVG Icon Imports
import BackIcon from '@/assets/images/Icon.svg';
import EmailIcon from '@/assets/images/Icon (1).svg';
import LockIcon from '@/assets/images/Icon (2).svg';
import GoogleIcon from '@/assets/images/flat-color-icons_google.svg';
import FacebookIcon from '@/assets/images/akar-icons_facebook-fill.svg';

interface LoginScreenProps {
  onBack?: () => void;
  onLoginSuccess?: () => void;
  onForgotPassword?: () => void;
}

export default function LoginScreen({ onBack, onLoginSuccess, onForgotPassword }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.7}>
              <BackIcon width={24} height={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Login</Text>
            <View style={{ width: 40 }} />
          </View>

          {/* Social Buttons */}
          <View style={styles.socialContainer}>
            {/* Google */}
            <TouchableOpacity style={styles.googleButton} activeOpacity={0.85}>
              <View style={styles.socialIconContainer}>
                <GoogleIcon width={20} height={20} />
              </View>
              <Text style={styles.googleText}>Login with Google</Text>
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity style={styles.facebookButton} activeOpacity={0.85}>
              <View style={styles.socialIconContainer}>
                <FacebookIcon width={20} height={20} fill="#FFFFFF" />
              </View>
              <Text style={styles.facebookText}>Login with Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Email Field */}
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputCard}>
              <View style={styles.inputIconContainer}>
                <EmailIcon width={20} height={20} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Your email address"
                placeholderTextColor="#858494"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Field */}
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputCard}>
              <View style={styles.inputIconContainer}>
                <LockIcon width={20} height={20} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Your password"
                placeholderTextColor="#858494"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.7}>
                <Feather
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#858494"
                />
              </TouchableOpacity>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={onLoginSuccess}
              activeOpacity={0.85}
            >
              <Text style={styles.submitText}>Login</Text>
            </TouchableOpacity>

            {/* Forgot Password Link */}
            <TouchableOpacity
              style={styles.forgotContainer}
              onPress={onForgotPassword}
              activeOpacity={0.7}
            >
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Terms */}
          <View style={styles.footer}>
            <Text style={styles.termsText}>
              By continuing, you agree to the{' '}
              <Text style={styles.boldText}>Terms of Services</Text>
              {'\n'}& <Text style={styles.boldText}>Privacy Policy</Text>.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: Fonts.medium, // Rubik 500
    fontSize: 24,
    fontStyle: 'normal',
    color: '#0C092A',
    textAlign: 'center',
    lineHeight: 36, // 150%
  },
  socialContainer: {
    gap: 16,
    marginBottom: 24,
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
    fontFamily: Fonts.medium, // Rubik 500
    fontSize: 16,
    fontStyle: 'normal',
    color: '#0C092A',
    textAlign: 'center',
    lineHeight: 24, // 150%
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
    fontFamily: Fonts.medium, // Rubik 500
    fontSize: 16,
    fontStyle: 'normal',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24, // 150%
  },
  socialIconContainer: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E6E6E6',
  },
  dividerText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: '#858494',
    marginHorizontal: 16,
  },
  form: {
    marginBottom: 24,
  },
  label: {
    fontFamily: Fonts.regular, // Rubik 400
    fontSize: 14,
    fontStyle: 'normal',
    color: '#0C092A',
    lineHeight: 19.6, // 140%
    marginBottom: 8,
  },
  inputCard: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#EFEEFC',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  inputIconContainer: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontFamily: Fonts.regular, // Rubik 400
    fontSize: 16,
    fontStyle: 'normal',
    color: '#0C092A',
    lineHeight: 24, // 150%
  },
  submitButton: {
    height: 56,
    backgroundColor: Palette.royalBlue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  submitText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: '#FFFFFF',
  },
  forgotContainer: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  forgotText: {
    fontFamily: Fonts.medium, // Rubik 500
    fontSize: 16,
    fontStyle: 'normal',
    color: Palette.royalBlue, // #6A5AE0
    textAlign: 'center',
    lineHeight: 24, // 150%
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  termsText: {
    fontFamily: Fonts.regular, // Rubik 400
    fontSize: 14,
    fontStyle: 'normal',
    color: '#858494',
    textAlign: 'center',
    lineHeight: 19.6, // 140%
  },
  boldText: {
    fontFamily: Fonts.bold,
    color: '#0C092A',
  },
});
