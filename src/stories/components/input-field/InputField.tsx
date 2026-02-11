import React, { forwardRef, useId } from "react";

import "./input-field.css";

export type InputFieldStatus = "default" | "error" | "success";

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  errorText?: string;
  status?: InputFieldStatus;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  showCharacterCount?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      label,
      helperText,
      errorText,
      status = "default",
      leadingIcon,
      trailingIcon,
      showCharacterCount = false,
      disabled,
      required,
      className,
      value,
      maxLength,
      ...inputProps
    },
    ref,
  ) => {
    const fallbackId = useId();
    const inputId = id ?? `input-field-${fallbackId}`;

    const isError = status === "error";
    const effectiveHelper = isError ? errorText ?? helperText : helperText;
    const helperId = effectiveHelper ? `${inputId}-helper` : undefined;
    const counterId = maxLength && showCharacterCount ? `${inputId}-counter` : undefined;
    const valueAsString = typeof value === "string" ? value : "";
    const currentCharacterCount = valueAsString.length;
    const describedBy = [helperId, counterId].filter(Boolean).join(" ") || undefined;

    const wrapperClassName = [
      "inputField",
      `inputField--${status}`,
      inputProps.onClick ? "inputField--clickable" : "",
      disabled ? "inputField--disabled" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={wrapperClassName}>
        {label ? (
          <label className="inputField__label" htmlFor={inputId}>
            {label}
            {required ? (
              <span className="inputField__requiredIndicator" aria-hidden="true">
                {" *"}
              </span>
            ) : null}
          </label>
        ) : null}

        <div className="inputField__controlWrapper">
          {leadingIcon ? (
            <span className="inputField__icon inputField__icon--leading">{leadingIcon}</span>
          ) : null}
          <input
            ref={ref}
            id={inputId}
            className="inputField__control"
            aria-invalid={isError || undefined}
            aria-describedby={describedBy}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            value={value}
            {...inputProps}
          />
          {trailingIcon ? (
            <span className="inputField__icon inputField__icon--trailing">{trailingIcon}</span>
          ) : null}
        </div>

        {effectiveHelper || (maxLength && showCharacterCount) ? (
          <div className="inputField__bottomRow">
            {effectiveHelper ? (
              <p className="inputField__helper" id={helperId}>
                {effectiveHelper}
              </p>
            ) : (
              <span />
            )}
            {maxLength && showCharacterCount ? (
              <p className="inputField__counter" id={counterId}>
                {currentCharacterCount}/{maxLength}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  },
);

InputField.displayName = "InputField";
