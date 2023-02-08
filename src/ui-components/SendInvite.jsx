/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SendInvite(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="270px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SendInvite")}
      {...rest}
    >
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
        height="46.41px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30.37%"
        bottom="52.44%"
        left="10%"
        right="10%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Invite a New Member"
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
        right="25px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "ProfileImage")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="114px"
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
        <Icon
          width="16.33px"
          height="12.58px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.32568359375,
            height: 12.57763671875,
          }}
          paths={[
            {
              d: "M6.34884 3.35404L6.34884 0L0 5.86957L6.34884 11.7391L6.34884 8.30124C10.8837 8.30124 14.0581 9.64286 16.3256 12.5776C15.4186 8.38509 12.6977 4.19255 6.34884 3.35404Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.65%"
          bottom="46.95%"
          left="0%"
          right="85.68%"
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
          top="0px"
          left="34px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="My Circles"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </View>
    </View>
  );
}
