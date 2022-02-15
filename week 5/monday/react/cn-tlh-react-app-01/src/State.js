import React, { useState } from "react";

const State = () =>{
    return (<div><h1>This is state</h1>
    {/* <App />
    <Users />
 */}
    <TrueFalse />

    </div>
    );
};
// ###############################################################
const App = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>number {count}</h1>
        </div>
    );
}



// ################################################################


let x = 2
let y = 3
let i = 2
let z = 2

const TrueFalse = () => {

    if (x > y || x == i && x == z){
        return ( <div> <p> if x {x} greater than y {y}, or x {x} = i {i} and x {x} = z {z} than is True</p> </div>)
       
    } else {
        return ( <div> <p>is False</p> </div>)
       
    }

}

// const trueFuncrtion = () =>{
//     let array =  [x = 1, y =3, i = 2, z = 1] 
//         if (x > y || x == i && x == z){
//         return ( <div> <p>is True</p> </div>)
//     } else {
//         return ( <div> <p>is False</p> </div>)
//     }

// }



const Users = () =>{
const [persons, setPerson] = useState([
    {name: "Dan", age: 34},
    {name: "Ben", age: 21}
])
return(
    <div>
        <Person name={persons[0].name} age={persons[0].age} clickMe={HandleClick} />
        <Person name={persons[1].name} age={persons[1].age} />
        {/* <button onClick={logger}></button> */}
    </div>
);



};
const Person = (props) =>{
    return (
        <div>
            <h1>I'm a class component</h1>
        <h1 onClick={props.clickMe}>{props.name}</h1>
        <h1>{props.age}</h1>

        </div>
    );
    };

    const HandleClick = () =>{
        console.log("Clickity Click")
    };
    
  
    // const logger =() =>{
    //     const [bool, setBool] = useState(false)
    //     setBool(!bool)
    //     console.log(bool)
    // }
    







// ############################### \\
//           do not delete         \\
export default State





// class Person extends React.Component{
//     state = {
//         persons: [
//             {name: "Dan", age: 34},
//             {name: "Ben", age: 21}
//         ]
//     };


// };

