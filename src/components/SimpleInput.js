import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    inputValueChangeHandler: nameInputChangeHandler,
    inputValueBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    inputValueChangeHandler: emailInputChangeHandler,
    inputValueBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submissionHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={submissionHandler}>
      <div className={`form-control ${nameInputHasError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must contain at least X characters</p>
        )}
      </div>
      <div className={`form-control ${emailInputHasError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="email"
          id="email"
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
