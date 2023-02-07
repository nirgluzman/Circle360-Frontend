/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, SliderFieldProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAppSettingsOverridesProps = {
    UserAppSettings?: PrimitiveOverrideProps<ViewProps>;
    UpdateFrequency?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116437133117"?: PrimitiveOverrideProps<ViewProps>;
    "How often do you want to receive updates on your circles."?: PrimitiveOverrideProps<TextProps>;
    Title37133120?: PrimitiveOverrideProps<TextProps>;
    Incognito?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116437133111"?: PrimitiveOverrideProps<ViewProps>;
    "Make me not visible in all my circles."?: PrimitiveOverrideProps<TextProps>;
    Title37133114?: PrimitiveOverrideProps<TextProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    IncognitoSwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    PushNotifications?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116437133106"?: PrimitiveOverrideProps<ViewProps>;
    "Allow app to send push notifications."?: PrimitiveOverrideProps<TextProps>;
    "Frame 420"?: PrimitiveOverrideProps<ViewProps>;
    Title37133109?: PrimitiveOverrideProps<TextProps>;
    PushSwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    Title37133091?: PrimitiveOverrideProps<TextProps>;
    BackToUserSettings?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    Text37133095?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
    FrequencySliderField?: PrimitiveOverrideProps<SliderFieldProps>;
    Text39042843?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserAppSettingsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UserAppSettingsOverridesProps | undefined | null;
}>;
export default function UserAppSettings(props: UserAppSettingsProps): React.ReactElement;
