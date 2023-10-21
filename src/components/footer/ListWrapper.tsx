import React, { ReactNode } from "react";

export const ListWrapper = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div>
    <h4>{title}</h4>
    {children}
  </div>
);
