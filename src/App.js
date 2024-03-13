import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./StepContext";
import { useContext } from "react"
import DisplayData from "./components/DisplayData";

function App() {

  const { currentStep, finalData } = useContext(multiStepContext)
  function showStep(step) {
    switch(step) {
      case 1 :
        return <FirstStep />
        case 2 :
          return <SecondStep />
          case 3 :
            return <ThirdStep />
            default : 
            return 
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: "red", textDecoration: "underline" }}>
          React JS Multi Step Application
        </h3>
        <div className="center stepper">
          <Stepper style={{width: '18%'}} activeStep={currentStep - 1} orientation="horizontal" >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        { finalData.length > 0 ? <DisplayData /> : ''}
      </header>
    </div>
  );
}

export default App;
