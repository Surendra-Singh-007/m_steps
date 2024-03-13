import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext"

export default function ThirdStep() {

    const { setCurrentStep, userData, setUserData, submitData } = useContext(multiStepContext)

  return (
    <div>
      <div>
        <TextField label="City" value={userData["city"]} onChange={(e) => setUserData({...userData, "city" : e.target.value})} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Landmark" value={userData["landmark"]} onChange={(e) => setUserData({...userData, "landmark" : e.target.value})} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField
          label="Postal Code"
          value={userData["postalcode"]} onChange={(e) => setUserData({...userData, "postalcode" : e.target.value})}
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <Button onClick={() => setCurrentStep(2)} variant="contained" color="secondary">Back</Button><span> </span>
      <Button onClick={submitData} variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}
