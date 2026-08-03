import React from 'react';
import Svg, { Path, Circle, Rect, G } from 'react-native-svg';

export interface TabIconProps {
  color?: string;
  size?: number;
  focused?: boolean;
}

export function HomeIcon({ color = '#858494', size = 24, focused = false }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {focused ? (
        <Path
          d="M10.707 2.293a1 1 0 011.414 0l8 8A1 1 0 0119.414 12H19v7a2 2 0 01-2 2h-3.5a.5.5 0 01-.5-.5V15a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 007 15v5.5a.5.5 0 01-.5.5H3a2 2 0 01-2-2v-7h-.414a1 1 0 01-.707-1.707l8-8z"
          fill={color}
        />
      ) : (
        <Path
          d="M3 10.5L12 3L21 10.5V19C21 20.1046 20.1046 21 19 21H15V15H9V21H5C3.89543 21 3 20.1046 3 19V10.5Z"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </Svg>
  );
}

export function SearchIcon({ color = '#858494', size = 24, focused = false }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle
        cx="11"
        cy="11"
        r="7"
        stroke={color}
        strokeWidth={focused ? '2.5' : '2.2'}
        strokeLinecap="round"
      />
      <Path
        d="M16 16L21 21"
        stroke={color}
        strokeWidth={focused ? '2.5' : '2.2'}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function LeaderboardIcon({ color = '#858494', size = 24, focused = false }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x="3"
        y="12"
        width="4.5"
        height="8"
        rx="1"
        stroke={color}
        strokeWidth={focused ? '2.5' : '2.2'}
        fill={focused ? color : 'none'}
      />
      <Rect
        x="9.75"
        y="6"
        width="4.5"
        height="14"
        rx="1"
        stroke={color}
        strokeWidth={focused ? '2.5' : '2.2'}
        fill={focused ? color : 'none'}
      />
      <Rect
        x="16.5"
        y="10"
        width="4.5"
        height="10"
        rx="1"
        stroke={color}
        strokeWidth={focused ? '2.5' : '2.2'}
        fill={focused ? color : 'none'}
      />
    </Svg>
  );
}

export function ProfileIcon({ color = '#858494', size = 24, focused = false }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle
        cx="12"
        cy="8"
        r="4"
        stroke={color}
        strokeWidth={focused ? '2.5' : '2.2'}
        fill={focused ? color : 'none'}
      />
      <Path
        d="M5 20C5 16.134 8.134 13 12 13C15.866 13 19 16.134 19 20"
        stroke={color}
        strokeWidth={focused ? '2.5' : '2.2'}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function PlusIcon({ color = '#FFFFFF', size = 24 }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 5V19M5 12H19"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
