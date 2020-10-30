import React from 'react';

import Item from './Item';

function ItemList({products, initial}){
    return( <> 
            {products.map(product => {
                return  <article className="product">

                <Item product={product} stock={product.stock} initial={initial} />
                </article>

    })}
    </>)
}

export default ItemList