import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Colors, Fonts } from '@/constants/theme';
import Logo from '@/assets/images/Logo.svg';
import { BackgroundDecorations } from './background-decorations';

interface SplashScreenProps {
  onDone?: () => void;
}

export default function SplashScreen({ onDone }: SplashScreenProps) {
  const logoScale = useRef(new Animated.Value(0.6)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const fadeOutOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      // Logo springs in
      Animated.parallel([
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 60,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
      // Text fades in
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 350,
        delay: 100,
        useNativeDriver: true,
      }),
      // Hold for 1.2 seconds
      Animated.delay(1200),
      // Fade out splash screen
      Animated.timing(fadeOutOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onDone) onDone();
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => onDone && onDone()}>
      <Animated.View style={[styles.container, { opacity: fadeOutOpacity }]}>
        <BackgroundDecorations />

        {/* ── Logo + wordmark ── */}
        <Animated.View
          style={{
            alignItems: 'center',
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          }}
        >
          <Logo width={100} height={100} />
          <Animated.Text style={[styles.wordmark, { opacity: textOpacity }]}>
            Qwizzy
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  wordmark: {
    fontFamily: Fonts.nunitoExtraBold,
    fontSize: 36,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 36 * 1.4,
    letterSpacing: -0.36,
    marginTop: 20,
  },
});
