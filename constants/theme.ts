import { Platform } from 'react-native';

// ─── Raw Palette ──────────────────────────────────────────────────────────────
export const Palette = {
  // Primary
  royalBlue:    '#6A5AE0',
  dullLavender: '#9087E5',
  pinkSalmon:   '#FF8FA2',

  // Accent
  pastelPink:   '#FFD6DD',
  hawkesBlue:   '#C4D0FB',
  mintTulip:    '#C9F2E9',

  // Greyscale
  black:  '#0C092A',
  grey1:  '#49465F',
  grey2:  '#858494',
  grey3:  '#CCCCCC',
  grey4:  '#E6E6E6',
  grey5:  '#EDEEFC',
  white:  '#FFFFFF',
} as const;

// ─── Semantic Colors ──────────────────────────────────────────────────────────
// Single flat object — use as Colors.text, Colors.primary, etc.
export const Colors = {
  primary:         Palette.royalBlue,
  primarySoft:     Palette.dullLavender,
  secondary:       Palette.pinkSalmon,

  accentPink:      Palette.pastelPink,
  accentBlue:      Palette.hawkesBlue,
  accentMint:      Palette.mintTulip,

  text:            Palette.black,
  textMuted:       Palette.grey1,
  textSubtle:      Palette.grey2,

  background:      Palette.white,
  surface:         Palette.grey5,
  border:          Palette.grey4,
  divider:         Palette.grey3,

  tint:            Palette.royalBlue,
  icon:            Palette.grey2,
  tabIconDefault:  Palette.grey2,
  tabIconSelected: Palette.royalBlue,
} as const;

// ─── Typography ──────────────────────────────────────────────────────────────
export const Fonts = {
  // Rubik — UI / body text
  regular:   'Rubik_400Regular',
  medium:    'Rubik_500Medium',
  semiBold:  'Rubik_600SemiBold',
  bold:      'Rubik_700Bold',
  black:     'Rubik_900Black',

  // Nunito — display / wordmark
  nunitoExtraBold: 'Nunito_800ExtraBold',
} as const;

