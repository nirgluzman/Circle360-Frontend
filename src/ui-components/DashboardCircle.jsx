/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function DashboardCircle(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="390px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 40px 0px 40px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DashboardCircle")}
      {...rest}
    >
      <View
        width="344px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "Circle")}
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
          width="243px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="2px"
          left="13px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Group"
          {...getOverrideProps(overrides, "CircleName")}
        ></Text>
        <View
          width="25px"
          height="25px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.5px"
          left="266px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "CircleConfig")}
        >
          <Icon
            width="25px"
            height="25px"
            viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
            paths={[
              {
                d: "M22.0577 13.724C22.1113 13.3333 22.138 12.9297 22.138 12.5C22.138 12.0833 22.1113 11.6667 22.0443 11.276L24.7617 9.21875C25.0027 9.03646 25.0696 8.6849 24.9224 8.42448L22.3522 4.10156C22.1916 3.8151 21.8569 3.72396 21.5624 3.8151L18.3631 5.0651C17.6938 4.57031 16.9844 4.15365 16.1946 3.84115L15.7127 0.533854C15.6591 0.221354 15.3914 0 15.0701 0L9.92986 0C9.60859 0 9.35425 0.221354 9.30071 0.533854L8.8188 3.84115C8.02902 4.15365 7.30617 4.58333 6.65025 5.0651L3.45095 3.8151C3.15646 3.71094 2.8218 3.8151 2.66117 4.10156L0.104413 8.42448C-0.0562214 8.69792 -0.0026769 9.03646 0.265046 9.21875L2.98244 11.276C2.91551 11.6667 2.86196 12.0964 2.86196 12.5C2.86196 12.9036 2.88873 13.3333 2.95567 13.724L0.238274 15.7813C-0.00267689 15.9635 -0.0696076 16.3151 0.0776402 16.5755L2.64778 20.8984C2.80842 21.1849 3.14307 21.276 3.43757 21.1849L6.63686 19.9349C7.30617 20.4297 8.01563 20.8464 8.80542 21.1589L9.28732 24.4661C9.35425 24.7786 9.60859 25 9.92986 25L15.0701 25C15.3914 25 15.6591 24.7786 15.6993 24.4661L16.1812 21.1589C16.971 20.8464 17.6938 20.4297 18.3498 19.9349L21.549 21.1849C21.8435 21.2891 22.1782 21.1849 22.3388 20.8984L24.909 16.5755C25.0696 16.2891 25.0027 15.9635 24.7483 15.7813L22.0577 13.724ZM12.5 17.1875C9.84954 17.1875 7.68098 15.0781 7.68098 12.5C7.68098 9.92188 9.84954 7.8125 12.5 7.8125C15.1505 7.8125 17.319 9.92188 17.319 12.5C17.319 15.0781 15.1505 17.1875 12.5 17.1875Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "ConfigIcon")}
          ></Icon>
        </View>
        <View
          width="30px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="2px"
          left="301px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "CircleDelete")}
        >
          <Icon
            width="17.5px"
            height="22.5px"
            viewBox={{ minX: 0, minY: 0, width: 17.5, height: 22.5 }}
            paths={[
              {
                d: "M13.75 7.5L13.75 20L3.75 20L3.75 7.5L13.75 7.5ZM11.875 0L5.625 0L4.375 1.25L0 1.25L0 3.75L17.5 3.75L17.5 1.25L13.125 1.25L11.875 0ZM16.25 5L1.25 5L1.25 20C1.25 21.375 2.375 22.5 3.75 22.5L13.75 22.5C15.125 22.5 16.25 21.375 16.25 20L16.25 5Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="20.83%"
            right="20.83%"
            {...getOverrideProps(overrides, "DeleteIcon")}
          ></Icon>
        </View>
      </View>
    </Flex>
  );
}
