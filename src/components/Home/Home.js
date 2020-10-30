import React, {useEffect, useState} from 'react';
import "./Home.css";
import ItemList from './ItemList';



function ItemListContainer({ title }) {
    const [productList, setProductList] = useState([]);

    const fetchPromesa = new Promise((resolve, reject) =>{
        setTimeout (() =>{ resolve([
            {
                id: 1,
                price: 1342,
                title: "Eukanuba",
                description: "Aqui va una descripcion",
                image: "images/Alimetos/Eukanuba.png",
                stock: 10                
            },
            {
                id: 2,
                price: 1342,
                title: "Royal Canin",
                description: "Aqui va una descripcion",
                image: "images/Alimetos/RoyalCaninMedio.png",
                stock: 10                 
            },
            {
                id: 3,
                price: 1342,
                title: "Vital Can",
                description: "Aqui va una descripcion",
                image: "images/Alimetos/vitalCan.png",
                stock: 10                
            },
            {
                id: 4,
                price: 1342,
                title: "Pedigree",
                description: "Aqui va una descripcion",
                image: "images/Alimetos/pedigree.png" ,
                stock: 10             
            }
        ])}, 3000)
    })

    useEffect(() => {
        fetchPromesa.then(result => setProductList(result))
    }, [fetchPromesa])
    
    return <>  
            <h1 className="Section-title">{title}</h1>
            <section className="shopping container">
                { productList.length > 0 ? 
                <ItemList products={productList} initial={1} /> : 
                <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
                </div>
            }
            </section>
        </>
    
}




export default ItemListContainer;
