function printLastOrFirstName(objArray) {
  objArray.forEach((objitem) => {
    if (objitem["age"] > 18) {
      document.getElementById("printer_h1").innerText +=
        objitem["firstName"] + "\n";
      return;
    }
    document.getElementById("printer_h1").innerText +=
      objitem["lastName"] + "\n";
  });
}
// printLastOrFirstName(userArray);
// let userArray = [
//   {
//     age: 18,
//     firstName: "Dani",
//     lastName: "Din",
//   },
//   {
//     age: 12,
//     firstName: "Dani",
//     lastName: "Din",
//   },
//   {
//     age: 21,
//     firstName: "Dani",
//     lastName: "Din",
//   },
// ];
//

// let elementCollection = document.getElementsByClassName("element_class");//1
// for (let elementEntry of elementCollection) {
//   console.log(elementEntry);
// }
///2
function changePColor() {
  let pCollection = document.getElementsByTagName("p");
  for (let pElement of pCollection) {
    pElement.style.color = "blue";
  }
}
function changePText() {
  let pCollection = document.getElementsByTagName("p");
  for (let pElement of pCollection) {
    pElement.innerText = "Hello";
  }
}
//3,4
function printNewObject() {
  let userObject = {
    firstName: "Or",
    LastName: "Gadamo",
    age: 23,
    city: "Rehovot",
  };
  for (key in userObject) {
    console.log(`${key} : ${userObject[key]}`);
    document.body.innerHTML += `<h1>${key} : ${userObject[key]}</h1>`;
  }
}
// printNewObject();
//5
let userObject = {
  firstName: "",
  LastName: "",
  age: "",
};
function createInput() {
  start_btn.style.display = "none";
  for (key in userObject) {
    let labelObj = document.createElement("label");
    labelObj.innerText = `Enter ${key}:`;
    document.body.appendChild(labelObj);
    let inputObj = document.createElement("input");
    inputObj.id = `${key}_id`;
    document.body.appendChild(inputObj);
  }
  let sumbitInp = document.createElement("button");
  sumbitInp.innerText = "SUMBIT";
  sumbitInp.addEventListener("click", printUserInfo);
  document.body.appendChild(sumbitInp);
}
function printUserInfo() {
  for (key in userObject) {
    userObject[key] = document.getElementById(`${key}_id`).value;
    let printH1 = document.createElement("h1");
    printH1.innerText = `${key} : ${userObject[key]}`;
    document.body.appendChild(printH1);
  }
}
//6
function createObjectArray() {
  let objectArray = [
    {
      firstName: "Or",
      lastName: "Gadamo",
      dateOfBirth: "16.11.1998",
      email: "or@gmail.com",
    },
    {
      firstName: "Dalia",
      lastName: "Zegaya",
      dateOfBirth: "14.09.1998",
      email: "dalia@gmail.com",
    },
    {
      firstName: "Abey",
      lastName: "Aseya",
      dateOfBirth: "12.08.1996",
      email: "abey@gmail.com",
    },
    {
      firstName: "Batel",
      lastName: "Haialo",
      dateOfBirth: "21.02.1997",
      email: "batel@gmail.com",
    },
  ];
  return objectArray;
}
function printObjInTable(objArray) {
  let newTable = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");
  for (let key in objArray[0]) {
    let thElement = document.createElement("th");
    thElement.innerText = key;
    tableHead.appendChild(thElement);
  }
  objArray.forEach((obj) => {
    let newTrTag = document.createElement("tr");
    for (let key in obj) {
      newTrTag.innerHTML += `<td>${obj[key]}</td>`;
    }
    tableBody.appendChild(newTrTag);
  });
  newTable.appendChild(tableHead);
  newTable.appendChild(tableBody);
  document.body.appendChild(newTable);
}
function startObjectsTable() {
  printObjInTable(createObjectArray());
}
