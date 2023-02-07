/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, ImageProps, SwitchFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CircleSettingsHeaderOverridesProps = {
    CircleSettingsHeader?: PrimitiveOverrideProps<ViewProps>;
    InviteNewMemberButton?: PrimitiveOverrideProps<ButtonProps>;
    EditIcon?: PrimitiveOverrideProps<IconProps>;
    BackToMyCircles?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
    GroupField?: PrimitiveOverrideProps<TextFieldProps>;
    "Group 28"?: PrimitiveOverrideProps<ViewProps>;
    GroupName?: PrimitiveOverrideProps<TextProps>;
    PushSwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CircleSettingsHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CircleSettingsHeaderOverridesProps | undefined | null;
}>;
export default function CircleSettingsHeader(props: CircleSettingsHeaderProps): React.ReactElement;
