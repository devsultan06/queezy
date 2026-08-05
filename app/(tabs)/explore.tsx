import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Fonts } from '@/constants/theme';
import { router } from 'expo-router';

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
          <View style={styles.topPicksCard}>
            <View style={styles.topPicksBadge}>
              <Text style={styles.topPicksBadgeText}>TOP PICKS</Text>
            </View>

            <Text style={styles.topPicksTitle}>Travel Trivia Quiz</Text>

            <View style={styles.topPicksSubRow}>
              {/* Music / Mic icon */}
              <Svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
                <Path
                  d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"
                  stroke="#660012"
                  strokeWidth="2"
                />
                <Path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4" stroke="#660012" strokeWidth="2" strokeLinecap="round" />
              </Svg>
              <Text style={styles.topPicksSubText}>Music • 5 Quizzes</Text>
            </View>

            {/* Illustration */}
            <Image
              source={require('@/assets/images/Illustration (2).png')}
              style={styles.topPicksIllustration}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* White Rounded Bottom Sheet Container */}
        <View style={styles.whiteSheet}>
          {/* Section 1: Top rank of the week */}
          <Text style={styles.sectionTitle}>Top rank of the week</Text>

          <View style={styles.rankCard}>
            {/* Rank Number Circle */}
            <View style={styles.rankNumberBadge}>
              <Text style={styles.rankNumberText}>1</Text>
            </View>

            {/* User Avatar */}
            <View style={styles.userAvatarContainer}>
              <Image
                source={require('@/assets/images/Avatar2.png')}
                style={styles.rankAvatarImg}
              />
            </View>

            {/* User Info */}
            <View style={styles.rankUserInfo}>
              <Text style={styles.rankUserName}>Brandon Matrovs</Text>
              <Text style={styles.rankUserScore}>124 points</Text>
            </View>

            {/* Top Right Golden Crown Badge */}
            <View style={styles.crownBadge}>
              <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M2 5l3 12h14l3-12-6 7-4-8-4 8-6-7z"
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>

            {/* Decorative background curve */}
            <Svg
              style={{ position: 'absolute', right: 0, bottom: 0 }}
              width={140}
              height={90}
              viewBox="0 0 140 90"
              pointerEvents="none"
            >
              <Path
                d="M0 90C40 90 90 60 140 0V90H0Z"
                fill="rgba(255, 255, 255, 0.08)"
              />
            </Svg>
          </View>

          {/* Section 2: Categories */}
          <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Categories</Text>

          <View style={styles.categoriesGrid}>
            {/* Math Card */}
            <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#7BE0CA' }]} activeOpacity={0.85}>
              <View style={styles.categoryIconBox}>
                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <Path d="M4 14l3 4 5-12h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <Path d="M16 12l4 4M20 12l-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </Svg>
              </View>
              <Text style={styles.categoryName}>Math</Text>
              <Text style={styles.categorySub}>21 Quizzes</Text>
            </TouchableOpacity>

            {/* Science Card */}
            <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#9082F6' }]} activeOpacity={0.85}>
              <View style={styles.categoryIconBox}>
                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <Path d="M9 3h6M10 3v5l-4.5 9A2 2 0 007.3 20h9.4a2 2 0 001.8-3L14 8V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </Svg>
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
    backgroundColor: '#FFEDF0',
    borderRadius: 24,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
    minHeight: 140,
  },
  topPicksBadge: {
    backgroundColor: '#FF8FA2',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  topPicksBadgeText: {
    fontFamily: Fonts.bold,
    fontSize: 11,
    color: '#FFFFFF',
    letterSpacing: 0.8,
  },
  topPicksTitle: {
    fontFamily: Fonts.medium,
    fontSize: 18,
    color: '#660012',
    marginBottom: 6,
  },
  topPicksSubRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topPicksSubText: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: '#660012',
    opacity: 0.8,
  },
  topPicksIllustration: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 140,
    height: 140,
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
  rankCard: {
    backgroundColor: '#6A5AE0',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: 16,
    overflow: 'hidden',
  },
  rankNumberBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rankNumberText: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: '#FFFFFF',
  },
  userAvatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    marginRight: 14,
  },
  rankAvatarImg: {
    width: '100%',
    height: '100%',
  },
  rankUserInfo: {
    flex: 1,
  },
  rankUserName: {
    fontFamily: Fonts.medium,
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  rankUserScore: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: '#E6E4FF',
  },
  crownBadge: {
    position: 'absolute',
    top: 0,
    right: 16,
    width: 30,
    height: 34,
    backgroundColor: '#FFC107',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  categoriesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  categoryCard: {
    flex: 0.48,
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
  },
  categoryIconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  categorySub: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
