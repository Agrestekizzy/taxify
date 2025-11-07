import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker"; // npm install @react-native-picker/picker

const TaxCalculatorScreen = () => {
  const navigation = useNavigation();

  const [month, setMonth] = useState("Select");
  const [year, setYear] = useState("2025");
  const [revenue, setRevenue] = useState("");

  const handleCalculate = () => {
    if (!revenue) {
      alert("Please enter your revenue first.");
      return;
    }

    // Simple example calculation
    const rate = 0.2;
    const payable = revenue * rate;

    navigation.navigate("TaxComplete", {
      totalIncome: Number(revenue),
      taxPayable: payable,
      taxRate: rate,
      taxBand: "Small Business CIT",
      month: `${month} ${year}`,
    });
  };

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

        {/* Enter Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Enter Details</Text>

          <View style={styles.dropdown}>
            <Picker
              selectedValue={month}
              onValueChange={(value) => setMonth(value)}
            >
              <Picker.Item label="Month" value="Month" />
              <Picker.Item label="January" value="January" />
              <Picker.Item label="February" value="February" />
              <Picker.Item label="March" value="March" />
              <Picker.Item label="April" value="April" />
              <Picker.Item label="May" value="May" />
              <Picker.Item label="June" value="June" />
              <Picker.Item label="July" value="July" />
              <Picker.Item label="August" value="August" />
              <Picker.Item label="September" value="September" />
              <Picker.Item label="October" value="October" />
              <Picker.Item label="November" value="November" />
              <Picker.Item label="December" value="December" />
            </Picker>
          </View>

          <View style={styles.dropdown}>
            <Picker
              selectedValue={year}
              onValueChange={(value) => setYear(value)}
            >
              <Picker.Item label="2025" value="2025" />
              <Picker.Item label="2024" value="2024" />
              <Picker.Item label="2023" value="2023" />
            </Picker>
          </View>

          <Text style={styles.inputLabel}>Annual Revenue (₦)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter amount"
            value={revenue}
            onChangeText={setRevenue}
          />

          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Ionicons name="calculator-outline" size={18} color="#fff" />
            <Text style={styles.calculateButtonText}>Calculate</Text>
          </TouchableOpacity>
        </View>

        {/* Tax Breakdown */}
        <View style={styles.breakdownCard}>
          <Text style={styles.sectionTitle}>Tax Breakdown</Text>
          <View style={styles.breakdownContent}>
            <Ionicons name="calculator-outline" size={40} color="#999" />
            <Text style={styles.breakdownText}>
              Enter your income and tap calculate to view your tax breakdown.
            </Text>
          </View>
        </View>

        {/* CIT Rates */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Nigerian CIT Rates</Text>
          <Text style={styles.infoText}>
            • Small Business (Revenue below ₦25M):{" "}
            <Text style={{ color: "#1E7D32" }}>20%</Text>{"\n"}
            • Medium/Large Business:{" "}
            <Text style={{ color: "#C62828" }}>30% CIT</Text>
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={22} color="#333" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="calculator-outline" size={22} color="#2E7D32" />
          <Text style={[styles.navText, { color: "#2E7D32" }]}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="time-outline" size={22} color="#333" />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={22} color="#333" />
          <Text style={styles.navText}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#333" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TaxCalculatorScreen;


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
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: "700",
    marginBottom: 10,
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: "#FF7F32",
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
  },
  inputLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  calculateButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A5D6A7",
    paddingVertical: 12,
    borderRadius: 8,
  },
  calculateButtonText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 6,
  },
  breakdownCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  breakdownContent: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  breakdownText: {
    color: "#777",
    fontSize: 13,
    textAlign: "center",
    marginTop: 6,
  },
  infoCard: {
    backgroundColor: "#FCEAEA",
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  infoTitle: {
    fontWeight: "700",
    marginBottom: 6,
    fontSize: 15,
  },
  infoText: {
    fontSize: 13,
    color: "#333",
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
  },
  navItemActive: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 2,
  },
});


