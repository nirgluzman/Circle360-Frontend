/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileLogo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProfileLogo")}
      {...rest}
    >
      <View
        width="390px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SendInvitation")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="113.09px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="25px"
          left="25px"
          {...getOverrideProps(overrides, "BackToMyCircles")}
        >
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
            left="33.09px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="My Circles"
            {...getOverrideProps(overrides, "Text")}
          ></Text>
          <Icon
            width="16.33px"
            height="15px"
            viewBox={{ minX: 0, minY: 0, width: 16.32568359375, height: 15 }}
            paths={[
              {
                d: "M6.34884 4L6.34884 0L0 7L6.34884 14L6.34884 9.9C10.8837 9.9 14.0581 11.5 16.3256 15C15.4186 10 12.6977 5 6.34884 4Z",
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
            left="0%"
            right="85.56%"
            {...getOverrideProps(overrides, "BackIcon")}
          ></Icon>
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
          {...getOverrideProps(overrides, "ProfileImage")}
        ></Image>
      </View>
    </View>
  );
}
