/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, TextField, View } from "@aws-amplify/ui-react";
export default function UserDetails2(props) {
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
      {...getOverrideProps(overrides, "UserDetails2")}
      {...rest}
    >
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
        width="299px"
        height="19px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="44.31%"
        bottom="53.44%"
        left="12.56%"
        right="10.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Your email address cannot be changed."
        {...getOverrideProps(
          overrides,
          "Your email address cannot be changed."
        )}
      ></Text>
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
        children="Profile Details"
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
        width="330px"
        height="109px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 54.5px - 127.5px)"
        left="calc(50% - 165px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rename")}
      >
        <TextField
          placeholder="Email"
          height="42px"
          position="absolute"
          top="87px"
          left="15px"
          size="default"
          isDisabled={true}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "EmailTextField")}
        ></TextField>
        <TextField
          placeholder="Nickname"
          height="41px"
          position="absolute"
          top="0px"
          left="15px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "NickNameField")}
        ></TextField>
      </View>
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
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </View>
    </View>
  );
}
