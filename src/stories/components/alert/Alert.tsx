import React, { forwardRef, useMemo, useState } from "react";

import "./alert.css";

export type AlertType = "neutral" | "informative" | "warning" | "success" | "error";

export interface AlertProps {
  message: React.ReactNode;
  type?: AlertType;
  icon?: React.ReactNode;
  dismissible?: boolean;
  closeButtonLabel?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const AlertNeutralIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

const AlertInfoIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 10.2v6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="7.7" r="1.1" fill="currentColor" />
  </svg>
);

const AlertWarningIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <path
      d="M10.51 4.76a1.72 1.72 0 0 1 2.98 0l7.12 12.93a1.72 1.72 0 0 1-1.49 2.56H4.88a1.72 1.72 0 0 1-1.49-2.56L10.51 4.76Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9.5v4.7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="16.9" r="1.1" fill="currentColor" />
  </svg>
);

const AlertSuccessIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <path
      d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m8.25 12.3 2.55 2.55 4.95-5.1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AlertErrorIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="m9 9 6 6m0-6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AlertCloseIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <path
      d="m6.75 6.75 10.5 10.5m0-10.5-10.5 10.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DefaultAlertIcon = ({ type }: { type: AlertType }) => {
  if (type === "informative") return <AlertInfoIcon />;
  if (type === "warning") return <AlertWarningIcon />;
  if (type === "success") return <AlertSuccessIcon />;
  if (type === "error") return <AlertErrorIcon />;
  return <AlertNeutralIcon />;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      message,
      type = "neutral",
      icon,
      dismissible = true,
      closeButtonLabel = "Close alert",
      defaultOpen = true,
      open,
      onOpenChange,
      className,
    },
    ref,
  ) => {
    const isControlled = open !== undefined;
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isOpen = isControlled ? open : internalOpen;

    const role = type === "error" || type === "warning" ? "alert" : "status";

    const rootClassName = useMemo(
      () => ["alert", `alert--${type}`, className ?? ""].filter(Boolean).join(" "),
      [className, type],
    );

    const handleClose = () => {
      if (!isControlled) {
        setInternalOpen(false);
      }
      onOpenChange?.(false);
    };

    if (!isOpen) {
      return null;
    }

    return (
      <div ref={ref} className={rootClassName} role={role} aria-live={role === "alert" ? "assertive" : "polite"}>
        <span className="alert__icon" aria-hidden="true" data-testid="alert-icon">
          {icon ?? <DefaultAlertIcon type={type} />}
        </span>
        <p className="alert__message">{message}</p>
        {dismissible ? (
          <button type="button" className="alert__closeButton" onClick={handleClose} aria-label={closeButtonLabel}>
            <AlertCloseIcon />
          </button>
        ) : null}
      </div>
    );
  },
);

Alert.displayName = "Alert";
