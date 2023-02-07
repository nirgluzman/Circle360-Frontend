/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Signup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="932px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Signup")}
      {...rest}
    >
      <View
        width="350px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 23px - -353px)"
        left="calc(50% - 175px - 1px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AppleSignin")}
      >
        <Button
          width="350px"
          position="absolute"
          borderRadius="12px"
          top="2px"
          left="0px"
          backgroundColor="rgba(239,240,240,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Sign in with Apple"
          {...getOverrideProps(overrides, "AppleSigninButton")}
        ></Button>
        <Image
          width="30px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8px"
          left="16px"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image36943245")}
        ></Image>
      </View>
      <View
        width="350px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 23px - -294px)"
        left="calc(50% - 175px - 1px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "GoogleSignin")}
      >
        <Button
          width="350px"
          position="absolute"
          borderRadius="12px"
          top="0px"
          left="0px"
          backgroundColor="rgba(239,240,240,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Sign in with Google"
          {...getOverrideProps(overrides, "GoogleSigninButton")}
        ></Button>
        <Image
          width="30px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8px"
          left="16px"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image36943248")}
        ></Image>
      </View>
      <View
        width="350px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 12px - -199px)"
        left="calc(50% - 175px - 1px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Divider37222786")}
      >
        <Divider
          width="150px"
          position="absolute"
          top="50%"
          bottom="45.83%"
          left="calc(50% - 75px - -100px)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider36943251")}
        ></Divider>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="46%"
          right="47.14%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="OR"
          {...getOverrideProps(overrides, "OR")}
        ></Text>
        <Divider
          width="150px"
          position="absolute"
          top="50%"
          bottom="45.83%"
          left="calc(50% - 75px - 100px)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider36943249")}
        ></Divider>
      </View>
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="547px"
        left="39px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="SIGN UP"
        {...getOverrideProps(overrides, "SignupButton")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="348px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="52.25%"
        bottom="43.24%"
        left="9.3%"
        right="9.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="By selecting Sign up below, you agree to our Terms of Service & Privacy Policy. "
        {...getOverrideProps(
          overrides,
          "By selecting Sign up below, you agree to our Terms of Service & Privacy Policy."
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="600"
        color="rgba(242,78,30,1)"
        lineHeight="18px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="362px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="372px"
        left="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Must be alphanumeric, minimum 8 characters, contains at least one lower case, one upper case, one number and one special character."
        {...getOverrideProps(
          overrides,
          "Must be alphanumeric, minimum 8 characters, contains at least one lower case, one upper case, one number and one special character."
        )}
      ></Text>
      <TextField
        placeholder="Password"
        position="absolute"
        top="321px"
        left="40px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "PasswordTextField")}
      ></TextField>
      <TextField
        placeholder="Email"
        position="absolute"
        top="266px"
        left="40px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "EmailTextField")}
      ></TextField>
      <TextField
        placeholder="Nickname"
        position="absolute"
        top="213px"
        left="40px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "NicknameTextField")}
      ></TextField>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="350px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="16.74%"
        bottom="78.76%"
        left="9.07%"
        right="9.53%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Looks like you don’t have an account. Let’s create a new one for you."
        {...getOverrideProps(
          overrides,
          "Looks like you don\u2019t have an account. Let\u2019s create a new one for you."
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="13.52%"
        bottom="83.26%"
        left="9.07%"
        right="71.86%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="SIGN UP"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="84px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43px"
        left="40px"
        {...getOverrideProps(overrides, "BackToSignin")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "BackIcon")}
        >
          <Icon
            width="18px"
            height="15px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 15 }}
            paths={[
              {
                d: "M7 4L7 0L0 7L7 14L7 9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20.83%"
            bottom="16.67%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="33px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign in"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </View>
      <Image
        width="60px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        right="40px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Logo")}
      ></Image>
    </View>
  );
}
