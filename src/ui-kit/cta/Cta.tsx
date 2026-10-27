import React from "react";
import styles from "./cta.module.scss";

type Variant = "accent" | "ocean" | "light" | "ghost" | "outline";
type Size = "md" | "lg" | "sm";

interface CommonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  block?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

type LinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

const cls = ({ variant = "accent", size = "md", block, className }: CommonProps) =>
  [
    styles.cta,
    styles[variant],
    styles[size],
    block ? styles.block : "",
    className ?? "",
  ].join(" ");

const Cta = (props: LinkProps | ButtonProps) => {
  const { children, icon, variant, size, block, className, ...rest } = props;
  const classes = cls({ variant, size, block, className, children });
  const content = (
    <>
      <span>{children}</span>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
    </>
  );

  if (props.href !== undefined) {
    const { external, ...anchor } = rest as Omit<LinkProps, keyof CommonProps>;
    return (
      <a
        {...anchor}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Cta;
