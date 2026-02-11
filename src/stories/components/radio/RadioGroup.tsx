import React, { forwardRef, useId, useMemo, useState } from "react";

import "./radio-group.css";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  label?: string;
  name?: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      label,
      name,
      options,
      value,
      defaultValue,
      onValueChange,
      disabled = false,
      className,
    },
    ref,
  ) => {
    const fallbackId = useId();
    const groupName = name ?? `radio-group-${fallbackId}`;
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const selectedValue = isControlled ? value : internalValue;

    const onChange = (nextValue: string) => {
      if (!isControlled) {
        setInternalValue(nextValue);
      }
      onValueChange?.(nextValue);
    };

    const rootClassName = useMemo(
      () => ["radioGroup", disabled ? "radioGroup--disabled" : "", className ?? ""].filter(Boolean).join(" "),
      [className, disabled],
    );

    return (
      <fieldset className={rootClassName} ref={ref} disabled={disabled}>
        {label ? <legend className="radioGroup__label">{label}</legend> : null}
        <div className="radioGroup__options">
          {options.map((option) => {
            const optionId = `${groupName}-${option.value}`;
            const isOptionDisabled = disabled || option.disabled;
            const checked = selectedValue === option.value;

            return (
              <label
                key={option.value}
                htmlFor={optionId}
                className={
                  isOptionDisabled
                    ? "radioOption radioOption--disabled"
                    : checked
                      ? "radioOption radioOption--checked"
                      : "radioOption"
                }
              >
                <input
                  id={optionId}
                  name={groupName}
                  type="radio"
                  className="radioOption__input"
                  value={option.value}
                  checked={checked}
                  onChange={() => onChange(option.value)}
                  disabled={isOptionDisabled}
                />
                <span className="radioOption__control" aria-hidden="true" />
                <span className="radioOption__labelText">{option.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
