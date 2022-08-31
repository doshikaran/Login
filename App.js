import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Navigation";
import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";

Amplify.configure(config);
const App = () => {
  //Auth.signOut()
  return (
    <SafeAreaView style={styles.root}>
      {/*<SignInScreen /> */}
      {/*<SignUpScreen />*/}
      {/*<EmailConfirmScreen />*/}
      {/*<ForgotPasswordScreen />*/}
      {/*<NewPasswordScreen />*/}
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default withAuthenticator(App);
