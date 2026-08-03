import { StyleSheet, View, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// Left-side SVG top calculation
const leftSvgTop = height * 0.9 - 209.5;

export function BackgroundDecorations() {
  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {/* ── Top-right: outer stroke ring + inner filled ── */}
      <Svg
        style={{ position: 'absolute', top: 0, right: 0 }}
        width={185}
        height={353}
        viewBox="0 0 185 353"
      >
        <Circle cx={209.5} cy={143} r={209} stroke="#C4D0FB" strokeWidth={1} fill="none" opacity={0.2} />
        <Circle cx={209.5} cy={143} r={120.828} fill="#C4D0FB" opacity={0.1} />
      </Svg>

      {/* ── Left-side: outer stroke ring + inner filled ── */}
      <Svg
        style={{ position: 'absolute', left: 0, top: leftSvgTop }}
        width={208}
        height={325}
        viewBox="0 0 208 325"
      >
        <Circle cx={-2} cy={209.5} r={209} stroke="#C4D0FB" strokeWidth={1} fill="none" opacity={0.2} />
        <Circle cx={-2} cy={209.5} r={120.828} fill="#C4D0FB" opacity={0.1} />
      </Svg>

      {/* ── Dot: 48px filled, top-left ── */}
      <Svg
        style={{ position: 'absolute', left: width * 0.1, top: height * 0.29 }}
        width={48}
        height={48}
        viewBox="0 0 48 48"
      >
        <Circle cx={24} cy={24} r={24} fill="#C4D0FB" opacity={0.1} />
      </Svg>

      {/* ── Dot: 20px filled, mid-right ── */}
      <Svg
        style={{ position: 'absolute', right: width * 0.13, top: height * 0.7 }}
        width={20}
        height={20}
        viewBox="0 0 20 20"
      >
        <Circle cx={10} cy={10} r={10} fill="#C4D0FB" opacity={0.2} />
      </Svg>
    </View>
  );
}
