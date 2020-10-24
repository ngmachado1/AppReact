import React from "react";
import imagen from '../components/assets/images/Logo.svg';

function ItemListContainer({title}) {

    return ( 
    <>
            <article className="product">
                <div className="flex">
                    <span className="verDetalle">ver detalle</span>
                    <div className="flex derecha">
                        <div className="icon-circle">
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
                        <h2> $1230 </h2>
                        <h3>{title}</h3>
                        <p className="d-min">Medium. <br/> Peso entre 11 y 25 kg.</p>
                        <div className="flex">
                        <div className="Numberwidget flex">
                            <div className="icon-circle">
                            <span className="symbols">
                                    -
                                </span>
                            </div>
                            <span className="number-prodcuts">
                                    1
                            </span>
                            <div className="icon-circle">
                                <span className="symbols">
                                    +
                                </span>
                            </div>
                            </div>
                            <button className="agregar derecha">
                                Agregar
                            </button>
                            </div>
                        </div>
            </article>          
    </>
  );
}

export default ItemListContainer;
