import React, { createElement } from "react";
import { TinaProvider } from "tinacms";
import { EditablePage } from "./page";

export function Cms({ cms, app }) {
  return createElement(
    TinaProvider,
    { cms },
    createElement(EditablePage, { app })
  );
}
