/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function GroupCode(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="400px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "GroupCode")}
      {...rest}
    >
      <Image
        width="51.28%"
        height="50%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="39.75%"
        bottom="10.25%"
        left="24.36%"
        right="24.36%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "QRCodeImage")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="72px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="219.49px"
        height="75.78px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="17.91%"
        bottom="63.15%"
        left="21.79%"
        right="21.93%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ABC123"
        {...getOverrideProps(overrides, "InvitationCode")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="21px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="296px"
        height="26.09px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="8.39%"
        bottom="85.09%"
        left="12.05%"
        right="12.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Here is your invitation code:"
        {...getOverrideProps(overrides, "Here is your invitation code:")}
      ></Text>
    </View>
  );
}
