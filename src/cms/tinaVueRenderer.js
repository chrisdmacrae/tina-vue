import React, { createElement, Fragment, useEffect } from "react";
import { createPortal } from "react-dom";

export function TinaVueRenderer({ app, children = createElement(Fragment) }) {
  const renderApp = React.useMemo(
    () => (app.$el ? createPortal(children, app.$el) : null),
    [app.$el]
  );

  return renderApp;
}
