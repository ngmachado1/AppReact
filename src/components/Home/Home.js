import React, {useEffect, useState} from 'react';
import "./Home.css";
import ItemList from './ItemList';



function ItemListContainer({ title }) {
    const [productList, setProductList] = useState([]);
    const [stock, setStock] = useState();
    setStock(10);

    const fetchPromesa = new Promise((resolve, reject) =>{
        setTimeout (() =>{ resolve([
            {
                id: 1,
                price: 1342,
                title: "Eukanuba",
                description: "Aqui va una descripcion",
                image: "images/Alimetos/Eukanuba.png"                
            },
            {
                id: 2,
                price: 1342,
                title: "Royal Canin",
                description: "Aqui va una descripcion",
                image: "images/Alimetos/RoyalCaninMedio.png"                
            },
            {
                id: 3,
                price: 1342,
                title: "Vital Can",
                description: "Aqui va una descripcion",
                image: "images/Alimetos/VitalCan.png"                
            },
            {
                id: 4,
                price: 1342,
                title: "Pedigree",
                description: "Aqui va una descripcion",
                image: "images/Alimetos/pedigree.png"                
            }
        ])}, 2000)
    })

    useEffect(() => {
        fetchPromesa.then(result => setProductList(result))
    }, [fetchPromesa])
    
    return <>  
            <h1>{title}</h1>
            <section className="shopping container">
                { productList.length > 0 ? 
                <ItemList products={productList} stock={stock} initial={1} /> : <span>NO HAY DATOS</span> 
            }
            </section>
        </>
    
}




export default ItemListContainer;
