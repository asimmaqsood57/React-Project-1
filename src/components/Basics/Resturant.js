import React from "react";

import "./Style.css";

const Resturant = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>

            <span className="card-author subtle">BreakFast</span>
            <h2 className="card-title">Maggi</h2>

            <span className="card-discription subtle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              iusto natus optio, assumenda enim suscipit, laborum delectus
              cumque iste voluptas ducimus hic nesciunt, ab modi harum inventore
              deleniti at eveniet dolorem saepe. Minus!
            </span>
            <div className="card-read">Read</div>
          </div>

          <div className="card-tag subtle">Order Now</div>
        </div>
      </div>
    </>
  );
};

export default Resturant;
