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
  TextField,
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
      <Icon
        width="21px"
        height="24px"
        viewBox={{ minX: 0, minY: 0, width: 21, height: 24 }}
        paths={[
          {
            d: "M0 19.0007L0 24L4.37441 24L17.276 9.25534L12.9016 4.25601L0 19.0007ZM20.6589 3.50945L17.9292 0.389872C17.8213 0.266284 17.6931 0.168234 17.552 0.101335C17.4109 0.0344353 17.2596 5.92039e-16 17.1068 0C16.9541 0 16.8028 0.0344353 16.6617 0.101335C16.5206 0.168234 16.3924 0.266284 16.2845 0.389872L14.1497 2.82954L18.5242 7.82886L20.6589 5.38919C20.767 5.26586 20.8528 5.11936 20.9113 4.95809C20.9699 4.79681 21 4.62392 21 4.44932C21 4.27472 20.9699 4.10183 20.9113 3.94056C20.8528 3.77928 20.767 3.63278 20.6589 3.50945L20.6589 3.50945Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15%"
        bottom="77.5%"
        left="47.44%"
        right="47.18%"
        {...getOverrideProps(overrides, "EditIcon")}
      ></Icon>
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
      <TextField
        placeholder="Group"
        width="192px"
        height="46px"
        position="absolute"
        top="calc(50% - 23px - 63px)"
        left="calc(50% - 96px - 1px)"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "GroupField")}
      ></TextField>
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
    </View>
  );
}
