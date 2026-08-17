import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Fonts } from '@/constants/theme';
import { router } from 'expo-router';

import MathIconSvg from '@/assets/images/Icon copy.svg';
import ScienceIconSvg from '@/assets/images/Icon (1) copy.svg';

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');

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
          {/* Header Row */}
          <View style={styles.headerRow}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.back()}
              style={styles.backBtn}
            >
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>

            <Text style={styles.screenTitle}>Discover</Text>

            <View style={{ width: 40 }} />
          </View>

          {/* Search Bar Input */}
          <View style={styles.searchBar}>
            <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" style={{ marginRight: 10 }}>
              <Circle cx="11" cy="11" r="7" stroke="#E6E6E6" strokeWidth="2" />
              <Path d="M20 20l-4-4" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" />
            </Svg>
            <TextInput
              style={styles.searchInput}
              placeholder="Quiz, categories, or friends"
              placeholderTextColor="rgba(230, 230, 230, 0.7)"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* TOP PICKS Banner Card */}
          <ImageBackground
            source={require('@/assets/images/lady-discover.png')}
            style={styles.topPicksCard}
            imageStyle={styles.topPicksImageStyle}
            resizeMode="cover"
          >
            <View style={styles.topPicksBadge}>
              <Text style={styles.topPicksBadgeText}>TOP PICKS</Text>
            </View>

            <View style={styles.topPicksBottomContent}>
              <Text style={styles.topPicksTitle}>Travel Trivia Quiz</Text>

              <View style={styles.topPicksSubRow}>
                {/* Podcast / Mic Icon */}
                <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
                  <Circle cx="12" cy="7" r="4" stroke="#660012" strokeWidth="2" />
                  <Path d="M5 9a7 7 0 0014 0" stroke="#660012" strokeWidth="2" strokeLinecap="round" />
                  <Path d="M12 16v4M8 20h8" stroke="#660012" strokeWidth="2" strokeLinecap="round" />
                </Svg>
                <Text style={styles.topPicksSubText}>Music • 5 Quizzes</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* White Rounded Bottom Sheet Container */}
        <View style={styles.whiteSheet}>
          {/* Section 1: Top rank of the week */}
          <Text style={styles.sectionTitle}>Top rank of the week</Text>

          <View style={styles.rankCardContainer}>
            <View style={styles.rankCard}>
              {/* Decorative background curve */}
              <Image
                source={require('@/assets/images/Group 778.png')}
                style={styles.rankCardCurves}
                resizeMode="stretch"
              />

              {/* Rank Number Circle */}
              <View style={styles.rankNumberBadge}>
                <Text style={styles.rankNumberText}>1</Text>
              </View>

              {/* User Avatar with Flag */}
              <View style={styles.userAvatarContainer}>
                <Image
                  source={require('@/assets/images/Avatar-discover.png')}
                  style={styles.rankAvatarImg}
                />
                <Image
                  source={require('@/assets/images/Flag.png')}
                  style={styles.rankFlagImg}
                  resizeMode="contain"
                />
              </View>

              {/* User Info */}
              <View style={styles.rankUserInfo}>
                <Text style={styles.rankUserName}>Brandon Matrovs</Text>
                <Text style={styles.rankUserScore}>124 points</Text>
              </View>
            </View>

            {/* Top Right Golden Medal Badge */}
            <Image
              source={require('@/assets/images/Medal.png')}
              style={styles.medalBadge}
              resizeMode="contain"
            />
          </View>

          {/* Section 2: Categories */}
          <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Categories</Text>

          <View style={styles.categoriesGrid}>
            {/* Math Card */}
            <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#88E2CE' }]} activeOpacity={0.85}>
              <View style={styles.categoryIconBox}>
                <MathIconSvg width={28} height={28} />
              </View>
              <Text style={styles.categoryName}>Math</Text>
              <Text style={styles.categorySub}>21 Quizzes</Text>
            </TouchableOpacity>

            {/* Science Card */}
            <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#9087E5' }]} activeOpacity={0.85}>
              <View style={styles.categoryIconBox}>
                <ScienceIconSvg width={28} height={28} />
              </View>
              <Text style={styles.categoryName}>Science</Text>
              <Text style={styles.categorySub}>12 Quizzes</Text>
            </TouchableOpacity>
          </View>

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
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  screenTitle: {
    fontFamily: Fonts.medium,
    fontSize: 24,
    color: '#FFFFFF',
    lineHeight: 36,
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: 'rgba(12, 9, 42, 0.16)',
    borderRadius: 20,
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#E6E6E6',
    lineHeight: 24,
  },
  topPicksCard: {
    backgroundColor: '#FFE0E6',
    borderRadius: 20,
    height: 163,
    padding: 16,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  topPicksImageStyle: {
    borderRadius: 20,
  },
  topPicksBadge: {
    backgroundColor: '#FF8FA2',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-start',
  },
  topPicksBadgeText: {
    fontFamily: Fonts.bold,
    fontSize: 11,
    color: '#FFFFFF',
    letterSpacing: 0.8,
  },
  topPicksBottomContent: {
    maxWidth: '58%',
  },
  topPicksTitle: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    lineHeight: 24,
    color: '#660012',
    marginBottom: 4,
  },
  topPicksSubRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topPicksSubText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    lineHeight: 18,
    color: '#660012',
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
  sectionTitle: {
    fontFamily: Fonts.medium,
    fontSize: 20,
    color: '#0C092A',
    lineHeight: 28,
  },
  rankCardContainer: {
    position: 'relative',
    marginTop: 16,
  },
  rankCard: {
    backgroundColor: '#6A5AE0',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 80,
  },
  rankCardCurves: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 150,
    height: '100%',
  },
  rankNumberBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rankNumberText: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    lineHeight: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  userAvatarContainer: {
    width: 56,
    height: 56,
    position: 'relative',
    marginRight: 14,
  },
  rankAvatarImg: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  rankFlagImg: {
    position: 'absolute',
    bottom: 0,
    right: -2,
    width: 20,
    height: 20,
  },
  rankUserInfo: {
    flex: 1,
    zIndex: 1,
  },
  rankUserName: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  rankUserScore: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  medalBadge: {
    position: 'absolute',
    top: -18,
    right: 18,
    width: 38,
    height: 44,
    zIndex: 2,
  },
  categoriesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  categoryCard: {
    flex: 0.48,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
  },
  categoryIconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 2,
  },
  categorySub: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    lineHeight: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
});
