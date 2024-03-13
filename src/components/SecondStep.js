import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext"

export default function SecondStep() {

    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext)

  return (
    <div>
      <div>
        <TextField label="Email" value={userData["email"]} onChange={(e) => setUserData({...userData, "email" : e.target.value})} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Country" value={userData["country"]} onChange={(e) => setUserData({...userData, "country" : e.target.value})} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField
          label="District"
          value={userData["district"]} onChange={(e) => setUserData({...userData, "district" : e.target.value})}
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <Button onClick={() => setCurrentStep(1)} variant="contained" color="secondary">Back</Button> <span> </span>
      <Button onClick={() => setCurrentStep(3)} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
}
