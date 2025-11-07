import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const TaxCalculationCompleteScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { totalIncome, taxPayable, taxRate, taxBand, month } = route.params || {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} color="#000" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Tax Calculator</Text>
            <Text style={styles.headerSubtitle}>
              Calculate your tax obligations based on revenue
            </Text>
          </View>
        </View>

        {/* Success Card */}
        <View style={styles.successCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={32} color="#2E7D32" />
          </View>
          <Text style={styles.title}>Tax Calculation Complete</Text>
          <Text style={styles.date}>{month || "September 2025"}</Text>
        </View>

        {/* Results */}
        <View style={styles.resultCard}>
          <View style={styles.resultRow}>
            <Text style={styles.label}>Total Income</Text>
            <Text style={styles.valueGreen}>₦{totalIncome?.toLocaleString()}</Text>
          </View>

          <View style={[styles.resultRow, { backgroundColor: "#E8EAF6" }]}>
            <Text style={styles.label}>Effective Tax Rate</Text>
            <Text style={styles.valueBlue}>{(taxRate * 100).toFixed(2)}%</Text>
          </View>

          <Text style={[styles.taxBandLabel, { marginTop: 10 }]}>Tax Bands</Text>
          <Text style={styles.taxBandText}>
            {taxBand} <Text style={{ color: "#000" }}>₦{(taxPayable / taxRate).toLocaleString()}</Text>
          </Text>
          <Text style={styles.taxBandRate}>{(taxRate * 100).toFixed(0)}%</Text>
        </View>

        <View style={styles.resultCard}>
          <View style={styles.resultRow}>
            <Text style={styles.label}>Total Income</Text>
            <Text style={styles.valueGreen}>₦{totalIncome?.toLocaleString()}</Text>
          </View>

          <View style={[styles.resultRow, { backgroundColor: "#FFEBEE" }]}>
            <Text style={styles.label}>Tax Payable</Text>
            <Text style={styles.valueRed}>₦{taxPayable?.toLocaleString()}</Text>
          </View>

          <View style={[styles.resultRow, { backgroundColor: "#E8EAF6" }]}>
            <Text style={styles.label}>Effective Tax Rate</Text>
            <Text style={styles.valueBlue}>{(taxRate * 100).toFixed(2)}%</Text>
          </View>

          <Text style={[styles.taxBandLabel, { marginTop: 10 }]}>Tax Bands</Text>
          <Text style={styles.taxBandText}>
            {taxBand} <Text style={{ color: "#000" }}>₦{(taxPayable / taxRate).toLocaleString()}</Text>
          </Text>
          <Text style={styles.taxBandRate}>{(taxRate * 100).toFixed(0)}%</Text>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save to Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calculateAnother}
          onPress={() => navigation.navigate("TaxCalculator")}
        >
          <Text style={styles.calculateAnotherText}>Calculate Another</Text>
        </TouchableOpacity>

        {/* Important Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Important Information</Text>
          <Text style={styles.infoText}>• Based on current FIRS tax rates</Text>
          <Text style={styles.infoText}>
            • Save this record to track payment status
          </Text>
          <Text style={styles.infoText}>
            • You can mark it as paid once completed
          </Text>
          <Text style={styles.infoText}>
            • Enable reminders in settings to get payment notifications
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaxCalculationCompleteScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E9F3E9",
  },
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
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
  successCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#2E7D32",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  date: {
    color: "#666",
    marginTop: 4,
  },
  resultCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  resultRow: {
    backgroundColor: "#E0F2E9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#333",
    fontWeight: "500",
  },
  valueGreen: {
    color: "#1B5E20",
    fontWeight: "700",
  },
  valueRed: {
    color: "#C62828",
    fontWeight: "700",
  },
  valueBlue: {
    color: "#303F9F",
    fontWeight: "700",
  },
  taxBandLabel: {
    fontWeight: "600",
    fontSize: 13,
    color: "#333",
  },
  taxBandText: {
    fontSize: 13,
    color: "#555",
  },
  taxBandRate: {
    fontSize: 13,
    color: "#1B5E20",
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
    fontWeight: "700",
  },
  calculateAnother: {
    borderWidth: 1,
    borderColor: "#2E7D32",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  calculateAnotherText: {
    color: "#2E7D32",
    fontWeight: "600",
  },
  infoBox: {
    backgroundColor: "#FCEAEA",
    padding: 16,
    borderRadius: 10,
  },
  infoTitle: {
    fontWeight: "700",
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    color: "#444",
    lineHeight: 20,
  },
});
