import { useRef, useState } from "react";
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

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const passwordRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "At least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1100));
      Alert.alert("Signed in", `Welcome back, ${email}`);
    } catch (e) {
      Alert.alert("Sign in failed", "Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo at the very top */}
      <Image
        source={require("../assets/images/logo.svg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Text style={[styles.title, { color: COLORS.primary }]}>
            Hi Welcome back, you've been missed. Login to your account.
          </Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(t) => setEmail(t)}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            style={[styles.input, errors.email && styles.inputError]}
            accessible
            accessibilityLabel="Email"
          />
          {errors.email ? (
            <Text style={styles.error}>{errors.email}</Text>
          ) : null}

          <Text style={[styles.label, { marginTop: 16 }]}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              ref={passwordRef}
              value={password}
              onChangeText={(t) => setPassword(t)}
              placeholder="••••••••"
              secureTextEntry={secure}
              returnKeyType="done"
              onSubmitEditing={handleSignIn}
              style={[
                styles.input,
                styles.passwordInput,
                errors.password && styles.inputError,
              ]}
              accessible
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

          <TouchableOpacity
            style={styles.forgot}
            onPress={() => {
              // navigation.navigate("ForgotPassword")
              Alert.alert("Forgot password", "Password reset flow goes here");
            }}
          >
            <Text style={[styles.forgotText, { color: "#F76D1B" }]}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleSignIn}
            disabled={loading}
            accessibilityLabel="Sign in"
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={[styles.buttonText, { color: COLORS.primary }]}>
                Sign In
              </Text>
            )}
          </TouchableOpacity>

          {/* SUW graphic under Sign In button */}
          <Image
            source={require("../assets/icons/SUW.svg")}
            style={styles.suw}
            resizeMode="contain"
          />

          {/* Social icons row: Apple, Google (G), Instagram */}
          <View style={styles.socialRow}>
            <TouchableOpacity accessibilityLabel="Sign in with Apple">
              <Image
                source={require("../assets/icons/apple.svg")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity accessibilityLabel="Sign in with Google">
              <Image
                source={require("../assets/icons/G.svg")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity accessibilityLabel="Sign in with Instagram">
              <Image
                source={require("../assets/icons/Insta.svg")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                // navigate to SignUpIndividual screen
                navigation.navigate("SignUpIndividual");
              }}
            >
              <Text style={[styles.link]}> Sign Up</Text>
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
  logo: {
    width: 140,
    height: 48,
    alignSelf: "center",
    marginTop: 28,
    marginBottom: 18,
  },
  eye: { width: 22, height: 22 },
  suw: { width: 320, height: 56, alignSelf: "center", marginTop: 18 },
  socialRow: { flexDirection: "row", justifyContent: "center", marginTop: 12 },
  socialIcon: { width: 56, height: 48, marginHorizontal: 10 },
  header: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: "700", color: COLORS.text },
  subtitle: { fontSize: 14, color: COLORS.muted, marginTop: 6 },
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
  showText: { color: COLORS.primary, fontWeight: "600" },
  forgot: { alignSelf: "flex-end", marginTop: 8 },
  forgotText: { color: COLORS.muted, fontSize: 13 },
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
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 14 },
  footerText: { color: COLORS.muted },
  link: { color: COLORS.primary, fontWeight: "700" },
});
