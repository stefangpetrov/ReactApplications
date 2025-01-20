import Header from './components/Header'
import Results from './components/Results';
import UserInput from './components/UserInput'
import {useState} from 'react'

function App() {

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    });
}

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

  return (
    <>
      <Header/>
      <UserInput onChange={handleChange} userInput={userInput}/>
      <Results userInput={userInput}/>
    </>
  )
}

export default App
