import { useEffect } from "react";

export function useVue(app, data, key = "data") {
  useEffect(() => {
    Object.keys(data).forEach((k) => {
      app.$set(app[key], k, data[k]);
    });
  });
}
