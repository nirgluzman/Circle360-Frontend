import logo from "../images/logo.png";
//import DashboardPage from "./DashboardPage";

import {
  Authenticator,
  useAuthenticator,
  useTheme,
  View,
  Image,
  Heading,
  Button,
} from "@aws-amplify/ui-react";
import DashboardPage from "./DashboardPage";

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image width="30%" height="30%" alt="Circle360 logo" src={logo} />
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={5}
        >
          Please sign in to connect with your circle.
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            onClick={toResetPassword}
            size="small"
            variation="link"
            color="red"
          >
            Forgot your password?
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={5}
        >
          Looks like you don’t have an account. Let’s create a new one for you.
        </Heading>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Email verification code
        </Heading>
      );
    },
  },
  // Time-based One-time Password
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Email verification code
        </Heading>
      );
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Email verification code
        </Heading>
      );
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          textAlign="center"
        >
          Reset password
        </Heading>
      );
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter new password
        </Heading>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      labelHidden: true,
      placeholder: "Enter your email",
      isRequired: true,
      order: 1,
    },
    password: {
      labelHidden: true,
      placeholder: "Enter your Password",
      isRequired: true,
      order: 2,
    },
  },
  signUp: {
    nickname: {
      labelHidden: true,
      placeholder: "Enter your Nickname",
      isRequired: true,
      order: 1,
    },
    email: {
      labelHidden: true,
      placeholder: "Enter your Email",
      isRequired: true,
      order: 2,
    },
    password: {
      labelHidden: true,
      placeholder: "Enter your Password",
      isRequired: true,
      order: 3,
    },
    confirm_password: {
      labelHidden: true,
      placeholder: "Confirm Password",
      isRequired: true,
      order: 4,
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: true,
      placeholder: "Enter your Password",
      isRequired: true,
    },
  },
  resetPassword: {
    username: {
      labelHidden: true,
      placeholder: "Enter your Email",
      isRequired: true,
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: true,
      placeholder: "Enter your Email verification code",
      isRequired: true,
    },
    confirm_password: {
      labelHidden: true,
      placeholder: "Enter your Password",
      isRequired: true,
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      labelHidden: true,
      placeholder: "Enter your Email verification code",
      isRequired: true,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      labelHidden: true,
      placeholder: "Enter your Email verification code",
      isRequired: true,
    },
  },
};

// Lowercase the username and the email attributes during signUp.
// https://ui.docs.amplify.aws/react/connected-components/authenticator/customization
// const services = {
//   async handleSignUp(formData) {
//     console.log(formData);
//     let { username, password, attributes } = formData;
//     // custom username

//     username = username.toLowerCase();
//     attributes.email = attributes.email.toLowerCase();
//     return Auth.signUp({
//       username,
//       password,
//       attributes,
//       autoSignIn: {
//         enabled: true,
//       },
//     });
//   },
// };

export default function AuthPage() {
  const { authStatus } = useAuthenticator((context) => [context.route]);

  // Use the value of route to decide which page to render
  return authStatus !== "authenticated" ? (
    <Authenticator
      initialState="signIn"
      // services={services} // override the call to signUp
      components={components}
      formFields={formFields}
      socialProviders={["google"]}
    />
  ) : (
    <DashboardPage />
  );
}
