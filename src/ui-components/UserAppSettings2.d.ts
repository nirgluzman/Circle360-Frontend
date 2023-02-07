/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, SliderFieldProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAppSettings2OverridesProps = {
    UserAppSettings2?: PrimitiveOverrideProps<ViewProps>;
    RadiusSettings?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116440553043"?: PrimitiveOverrideProps<ViewProps>;
    "Set the radius for live notifications once your friends are nearby."?: PrimitiveOverrideProps<TextProps>;
    Title40553045?: PrimitiveOverrideProps<TextProps>;
    UpdateFrequency?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116440553047"?: PrimitiveOverrideProps<ViewProps>;
    "How often do you want to receive updates on your circles."?: PrimitiveOverrideProps<TextProps>;
    Title40553049?: PrimitiveOverrideProps<TextProps>;
    Incognito?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116440553051"?: PrimitiveOverrideProps<ViewProps>;
    "Make me not visible in all my circles."?: PrimitiveOverrideProps<TextProps>;
    Title40553053?: PrimitiveOverrideProps<TextProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    IncognitoSwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    PushNotifications?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116440553057"?: PrimitiveOverrideProps<ViewProps>;
    "Allow app to send push notifications."?: PrimitiveOverrideProps<TextProps>;
    "Frame 420"?: PrimitiveOverrideProps<ViewProps>;
    Title40553060?: PrimitiveOverrideProps<TextProps>;
    PushSwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    Title40553062?: PrimitiveOverrideProps<TextProps>;
    BackToUserSettings?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    Text40553065?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
    FrequencySliderField?: PrimitiveOverrideProps<SliderFieldProps>;
    RadiusSliderField?: PrimitiveOverrideProps<SliderFieldProps>;
    Text40553069?: PrimitiveOverrideProps<TextProps>;
    Text40553070?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserAppSettings2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UserAppSettings2OverridesProps | undefined | null;
}>;
export default function UserAppSettings2(props: UserAppSettings2Props): React.ReactElement;
