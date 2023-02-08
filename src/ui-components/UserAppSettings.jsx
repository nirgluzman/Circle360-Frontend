/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Icon,
  Image,
  SliderField,
  SwitchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function UserAppSettings(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="844px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UserAppSettings")}
      {...rest}
    >
      <View
        width="350px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="430px"
        left="18px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "UpdateFrequency")}
      >
        <View
          width="350px"
          height="100px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Rectangle 116437133117")}
        ></View>
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
          width="309px"
          height="52px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="41%"
          bottom="7%"
          left="5.71%"
          right="6%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="How often do you want to receive updates on your circles."
          {...getOverrideProps(
            overrides,
            "How often do you want to receive updates on your circles."
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
          width="270px"
          height="85.71px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="7%"
          bottom="7.29%"
          left="5.71%"
          right="17.14%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Update frequency"
          {...getOverrideProps(overrides, "Title37133120")}
        ></Text>
      </View>
      <View
        width="350px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 50px - 72px)"
        left="calc(50% - 175px - 2px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Incognito")}
      >
        <View
          width="350px"
          height="100px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Rectangle 116437133111")}
        ></View>
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
          width="240px"
          height="26.25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="41%"
          bottom="32.75%"
          left="5.71%"
          right="25.71%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Make me not visible in all my circles."
          {...getOverrideProps(
            overrides,
            "Make me not visible in all my circles."
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
          width="248px"
          height="86px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 43px - 0px)"
          left="calc(50% - 124px - 31px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Incognito"
          {...getOverrideProps(overrides, "Title37133114")}
        ></Text>
        <View
          width="52px"
          height="41px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 20.5px - -10.5px)"
          left="calc(50% - 26px - -149px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <SwitchField
            label="Off"
            position="absolute"
            top="0px"
            left="-7px"
            size="default"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "IncognitoSwitchField")}
          ></SwitchField>
        </View>
      </View>
      <View
        width="350px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="170px"
        left="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PushNotifications")}
      >
        <View
          width="350px"
          height="100px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Rectangle 116437133106")}
        ></View>
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
          width="244px"
          height="26.25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="40%"
          bottom="33.75%"
          left="5.71%"
          right="24.57%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Allow app to send push notifications."
          {...getOverrideProps(
            overrides,
            "Allow app to send push notifications."
          )}
        ></Text>
        <View
          width="330px"
          height="88px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 44px - 0px)"
          left="calc(50% - 165px - -10px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 420")}
        >
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
            width="248px"
            height="88px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="24.85%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Push notifications"
            {...getOverrideProps(overrides, "Title37133109")}
          ></Text>
          <SwitchField
            label="Off"
            position="absolute"
            top="34px"
            left="278px"
            size="default"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "PushSwitchField")}
          ></SwitchField>
        </View>
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
        height="39.85px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9.72%"
        bottom="85.56%"
        left="10%"
        right="10%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="App Settings"
        {...getOverrideProps(overrides, "Title37133091")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="83px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        left="25px"
        {...getOverrideProps(overrides, "BackToUserSettings")}
      >
        <Icon
          width="16.33px"
          height="13.58px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.32568359375,
            height: 13.583740234375,
          }}
          paths={[
            {
              d: "M6.34884 3.62232L6.34884 0L0 6.33906L6.34884 12.6781L6.34884 8.96524C10.8837 8.96524 14.0581 10.4142 16.3256 13.5837C15.4186 9.05579 12.6977 4.5279 6.34884 3.62232Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1.95%"
          bottom="41.45%"
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
          top="0px"
          left="34px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Profile"
          {...getOverrideProps(overrides, "Text37133095")}
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
      <SliderField
        defaultValue="1"
        position="absolute"
        top="550px"
        left="55px"
        label=""
        isDisabled={false}
        labelHidden={false}
        isValueHidden={false}
        size="large"
        {...getOverrideProps(overrides, "FrequencySliderField")}
      ></SliderField>
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
        top="553px"
        left="341px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Min"
        {...getOverrideProps(overrides, "Text39042843")}
      ></Text>
    </View>
  );
}
