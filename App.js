

import { useState } from "react";
import { CartProvider } from "./CreatContext"
import Input from "./Input"
import ProductTo from "./ProductTo"

const App = () => {
  const [show, setshow] = useState(false);
  const showcart=()=>{
        setshow(true);
  }
  return (
    <div>
      <button onClick={showcart}>Show Cart</button>
        <CartProvider>
          
      {show&&<ProductTo/>}
       <Input/>
    
        </CartProvider>
    
   
    </div>

       
       
    
  )
}

export default App