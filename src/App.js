import React from 'react';
import { useState, createContext, useContext } from "react";
import NumberGrid from './NumberGrid';
import Stake from './Stake';
import InputField from './InputField';
import Stack from '@mui/material/Stack';
export const BetContext = React.createContext(0);


function App() {

  const [bet, setBet] = useState(0);

  return (
    <div>
      {/* <Button variant="contained">Hello World</Button> */}
      {/* <div>{generateArray}</div> */}
      
      
      <BetContext.Provider value={{ bet: bet, setBet: setBet }}>
      <NumberGrid />
      <div>
        <Stack direction="row" spacing={2}>
          <Stake value={100}/>
          <Stake value={250}/>
          <Stake value={500}/>
          <Stake value={1000}/>
          <Stake value={2500}/>
        </Stack>
        <div>
          <InputField />
        </div>
      </div>
      </BetContext.Provider>
    </div>
  );
}

export default App;
