import { StyleSheet, View, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export function OnboardingBackground() {
  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {/* ── Top-Right: Concentric stroke ring + filled circle ── */}
      <Svg
        style={{ position: 'absolute', top: 0, right: 0 }}
        width={220}
        height={360}
        viewBox="0 0 220 360"
      >
        <Circle cx={210} cy={40} r={180} stroke="#C4D0FB" strokeWidth={1} fill="none" opacity={0.2} />
        <Circle cx={210} cy={40} r={110} fill="#C4D0FB" opacity={0.1} />
      </Svg>

      {/* ── Mid-Left Dot: 48px circle ── */}
      <Svg
        style={{ position: 'absolute', left: width * 0.12, top: height * 0.16 }}
        width={48}
        height={48}
        viewBox="0 0 48 48"
      >
        <Circle cx={24} cy={24} r={24} fill="#C4D0FB" opacity={0.1} />
      </Svg>

      {/* ── Bottom-Left: Concentric stroke ring + filled circle ── */}
      <Svg
        style={{ position: 'absolute', left: 0, top: height * 0.42 }}
        width={210}
        height={330}
        viewBox="0 0 210 330"
      >
        <Circle cx={0} cy={200} r={180} stroke="#C4D0FB" strokeWidth={1} fill="none" opacity={0.2} />
        <Circle cx={0} cy={200} r={130} fill="#C4D0FB" opacity={0.1} />
      </Svg>

      {/* ── Bottom-Right Dot: 20px circle ── */}
      <Svg
        style={{ position: 'absolute', right: width * 0.14, top: height * 0.52 }}
        width={20}
        height={20}
        viewBox="0 0 20 20"
      >
        <Circle cx={10} cy={10} r={10} fill="#C4D0FB" opacity={0.2} />
      </Svg>
    </View>
  );
}
