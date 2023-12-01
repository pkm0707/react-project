import { Button, TextField } from "@mui/material";
import { useState } from "react";

export function Changeprofilename(){
    const [name,Setchangename]=useState("john")
    return(
        <div>
            <TextField id="outlined-basic" label="name" variant="filled" value={name} onChange={(event)=>{Setchangename(event.target.value)
                console.log(name);
            }} autoComplete="off"></TextField>
            <Button variant="contained" onClick={()=> Setchangename(name)}>Change profile name</Button>
        </div>
    );
}