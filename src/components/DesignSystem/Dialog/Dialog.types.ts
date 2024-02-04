import React from "react";

export interface IDialog {
    variant?: "default" | "bottom";
    title?: string;
    open?: boolean;
    onClose?(): void;
    footer?: React.ReactNode | boolean | null;
    children?: React.ReactNode;
}