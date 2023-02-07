/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SigninOverridesProps = {
    Signin?: PrimitiveOverrideProps<ViewProps>;
    SignupButton?: PrimitiveOverrideProps<ButtonProps>;
    "If you don\u2019t have an account, please sign up first."?: PrimitiveOverrideProps<TextProps>;
    AppleSignin?: PrimitiveOverrideProps<ViewProps>;
    AppleSigninButton?: PrimitiveOverrideProps<ButtonProps>;
    AppleImage?: PrimitiveOverrideProps<ImageProps>;
    GoogleSignin?: PrimitiveOverrideProps<ViewProps>;
    GoogleSigninButton?: PrimitiveOverrideProps<ButtonProps>;
    GoogleImage?: PrimitiveOverrideProps<ImageProps>;
    Divider37152845?: PrimitiveOverrideProps<ViewProps>;
    Divider36743134?: PrimitiveOverrideProps<DividerProps>;
    OR?: PrimitiveOverrideProps<TextProps>;
    Divider36743137?: PrimitiveOverrideProps<DividerProps>;
    SigninButton?: PrimitiveOverrideProps<ButtonProps>;
    "Forgot your password?"?: PrimitiveOverrideProps<TextProps>;
    PasswordTextField?: PrimitiveOverrideProps<TextFieldProps>;
    EmailTextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Please sign in to connect with your circle."?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
    BackToHome?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SigninProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SigninOverridesProps | undefined | null;
}>;
export default function Signin(props: SigninProps): React.ReactElement;
