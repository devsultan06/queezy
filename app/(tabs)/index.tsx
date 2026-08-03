import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Colors, Fonts } from '@/constants/theme';
import { SearchIcon } from '@/components/navigation/tab-icons';

export default function HomeScreen() {
  const categories = ['All', 'Math', 'Science', 'History', 'Tech'];

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Explorer 👋</Text>
          <Text style={styles.headerTitle}>Let's Play & Learn</Text>
        </View>
        <TouchableOpacity style={styles.avatarBtn}>
          <Text style={styles.avatarText}>JD</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Featured Quiz Banner Card */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerBadge}>FEATURED QUIZ</Text>
            <Text style={styles.bannerTitle}>Daily Trivia Challenge</Text>
            <Text style={styles.bannerSub}>10 Questions • Win 500 PTS</Text>
            <TouchableOpacity style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>Play Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Category Pills */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesRow}>
          {categories.map((cat, i) => (
            <TouchableOpacity
              key={cat}
              style={[styles.categoryPill, i === 0 && styles.categoryPillActive]}
            >
              <Text style={[styles.categoryText, i === 0 && styles.categoryTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recent / Trending Quizzes */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Quizzes</Text>
        </View>

        {/* Integers Quiz Card (as shown in reference screenshot) */}
        <TouchableOpacity style={styles.quizCard}>
          <View style={[styles.quizIconBox, { backgroundColor: '#ECE9FF' }]}>
            <Text style={styles.quizIconText}>.fx</Text>
          </View>
          <View style={styles.quizInfo}>
            <Text style={styles.quizTitle}>Integers Quiz</Text>
            <Text style={styles.quizMeta}>Math • 10 Questions</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quizCard}>
          <View style={[styles.quizIconBox, { backgroundColor: '#FFE8EC' }]}>
            <Text style={styles.quizIconText}>🧬</Text>
          </View>
          <View style={styles.quizInfo}>
            <Text style={styles.quizTitle}>Cell Biology Basics</Text>
            <Text style={styles.quizMeta}>Science • 15 Questions</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quizCard}>
          <View style={[styles.quizIconBox, { backgroundColor: '#E3F2FD' }]}>
            <Text style={styles.quizIconText}>⚡</Text>
          </View>
          <View style={styles.quizInfo}>
            <Text style={styles.quizTitle}>World History & Civilizations</Text>
            <Text style={styles.quizMeta}>History • 12 Questions</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  greeting: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.primary,
  },
  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: Colors.text,
    marginTop: 2,
  },
  avatarBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 110,
  },
  bannerCard: {
    backgroundColor: Colors.primary,
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  bannerTextContainer: {
    alignItems: 'flex-start',
  },
  bannerBadge: {
    fontFamily: Fonts.bold,
    fontSize: 11,
    color: '#FFD6DD',
    letterSpacing: 1,
    marginBottom: 8,
  },
  bannerTitle: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 6,
  },
  bannerSub: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: '#E6E4FF',
    marginBottom: 16,
  },
  bannerBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  bannerBtnText: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.primary,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: Colors.text,
  },
  categoriesRow: {
    marginBottom: 24,
    flexDirection: 'row',
  },
  categoryPill: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: '#F8F8FD',
    marginRight: 10,
  },
  categoryPillActive: {
    backgroundColor: Colors.primary,
  },
  categoryText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.textSubtle,
  },
  categoryTextActive: {
    color: '#FFFFFF',
    fontFamily: Fonts.semiBold,
  },
  quizCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FD',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  quizIconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  quizIconText: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: Colors.primary,
  },
  quizInfo: {
    flex: 1,
  },
  quizTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.text,
  },
  quizMeta: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.textSubtle,
    marginTop: 2,
  },
  chevron: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: Colors.primary,
    marginLeft: 8,
  },
});
