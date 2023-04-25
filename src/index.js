import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


// Взять из html-файла тег, внутри которого будет работать реакт
const root = ReactDOM.createRoot(document.getElementById("root"));

 // Собрать внутрь тега код из круглых скобок
// root.render(
//   React.createElement("h1", null, "Hello React!")
// )



root.render(<App/>)