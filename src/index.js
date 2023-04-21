import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Взять из html-файла тег, внутри которого будет работать реакт
const root = ReactDOM.creatRoot(document.getElementById("root"));

// Собрать внутрь тега код из круглых скобок
// root.render(
//   React.createElement("h1", null, "Hello React!")
// )

// root.render(
//   <div>
//     <h1>"Hello React!"</h1>
//     <p>DogFood 
//       <br/>
//       shop</p>
//   </div>
// )