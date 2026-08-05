import React from 'react';
import Svg, { Path } from 'react-native-svg';

import HomeInactiveIcon from '@/assets/images/Icon (7).svg';
import HomeActiveIcon from '@/assets/images/Icon (8).svg';
import SearchInactiveIcon from '@/assets/images/Icon (4).svg';
import SearchActiveIcon from '@/assets/images/Icon (9).svg';
import LeaderboardIconSvg from '@/assets/images/Icon (5).svg';
import ProfileInactiveIcon from '@/assets/images/Icon (6).svg';
import ProfileActiveIcon from '@/assets/images/Icon (10).svg';
import PlusIconSvg from '@/assets/images/plus.svg';

export interface TabIconProps {
  color?: string;
  size?: number;
  focused?: boolean;
}

export function HomeIcon({ size = 24, focused = false }: TabIconProps) {
  const Icon = focused ? HomeActiveIcon : HomeInactiveIcon;
  return <Icon width={size} height={size} />;
}

export function SearchIcon({ size = 24, focused = false }: TabIconProps) {
  const Icon = focused ? SearchActiveIcon : SearchInactiveIcon;
  return <Icon width={size} height={size} />;
}

export function LeaderboardIcon({ size = 24 }: TabIconProps) {
  return <LeaderboardIconSvg width={size} height={size} />;
}

export function ProfileIcon({ size = 24, focused = false }: TabIconProps) {
  const Icon = focused ? ProfileActiveIcon : ProfileInactiveIcon;
  return <Icon width={size} height={size} />;
}

export function PlusIcon({ size = 24 }: TabIconProps) {
  return <PlusIconSvg width={size} height={size} />;
}

