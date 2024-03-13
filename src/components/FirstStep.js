import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";

export default function FirstStep() {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext)
  return (
    <div>
      <div>
        <TextField label="First name" value={userData["firstname"]} onChange={(e) => setUserData({...userData, "firstname" : e.target.value})} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField label="Last name" value={userData["lastname"]} onChange={(e) => setUserData({...userData, "lastname" : e.target.value})} margin="normal" variant="outlined" color="secondary" />
      </div>
      <div>
        <TextField
          label="Contact number"
          value={userData["contact"]} onChange={(e) => setUserData({...userData, "contact" : e.target.value})}
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <Button onClick={() => setCurrentStep(2)} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
}
