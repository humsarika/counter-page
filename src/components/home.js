import React , {useState} from 'react';

const Home = () =>{
    const [inputValue, setInputValue] = useState(0);

const btnstyle = {
    padding:'20px',
    border : 'none',
    backgroundColor:'#a659bb',
    margin : "10px"

}
const increment = () =>{
    setInputValue(inputValue+1);
}
const decrement= () =>{
    setInputValue(inputValue-1);
}

  return (
    <div className='counter'>
     <button style={btnstyle} onClick={decrement}>-</button>
    <input 
        style={{padding:"20px", border: "2px solid black"}}
        type='number'
        placeholder='Enter number' 
        value={inputValue}
        readOnly
     />
     <button style={btnstyle} onClick={increment}>+</button>
      
    </div>
  )
}

export default Home;
