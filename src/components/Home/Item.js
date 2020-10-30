import React from 'react'
import ItemCount from './ItemCount'

function Item({ product, stock, initial }) {
    return (
        <>
            <div className="flex">
                <span className="verDetalle">ver detalle</span>
                <div className="flex derecha">
                <div className="icon-circle mr-5">
                    <i className="fas fa-share-alt symbols grey"></i>
                </div>
                <div className="icon-circle">
                    <i className="fas fa-heart symbols grey"></i>
                </div>
                </div>
            </div>
            <div className="container-Img">
                <img className="img-article" src={product.image} alt="" />
            </div>
            <div className="Description">
                <h2>${product.price}</h2>
                <h3 className="Product-title">{product.title}</h3>
                <p className="d-min">
                    {product.description}
                </p>
                <ItemCount stock={stock} initial={initial}/>
            </div>
        </>
    );
}

export default Item;