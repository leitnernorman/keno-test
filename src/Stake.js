import Button from '@mui/material/Button';
import { useContext } from 'react';
import { BetContext } from './App';

function Stake ({value}) {

    const { bet, setBet } = useContext(BetContext);

    const handleClick = () =>{
        setBet(parseInt(bet) + parseInt(value));
    };

    return (
        <Button onClick={handleClick} variant="outlined">{value} $</Button>
    );
}

export default Stake;