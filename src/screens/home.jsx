import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons (expo install @expo/vector-icons)

export default function TaxCalculatorComplete() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Tax Calculator</Text>
            <Text style={styles.headerSubtitle}>
              Calculate your tax obligations based on revenue
            </Text>
          </View>
        </View>

        {/* Success Icon and Title */}
        <View style={styles.successContainer}>
          <View style={styles.successIcon}>
            <Ionicons name="checkmark" size={36} color="#1E7D32" />
          </View>
          <Text style={styles.successTitle}>Tax Calculation Complete</Text>
          <Text style={styles.successSubtitle}>September 2025</Text>
        </View>

        {/* Tax Summary Cards */}
        <View style={styles.summaryContainer}>
          <View style={[styles.card, styles.incomeCard]}>
            <Text style={styles.cardLabel}>Total Income</Text>
            <Text style={styles.incomeText}>₦500,000</Text>
          </View>

          <View style={[styles.card, styles.taxRateCard]}>
            <Text style={styles.cardLabel}>Effective Tax Rate</Text>
            <Text style={styles.taxRateText}>20.00%</Text>
          </View>

          <View style={styles.taxBands}>
            <Text style={styles.taxBandsLabel}>Tax Bands</Text>
            <View style={styles.taxBandRow}>
              <Text style={styles.taxBandName}>Small Business CIT</Text>
              <Text style={styles.taxBandAmount}>₦100,000</Text>
            </View>
            <Text style={styles.taxBandPercent}>20%</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Second Result Section */}
          <View style={[styles.card, styles.incomeCard]}>
            <Text style={styles.cardLabel}>Total Income</Text>
            <Text style={styles.incomeText}>₦500,000</Text>
          </View>

          <View style={[styles.card, styles.taxPayableCard]}>
            <Text style={styles.cardLabel}>Tax Payable</Text>
            <Text style={styles.taxPayableText}>₦100,000</Text>
          </View>

          <View style={[styles.card, styles.taxRateCard]}>
            <Text style={styles.cardLabel}>Effective Tax Rate</Text>
            <Text style={styles.taxRateText}>20.00%</Text>
          </View>

          <View style={styles.taxBands}>
            <Text style={styles.taxBandsLabel}>Tax Bands</Text>
            <View style={styles.taxBandRow}>
              <Text style={styles.taxBandName}>Small Business CIT</Text>
              <Text style={styles.taxBandAmount}>₦100,000</Text>
            </View>
            <Text style={styles.taxBandPercent}>20%</Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save To Tracker</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.calculateButton}>
            <Text style={styles.calculateButtonText}>Calculate Another</Text>
          </TouchableOpacity>
        </View>

        {/* Important Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Important Information</Text>
          <Text style={styles.infoText}>
            • This calculation is based on current FIRS tax rates{"\n"}
            • Save this record to track payment status{"\n"}
            • You can mark it as paid once payment is completed{"\n"}
            • Enable reminders in settings to get payment notifications
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation (Static Preview) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={22} color="#333" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="calculator-outline" size={22} color="#2E7D32" />
          <Text style={[styles.navLabel, { color: "#2E7D32" }]}>
            Calculate
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="time-outline" size={22} color="#333" />
          <Text style={styles.navLabel}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={22} color="#333" />
          <Text style={styles.navLabel}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#333" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E9F3E9",
  },
  container: {
    padding: 16,
    paddingBottom: 120,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  backButton: {
    marginRight: 12,
    marginTop: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#666",
  },
  successContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  successIcon: {
    backgroundColor: "#C8E6C9",
    borderRadius: 50,
    padding: 16,
    marginBottom: 8,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  successSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  summaryContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 16,
  },
  card: {
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  incomeCard: {
    backgroundColor: "#D0E8D0",
  },
  taxRateCard: {
    backgroundColor: "#E3E5FB",
  },
  taxPayableCard: {
    backgroundColor: "#FADCDC",
  },
  cardLabel: {
    fontSize: 14,
    color: "#333",
  },
  incomeText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E7D32",
  },
  taxRateText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#304FFE",
  },
  taxPayableText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#C62828",
  },
  taxBands: {
    marginTop: 6,
  },
  taxBandsLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  taxBandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taxBandName: {
    color: "#444",
  },
  taxBandAmount: {
    fontWeight: "600",
    color: "#000",
  },
  taxBandPercent: {
    color: "#1E7D32",
    fontWeight: "600",
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  calculateButton: {
    borderWidth: 1,
    borderColor: "#2E7D32",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  calculateButtonText: {
    color: "#2E7D32",
    fontSize: 16,
    fontWeight: "600",
  },
  infoBox: {
    backgroundColor: "#FCEAEA",
    borderRadius: 10,
    padding: 14,
  },
  infoTitle: {
    fontWeight: "700",
    marginBottom: 6,
    color: "#000",
  },
  infoText: {
    color: "#333",
    fontSize: 13,
    lineHeight: 20,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navItemActive: {
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#333",
    marginTop: 2,
  },
});
