import * as $ from "jquery";
import Post from "@models/Post";
// import json from "./assets/json";
// import xml from "./assets/data.xml";
import TSLogo from "@/assets/ts.png";
import React from "react";
import { render } from "react-dom";
import "./babel";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";

const post = new Post("Webpack Post Title", TSLogo);

// $("pre")
//   .addClass("code")
//   .html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>

    <hr />
    <div className="logo"></div>

    <hr />
    <pre></pre>

    <hr />

    <div className="box">
      <h2>Less</h2>
    </div>

    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));

// console.log("Post to string:", post.toString());

// console.log("XML", xml);
