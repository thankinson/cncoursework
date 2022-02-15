// imports
import React, { useState } from "react"
// 

const Common = () =>{
    return(
        <div>
            <AddOne />
            <DataInput />
        </div>
    )
}
//  functions
const AddOne = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
    const addHandler = () => {
        let storedNums = [...numbers]
        storedNums.push(numbers[numbers.length - 1] + 1)
        setNumbers(storedNums)
    }
    const removeHandler =(index)=>{
        let storedNums = [...numbers]
        storedNums.splice(index, 1)
        setNumbers(storedNums)
    }
    // const removeHandler =(index)=>{
    //     let storedNums = [...numbers]
    //     storedNums.splice(numbers[numbers.length - 1] -1)
    //     setNumbers(storedNums)
    // }
     return ( 
        <div>
            <h1>common component</h1>
            {numbers.map((number, index) => { 
                return <h1 onClick={() => removeHandler(index)} key={index}>{number}</h1> 
                })}
            <button onClick={addHandler}>add a number</button>
            {/* <button onClick={removeHandler}>remove a number</button> */}
        </div>
        )
}

const DataInput = () =>{
    const [inputText, setInputText] = useState("")
    const handler = (event) =>{
        setInputText(event.target.value)
    }
    return (
        <div>
            <h1>User input</h1>
            <input onChange={handler}/>
            <h2>{inputText}</h2>
        </div>
    )
}

// value={input}

// ############################################################### \\
//                          the chopping block                     \\
// ############################################################### \\

// const MinusOne = () => {
//     const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
//     const addHandler = () => {
//         let storedNums = [...numbers]
//         storedNums.splice(numbers[numbers.length - 1] - 1)
//         setNumbers(storedNums)
//     }
//     return ( 
//         <div>
//             <h1>common component</h1>
//             {numbers.map((number, index) => { 
//                 return <h1 key={index}>{number}</h1> 
//                 })}
//             <button onClick={addHandler}>take away number</button>
//         </div>
//         )
// }



export default Common