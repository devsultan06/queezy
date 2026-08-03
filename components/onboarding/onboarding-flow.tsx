import { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
import { Colors, Fonts, Palette } from '@/constants/theme';
import { OnboardingBackground } from './onboarding-background';

const { width, height } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    image: require('@/assets/images/Illustration.png'),
    title: 'Create gamified quizzes\nbecomes simple',
  },
  {
    id: '2',
    image: require('@/assets/images/Illustration (2).png'),
    title: 'Find quizzes to test out\nyour knowledge',
  },
  {
    id: '3',
        image: require('@/assets/images/Illustration (1).png'),

    title: 'Take part in challenges\nwith friends',
  },
];

interface OnboardingFlowProps {
  onFinish?: () => void;
  onLogin?: () => void;
  onSignUp?: () => void;
}

export default function OnboardingFlow({ onFinish, onLogin, onSignUp }: OnboardingFlowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const goToSlide = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= SLIDES.length) return;
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex(newIndex);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      goToSlide(currentIndex + 1);
    } else {
      if (onFinish) onFinish();
      else if (onSignUp) onSignUp();
    }
  };

  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  // PanResponder for swiping left/right
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 20,
      onPanResponderRelease: (_, gestureState) => {
        const curr = currentIndexRef.current;
        if (gestureState.dx < -50 && curr < SLIDES.length - 1) {
          goToSlide(curr + 1);
        } else if (gestureState.dx > 50 && curr > 0) {
          goToSlide(curr - 1);
        }
      },
    })
  ).current;

  const slide = SLIDES[currentIndex];

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {/* Dedicated Onboarding Background Decorations */}
      <OnboardingBackground />

      {/* Slide Image & Content Area */}
      <View style={styles.topArea}>
        <Animated.View style={[styles.imageWrapper, { opacity: fadeAnim }]}>
          <Image source={slide.image} style={styles.illustration} resizeMode="contain" />
        </Animated.View>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          {SLIDES.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => goToSlide(index)}
                activeOpacity={0.7}
                style={styles.dotTouchArea}
              >
                {isActive ? (
                  <View style={styles.activeDotOuter}>
                    <View style={styles.activeDotInner} />
                  </View>
                ) : (
                  <View style={styles.inactiveDot} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Bottom White Card */}
      <View style={styles.bottomCard}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.titleText}>{slide.title}</Text>
        </Animated.View>

        {/* Primary Action Button */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={onSignUp || handleNext}
          activeOpacity={0.85}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Footer Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.alreadyText}>Already have an account? </Text>
          <TouchableOpacity onPress={onLogin} activeOpacity={0.7}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
  },
  topArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: height * 0.06,
  },
  imageWrapper: {
    flex: 1,
    width: width * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 10,
  },
  dotTouchArea: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDotOuter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDotInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  inactiveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  bottomCard: {
    backgroundColor: Palette.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 36,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  titleText: {
    fontFamily: Fonts.medium,
    fontSize: 24,
    fontStyle: 'normal',
    color: '#001833',
    textAlign: 'center',
    lineHeight: 36, // 150%
    marginBottom: 24,
  },
  signUpButton: {
    width: '100%',
    backgroundColor: Palette.royalBlue, // #6A5AE0
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  signUpButtonText: {
    fontFamily: Fonts.medium, // Rubik 500
    fontSize: 16,
    fontStyle: 'normal',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24, // 150%
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alreadyText: {
    fontFamily: Fonts.regular, // Rubik 400
    fontSize: 16,
    fontStyle: 'normal',
    color: '#858494',
    lineHeight: 24, // 150%
  },
  loginText: {
    fontFamily: Fonts.medium, // Rubik 500
    fontSize: 16,
    fontStyle: 'normal',
    color: Palette.royalBlue, // #6A5AE0
    lineHeight: 24, // 150%
  },
});
