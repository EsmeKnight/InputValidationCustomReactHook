import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueValid = validateValue(inputState.value);
  const hasError = !enteredValueValid && inputState.isTouched;

  const inputValueChangeHandler = (event) => {
    dispatchInputState({ type: "INPUT", value: event.target.value });
  };

  const inputValueBlurHandler = (event) => {
    dispatchInputState({ type: "BLUR" });
  };

  const resetHandler = () => {
    dispatchInputState({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: enteredValueValid,
    hasError,
    inputValueChangeHandler,
    inputValueBlurHandler,
    reset: resetHandler,
  };
};

export default useInput;
