import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "@/styles/_join";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
			<View style={styles.container}>
				<View style={styles.iconsection}>
					<Image source={HEROLOGOGREEN} style={{ width: 40, height: 40 }} />
				</View>
				<View style={styles.titleTextGroup}>
					<Text style={styles.titleText}>Sign In</Text>
					<Text style={styles.subText}>Welcome back! Please sign in to continue</Text>
				</View>
				<View style={styles.formGroup}>
					<Text style={styles.formLabel}>Email</Text>
					<TextInput
						style={styles.formControl}
						placeholder="Enter your email"
						keyboardType="email-address"
						autoCapitalize="none"
						value={email}
						onChangeText={setEmail}
					/>
					<Text style={styles.formLabel}>Password</Text>
					<TextInput
						style={styles.formControl}
						placeholder="Enter your password"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
				</View>
				<TouchableOpacity>
					<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.primaryButton}>
					<Text style={styles.buttonText}>Sign In</Text>
				</TouchableOpacity>
				<View style={styles.dividerGroup}>
					<View style={styles.divider} />
					<Text style={styles.dividerText}>or sign in with</Text>
					<View style={styles.divider} />
				</View>
				<View style={styles.secondaryButtonGroup}>
					<TouchableOpacity style={styles.secondaryButton}>
						<Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
						<Text style={styles.secondaryButtonText}>Continue with Google</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.secondaryButton}>
						<Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
						<Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.signupgroup}>
					  <Text style={styles.signupTitleText}>Don&apos;t have an account? </Text>
					<TouchableOpacity>
						<Text style={styles.signupSubTitleText}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}
