/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function UserSettings(props) {
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
      {...getOverrideProps(overrides, "UserSettings")}
      {...rest}
    >
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="calc(50% - 23px - -353px)"
        left="calc(50% - 175px - 0px)"
        backgroundColor="rgba(191,64,64,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="DELETE ACCOUNT"
        {...getOverrideProps(overrides, "DeleteAccountButton")}
      ></Button>
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="calc(50% - 23px - -272px)"
        left="calc(50% - 175px - 0px)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="SIGN OUT"
        {...getOverrideProps(overrides, "SignoutButton")}
      ></Button>
      <View
        width="350px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 23px - -147px)"
        left="calc(50% - 175px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AppSettings")}
      >
        <Button
          width="350px"
          position="absolute"
          borderRadius="12px"
          top="0px"
          left="0px"
          backgroundColor="rgba(239,240,240,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="App settings"
          {...getOverrideProps(overrides, "AppSettingsButton")}
        ></Button>
        <Icon
          width="19.86px"
          height="20.97px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 19.8623046875,
            height: 20.970458984375,
          }}
          paths={[
            {
              d: "M9.93495 7.63008C9.23417 7.63008 8.57792 7.90195 8.08104 8.39883C7.58651 8.8957 7.31229 9.55195 7.31229 10.2527C7.31229 10.9535 7.58651 11.6098 8.08104 12.1066C8.57792 12.6012 9.23417 12.8754 9.93495 12.8754C10.6357 12.8754 11.292 12.6012 11.7889 12.1066C12.2834 11.6098 12.5576 10.9535 12.5576 10.2527C12.5576 9.55195 12.2834 8.8957 11.7889 8.39883C11.5462 8.15427 11.2573 7.96038 10.939 7.82841C10.6208 7.69644 10.2795 7.62902 9.93495 7.63008L9.93495 7.63008ZM19.5982 13.1496L18.0654 11.8395C18.1381 11.3941 18.1756 10.9395 18.1756 10.4871C18.1756 10.0348 18.1381 9.57773 18.0654 9.13477L19.5982 7.82461C19.714 7.72548 19.7969 7.59346 19.8358 7.44609C19.8748 7.29872 19.8679 7.14299 19.8162 6.99961L19.7951 6.93867C19.3733 5.75904 18.7412 4.6656 17.9295 3.71133L17.8873 3.66211C17.7887 3.54622 17.6574 3.46291 17.5105 3.42316C17.3636 3.38341 17.2082 3.38909 17.0646 3.43945L15.1615 4.1168C14.4584 3.54023 13.6756 3.08555 12.8271 2.76914L12.4592 0.779297C12.4314 0.629396 12.3587 0.49149 12.2507 0.383901C12.1427 0.276312 12.0045 0.204133 11.8545 0.176953L11.7912 0.165234C10.5724 -0.0550781 9.28807 -0.0550781 8.06932 0.165234L8.00604 0.176953C7.85603 0.204133 7.71785 0.276312 7.60984 0.383901C7.50183 0.49149 7.42912 0.629396 7.40135 0.779297L7.03104 2.77852C6.19064 3.09744 5.40775 3.55103 4.71307 4.12148L2.79588 3.43945C2.65237 3.38869 2.4968 3.38281 2.34986 3.42258C2.20291 3.46235 2.07155 3.54589 1.97323 3.66211L1.93104 3.71133C1.12079 4.66662 0.488865 5.75978 0.0654166 6.93867L0.0443228 6.99961C-0.0611459 7.29258 0.0255729 7.6207 0.262292 7.82461L1.81385 9.14883C1.7412 9.58945 1.70604 10.0395 1.70604 10.4848C1.70604 10.9348 1.7412 11.3848 1.81385 11.8207L0.266979 13.1449C0.151188 13.244 0.0683145 13.3761 0.029379 13.5234C-0.00955646 13.6708 -0.00270928 13.8265 0.0490103 13.9699L0.0701041 14.0309C0.494323 15.2098 1.1201 16.2996 1.93573 17.2582L1.97792 17.3074C2.07648 17.4233 2.20785 17.5066 2.3547 17.5464C2.50156 17.5861 2.65701 17.5804 2.80057 17.5301L4.71776 16.848C5.4162 17.4223 6.19432 17.877 7.03573 18.191L7.40604 20.1902C7.4338 20.3401 7.50652 20.478 7.61453 20.5856C7.72253 20.6932 7.86072 20.7654 8.01073 20.7926L8.07401 20.8043C9.30475 21.0258 10.5651 21.0258 11.7959 20.8043L11.8592 20.7926C12.0092 20.7654 12.1474 20.6932 12.2554 20.5856C12.3634 20.478 12.4361 20.3401 12.4639 20.1902L12.8318 18.2004C13.6803 17.8816 14.4631 17.4293 15.1662 16.8527L17.0693 17.5301C17.2128 17.5808 17.3684 17.5867 17.5153 17.547C17.6623 17.5072 17.7937 17.4236 17.892 17.3074L17.9342 17.2582C18.7498 16.2949 19.3756 15.2098 19.7998 14.0309L19.8209 13.9699C19.9217 13.6793 19.8349 13.3535 19.5982 13.1496ZM9.93495 14.373C7.65917 14.373 5.81464 12.5285 5.81464 10.2527C5.81464 7.97695 7.65917 6.13242 9.93495 6.13242C12.2107 6.13242 14.0553 7.97695 14.0553 10.2527C14.0553 12.5285 12.2107 14.373 9.93495 14.373Z",
              fill: "rgba(16,16,16,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="27.23%"
          bottom="27.18%"
          left="9.16%"
          right="85.16%"
          {...getOverrideProps(overrides, "Icon37152790")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="5px"
          right="14px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=">"
          {...getOverrideProps(overrides, ">37132984")}
        ></Text>
      </View>
      <View
        width="350px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 23px - -65px)"
        left="calc(50% - 175px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProfileDetails")}
      >
        <Button
          width="350px"
          position="absolute"
          borderRadius="12px"
          top="0px"
          left="0px"
          backgroundColor="rgba(239,240,240,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Profile details"
          {...getOverrideProps(overrides, "ProfileDetailsButton")}
        ></Button>
        <Icon
          width="18.33px"
          height="18.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 18.33349609375,
            height: 18.333251953125,
          }}
          paths={[
            {
              d: "M9.16667 10.3125C12.0133 10.3125 14.3229 8.00293 14.3229 5.15625C14.3229 2.30957 12.0133 0 9.16667 0C6.31999 0 4.01042 2.30957 4.01042 5.15625C4.01042 8.00293 6.31999 10.3125 9.16667 10.3125ZM5.77572 11.4583C2.58529 11.4583 0 14.0436 0 17.234C0 17.8428 0.494141 18.3333 1.09928 18.3333L17.234 18.3333C17.8428 18.3333 18.3333 17.8392 18.3333 17.234C18.3333 14.0436 15.748 11.4583 12.5576 11.4583L5.77572 11.4583Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="30.07%"
          bottom="30.07%"
          left="9.38%"
          right="85.38%"
          {...getOverrideProps(overrides, "Icon37152788")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="5px"
          right="14px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=">"
          {...getOverrideProps(overrides, ">37132983")}
        ></Text>
      </View>
      <Image
        width="220px"
        height="220px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 110px - 155px)"
        left="calc(50% - 110px - 0px)"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
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
        children="Profile"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
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
