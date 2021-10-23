import Home from "../views/home.html";

export default () => {
  const main = document.createElement("main");
  main.classList = "home-content";
  main.innerHTML = Home;

  //const btnClick = main.querySelector("#btn");
  //handlePosts(btnClick);
  return main;
};

// const handlePosts = (btnClick) => {
//   btnClick.addEventListener("click", () => {
//     window.location.replace("#/projetos");
//   });
// };
