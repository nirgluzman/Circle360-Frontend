/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function JoinCircle(props) {
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
      {...getOverrideProps(overrides, "JoinCircle")}
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
        top="calc(50% - 50px - 28px)"
        left="calc(50% - 175px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Title38892769")}
      >
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
          width="350px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="90%"
          bottom="-11%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="If you have an invite code, please type it here:"
          {...getOverrideProps(
            overrides,
            "If you have an invite code, please type it here:"
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
          width="161px"
          height="44px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="56%"
          left="27.14%"
          right="26.86%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Join Circle"
          {...getOverrideProps(overrides, "Title36943866")}
        ></Text>
      </View>
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="25px"
        left="25px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BackToMyCircles")}
      >
        <Icon
          width="18px"
          height="15px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 15 }}
          paths={[
            {
              d: "M7 4L7 0L0 7L7 14L7 9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="My Circles"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </Flex>
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
    </View>
  );
}
