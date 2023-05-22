import React from "react";
import "./BottomMenu.css";

export default function BottomMenu() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <button className="nav__link nav__link_type_home"></button>
        </li>
        <li>
          <button className="nav__link nav__link_type_metrics"></button>
        </li>
        <li>
          <button className="nav__link nav__link_type_shop"></button>
        </li>
        <li>
          <button className="nav__link nav__link_type_profile"></button>
        </li>
      </ul>
    </nav>
  );
}
