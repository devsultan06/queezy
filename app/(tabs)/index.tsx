import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Fonts } from '@/constants/theme';

import GuyAvatarSvg from '@/assets/images/1.svg';
import GirlAvatarSvg from '@/assets/images/2.svg';
import FindFriendsIconSvg from '@/assets/images/Icon (4) copy.svg';
import HeadphoneIconSvg from '@/assets/images/headphone.svg';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const getGreetingData = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return {
        text: 'GOOD MORNING',
        icon: (
          <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="12" r="5" stroke="#FFD6DD" strokeWidth="2" />
            <Path
              d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93"
              stroke="#FFD6DD"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
        ),
      };
    } else if (hour >= 12 && hour < 17) {
      return {
        text: 'GOOD AFTERNOON',
        icon: (
          <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="12" r="5" stroke="#FFD6DD" strokeWidth="2" />
            <Path
              d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93"
              stroke="#FFD6DD"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
        ),
      };
    } else {
      return {
        text: 'GOOD EVENING',
        icon: (
          <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
            <Path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="#FFD6DD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        ),
      };
    }
  };

  const greeting = getGreetingData();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 110 }}
        bounces={false}
      >
        {/* Purple Top Header Section */}
        <View style={[styles.headerSection, { paddingTop: Math.max(insets.top + 12, 54) }]}>
          {/* Header Top Row */}
          <View style={styles.headerRow}>
            <View>
              <View style={styles.goodMorningRow}>
                {greeting.icon}
                <Text style={styles.goodMorningText}>{greeting.text}</Text>
              </View>
              <Text style={styles.userNameText}>Sultan</Text>
            </View>

            {/* Profile Avatar */}
            <TouchableOpacity activeOpacity={0.85} style={styles.avatarWrapper}>
              <Image
                source={require('@/assets/images/Avatar2.png')}
                style={styles.avatarImage}
              />
            </TouchableOpacity>
          </View>

          {/* Recent Quiz Card */}
          <TouchableOpacity style={styles.recentQuizCard} activeOpacity={0.9}>
            {/* Background Vector Wave Lines */}
            <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
              <Svg width="100%" height="100%" viewBox="0 0 320 84" fill="none" preserveAspectRatio="none" style={StyleSheet.absoluteFillObject}>
                <Path
                  opacity="0.2"
                  d="M0.964844 0.258789C0.964844 0.258789 15.5072 54.5762 43.9648 66.2588C91.4648 85.7588 153.851 23.0517 215.465 37.7588C265.254 49.6433 313.965 107.259 313.965 107.259"
                  stroke="white"
                  strokeWidth="2"
                />
                <Path
                  opacity="0.2"
                  d="M0.964844 0.257812C0.964844 0.257812 18.3414 65.2356 52.345 79.2111C109.102 102.538 183.646 27.5241 257.268 45.1176C316.761 59.3346 374.965 128.258 374.965 128.258"
                  stroke="white"
                  strokeWidth="2"
                />
              </Svg>
            </View>

            <View style={styles.recentQuizTextContent}>
              <Text style={styles.recentQuizBadge}>RECENT QUIZ</Text>
              <View style={styles.recentQuizTitleRow}>
                {/* Headphones Icon */}
                <HeadphoneIconSvg width={20} height={20} style={{ marginRight: 8 }} />
                <Text style={styles.recentQuizTitle}>A Basic Music Quiz</Text>
              </View>
            </View>

            {/* Pie Chart Progress 65% Badge */}
            <View style={styles.progressBadgeWrapper}>
              <Svg width={48} height={48} viewBox="0 0 48 48">
                {/* 35% base circle fill */}
                <Circle cx={24} cy={24} r={24} fill="#FFB3C0" />
                {/* 65% filled pie slice */}
                <Circle
                  cx={24}
                  cy={24}
                  r={12}
                  stroke="#FF8FA2"
                  strokeWidth={24}
                  fill="none"
                  strokeDasharray="75.4"
                  strokeDashoffset="26.4"
                  transform="rotate(-90 24 24)"
                />
              </Svg>
              <Text style={styles.progressText}>65%</Text>
            </View>
          </TouchableOpacity>

          {/* Featured Challenges Banner */}
          <View style={styles.featuredBanner}>
            {/* Top-Right Background Concentric Circles (Outer stroke + Inner fill) */}
            <Svg
              style={{ position: 'absolute', top: 0, right: 0 }}
              width={110}
              height={110}
              viewBox="0 0 110 110"
              pointerEvents="none"
            >
              <Circle cx={110} cy={0} r={92} stroke="#C4D0FB" strokeWidth={1} fill="none" opacity={0.35} />
              <Circle cx={110} cy={0} r={52} fill="#C4D0FB" opacity={0.2} />
            </Svg>

            {/* Bottom-Left Background Concentric Circles (Outer stroke + Inner fill) */}
            <Svg
              style={{ position: 'absolute', bottom: 0, left: 0 }}
              width={110}
              height={110}
              viewBox="0 0 110 110"
              pointerEvents="none"
            >
              <Circle cx={0} cy={110} r={92} stroke="#C4D0FB" strokeWidth={1} fill="none" opacity={0.35} />
              <Circle cx={0} cy={110} r={52} fill="#C4D0FB" opacity={0.2} />
            </Svg>

            {/* Top Row with Guy Avatar & Centered FEATURED Badge */}
            <View style={styles.featuredTopRow}>
              <GuyAvatarSvg width={48} height={48} />
              <Text style={styles.featuredBadge}>FEATURED</Text>
              <View style={{ width: 48 }} />
            </View>

            {/* Centered Main Title */}
            <Text style={styles.featuredTitle}>
              Take part in challenges{'\n'}with friends or other{'\n'}players
            </Text>

            {/* Bottom Row with Centered Find Friends Button & Right Girl Avatar */}
            <View style={styles.featuredBottomRow}>
              <View style={{ width: 52 }} />
              <TouchableOpacity style={styles.findFriendsBtn} activeOpacity={0.85}>
                <FindFriendsIconSvg width={20} height={20} style={{ marginRight: 8 }} />
                <Text style={styles.findFriendsBtnText}>Find Friends</Text>
              </TouchableOpacity>
              <GirlAvatarSvg width={52} height={52} />
            </View>
          </View>
        </View>

        {/* White Rounded Bottom Sheet Container */}
        <View style={styles.whiteSheet}>
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Live Quizzes</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllBtnText}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Item 1: Statistics Math Quiz */}
          <TouchableOpacity style={styles.quizCardItem} activeOpacity={0.75}>
            <Image
              source={require('@/assets/images/Frame (1).png')}
              style={styles.quizFrameImg}
              resizeMode="cover"
            />
            <View style={styles.quizItemInfo}>
              <Text style={styles.quizItemTitle}>Statistics Math Quiz</Text>
              <Text style={styles.quizItemSubtitle}>Math • 12 Quizzes</Text>
            </View>
            <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
              <Path
                d="M9 18l6-6-6-6"
                stroke="#6A5AE0"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>

          {/* Item 2: Integers Quiz */}
          <TouchableOpacity style={styles.quizCardItem} activeOpacity={0.75}>
            <Image
              source={require('@/assets/images/Frame.png')}
              style={styles.quizFrameImg}
              resizeMode="cover"
            />
            <View style={styles.quizItemInfo}>
              <Text style={styles.quizItemTitle}>Integers Quiz</Text>
              <Text style={styles.quizItemSubtitle}>Math • 10 Quizzes</Text>
            </View>
            <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
              <Path
                d="M9 18l6-6-6-6"
                stroke="#6A5AE0"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>

          {/* Extended white bottom fill so scroll area below stays 100% white */}
          <View style={styles.whiteBottomExtension} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerSection: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  goodMorningRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  goodMorningText: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: '#FFD6DD',
    lineHeight: 18,
    letterSpacing: 0.48,
    textTransform: 'uppercase',
    marginLeft: 6,
  },
  userNameText: {
    fontFamily: Fonts.medium,
    fontSize: 24,
    color: '#FFFFFF',
    lineHeight: 36,
  },
  avatarWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  recentQuizCard: {
    backgroundColor: '#FFCCD5',
    borderRadius: 20,
    padding: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  recentQuizTextContent: {
    flex: 1,
  },
  recentQuizBadge: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: '#660012',
    lineHeight: 19.6,
    letterSpacing: 1.12,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  recentQuizTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentQuizTitle: {
    fontFamily: Fonts.medium,
    fontSize: 18,
    color: '#660012',
    lineHeight: 24.3,
  },
  progressBadgeWrapper: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  progressText: {
    position: 'absolute',
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 19.6,
    textAlign: 'center',
  },
  featuredBanner: {
    backgroundColor: '#9082F6',
    borderRadius: 24,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
    marginTop: 4,
  },
  featuredTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  featuredBadge: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 19.6,
    letterSpacing: 1.12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  featuredTitle: {
    fontFamily: Fonts.medium,
    fontSize: 18,
    color: '#FFFFFF',
    lineHeight: 24.3,
    textAlign: 'center',
    marginVertical: 10,
  },
  featuredBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  findFriendsBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  findFriendsBtnText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.primary,
    lineHeight: 19.6,
    textAlign: 'center',
  },
  whiteSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    minHeight: 500,
    position: 'relative',
  },
  whiteBottomExtension: {
    position: 'absolute',
    bottom: -1000,
    left: 0,
    right: 0,
    height: 1000,
    backgroundColor: '#FFFFFF',
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sheetTitle: {
    fontFamily: Fonts.medium,
    fontSize: 20,
    color: '#0C092A',
    lineHeight: 28,
  },
  seeAllBtnText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.primary,
    lineHeight: 19.6,
    textAlign: 'right',
  },
  quizCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#EFEEFC',
    padding: 14,
    marginBottom: 12,
  },
  quizFrameImg: {
    width: 52,
    height: 52,
    borderRadius: 16,
    marginRight: 14,
  },
  quizItemInfo: {
    flex: 1,
  },
  quizItemTitle: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: '#0C092A',
    lineHeight: 24,
  },
  quizItemSubtitle: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: '#858494',
    lineHeight: 18,
    marginTop: 3,
  },
});
