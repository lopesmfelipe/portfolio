import { useState } from "react";

export const useHookExample = (currentVal) => {
  
  const [count, setCount] = useState(currentVal); // -> state called count
  
  const increase = () => {
    setCount((currentVal) => currentVal + 1);
  };

  const decrease = () => {
    setCount((currentVal) => currentVal - 1);
  };

  const restart = () => {
    setCount(currentVal);
  };
  
  const reset = () => {
    setCount((currentVal) => currentVal = "The current value now is string");  // as you can see here, we can change the type of the current that was a number, and change it to a string like this phrase
  }


  return { count, increase, decrease, restart }; // return the state(count), and the other 3 functions 
};

/*
 
CODE BREAKDOWN:
  
  
1. you create a hook(basically a function that starts with 'use' but can use *state* and
other React features) and then can receive a prop ('currentVal')

2. you create a state and pass the value (in this case it's 'currentVal' which in the App component you can set as a number like 1000)

3. And then you create three functions to change the state('count') value, using the setCount on all of them 

4. Finally you return the a object containing the state('count') and the 3 functions.

5. In the App component you will call the hook like this(remember that you can choose variables and functions 
  you want to use from the hook, in the case below we selected all, but it could be only the state(count) 
  and so on):

________________________________________________________________________

  function App() {

    const { count, increase, decrease} = useHookExample(1000);

    return (
      <div className="App">
        {count}
        <button onClick={increase}> increase </button>
        <span onClick{restart}> restart </span>
      </div>
    );
  }
__________________________________________________________________________


*/