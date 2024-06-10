import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [items, setItems] = useState([])
  const [price, setPrice] = useState("")
  useEffect(()=>{
    fetch("https://www.course-api.com/react-useReducer-cart-project").then(response=>response.json()).then((result)=>{setItems(result)})
  },[])
  console.log(items)
  function RemoveAll(){
    console.log("hdftz")
    setItems([])
  }
  function RemoveOne(removeditem){
const newitems = items.filter((item)=>{
  return removeditem !== item
})
setItems(newitems);
  }
  return (<>
  <header>
    <div className='head'><h1>UsingReducer</h1></div>
    <div className='er'><FontAwesomeIcon
                icon={faCartShopping}
               className='Icon'/></div>
  </header>
  <div className='items'>

  <div className='bag'><h1>Your Bag</h1></div>
      {items.map((item)=>{
        return(<>
        <div className='Block'>
          <img src={item.img}/>
          <div className='info'><h2>{item.title}</h2>
          <h4>{item.price}</h4>
          <p className='remove' onClick={()=>{RemoveOne(item)}}>Remove item</p></div>
        <div className='ADDREMOVE'>
        <FontAwesomeIcon
                icon={faCaretUp}
               className='Incredecre'/> 
               <p>1</p>
               <FontAwesomeIcon
                icon={faCaretDown}
               className='Incredecre'/>
        </div>
        </div>
        </>)
      })}
      <div className='Total'>
        <p>Total</p>
        <p>{price}</p>
      </div>
      <button onClick={()=>{RemoveAll()}}>Remove All Items</button>
    </div>
  
  </>
  )
}

export default App
