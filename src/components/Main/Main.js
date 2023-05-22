import React from "react";
import "./Main.css";
import BottomMenu from "../BottomMenu/BottomMenu";

export default function Main(props) {
  return (
    <main className="main">
      <section className="main__container">{props.children}</section>
      <BottomMenu />
    </main>
  );
}
