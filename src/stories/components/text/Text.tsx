"use client";

import "./text.css";

export type TextVariant =
    | "display"
    | "largeTitle"
    | "title1"
    | "title2"
    | "title3"
    | "subtitle1"
    | "subtitle2Stronger"
    | "subtitle2"
    | "body1Stronger"
    | "body1Strong"
    | "body1"
    | "caption1Stronger"
    | "caption1Strong"
    | "caption1"
    | "caption2Strong"
    | "caption2";

export interface TextProps {
    label: string;
    variant?: TextVariant;
    as?: "span" | "p" | "h1" | "h2" | "h3";
    onClick?: () => void;
}

export const Text = ({
                         label,
                         variant = "body1",
                         as: Component = "span",
                         onClick,
                     }: TextProps) => {
    return (
        <Component
            className={`text text--${variant}`}
            onClick={onClick}
        >
            {label}
        </Component>
    );
};
