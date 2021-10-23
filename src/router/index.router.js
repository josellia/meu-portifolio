import { pages } from "../controllers/index";

let content = document.querySelector("#root");

content.innerHTML = pages.home();

const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/": {
      return content.appendChild(pages.home());
    }

    // case "#/projetos": {
    //   return content.appendChild(pages.projects());
    // }

    default:
      return content.appendChild(pages.home());
  }
};

export { router };
