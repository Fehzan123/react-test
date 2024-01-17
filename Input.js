import React, {  useState } from 'react'
import { useCart } from './CreatContext'


const Input = () => {
    const {addToCart}=useCart();
            
 const [Input1, setInput1] = useState('')
 const [Input2, setInput2] = useState('')
 const [Input3, setInput3] = useState('') 
 const [Input11, setInput11] = useState([])

  const HandelAdd=(e)=>{
    e.preventDefault();
            const newInput=[Input1,Input2,Input3];
            setInput11([...Input11,newInput])
            setInput1('')
            setInput2('')
            setInput3('')
        }
        const AddCart=(newInput)=>{
            addToCart(newInput);
            
  }
   
  return (
    <div>
        <lable>Name</lable>
        <input type='text' name='1'  onChange={(e)=>setInput1(e.target.value)}/>
        <lable>des</lable>
        <input type='text' name='2'  onChange={(e)=>setInput2(e.target.value)}/>
        <lable>price</lable>
        <input type='number' placeholder='number'  onChange={(e)=>setInput3(e.target.value)}/>
        <button onClick={HandelAdd}>+Add</button>
      {  Input11.map((item,ind)=>(
                <div key={ind}>
                    <div>
                    name:{item[0]}
                </div>
                <div>
                    description:{item[1]}
                </div>
                <div>
                    Price:{item[2]}
                </div>
                <button onClick={()=>AddCart(item)}>AddToCart</button>
                </div>
        ))}

    </div>
  )
}

export default Input