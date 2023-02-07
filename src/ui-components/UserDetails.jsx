/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function UserDetails(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="260px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UserDetails")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="83px"
        height="26.93px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="22.07px"
        left="25px"
        {...getOverrideProps(overrides, "BackToUserSettings")}
      >
        <Icon
          width="16.33px"
          height="11.77px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.32568359375,
            height: 11.7724609375,
          }}
          paths={[
            {
              d: "M6.34884 3.13934L6.34884 0L0 5.49385L6.34884 10.9877L6.34884 7.76987C10.8837 7.76987 14.0581 9.02561 16.3256 11.7725C15.4186 7.84835 12.6977 3.92418 6.34884 3.13934Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="56.28%"
          left="0%"
          right="80.33%"
          {...getOverrideProps(overrides, "BackIcon")}
        ></Icon>
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
          top="2.93px"
          left="34px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Profile"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </View>
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
        width="312px"
        height="34.53px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="31.54%"
        bottom="55.18%"
        left="10%"
        right="10%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Profile Details"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
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
        {...getOverrideProps(overrides, "ProfileImage")}
      ></Image>
    </View>
  );
}
