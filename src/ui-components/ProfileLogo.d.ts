/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileLogoOverridesProps = {
    ProfileLogo?: PrimitiveOverrideProps<ViewProps>;
    SendInvitation?: PrimitiveOverrideProps<ViewProps>;
    BackToMyCircles?: PrimitiveOverrideProps<ViewProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type ProfileLogoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfileLogoOverridesProps | undefined | null;
}>;
export default function ProfileLogo(props: ProfileLogoProps): React.ReactElement;
