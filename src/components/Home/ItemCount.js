import React, {useState} from 'react';


function ItemCount({stock, initial}){


    const [Count, setCount] = useState(Number(initial));
    function onAdd (){
        if (Number(stock) > 0 && Count < Number(stock)){
            setCount(Count + 1);
        }
    }
    function restCounter(){
        if (Count > 0){
        setCount(Count - 1);
        }
    }

    function addToCart(){
        console.log(Count);
    }

    return (
        <>
        <div className="flex">
            <div className="Numberwidget flex">
                <div className="icon-circle" onClick={restCounter}>
                    <span className="symbols"> - </span>
                </div>
                <span className="number-products"> {Count} </span>
                <div className="icon-circle" onClick={onAdd}>
                    <span className="symbols"> + </span>
                </div>
            </div>
        <button className="agregar derecha" onClick={addToCart}>Agregar</button>
        </div>

        </>

    )
}

export default ItemCount