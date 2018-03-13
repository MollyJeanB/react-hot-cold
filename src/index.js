import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./store";

import "./reset.css";
import "./index.css";

import Game from "./components/game";

ReactDOM.render(<Game />, document.getElementById("root"));
