import { createElement } from "react";
import ReactDOM from "react-dom";
import Vue from "vue";
import { TinaCMS } from "tinacms";
import App from "./app/App.vue";
import { Cms } from "./cms";

/**
 * We setup a global instance of the CMS object,
 * and then share this with the Vue microfrontend
 * and the React TinaCMS microfrontend
 */
const cms = new TinaCMS({
  enabled: false,
  sidebar: true,
  toolbar: true,
  apis: {
    example: {
      getPage: () => ({
        title: "Hello Vue in CodeSandbox!",
        description: "I am alive"
      })
    }
  }
});
const AppEl = document.getElementById("app");
const TinaEl = document.getElementById("tinacms");

// Create Vue Microfrontend
const app = new Vue({
  el: AppEl,
  template: "<App />",
  data: {
    cms,
    data: cms.api.example.getPage()
  },
  components: { App }
});

// Create Tina Microfrontend
// Ideally this would run under an "admin" or "edit" route
ReactDOM.render(createElement(Cms, { cms, app }), TinaEl);
window.setTimeout(() => cms.enable(), 5000);
