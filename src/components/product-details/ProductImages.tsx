import React from 'react';

const contentStyle: React.CSSProperties = {
    height: '800px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
    lineHeight: '160px'
};

const ProductImages = (image:any) => {
    return(
       <div>
         
        <h3 style={contentStyle}>
            <img
                src={image.image} alt="Sneaker"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
        </h3>
    </div> 
    )
};

export default ProductImages;