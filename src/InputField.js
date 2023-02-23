import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { BetContext } from './App';
import './InputField.css';
function InputField(){

    const { bet, setBet } = useContext(BetContext);

    const onChange = (event) => {
        setBet(event.target.value);
        console.log(bet);
    }

    return <TextField onChange={onChange} type="number" value={bet} id="outlined-basic" variant="outlined"></TextField>;
}

export default InputField;