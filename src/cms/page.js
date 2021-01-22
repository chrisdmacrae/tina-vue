import React, { createElement, useDebugValue } from "react";
import { useCMS, useForm, usePlugin } from "tinacms";
import { TinaVueRenderer } from "./tinaVueRenderer";
import { useVue } from "./useVue";

export function EditablePage({ app }) {
  const cms = useCMS();
  const [modifiedValues, form] = useForm({
    ...EditablePageTemplate,
    id: "page",
    loadInitialValues: async () => {
      return cms.api.example.getPage();
    },
    onSubmit: (values) => {
      console.log(values);

      cms.alerts.success("Pretending to save!");
    }
  });

  useVue(app, modifiedValues);
  usePlugin(form);

  return createElement(TinaVueRenderer, { app });
}

const EditablePageTemplate = {
  label: "Page",
  fields: [
    { name: "title", label: "Title", component: "text" },
    { name: "description", label: "Description", component: "textarea" }
  ]
};
