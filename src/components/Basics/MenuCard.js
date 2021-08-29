import React from "react";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card-container">
        {menuData.map((currentElem, index) => {
          return (
            <div className="card-container" key={currentElem.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">
                    {currentElem.id}
                  </span>

                  <span className="card-author subtle">card author</span>
                  <h2 className="card-title">{currentElem.name}</h2>

                  <span className="card-discription subtle">
                    {currentElem.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>

                <div className="card-tag subtle">Order Now</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
