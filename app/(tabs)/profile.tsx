import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileHandle}>@johndoe</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>128</Text>
            <Text style={styles.statLabel}>Quizzes</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>14.5k</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>#4</Text>
            <Text style={styles.statLabel}>Rank</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Settings & Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Help & Support</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: '#FFFFFF',
  },
  profileName: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: Colors.text,
  },
  profileHandle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textSubtle,
    marginTop: 2,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#F8F8FD',
    borderRadius: 24,
    padding: 20,
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: Colors.primary,
  },
  statLabel: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.textSubtle,
    marginTop: 4,
  },
  menuSection: {
    backgroundColor: '#F8F8FD',
    borderRadius: 24,
    padding: 8,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDF8',
  },
  menuText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.text,
  },
});
