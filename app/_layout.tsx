import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_900Black,
} from '@expo-google-fonts/rubik';
import { Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';

// Organized Component Imports
import AppSplashScreen from '@/components/common/splash-screen';
import OnboardingFlow from '@/components/onboarding/onboarding-flow';
import AuthOptionsScreen from '@/components/auth/auth-options-screen';
import LoginScreen from '@/components/auth/login-screen';
import ResetPasswordScreen from '@/components/auth/reset-password-screen';
import SignUpOptionsScreen from '@/components/auth/signup-options-screen';
import SignUpStepperScreen from '@/components/auth/signup-stepper-screen';

import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

type StepType =
  | 'splash'
  | 'onboarding'
  | 'authOptions'
  | 'signUpOptions'
  | 'signUpStepper'
  | 'login'
  | 'resetPassword'
  | 'main';

export default function RootLayout() {
  const [currentStep, setCurrentStep] = useState<StepType>('splash');

  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_900Black,
    Nunito_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  // 1. Splash Screen
  if (currentStep === 'splash') {
    return (
      <>
        <StatusBar style="light" />
        <AppSplashScreen onDone={() => setCurrentStep('onboarding')} />
      </>
    );
  }

  // 2. Onboarding Screen
  if (currentStep === 'onboarding') {
    return (
      <>
        <StatusBar style="light" />
        <OnboardingFlow
          onSignUp={() => setCurrentStep('signUpOptions')}
          onLogin={() => setCurrentStep('login')}
          onFinish={() => setCurrentStep('authOptions')}
        />
      </>
    );
  }

  // 3. Auth Options Screen (Login or Sign Up landing card)
  if (currentStep === 'authOptions') {
    return (
      <>
        <StatusBar style="light" />
        <AuthOptionsScreen
          onLogin={() => setCurrentStep('login')}
          onCreateAccount={() => setCurrentStep('signUpOptions')}
          onLater={() => setCurrentStep('main')}
        />
      </>
    );
  }

  // 4. Sign Up Options Screen (Sign Up with Email / Google / Facebook)
  if (currentStep === 'signUpOptions') {
    return (
      <>
        <StatusBar style="dark" />
        <SignUpOptionsScreen
          onBack={() => setCurrentStep('authOptions')}
          onSignUpWithEmail={() => setCurrentStep('signUpStepper')}
          onSignUpWithGoogle={() => setCurrentStep('main')}
          onSignUpWithFacebook={() => setCurrentStep('main')}
          onLogin={() => setCurrentStep('login')}
        />
      </>
    );
  }

  // 5. Sign Up Stepper Screen (3 steps: Email ➔ Password ➔ Username)
  if (currentStep === 'signUpStepper') {
    return (
      <>
        <StatusBar style="dark" />
        <SignUpStepperScreen
          onBack={() => setCurrentStep('signUpOptions')}
          onFinishSignUp={() => setCurrentStep('main')}
        />
      </>
    );
  }

  // 6. Login Screen
  if (currentStep === 'login') {
    return (
      <>
        <StatusBar style="dark" />
        <LoginScreen
          onBack={() => setCurrentStep('authOptions')}
          onLoginSuccess={() => setCurrentStep('main')}
          onForgotPassword={() => setCurrentStep('resetPassword')}
        />
      </>
    );
  }

  // 7. Reset Password Screen
  if (currentStep === 'resetPassword') {
    return (
      <>
        <StatusBar style="dark" />
        <ResetPasswordScreen
          onBack={() => setCurrentStep('login')}
          onResetSubmit={() => setCurrentStep('login')}
        />
      </>
    );
  }

  // 8. Main App Stack (Tabs, Home, Explore, etc.)
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
