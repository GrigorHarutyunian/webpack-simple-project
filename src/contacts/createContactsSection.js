import { buttonOnclick } from "./inputsChanges";
import { validationObject } from "../index.js";

export function createContactsSection({ element, content }) {
  const contactsSection = document.createElement(element);
  contactsSection.setAttribute("class", "contactsSection");
  const contactsContent = document.createElement(content);
  contactsContent.setAttribute("class", "formContent");
  contactsContent.append(createContactUs({ element: "div", content: "form" }));
  contactsContent.append(
    createOurDescriptions({ element: "div", className: "descriptions" })
  );
  contactsSection.append(contactsContent);
  return contactsSection;
}

function createContactUs({ element, content }) {
  const formsParent = document.createElement(element);
  formsParent.setAttribute("class", "formsParent");
  const h1 = document.createElement("h1");
  h1.innerText = "Contact US Form";
  formsParent.append(h1);
  const form = document.createElement(content);

  const placeholders = ["Name", "Lastname", "Email", "Phone"];
  for (let x = 0; x < 4; x++) {
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "big");
    const privateDiv = document.createElement("div");
    privateDiv.setAttribute("id", `privateDiv${x}`);
    privateDiv.style.display = "none";
    const img = document.createElement("img");
    img.setAttribute("id", `validateImg${x}`);
    img.style.width = "10px";
    img.style.height = "10px";
    const p = document.createElement("p");
    p.setAttribute("id", `validateText${x}`);
    const input = document.createElement("input");
    input.placeholder = placeholders[x];
    input.name = placeholders[x] + 1;
    input.id = `validaImput${x}`;
    privateDiv.append(img, p);
    parentDiv.append(privateDiv, input);
    form.append(parentDiv);
  }

  const textareasDiv = document.createElement("div");
  textareasDiv.setAttribute("class", "textareaDiv");
  const privateDivTextarea = document.createElement("div");
  privateDivTextarea.setAttribute("class", `privateDivTextArea`);
  privateDivTextarea.style.display = "none";
  const img = document.createElement("img");
  img.setAttribute("class", `validateImgTextArea`);
  img.style.width = "10px";
  img.style.height = "10px";
  const p = document.createElement("p");
  p.setAttribute("class", `validateTextArea`);
  privateDivTextarea.append(img, p);
  const textarea = document.createElement("textarea");
  textarea.placeholder = "Type your message Here";
  const button = document.createElement("button");
  button.setAttribute("class", "but");
  button.innerText = "Send";
  button.addEventListener("click", (evt) =>
    buttonOnclick(evt, validationObject)
  );
  textareasDiv.append(privateDivTextarea, textarea, button);
  const privateDivResolve = document.createElement("div");
  privateDivResolve.setAttribute("class", "privateResolve");
  form.append(textareasDiv);
  formsParent.append(form);
  formsParent.append(privateDivResolve);
  return formsParent;
}

function createOurDescriptions({ element, className }) {
  const descriptionsParent = document.createElement(element);
  descriptionsParent.setAttribute("class", className);
  const textInfo = document.createElement("div");
  textInfo.setAttribute("class", "textInfo");
  const webSites = document.createElement("div");
  webSites.setAttribute("class", "webSites");
  descriptionsParent.append(textInfo);

  const h1 = document.createElement("h1");
  h1.innerText = "Our Info";
  textInfo.append(h1);
  const textarr = [
    "Elm Street Anytown, USA ",
    "+(555) 123-4567",
    `We are open from Monday to Friday,${" ժn"} 9:00 AM to 5:00 PM.`,
  ];

  for (let x = 0; x < textarr.length; x++) {
    const div = document.createElement("div");
    div.setAttribute("class", "textInfosDiv");
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.innerText = textarr[x];
    div.append(img, p);
    textInfo.append(div);
  }
  const sitesLogo = ["1", "2", "3", "4"];
  for (let x = 0; x < sitesLogo.length; x++) {
    const p = document.createElement("p");
    p.innerText = sitesLogo[x];
    webSites.append(p);
  }
  textInfo.append(webSites);
  return descriptionsParent;
}
