

import { useCart } from './CreatContext';

const ProductTo = () => {
 const {cart}= useCart()
  return (
    <div>
      <p>ProductTo</p>
     { cart.map((item,ind)=>(
          <div key={ind}>
            <div>Name:{item[0]}</div>
            <div>Description:{item[1]}</div>
            <div>Price:{item[2]}</div>
            <hr></hr>
          </div>
      ))}
      
    </div>
  )
}

export default ProductTo