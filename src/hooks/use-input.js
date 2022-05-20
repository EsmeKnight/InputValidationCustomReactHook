import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueValid = validateValue(enteredValue);
  const hasError = !enteredValueValid && isTouched;

  const inputValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const inputValueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetHandler = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueValid,
    hasError,
    inputValueChangeHandler,
    inputValueBlurHandler,
    reset: resetHandler,
  };
};

export default useInput;
