import Sketch from "./module.js";
import myimage from "../img/1.jpg";
new Sketch({
  dom: document.getElementById("container"),
  config: false,
  url: myimage,
  mouseover: "#mouseover",
});
