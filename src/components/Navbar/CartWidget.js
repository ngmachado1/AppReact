import React from "react";

function CartWidget({CuentaFinal}) {

  return (
    <>
        <div className="carritoDeCompras">
          <i className="cart fas fa-shopping-basket"></i>
          <div className="count-circle">{CuentaFinal}</div>
        </div>
    </>
  );
}

export default CartWidget;
