import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useDataLayerValue } from "../../DataLayer";

const Subtotal = () => {

  const [{basket} , dispatch] = useDataLayerValue();

  const basketTotal =  basket?.reduce((total,item)=> item.price + total,0);
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Procced to Checkout</button>
    </div>
  );
};

export default Subtotal;
