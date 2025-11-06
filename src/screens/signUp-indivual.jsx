import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUpIndividual({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [incomeRange, setIncomeRange] = useState("");
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [taxId, setTaxId] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [secure, setSecure] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const emailRef = useRef(null);
  const taxRef = useRef(null);
  const passRef = useRef(null);
  const confirmRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "At least 6 characters";
    if (!confirm) newErrors.confirm = "Please confirm your password";
    else if (password !== confirm) newErrors.confirm = "Passwords do not match";
    if (!agreed)
      newErrors.agreed = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      // placeholder for real signup logic
      await new Promise((res) => setTimeout(res, 1000));
      Alert.alert("Account created", `Welcome, ${name}`);
      // optionally navigate
      // navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert("Sign up failed", "Please try again");
    } finally {
      setLoading(false);
    }
  };

  const incomeOptions = [
    "< $20,000",
    "$20,000 - $50,000",
    "$50,000 - $100,000",
    "> $100,000",
  ];

  return (
    <View style={styles.container}>
      {/* Logo at top */}
      <Image
        source={require("../assets/images/logo.svg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={[styles.headerTitle, { color: COLORS.primary }]}>
          Fill your information below or register with your social accounts.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Jane Doe"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
            style={[styles.input, errors.name && styles.inputError]}
            accessibilityLabel="Full name"
          />
          {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

          <Text style={[styles.label, { marginTop: 12 }]}>Email</Text>
          <TextInput
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => taxRef.current?.focus()}
            style={[styles.input, errors.email && styles.inputError]}
            accessibilityLabel="Email"
          />
          {errors.email ? (
            <Text style={styles.error}>{errors.email}</Text>
          ) : null}

          {/* Annual income dropdown (after email) */}
          <Text style={[styles.label, { marginTop: 12 }]}>
            Annual Income Range
          </Text>
          <TouchableOpacity
            style={[
              styles.dropdownButton,
              styles.input,
              { backgroundColor: "#F76D1B" },
            ]}
            onPress={() => setIncomeOpen((s) => !s)}
            accessibilityLabel="Select Range"
          >
            <Text style={styles.dropdownText}>
              {incomeRange ? incomeRange : "Select range"}
            </Text>
          </TouchableOpacity>
          {incomeOpen ? (
            <View style={styles.dropdownList}>
              {incomeOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  onPress={() => {
                    setIncomeRange(opt);
                    setIncomeOpen(false);
                  }}
                  style={styles.dropdownItem}
                >
                  <Text>{opt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}

          <Text style={[styles.label, { marginTop: 12 }]}>
            Tax Identification Number (TIN) (optional)
          </Text>
          <TextInput
            ref={taxRef}
            value={taxId}
            onChangeText={setTaxId}
            placeholder="123-45-6789"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => passRef.current?.focus()}
            style={styles.input}
            accessibilityLabel="Tax ID"
          />

          <Text style={[styles.label, { marginTop: 12 }]}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              ref={passRef}
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              secureTextEntry={secure}
              returnKeyType="next"
              onSubmitEditing={() => confirmRef.current?.focus()}
              style={[
                styles.input,
                styles.passwordInput,
                errors.password && styles.inputError,
              ]}
              accessibilityLabel="Password"
            />
            <TouchableOpacity
              onPress={() => setSecure((s) => !s)}
              style={styles.showBtn}
              accessibilityLabel={secure ? "Show password" : "Hide password"}
            >
              <Image
                source={require("../assets/icons/eye.svg")}
                style={[styles.eye, { opacity: secure ? 0.6 : 1 }]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          {errors.password ? (
            <Text style={styles.error}>{errors.password}</Text>
          ) : null}

          <Text style={[styles.label, { marginTop: 12 }]}>
            Confirm password
          </Text>
          <TextInput
            ref={confirmRef}
            value={confirm}
            onChangeText={setConfirm}
            placeholder="••••••••"
            secureTextEntry={secure}
            returnKeyType="done"
            onSubmitEditing={handleSignUp}
            style={[styles.input, errors.confirm && styles.inputError]}
            accessibilityLabel="Confirm password"
          />
          {errors.confirm ? (
            <Text style={styles.error}>{errors.confirm}</Text>
          ) : null}

          {/* Agree to terms checkbox */}
          <View style={styles.checkboxRow}>
            <TouchableOpacity
              onPress={() => setAgreed((s) => !s)}
              style={[
                styles.checkboxBox,
                agreed && styles.checkboxChecked,
                { color: "#F76D1B" },
              ]}
              accessibilityLabel="Agree to terms and conditions"
            >
              {agreed ? <Text style={styles.checkboxTick}>✓</Text> : null}
            </TouchableOpacity>
            <Text style={[{ color: "#F76D1B" }, styles.checkboxLabel]}>
              I agree with terms and conditions
            </Text>
          </View>
          {errors.agreed ? (
            <Text style={styles.error}>{errors.agreed}</Text>
          ) : null}

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleSignUp}
            disabled={loading}
            accessibilityLabel="Create account"
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={[styles.buttonText, { color: COLORS.primary }]}>
                Sign Up
              </Text>
            )}
          </TouchableOpacity>

          {/* SUW graphic under Sign Up button */}
          <Image
            source={require("../assets/icons/SUW.svg")}
            style={styles.suw}
            resizeMode="contain"
          />

          {/* Social icons row: Apple, Google (G), Instagram */}
          <View style={styles.socialRow}>
            <TouchableOpacity accessibilityLabel="Sign up with Apple">
              <Image
                source={require("../assets/icons/apple.svg")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity accessibilityLabel="Sign up with Google">
              <Image
                source={require("../assets/icons/G.svg")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity accessibilityLabel="Sign up with Instagram">
              <Image
                source={require("../assets/icons/Insta.svg")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const COLORS = {
  bg: "#f7f8fb",
  primary: "#367E34",
  text: "#0f172a",
  muted: "#6b7280",
  danger: "#dc2626",
  white: "#fff",
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  inner: { flex: 1, padding: 24, justifyContent: "center" },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 16,
  },
  form: {
    backgroundColor: COLORS.white,
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.muted,
    marginBottom: 8,
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: "#e6e9ee",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    color: COLORS.text,
  },
  inputError: { borderColor: COLORS.danger },
  error: { color: COLORS.danger, marginTop: 6, fontSize: 12 },
  passwordRow: { flexDirection: "row", alignItems: "center" },
  passwordInput: { flex: 1 },
  showBtn: { paddingHorizontal: 10, paddingVertical: 6 },
  eye: { width: 22, height: 22 },
  button: {
    marginTop: 18,
    height: 48,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: { opacity: 0.7 },
  buttonText: { color: COLORS.white, fontWeight: "700", fontSize: 16 },
  logo: { width: 140, height: 48, alignSelf: "center", marginBottom: 14 },
  dropdownButton: { justifyContent: "center" },
  dropdownText: { color: COLORS.text },
  dropdownList: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginTop: 6,
    paddingVertical: 6,
  },
  dropdownItem: { paddingVertical: 8, paddingHorizontal: 12 },
  checkboxRow: { flexDirection: "row", alignItems: "center", marginTop: 12 },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkboxTick: { color: "#fff", fontSize: 12, fontWeight: "700" },
  checkboxLabel: { color: COLORS.muted },
  suw: { width: 320, height: 56, alignSelf: "center", marginTop: 18 },
  socialRow: { flexDirection: "row", justifyContent: "center", marginTop: 12 },
  socialIcon: { width: 56, height: 48, marginHorizontal: 10 },
});
