import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCaretUp,
  faCaretDown,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import data from "./data";
function App() {
  const [items, setItems] = useState(data);
  const [cartCount, setCartCount] = useState(0);


useEffect(()=>{
  let temp=0;

items.forEach((x)=>{
temp+= x.amount
})
setCartCount(temp)

},[items])



  // cartCount

  // useEffect(()=>{
  //   fetch("https://www.course-api.com/react-useReducer-cart-project").then(response=>response.json()).then((result)=>{setItems(result)
  //     setCartItems(result)
  //   })
  // },[])
  // console.log(cartItems);
  console.log(items);
  function RemoveAll() {
    console.log("hdftz");
    setItems([]);
    // setCartItems([]);
  }
  function RemoveOne(removeditem) {
    const newitems = items.filter((item) => {
      return removeditem !== item;
    });
    setItems(newitems);
  }
  function Cart(IncreDecre, addedremoveditem) {
    if (IncreDecre == true) {
      console.log(addedremoveditem)
      let t=items.find((item)=>{
        return item==addedremoveditem
      })
      t.amount+=1

      let temp=0;
      items.forEach((x)=>{
      temp+= x.amount
      })
      setCartCount(temp)
      
    } else {
      if(addedremoveditem.amount!=1)
        {

          let t=items.find((item)=>{
            return item==addedremoveditem
          })
        t.amount-=1
        }
        let temp=0;
      items.forEach((x)=>{
      temp+= x.amount
      })
      setCartCount(temp)
      
    }
  }
  let price = 0;
  items.map((cartItem) => {
    price += cartItem.amount * cartItem.price;

  });  return (
    <>
      <header>
        <div className="head">
          <h1>UsingReducer</h1>
        </div>
        <div className="er">
          <FontAwesomeIcon icon={faCartShopping} className="Icon" />
          <p>{cartCount}</p>
        </div>
      </header>
      <div className="items">
        <div className="bag">
          <h1>Your Bag</h1>
        </div>
        {items.map((item) => {
          return (
            <>
              <div className="Block">
                <div className="info1">
                  <img src={item.img} />
                  <div className="info">
                    <h2>{item.title}</h2>
                    <h4>{item.price}</h4>
                    <FontAwesomeIcon
                    icon={faTrash}
                      className="remove"
                      onClick={() => {
                        RemoveOne(item);
                      }}
                   />
                    
                  </div>
                </div>
                <div className="ADDREMOVE">
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="Incre"
                    onClick={() => {
                      Cart(true, item);
                    }}
                  />
                  <h4>{item.amount}</h4>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="Decre"
                    onClick={() => {
                      Cart(false, item);
                    }}
                  />
                </div>
              </div>
            </>
          );
        })}
        <div className="Total">
          <p>Total</p>
          <p>{Math.round(price)}</p>
        </div>
        <button
          onClick={() => {
            RemoveAll();
          }}
        >
          Remove All Items
        </button>
      </div>
    </>
  );
}

export default App;
