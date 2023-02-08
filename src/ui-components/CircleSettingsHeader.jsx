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
  Icon,
  Image,
  SwitchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function CircleSettingsHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="350px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CircleSettingsHeader")}
      {...rest}
    >
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="calc(50% - 23px - -122px)"
        left="calc(50% - 175px - 0px)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="INVITE NEW MEMBER"
        {...getOverrideProps(overrides, "InviteNewMemberButton")}
      ></Button>
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
          height="16.3px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.32568359375,
            height: 16.304443359375,
          }}
          paths={[
            {
              d: "M6.34884 4.34783L6.34884 0L0 7.6087L6.34884 15.2174L6.34884 10.7609C10.8837 10.7609 14.0581 12.5 16.3256 16.3043C15.4186 10.8696 12.6977 5.43478 6.34884 4.34783Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="31.7%"
          bottom="0.36%"
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
        width="245px"
        height="53.34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="133px"
        left="58px"
        {...getOverrideProps(overrides, "Group 28")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="216.77px"
          height="47.83px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.33%"
          bottom="0%"
          left="0%"
          right="11.52%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Make this group Public"
          {...getOverrideProps(overrides, "GroupName")}
        ></Text>
        <SwitchField
          label="Off"
          position="absolute"
          top="0px"
          left="193px"
          size="default"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "PushSwitchField")}
        ></SwitchField>
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
        width="161px"
        height="48.13px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="24.06%"
        bottom="62.19%"
        left="29.23%"
        right="29.49%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Code"
        {...getOverrideProps(overrides, "Group")}
      ></Text>
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
        top="50%"
        bottom="28.35%"
        left="21.79%"
        right="21.93%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ABC123"
        {...getOverrideProps(overrides, "InvitationCode")}
      ></Text>
    </View>
  );
}
