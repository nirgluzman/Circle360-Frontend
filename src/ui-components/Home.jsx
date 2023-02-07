/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function Home(props) {
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
      {...getOverrideProps(overrides, "Home")}
      {...rest}
    >
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="calc(50% - 23px - -353px)"
        left="calc(50% - 175px - 0px)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="GET STARTED"
        {...getOverrideProps(overrides, "GetStartedButton")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="36px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="366px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 36px - -48px)"
        left="calc(50% - 183px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="A new way to communicate with your friends"
        {...getOverrideProps(
          overrides,
          "A new way to communicate with your friends"
        )}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 36px - 89px)"
        left="calc(50% - 119px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Circle 360"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Image
        width="210px"
        height="210px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 105px - 265px)"
        left="calc(50% - 105px - 0px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Logo")}
      ></Image>
    </View>
  );
}
