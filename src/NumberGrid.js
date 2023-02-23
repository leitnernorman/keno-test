import './NumberGrid.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useState, useContext } from "react";
import Alert from '@mui/material/Alert';
import { BetContext } from './App';

 function NumberGrid() {
    
  const { bet } = useContext(BetContext);

  console.log(bet)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const [selected, setSelected] = useState([]);

  const placeBet = () => {
    if( selected.length === 5){
      console.log(bet)
     // return <Alert severity="info">{bet + selected}</Alert>;
     alert('Your bet is: ' + bet + ' on:' + selected);
     }
  }


  const  handleClick = event => {
    
      if(selected.includes(event.currentTarget.id)){
        //remove from the array
        const index = selected.findIndex(x => x === event.currentTarget.id);
        console.log(index);
        
        selected.splice(index, 1);
        setSelected([...selected]);

      }else{
        if( selected.length < 5){
          setSelected([...selected, event.currentTarget.id]);
        }
      }

  } 

  
  console.log(selected);
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 10, sm: 10, md: 10 }}
      >
        {Array.from(Array(80)).map((_, index) => (
          <Grid xs={1} sm={1} md={1} key={index}>
            <Item onClick={handleClick} style={{ backgroundColor: selected.includes((index+1).toString())? 'red':'white'}} id={index+1}>{index+1}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    <button onClick={placeBet}>PLace Bet</button>
    </div>
  );
 }
 export default NumberGrid;