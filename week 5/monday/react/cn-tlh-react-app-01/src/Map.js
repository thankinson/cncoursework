import { useState } from "react";
const Map = () =>{
    return (
        <div>
            {/* <h1>Hello World i ate maps</h1> */}
            <TheArray />
        </div>
    )
}

const TheArray = () =>{
const [bookprice, setBookPrices] =  useState([2, 3, 4, 5, 6, 7, 8, 9])

return ( <div> {bookprice.map((price) => { return <h1>this is £{price} </h1>})}</div>)

};

// #######################################################
export default Map