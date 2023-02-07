/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashboardHeaderOverridesProps = {
    DashboardHeader?: PrimitiveOverrideProps<ViewProps>;
    JoinButton?: PrimitiveOverrideProps<ButtonProps>;
    CreateNewButton?: PrimitiveOverrideProps<ButtonProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type DashboardHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DashboardHeaderOverridesProps | undefined | null;
}>;
export default function DashboardHeader(props: DashboardHeaderProps): React.ReactElement;
