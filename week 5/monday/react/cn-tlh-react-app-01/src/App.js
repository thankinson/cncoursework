import theWitcher from './images/tw.png';
import starTrek from './images/std.png';
import fateWinx from './images/ftws.png';
import outsideWire from './images/os.png';
import queensGambit from './images/qb.png';
import { useState } from 'react';

const App = () =>{
  return ( 
  <div id="main-conatiner"> 
  {/* ################# */}
      <div id="page-header"><PageHeader /></div>
      <div id="nav-bar"><NavBar /></div>
      <div id="main-content">
        <TaskOne />
        <TaskTwo />
        <TaskThree />

      </div>
      <div id="page-footer"><PageFooter /></div>


  {/* ################# */}  
  </div>  
    
    )

};
// page layout
const PageHeader = () =>{
  return <h1>My First React Site</h1>
};

const PageFooter = () => {
  return <h3>CN week 5 - React test page || Tom Hankinson</h3>
};

const NavBar = () =>{
  return (
    
    <ul>
        <li><a class="active" href="index.html">Home</a></li>
        <li><a href="">Page 2</a></li>
        <li><a href="">Page 3</a></li>

    </ul>


  );
}
    
// page content

const TaskOne = () => {
  return(
    <div className="task-container">
        <TaskOneContent />
    </div>
  )
}

const TaskOneContent = () =>{
  const [tvList, setTvList] =  useState([theWitcher, fateWinx, outsideWire, starTrek, queensGambit])
  
  return ( <div className='task-one'> {tvList.map((theShows) => { return <img src={theShows} />})}</div>)
  
  };
  


const TaskTwo = () => {
  return(
    <div className="task-container">

    </div>
  )
}
const TaskThree = () => {
  return(
    <div className="task-container">

    </div>
  )
}


// export needs to be at bottom of the stack
export default App;

// ############################################### \\
//                  chopping block                 \\
// ############################################### \\

// const Movies = (prop) =>{
//   return <p>{prop.one} was released in {prop.releas} Genre: <Genre genre={prop.genre} /> </p> 
 
// }



/* <div id="main-content">
<Movies one="Stargate" releas="1994" genre="Scifi"/>
<Movies one="Star Trek" releas="1966" genre="Scifi"/>
<Movies one="Star Wars" releas="1977" genre="Sci-fantasy"/>
</div> */

// const Genre = (prop) =>{
//   return prop.genre

// }

  // const LoopArray = () => {
  //   for (let i = 0; i < tvList.length; i++){
      
  //   }
  // }
//  const LoopArray = () => {
//     for (let i = 0; i < 5; i++){
//     <TaskOneContent />
//     }
//   }


//   const TaskOneContent = () =>{
//     tvList.map((images) =>{
//     return( <div className='task-one'><img src={images} /></div> )
//     })
// }
// const tvList = [theWitcher, fateWinx, outsideWire, starTrek, queensGambit]

// const TaskOneContent = () =>{
//   for (let i =0; i < 5; i++){
//    return ( <div className='task-one'><img src={tvList[i]} /></div> )
   
//   }
// }
