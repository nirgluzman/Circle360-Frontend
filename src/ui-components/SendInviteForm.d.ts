/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SendInviteFormInputValues = {
    Field0?: string;
};
export declare type SendInviteFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SendInviteFormOverridesProps = {
    SendInviteFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SendInviteFormProps = React.PropsWithChildren<{
    overrides?: SendInviteFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: SendInviteFormInputValues) => void;
    onChange?: (fields: SendInviteFormInputValues) => SendInviteFormInputValues;
    onValidate?: SendInviteFormValidationValues;
} & React.CSSProperties>;
export default function SendInviteForm(props: SendInviteFormProps): React.ReactElement;
