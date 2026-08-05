import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

import { Colors, Fonts } from "@/constants/theme";
import {
  HomeIcon,
  LeaderboardIcon,
  PlusIcon,
  ProfileIcon,
  SearchIcon,
  TabIconProps,
} from "./tab-icons";

interface LiquidGlassTabBarProps extends BottomTabBarProps {
  onPlusPress?: () => void;
  /** Custom icons for tab route names */
  customIcons?: Record<string, (props: TabIconProps) => React.ReactNode>;
}

export function LiquidGlassTabBar({
  state,
  descriptors,
  navigation,
  onPlusPress,
  customIcons,
}: LiquidGlassTabBarProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const fabScale = useSharedValue(1);

  const BASE_BAR_HEIGHT = 68;
  const bottomPadding = Math.max(insets.bottom, 13);
  const totalBarHeight = BASE_BAR_HEIGHT + bottomPadding;

  const notchRadius = 37;
  const notchDepth = 36;
  const cornerRadius = 27;
  const center = width / 2;
  const cGap = 18;

  // Path formula for tab bar background with balanced notch
  const bgPath = `
    M ${cornerRadius}, 0
    L ${center - notchRadius - cGap}, 0
    C ${center - notchRadius + 3.5}, 0 
      ${center - notchRadius + 7}, ${notchDepth} 
      ${center}, ${notchDepth}
    C ${center + notchRadius - 7}, ${notchDepth} 
      ${center + notchRadius - 3.5}, 0 
      ${center + notchRadius + cGap}, 0
    L ${width - cornerRadius}, 0
    Q ${width}, 0 ${width}, ${cornerRadius}
    L ${width}, ${totalBarHeight}
    L 0, ${totalBarHeight}
    L 0, ${cornerRadius}
    Q 0, 0 ${cornerRadius}, 0
    Z
  `;

  // Top liquid glass edge contour path
  const topLinePath = `
    M ${cornerRadius}, 1
    L ${center - notchRadius - cGap}, 1
    C ${center - notchRadius + 3.5}, 1 
      ${center - notchRadius + 7}, ${notchDepth + 1} 
      ${center}, ${notchDepth + 1}
    C ${center + notchRadius - 7}, ${notchDepth + 1} 
      ${center + notchRadius - 3.5}, 1 
      ${center + notchRadius + cGap}, 1
    L ${width - cornerRadius}, 1
  `;

  const handleFabPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    fabScale.value = withSpring(0.88, {}, () => {
      fabScale.value = withSpring(1);
    });

    if (onPlusPress) {
      onPlusPress();
    } else {
      setShowCreateModal(true);
    }
  };

  const fabAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: fabScale.value }],
  }));

  // Divide routes into left 2 and right 2
  const routes = state.routes;
  const leftRoutes = routes.slice(0, 2);
  const rightRoutes = routes.slice(2, 4);

  const renderTabItem = (route: (typeof routes)[0], index: number) => {
    const isFocused = state.index === index;
    const { options } = descriptors[route.key];

    const onPress = () => {
      Haptics.selectionAsync();
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const color = isFocused ? '#0C092A' : '#CCCCCC';
    const iconSize = 24;

    // 1. Custom icon from props
    // 2. Custom icon from route descriptor options
    // 3. Fallback default SVG icon
    let IconComponent: React.ReactNode = null;

    if (customIcons && customIcons[route.name]) {
      IconComponent = customIcons[route.name]({
        color,
        size: iconSize,
        focused: isFocused,
      });
    } else if (options.tabBarIcon) {
      IconComponent = options.tabBarIcon({
        focused: isFocused,
        color,
        size: iconSize,
      });
    } else {
      switch (route.name) {
        case "index":
          IconComponent = (
            <HomeIcon color={color} size={iconSize} focused={isFocused} />
          );
          break;
        case "explore":
          IconComponent = (
            <SearchIcon color={color} size={iconSize} focused={isFocused} />
          );
          break;
        case "leaderboard":
          IconComponent = (
            <LeaderboardIcon
              color={color}
              size={iconSize}
              focused={isFocused}
            />
          );
          break;
        case "profile":
          IconComponent = (
            <ProfileIcon color={color} size={iconSize} focused={isFocused} />
          );
          break;
        default:
          IconComponent = (
            <HomeIcon color={color} size={iconSize} focused={isFocused} />
          );
      }
    }

    return (
      <TouchableOpacity
        key={route.key}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarButtonTestID}
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.tabButton}
      >
        {IconComponent}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { height: totalBarHeight }]}>
      {/* Liquid Glass Curved Background SVG */}
      <View style={StyleSheet.absoluteFill}>
        <Svg width={width} height={totalBarHeight} style={styles.svgShadow}>
          <Defs>
            <LinearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.98} />
              <Stop offset="100%" stopColor="#FAFAFF" stopOpacity={0.95} />
            </LinearGradient>

            <LinearGradient id="topHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.9} />
              <Stop offset="50%" stopColor="#E6E4FF" stopOpacity={0.6} />
              <Stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.9} />
            </LinearGradient>
          </Defs>

          {/* Fill shape */}
          <Path d={bgPath} fill="url(#glassGrad)" />

          {/* Liquid highlight top stroke */}
          <Path
            d={topLinePath}
            stroke="url(#topHighlight)"
            strokeWidth="1.5"
            fill="none"
          />
        </Svg>
      </View>

      {/* Tab Buttons & Center FAB Container */}
      <View style={[styles.contentRow, { paddingBottom: bottomPadding }]}>
        {/* Left 2 Tabs */}
        <View style={styles.tabGroup}>
          {leftRoutes.map((route, i) => renderTabItem(route, i))}
        </View>

        {/* Center Notch Gap Spacer */}
        <View style={{ width: notchRadius * 2 + 12 }} />

        {/* Right 2 Tabs */}
        <View style={styles.tabGroup}>
          {rightRoutes.map((route, i) =>
            renderTabItem(route, i + leftRoutes.length),
          )}
        </View>
      </View>

      {/* Floating Center Action Button (FAB) */}
      <Animated.View
        style={[
          styles.fabWrapper,
          fabAnimatedStyle,
          {
            left: center - 25,
            top: -22,
          },
        ]}
      >
        <TouchableOpacity
          onPress={handleFabPress}
          activeOpacity={0.9}
          style={styles.fabButton}
        >
          <PlusIcon color="#FFFFFF" size={24} />
        </TouchableOpacity>
      </Animated.View>

      {/* Create / Plus Action Modal */}
      <Modal
        visible={showCreateModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCreateModal(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowCreateModal(false)}
        >
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Create New</Text>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                setShowCreateModal(false);
                Haptics.notificationAsync(
                  Haptics.NotificationFeedbackType.Success,
                );
              }}
            >
              <View style={[styles.optionIcon, { backgroundColor: "#ECE9FF" }]}>
                <PlusIcon color={Colors.primary} size={20} />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Create Quiz</Text>
                <Text style={styles.optionSub}>
                  Build your own custom trivia or test
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                setShowCreateModal(false);
                Haptics.notificationAsync(
                  Haptics.NotificationFeedbackType.Success,
                );
              }}
            >
              <View style={[styles.optionIcon, { backgroundColor: "#FFEDF0" }]}>
                <SearchIcon color={Colors.secondary} size={20} />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Join Live Room</Text>
                <Text style={styles.optionSub}>
                  Enter a game PIN to compete live
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setShowCreateModal(false)}
            >
              <Text style={styles.cancelBtnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 20,
    zIndex: 100,
  },
  svgShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#0C092A",
        shadowOffset: { width: 0, height: -6 },
        shadowOpacity: 0.08,
        shadowRadius: 14,
      },
      android: {
        elevation: 12,
      },
      web: {
        filter: "drop-shadow(0px -4px 12px rgba(12, 9, 42, 0.08))",
      },
    }),
  },
  contentRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  tabGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabButton: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  fabWrapper: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 14,
    zIndex: 110,
    ...Platform.select({
      ios: {
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
      },
      web: {
        filter: "drop-shadow(0px 6px 10px rgba(106, 90, 224, 0.35))",
      },
    }),
  },
  fabButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(12, 9, 42, 0.45)",
    justifyContent: "flex-end",
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  modalCard: {
    backgroundColor: Colors.background,
    borderRadius: 28,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  modalTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: Colors.text,
    marginBottom: 20,
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#F8F8FD",
    marginBottom: 12,
  },
  optionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.text,
  },
  optionSub: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.textSubtle,
    marginTop: 2,
  },
  cancelBtn: {
    marginTop: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  cancelBtnText: {
    fontFamily: Fonts.semiBold,
    fontSize: 15,
    color: Colors.textSubtle,
  },
});
