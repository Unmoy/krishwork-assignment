import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenuItems = (props) => {
  const { name, to, iconName } = props;
  return (
    <li>
      <Link to={to}>
        <div className="menu-item">
          <div className="menu-icon">
            <FontAwesomeIcon icon={iconName} className="menu_item_icon" />
          </div>
          <span>{name}</span>
        </div>
      </Link>
    </li>
  );
};

export default MenuItems;
