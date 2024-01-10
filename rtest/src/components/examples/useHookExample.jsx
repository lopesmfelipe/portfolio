import { useState } from "react";

export const useHookExample = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal); // -> state called count
  
  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const restart = () => {
    setCount((prev) => initialVal);
  };

  return { count, increase, decrease, restart }; // return the state(count), and the other 3 functions 
};

/*
 
CODE BREAKDOWN:
  
  
1. you create a hook(basically a function that starts with 'use' but can use *state* and
other React features) and then pass a prop ('initialVal = 0')

2. you create a state and the initial value in this case is 'initialVal' which is the number 0 

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