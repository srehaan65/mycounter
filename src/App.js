import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';


function App() {
  const counter=useSelector(state=>state.counter);
  const isLogged=useSelector(state=>state.isLogged);
  const dispatch=useDispatch() ;

  return (
    <div className="App">
       <h1>Counter {counter}</h1>
       <button onClick={()=>dispatch(increment())}> +</button>
       <button onClick={()=>dispatch(decrement())}>-</button>
       
       <h3>{isLogged ? <h3>Valuable info I shouldnt see </h3>:''}</h3>
    </div>
  );
}

export default App;
