import React from "react";

export default function Avartar({ image, isNew }) {
  return (
    <div className="avartar">
      <img className="photo" src={image} alt="avator" />
      {isNew && <span className="new">new</span>}
    </div>
  );
}
