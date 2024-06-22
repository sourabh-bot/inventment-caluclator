import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120000,
    expectedReturn: 6,
    duration: 10
});

function handleChange(event) {
    setUserInput(previous => {
        const value = event.target.value
        return {
            ...previous,
            [event.target.name]: +value
        }
    })
}
 
const isValidInput = userInput.duration >= 1;

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} handleChange={handleChange}/>
      { !isValidInput && <p className="center">Please enter duration greater than zero.</p>}
      { isValidInput && <Result input={userInput}/>}
    </>
  )
}

export default App
