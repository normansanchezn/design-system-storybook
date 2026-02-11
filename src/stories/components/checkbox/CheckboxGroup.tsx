import React, { forwardRef, useMemo, useState } from "react";

import "./checkbox-group.css";

export interface CheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  label?: string;
  options: CheckboxOption[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (values: string[]) => void;
  helperText?: string;
  disabled?: boolean;
  className?: string;
}

const toggleValue = (values: string[], candidate: string) =>
  values.includes(candidate)
    ? values.filter((v) => v !== candidate)
    : [...values, candidate];

export const CheckboxGroup = forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      label,
      options,
      value,
      defaultValue = [],
      onValueChange,
      helperText,
      disabled = false,
      className,
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValues, setInternalValues] = useState(defaultValue);
    const selectedValues = isControlled ? value : internalValues;

    const rootClassName = useMemo(
      () => ["checkboxGroup", disabled ? "checkboxGroup--disabled" : "", className ?? ""].filter(Boolean).join(" "),
      [className, disabled],
    );

    const handleToggle = (optionValue: string) => {
      if (disabled) return;
      const nextValues = toggleValue(selectedValues, optionValue);
      if (!isControlled) {
        setInternalValues(nextValues);
      }
      onValueChange?.(nextValues);
    };

    return (
      <fieldset className={rootClassName} ref={ref} disabled={disabled}>
        {label ? <legend className="checkboxGroup__label">{label}</legend> : null}
        <div className="checkboxGroup__options">
          {options.map((option) => {
            const checked = selectedValues.includes(option.value);
            return (
              <label key={option.value} className="checkboxOption">
                <input
                  type="checkbox"
                  name={option.value}
                  className="checkboxOption__input"
                  checked={checked}
                  disabled={disabled || option.disabled}
                  onChange={() => handleToggle(option.value)}
                />
                <span className="checkboxOption__control" aria-hidden="true" />
                <span className="checkboxOption__labelText">{option.label}</span>
              </label>
            );
          })}
        </div>
        {helperText ? <p className="checkboxGroup__helper">{helperText}</p> : null}
      </fieldset>
    );
  },
);

CheckboxGroup.displayName = "CheckboxGroup";
