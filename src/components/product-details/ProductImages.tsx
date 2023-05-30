import React from "react";

const ProductImages = (image: any) => {
  return (
    <div>
      <h3>
        <img
          src={image.image}
          alt="Sneaker"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </h3>
    </div>
  );
};

export default ProductImages;
