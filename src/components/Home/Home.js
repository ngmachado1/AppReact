import React, { useState } from 'react';
import imagen from '../assets/images/Alimetos/eukanuba.png';
import "./Home.css";



function ItemListContainer({ title }) {
    return (
        <>
            <article className="product">
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
                <img className="img-article" src={imagen} alt="" />
            </div>
            <div className="Description">
                <h2>$1230</h2>
                <h3>{title}</h3>
                <p className="d-min">
                Medium. <br />
                Peso entre 11 y 25 kg.
                </p>
                <ItemCount/>
            </div>
            </article>
        </>
    );
}
function ItemCount(){
    const [Count, setCount] = useState(0);
    const [CuentaFinal, setCuentaFinal] = useState();
    function addCounter (){
        setCount(Count + 1);
    }
    function restCounter(){
        setCount(Count - 1)
    }

    function addToCart(){
        setCuentaFinal(Count)
        console.log(CuentaFinal)
    }

    return (
        <>
        <div className="flex">
            <div className="Numberwidget flex">
                <div className="icon-circle" onClick={restCounter}>
                    <span className="symbols"> - </span>
                </div>
                <span className="number-prodcuts"> {Count} </span>
                <div className="icon-circle" onClick={addCounter}>
                    <span className="symbols"> + </span>
                </div>
            </div>
        <button className="agregar derecha" onClick={addToCart}>Agregar</button>
        </div>

        </>
    )
}



export default ItemListContainer;

