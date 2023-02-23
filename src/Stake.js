import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { BetContext } from './App';

function Stake ({value}) {

     const { bet, setBet } = useContext(BetContext);

    const handleClick = () =>{
        setBet(parseInt(bet) + parseInt(value));
    };
    
    console.log(bet);
    return (
        <Button onClick={handleClick} variant="outlined">{value} $</Button>
    );
    
}
export default Stake;