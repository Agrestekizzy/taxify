import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ProgressBarAndroid,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TaxDashboard() {
  const [month, setMonth] = useState('Month');
  const [year, setYear] = useState('2026');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F3E5" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.username}>Samuel James</Text>
            <Text style={styles.subtitle}>Individual account</Text>
          </View>
          <TouchableOpacity style={styles.notifyIcon}>
            <Feather name="bell" size={20} color="green" />
          </TouchableOpacity>
        </View>

        {/* Selectors */}
        <TouchableOpacity style={styles.selector}>
          <Text style={styles.selectorText}>{month}</Text>
          <Feather name="chevron-down" size={16} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.selector}>
          <Text style={styles.selectorText}>{year}</Text>
          <Feather name="chevron-down" size={16} color="#fff" />
        </TouchableOpacity>

        {/* Tax Status Overview */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tax Status Overview</Text>

          <Text style={styles.detailLabel}>Paid Taxes</Text>
          <View style={styles.progressContainer}>
            <ProgressBarAndroid styleAttr="Horizontal" progress={0.0} color="green" />
          </View>
          <Text style={styles.percent}>0%</Text>

          <Text style={[styles.detailLabel, { marginTop: 10 }]}>Unpaid Taxes</Text>
          <View style={styles.progressContainer}>
            <ProgressBarAndroid styleAttr="Horizontal" progress={0.0} color="red" />
          </View>
          <Text style={styles.percent}>0%</Text>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickCard}>
            <Feather name="calculator" size={20} color="green" />
            <Text style={styles.quickText}>Tax Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickCard}>
            <Feather name="clock" size={20} color="green" />
            <Text style={styles.quickText}>Tax History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickCard}>
            <Feather name="bell" size={20} color="green" />
            <Text style={styles.quickText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickCard}>
            <Feather name="user" size={20} color="green" />
            <Text style={styles.quickText}>Profile & Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Summary */}
        <View style={styles.summaryCard}>
          <View style={styles.iconContainerPurple}>
            <Feather name="bar-chart-2" size={20} color="#fff" />
          </View>
          <View>
            <Text style={styles.summaryLabel}>Total Income</Text>
            <Text style={styles.summaryValue}>N0</Text>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.iconContainerGreen}>
            <MaterialCommunityIcons name="currency-ngn" size={20} color="#fff" />
          </View>
          <View>
            <Text style={styles.summaryLabel}>Tax Payable</Text>
            <Text style={styles.summaryValue}>N0</Text>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.iconContainerRed}>
            <Feather name="x-circle" size={20} color="#fff" />
          </View>
        <View>
            <Text style={styles.summaryLabel}>Unpaid</Text>
            <Text style={styles.summaryValue}>N0</Text>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.iconContainerGreenLighter}>
            <Feather name="check-circle" size={20} color="#fff" />
          </View>
          <View>
            <Text style={styles.summaryLabel}>Paid</Text>
            <Text style={styles.summaryValue}>N0</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="home" size={20} color="green" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="percent" size={20} color="gray" />
          <Text style={styles.navTextInactive}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="clock" size={20} color="gray" />
          <Text style={styles.navTextInactive}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="bell" size={20} color="gray" />
          <Text style={styles.navTextInactive}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="user" size={20} color="gray" />
          <Text style={styles.navTextInactive}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#E8F3E5' },
  container: { padding: 16, paddingBottom: 100 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  welcome: { fontSize: 16, color: '#333' },
  username: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  subtitle: { fontSize: 12, color: '#666' },
  notifyIcon: {
    backgroundColor: '#D5EBD3',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selector: {
    flexDirection: 'row',
    backgroundColor: '#F15B23',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  selectorText: { color: '#fff', fontWeight: '600' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  detailLabel: { fontSize: 13, color: '#666' },
  progressContainer: { height: 8, borderRadius: 4, backgroundColor: '#eee', overflow: 'hidden' },
  percent: { fontSize: 12, color: '#999', marginTop: 4 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 20 },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quickCard: {
    width: '48%',
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  quickText: { marginTop: 6, fontSize: 13, color: '#333' },
  summaryCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    padding: 16,
    marginTop: 10,
  },
  summaryLabel: { color: '#666' },
  summaryValue: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  iconContainerPurple: {
    backgroundColor: '#A78BFA',
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  iconContainerGreen: {
    backgroundColor: '#22C55E',
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  iconContainerRed: {
    backgroundColor: '#F87171',
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  iconContainerGreenLighter: {
    backgroundColor: '#10B981',
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: { alignItems: 'center' },
  navText: { color: 'green', fontSize: 12, marginTop: 3 },
  navTextInactive: { color: 'gray', fontSize: 12, marginTop: 3 },
});
        