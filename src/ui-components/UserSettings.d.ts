/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserSettingsOverridesProps = {
    UserSettings?: PrimitiveOverrideProps<ViewProps>;
    DeleteAccountButton?: PrimitiveOverrideProps<ButtonProps>;
    SignoutButton?: PrimitiveOverrideProps<ButtonProps>;
    AppSettings?: PrimitiveOverrideProps<ViewProps>;
    AppSettingsButton?: PrimitiveOverrideProps<ButtonProps>;
    Icon37152790?: PrimitiveOverrideProps<IconProps>;
    ">37132984"?: PrimitiveOverrideProps<TextProps>;
    ProfileDetails?: PrimitiveOverrideProps<ViewProps>;
    ProfileDetailsButton?: PrimitiveOverrideProps<ButtonProps>;
    Icon37152788?: PrimitiveOverrideProps<IconProps>;
    ">37132983"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    BackToMyCircles?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserSettingsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UserSettingsOverridesProps | undefined | null;
}>;
export default function UserSettings(props: UserSettingsProps): React.ReactElement;
