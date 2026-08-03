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
import { Feather } from '@expo/vector-icons';
import { Colors, Fonts, Palette } from '@/constants/theme';

// SVG Icon Imports
import BackIcon from '@/assets/images/Icon.svg';
import EmailIcon from '@/assets/images/Icon (1).svg';
import LockIcon from '@/assets/images/Icon (2).svg';

interface SignUpStepperScreenProps {
  onBack?: () => void;
  onFinishSignUp?: () => void;
}

export default function SignUpStepperScreen({ onBack, onFinishSignUp }: SignUpStepperScreenProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      if (!email) return;
      setStep(2);
    } else if (step === 2) {
      if (!password) return;
      setStep(3);
    } else if (step === 3) {
      if (onFinishSignUp) onFinishSignUp();
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep((step - 1) as 1 | 2 | 3);
    } else if (onBack) {
      onBack();
    }
  };

  const isPasswordValid = password.length >= 8;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackStep} activeOpacity={0.7}>
            <BackIcon width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            {step === 1 && "What's your email?"}
            {step === 2 && "What's your password?"}
            {step === 3 && 'Create a username'}
          </Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Step Form Fields */}
        <View style={styles.formContainer}>
          {/* STEP 1: EMAIL */}
          {step === 1 && (
            <View>
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
                  autoFocus
                />
              </View>
            </View>
          )}

          {/* STEP 2: PASSWORD */}
          {step === 2 && (
            <View>
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
                  autoFocus
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.7}>
                  <Feather
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color="#858494"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.helperRow}>
                <Text style={styles.helperText}>Must be at least 8 characters.</Text>
                <Feather
                  name="check"
                  size={18}
                  color={isPasswordValid ? '#6A5AE0' : '#CCCCCC'}
                />
              </View>
            </View>
          )}

          {/* STEP 3: USERNAME */}
          {step === 3 && (
            <View>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputCard}>
                <View style={styles.inputIconContainer}>
                  <Feather name="user" size={20} color="#6A5AE0" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Your username"
                  placeholderTextColor="#858494"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                  autoFocus
                />
              </View>
            </View>
          )}
        </View>

        {/* Bottom Stepper Progress & Action Area */}
        <View style={styles.bottomArea}>
          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <Text style={styles.stepText}>{step} of 3</Text>
            <View style={styles.track}>
              <View
                style={[
                  styles.fill,
                  { width: step === 1 ? '33.3%' : step === 2 ? '66.6%' : '100%' },
                ]}
              />
            </View>
          </View>

          {/* Submit/Next Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleNext} activeOpacity={0.85}>
            <Text style={styles.submitText}>{step === 3 ? 'Done' : 'Next'}</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'space-between',
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
  formContainer: {
    flex: 1,
  },
  label: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    fontStyle: 'normal',
    color: '#0C092A',
    lineHeight: 19.6,
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
    marginBottom: 12,
  },
  inputIconContainer: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: 16,
    fontStyle: 'normal',
    color: '#0C092A',
    lineHeight: 24,
  },
  helperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  helperText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#858494',
  },
  bottomArea: {
    marginBottom: 24,
  },
  progressContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  stepText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Palette.royalBlue,
    marginBottom: 8,
  },
  track: {
    width: '100%',
    height: 6,
    backgroundColor: '#E6E6E6',
    borderRadius: 3,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: Palette.royalBlue,
    borderRadius: 3,
  },
  submitButton: {
    height: 56,
    backgroundColor: Palette.royalBlue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: '#FFFFFF',
  },
});
