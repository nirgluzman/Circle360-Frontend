/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function DashboardHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="320px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DashboardHeader")}
      {...rest}
    >
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="231px"
        left="21px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="JOIN"
        {...getOverrideProps(overrides, "JoinButton")}
      ></Button>
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="160px"
        left="21px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="CREATE NEW"
        {...getOverrideProps(overrides, "CreateNewButton")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="48px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="275px"
        height="43.84px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25.62%"
        bottom="60.68%"
        left="14.87%"
        right="14.62%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Circles"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Image
        width="80px"
        height="80px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        right="20px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "ProfileImage")}
      ></Image>
    </View>
  );
}
