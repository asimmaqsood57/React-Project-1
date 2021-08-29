import React from "react";

import "./Style.css";
import { useState } from "react";
import Menu from "./MenuApi";

import MenuCard from "./MenuCard";

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  console.log(menuData);
  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
