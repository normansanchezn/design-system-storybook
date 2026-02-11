import React, { forwardRef, useId, useMemo, useState } from "react";

import "./accordion.css";

export interface AccordionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
}

const DefaultChevronIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" className="accordion__chevron">
    <path
      d="m6.75 9.75 5.25 5.25 5.25-5.25"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Accordion = forwardRef<HTMLButtonElement, AccordionProps>(
  (
    {
      title,
      description,
      children,
      defaultExpanded = false,
      expanded,
      onExpandedChange,
      disabled = false,
      leadingIcon,
      trailingIcon,
      className,
    },
    ref,
  ) => {
    const fallbackId = useId();
    const buttonId = `accordion-trigger-${fallbackId}`;
    const panelId = `accordion-panel-${fallbackId}`;

    const isControlled = expanded !== undefined;
    const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
    const isExpanded = isControlled ? expanded : internalExpanded;

    const toggle = () => {
      if (disabled) return;
      const next = !isExpanded;
      if (!isControlled) {
        setInternalExpanded(next);
      }
      onExpandedChange?.(next);
    };

    const rootClassName = useMemo(
      () =>
        [
          "accordion",
          isExpanded ? "accordion--expanded" : "",
          disabled ? "accordion--disabled" : "",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" "),
      [className, disabled, isExpanded],
    );

    return (
      <section className={rootClassName}>
        <h3 className="accordion__heading">
          <button
            ref={ref}
            id={buttonId}
            type="button"
            className="accordion__trigger"
            aria-expanded={isExpanded}
            aria-controls={panelId}
            onClick={toggle}
            disabled={disabled}
          >
            {leadingIcon ? <span className="accordion__icon accordion__icon--leading">{leadingIcon}</span> : null}
            <span className="accordion__textWrap">
              <span className="accordion__title">{title}</span>
              {description ? <span className="accordion__description">{description}</span> : null}
            </span>
            <span
              className={
                isExpanded
                  ? "accordion__icon accordion__icon--trailing accordion__icon--trailingExpanded"
                  : "accordion__icon accordion__icon--trailing"
              }
            >
              {trailingIcon ?? <DefaultChevronIcon />}
            </span>
          </button>
        </h3>

        <div
          id={panelId}
          className="accordion__panel"
          role="region"
          aria-labelledby={buttonId}
          hidden={!isExpanded}
        >
          <div className="accordion__content">{children}</div>
        </div>
      </section>
    );
  },
);

Accordion.displayName = "Accordion";
