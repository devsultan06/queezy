import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Colors, Fonts } from '@/constants/theme';
import { LeaderboardIcon } from '@/components/navigation/tab-icons';

export default function LeaderboardScreen() {
  const topUsers = [
    { rank: 1, name: 'Alex Johnson', points: '2,450', avatar: '🥇' },
    { rank: 2, name: 'Sarah Smith', points: '2,180', avatar: '🥈' },
    { rank: 3, name: 'Michael Brown', points: '1,920', avatar: '🥉' },
    { rank: 4, name: 'Emily Davis', points: '1,750', avatar: '4' },
    { rank: 5, name: 'David Wilson', points: '1,610', avatar: '5' },
    { rank: 6, name: 'Jessica Taylor', points: '1,490', avatar: '6' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <Text style={styles.headerSub}>Top performers this week</Text>
      </View>

      <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
        {topUsers.map((user) => (
          <View key={user.rank} style={styles.rankCard}>
            <Text style={styles.rankBadge}>{user.avatar}</Text>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userPoints}>{user.points} PTS</Text>
            </View>
          </View>
        ))}
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
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    color: Colors.text,
  },
  headerSub: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textSubtle,
    marginTop: 4,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  rankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FD',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  rankBadge: {
    fontSize: 24,
    marginRight: 16,
    width: 32,
    textAlign: 'center',
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.text,
  },
  userPoints: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.primary,
  },
});
