import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import data from "./data";
function App() {
  const [items, setItems] = useState(data);
 
  const [cartItems, setCartItems] = useState(data);
  var quantity = 1;
  

  // useEffect(()=>{
  //   fetch("https://www.course-api.com/react-useReducer-cart-project").then(response=>response.json()).then((result)=>{setItems(result)
  //     setCartItems(result)
  //   })
  // },[])
  console.log(cartItems);
  console.log(items);
  function RemoveAll() {
    console.log("hdftz");
    setItems([]);
    setCartItems([]);
  }
  function RemoveOne(removeditem) {
    const newitems = items.filter((item) => {
      return removeditem !== item;
    });
    setItems(newitems);
  }
  function Cart(IncreDecre, addedremoveditem) {
    if (IncreDecre == true) {
      let a = [...cartItems];
      a.push(addedremoveditem);
      setCartItems(a);
      quantity++;
      console.log(cartItems);
    } else {
      console.log("haha");
    }
  }
  let price = 0;
  cartItems.map((cartItem)=>{
price += cartItem.amount*cartItem.price;
  })
    return (
    <>
      <header>
        <div className="head">
          <h1>UsingReducer</h1>
        </div>
        <div className="er">
          <FontAwesomeIcon icon={faCartShopping} className="Icon" />
          <p>{cartItems.length}</p>
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
                    <p
                      className="remove"
                      onClick={() => {
                        RemoveOne(item);
                      }}
                    >
                      Remove item
                    </p>
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
                  <h4>{quantity}</h4>
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
          <p>{price}</p>
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
