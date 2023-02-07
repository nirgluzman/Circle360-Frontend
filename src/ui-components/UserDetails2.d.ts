/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetails2OverridesProps = {
    UserDetails2?: PrimitiveOverrideProps<ViewProps>;
    "Your email address cannot be changed."?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
    Rename?: PrimitiveOverrideProps<ViewProps>;
    EmailTextField?: PrimitiveOverrideProps<TextFieldProps>;
    NickNameField?: PrimitiveOverrideProps<TextFieldProps>;
    BackToUserSettings?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserDetails2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UserDetails2OverridesProps | undefined | null;
}>;
export default function UserDetails2(props: UserDetails2Props): React.ReactElement;
