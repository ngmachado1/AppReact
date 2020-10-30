import React from 'react';

import Item from './Item';

function ItemList({products, stock, initial}){
    return( 
        <article className="product">
            {products.map(product => {
                return  <Item product={product} stock={stock} initial={initial} />
    })}
        </article>
    )
}

export default ItemList