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
      height="320px"
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
        top="calc(50% - 23px - -103px)"
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
          height="14.91px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.32568359375,
            height: 14.90673828125,
          }}
          paths={[
            {
              d: "M6.34884 3.97516L6.34884 0L0 6.95652L6.34884 13.913L6.34884 9.83851C10.8837 9.83851 14.0581 11.4286 16.3256 14.9068C15.4186 9.93789 12.6977 4.96894 6.34884 3.97516Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20.06%"
          bottom="17.83%"
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
      <View
        padding="0px 0px 0px 0px"
        width="261px"
        height="49.73px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="168px"
        left="62px"
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
          height="43.73px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="12.07%"
          bottom="0%"
          left="0%"
          right="16.95%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Make this group Public"
          {...getOverrideProps(overrides, "GroupName")}
        ></Text>
        <SwitchField
          label="Off"
          position="absolute"
          top="0px"
          left="209px"
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
        height="44px"
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
    </View>
  );
}
