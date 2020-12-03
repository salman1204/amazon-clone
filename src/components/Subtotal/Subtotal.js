import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useDataLayerValue } from "../../DataLayer";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../reducer";

const Subtotal = () => {
  const history = useHistory('');
  const [{basket} , dispatch] = useDataLayerValue();

  
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
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e=> history.push('/payment')}>Procced to Checkout</button>
    </div>
  );
};

export default Subtotal;
