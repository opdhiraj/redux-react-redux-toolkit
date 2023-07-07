import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.Counter);
  const show = useSelector((state) => state.showCounter);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase(5));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* only show counter when show is true */}
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment </button>
        <button onClick={handleIncrease}>Increment by 5</button>
        <button onClick={handleDecrement}>Decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
