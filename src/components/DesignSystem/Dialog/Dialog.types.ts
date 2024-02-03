import React from "react";

export interface IDialog {
    title?: string;
    open?: boolean;
    onClose?(): void;
    footer?: React.ReactNode | boolean | null;
    children?: React.ReactNode;
}