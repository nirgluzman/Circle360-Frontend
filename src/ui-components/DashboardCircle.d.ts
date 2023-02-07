/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashboardCircleOverridesProps = {
    DashboardCircle?: PrimitiveOverrideProps<FlexProps>;
    Circle?: PrimitiveOverrideProps<ViewProps>;
    CircleName?: PrimitiveOverrideProps<TextProps>;
    CircleConfig?: PrimitiveOverrideProps<ViewProps>;
    ConfigIcon?: PrimitiveOverrideProps<IconProps>;
    CircleDelete?: PrimitiveOverrideProps<ViewProps>;
    DeleteIcon?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DashboardCircleProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DashboardCircleOverridesProps | undefined | null;
}>;
export default function DashboardCircle(props: DashboardCircleProps): React.ReactElement;
