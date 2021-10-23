import { router } from "./router/index.router";
import "./main.scss";

const init = () => {
  router(window.location.hash);
  window.addEventListener("hashchange", () => {
    console.log(window.location.pathname);
    router(window.location.hash);
  });
};

window.addEventListener("load", init);
