import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Colors, Fonts, Palette } from '@/constants/theme';
import Logo from '@/assets/images/Logo.svg';

const { width, height } = Dimensions.get('window');

interface AuthOptionsScreenProps {
  onLogin?: () => void;
  onCreateAccount?: () => void;
  onLater?: () => void;
}

export function AuthOptionsBackground() {
  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {/* Top-Left Dot 48px */}
      <Svg
        style={{ position: 'absolute', left: width * 0.1, top: height * 0.08 }}
        width={48}
        height={48}
        viewBox="0 0 48 48"
      >
        <Circle cx={24} cy={24} r={24} fill="#C4D0FB" opacity={0.15} />
      </Svg>

      {/* Top-Right Dot 20px */}
      <Svg
        style={{ position: 'absolute', right: width * 0.12, top: height * 0.11 }}
        width={20}
        height={20}
        viewBox="0 0 20 20"
      >
        <Circle cx={10} cy={10} r={10} fill="#C4D0FB" opacity={0.25} />
      </Svg>

      {/* Mid-Left Concentric Circles */}
      <Svg
        style={{ position: 'absolute', left: 0, top: height * 0.28 }}
        width={180}
        height={300}
        viewBox="0 0 180 300"
      >
        <Circle cx={-20} cy={200} r={170} stroke="#C4D0FB" strokeWidth={1} fill="none" opacity={0.2} />
        <Circle cx={-20} cy={200} r={100} fill="#C4D0FB" opacity={0.1} />
      </Svg>

      {/* Mid-Right Concentric Circles */}
      <Svg
        style={{ position: 'absolute', right: 0, top: height * 0.32 }}
        width={160}
        height={280}
        viewBox="0 0 160 280"
      >
        <Circle cx={170} cy={140} r={65} fill="#C4D0FB" opacity={0.1} />
      </Svg>
    </View>
  );
}

export default function AuthOptionsScreen({ onLogin, onCreateAccount, onLater }: AuthOptionsScreenProps) {
  return (
    <View style={styles.container}>
      <AuthOptionsBackground />

      {/* Header Logo + Brand */}
      <View style={styles.header}>
        <Logo width={54} height={54} />
        <Text style={styles.brandTitle}>Qwizzy</Text>
      </View>

      {/* Center Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/login.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.cardTitle}>Login or Sign Up</Text>
        <Text style={styles.cardSubtitle}>
          {'Login or create an account to take quiz,\ntake part in challenge, and more.'}
        </Text>

        {/* Primary Action: Login */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={onLogin}
          activeOpacity={0.85}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Secondary Action: Create an Account */}
        <TouchableOpacity
          style={styles.createButton}
          onPress={onCreateAccount}
          activeOpacity={0.85}
        >
          <Text style={styles.createButtonText}>Create an account</Text>
        </TouchableOpacity>

        {/* Tertiary Action: Later */}
        <TouchableOpacity style={styles.laterButton} onPress={onLater} activeOpacity={0.7}>
          <Text style={styles.laterText}>Later</Text>
        </TouchableOpacity>
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
  header: {
    alignItems: 'center',
    paddingTop: height * 0.07,
  },
  brandTitle: {
    fontFamily: Fonts.nunitoExtraBold,
    fontSize: 24,
    color: Palette.white,
    marginTop: 8,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  illustration: {
    width: width * 0.8,
    height: height * 0.32,
  },
  bottomCard: {
    backgroundColor: Palette.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  cardTitle: {
    fontFamily: Fonts.medium, // Rubik 500
    fontSize: 24,
    fontStyle: 'normal',
    color: '#001833',
    textAlign: 'center',
    lineHeight: 36, // 150%
    marginBottom: 8,
  },
  cardSubtitle: {
    fontFamily: Fonts.regular, // Rubik 400
    fontSize: 16,
    fontStyle: 'normal',
    color: '#858494',
    textAlign: 'center',
    lineHeight: 24, // 150%
    marginBottom: 24,
  },
  loginButton: {
    width: '100%',
    backgroundColor: Palette.royalBlue,
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  loginButtonText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Palette.white,
  },
  createButton: {
    width: '100%',
    backgroundColor: Palette.grey4, // #E6E6E6
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  createButtonText: {
    fontFamily: Fonts.medium, // Rubik 500
    fontSize: 16,
    fontStyle: 'normal',
    color: Palette.royalBlue, // #6A5AE0
    textAlign: 'center',
    lineHeight: 24, // 150%
  },
  laterButton: {
    width: '100%',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  laterText: {
    fontFamily: Fonts.medium, // Rubik 500
    fontSize: 16,
    fontStyle: 'normal',
    color: '#858494',
    textAlign: 'center',
    lineHeight: 24, // 150%
  },
});
