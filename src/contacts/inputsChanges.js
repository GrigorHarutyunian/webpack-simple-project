import checkImg from "./conctactsIMG/kisspng-check-mark-x-mark-clip-art-check-marks-5a7c0970903068.7393423315180783205906.png";
import xmark from "./conctactsIMG/kisspng-red-x-x-mark-computer-icons-clip-art-red-x-png-5ab19106316800.2072037015215864382024.png";
let contactsObj = {};

export function inputChange(obj) {
  let value = "";
  const inputs = document.querySelectorAll("input");
  inputs.forEach((val, i) => {
    val.addEventListener("input", (evt) => {
      const privateDiv = document.getElementById(`privateDiv${i}`);
      value = evt.target.value;
      if (value !== "") {
        privateDiv.style.display = "flex";
        const p = document.getElementById(`validateText${i}`);
        const img = document.getElementById(`validateImg${i}`);
        switch (val.id[val.id.length - 1]) {
          case "0":
            p.innerText = isValideName(value).message;
            if (isValideName(value).label === true) {
              img.src = checkImg;
              obj.name = true;
              contactsObj.name = value;
            } else {
              img.src = xmark;
              obj.name = false;
            }
            break;
          case "1":
            p.innerText = isValideName(value).message;
            if (isValideName(value).label === true) {
              img.src = checkImg;
              obj.lastname = true;
              contactsObj.lastname = value;
            } else {
              img.src = xmark;
              obj.lastname = false;
            }
            break;
          case "2":
            p.innerText = isValideEmail(value).message;
            if (isValideEmail(value).label === true) {
              img.src = checkImg;
              obj.email = true;
              contactsObj.email = value;
            } else {
              img.src = xmark;
              obj.email = false;
            }
            break;
          case "3":
            p.innerText = isValideNumber(value).message;
            if (isValideNumber(value).label === true) {
              img.src = checkImg;
              obj.phoneNumber = true;
              contactsObj.phoneNumber = value;
            } else {
              img.src = xmark;
              obj.phoneNumber = false;
            }
            break;
        }
      } else {
        privateDiv.style.display = "none";
      }
    });
  });
}

export function textareaChange(obj) {
  const textarea = document.querySelector("textarea");
  const privateDivTextAre = document.querySelector(".privateDivTextArea");
  const p = document.querySelector(".validateTextArea");
  const img = document.querySelector(".validateImgTextArea");
  let value = "";
  textarea.addEventListener("click", () => {
    privateDivTextAre.style.display = "block";
    p.innerText = "write smt longer";
    img.src = xmark;
  });

  textarea.addEventListener("keyup", (evt) => {
    value = evt.target.value;
    if (value !== "") {
      if (value.length < 6) {
        privateDivTextAre.style.display = "flex";
        p.innerText = "write smt longer";
        img.src = xmark;
        obj.text = false;
      } else {
        contactsObj.message = value;
        p.innerText = "ok";
        img.src = checkImg;
        obj.text = true;
      }
    } else {
      privateDivTextAre.style.display = "none";
    }
  });
}

function isValideName(value) {
  const obj = {};
  if (value !== "") {
    if (!(value[0].charCodeAt() >= 65 && value[0].charCodeAt() <= 90)) {
      obj.message = "please first letter write in capital";
      obj.label = false;
      return obj;
    }
    if (value.length < 3) {
      obj.message = "very short name";
      obj.label = false;
      return obj;
    } else {
      for (let x = 1; x < value.length; x++) {
        if (!(value[x].charCodeAt() >= 97 && value[x].charCodeAt() <= 122)) {
          obj.message = "the rest must be lowercase";
          obj.label = false;
          return obj;
        }
      }
    }

    if (value.length > 24) {
      obj.message = "very long name";
      obj.label = false;
      return obj;
    }

    obj.message = "valid name";
    obj.label = true;
    return obj;
  }
}

function isValideEmail(value) {
  const obj = {};
  const mailsArr = [
    "@gmail.com",
    "@mail.ru",
    "@list.ru",
    "@internet.ru",
    "@bk.ru",
    "@inbox.ru",
    "@internet.ru",
  ];
  if (value !== "") {
    for (let addres of mailsArr) {
      if (!value.startsWith(addres) && value.endsWith(addres)) {
        obj.message = "valid email";
        obj.label = true;
        return obj;
      }
    }
    obj.message = "invalid email";
    obj.label = false;
    return obj;
  }
}

function isValideNumber(value) {
  const obj = {};
  if (value !== "") {
    if (
      !(
        value[0] === "+" ||
        (value[0].charCodeAt() >= 48 && value[0].charCodeAt() <= 57)
      )
    ) {
      obj.message = "The first character must be + or a number";
      obj.label = false;
      return obj;
    }

    for (let x = 1; x < value.length; x++) {
      if (!(value[x].charCodeAt() >= 48 && value[x].charCodeAt() <= 57)) {
        obj.message = "The rest should be numbers";
        obj.label = false;
        return obj;
      }
    }
    if (value.length > 17) {
      obj.message = "very long number";
      obj.label = false;
      return obj;
    }

    if (value.length < 6) {
      obj.message = "very short number";
      obj.label = false;
      return obj;
    }
    obj.message = "valid number";
    obj.label = true;
    return obj;
  }
}

export function buttonOnclick(evt, validationObject) {
  evt.preventDefault();
  const img1 = document.createElement("img");
  img1.style.width = "30px";
  img1.style.height = "20px";

  for (let key in validationObject) {
    if (!validationObject[key]) {
      contactsObj = {};
      img1.src = xmark;
      console.log(contactsObj);
      evt.target.innerText = "";
      evt.target.append(img1);
      cleareAllWritens(validationObject);
      return;
    }
  }
  recruitingMessage(contactsObj);
  img1.src = checkImg;
  evt.target.innerText = "";
  console.log(contactsObj);
  evt.target.append(img1);
  cleareAllWritens(validationObject);

  return;
}

function cleareAllWritens(validationObject) {
  validationObject.name = false;
  validationObject.lastname = false;
  validationObject.email = false;
  validationObject.phoneNumber = false;
  validationObject.text = false;
  const sendButton = document.querySelector(".but");
  const inputs = document.querySelectorAll("input");
  const textarea = document.querySelector("textarea");
  const privateDivTextArea = document.querySelector(".privateDivTextArea");

  inputs.forEach((val, i) => {
    const privateDiv = document.getElementById(`privateDiv${i}`);
    privateDiv.style.display = "none";
    val.value = "";
  });
  textarea.value = "";
  privateDivTextArea.style.display = "none";

  setTimeout(() => {
    sendButton.innerText = "Send";
    sendButton.style.background = "#FEC763";
    sendButton.addEventListener("mouseenter", function () {
      sendButton.style.backgroundColor = "#00207F";
    });
    sendButton.addEventListener("mouseleave", function () {
      sendButton.style.backgroundColor = "#FEC763";
    });
  }, 2000);

  textarea.value = "";
}

function recruitingMessage(data) {
  fetch("https://6567929a64fcff8d73109fc0.mockapi.io/aquarium/aquarium", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
