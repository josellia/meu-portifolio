import projects from "../views/projects.html";

export default () => {
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = projects;

  return sectionElement;
};
