import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Palette, Fonts } from '@/constants/theme';

// SVG Icon Imports
import BackIcon from '@/assets/images/Icon.svg';
import EmailIcon from '@/assets/images/Icon (1).svg';

interface ResetPasswordScreenProps {
  onBack?: () => void;
  onResetSubmit?: () => void;
}

export default function ResetPasswordScreen({ onBack, onResetSubmit }: ResetPasswordScreenProps) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.7}>
            <BackIcon width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reset Password</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Subtitle instructions */}
        <Text style={styles.instructionText}>
          Enter your email and we will send you a link to reset your password.
        </Text>

        {/* Input */}
        <View style={styles.formGroup}>
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
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={onResetSubmit}
          activeOpacity={0.85}
        >
          <Text style={styles.submitText}>Reset Password</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEEFC',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
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
  instructionText: {
    fontFamily: Fonts.regular, // Rubik 400
    fontSize: 16,
    fontStyle: 'normal',
    color: '#858494',
    lineHeight: 24, // 150%
    marginBottom: 32,
  },
  formGroup: {
    marginBottom: 32,
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
    marginTop: 'auto',
    marginBottom: 24,
  },
  submitText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: '#FFFFFF',
  },
});
