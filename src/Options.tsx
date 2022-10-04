// create option component
import { Box, Grid, Slider, Select, InputLabel, FormControl, MenuItem, SelectChangeEvent, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Board from './Board';
import json_modes from './settings.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

console.log("test", json_modes);

const alphabet:string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const nums:string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];

let board_props = {
  row: 8,
  col: 8,
  mode: 'classic'
}

const Options = () => {

  const [rowValue, setRowValue] = useState<number>(8);
  const [colValue, setColValue] = useState<number>(8);
  const [mode, setMode] = useState<string>('Classic');
  const [showOptions, setShowOptions] = useState<boolean>(true);
  const [showName, setShowName] = useState<boolean>(false);

  const handleCreateMode = () => {
    menuItems.push(<MenuItem value={mode}>{mode}</MenuItem>);
    setShowName(false);
  }

  const handleStart = () => {
    setShowOptions(false);
  }
  const handleColChange = (event: Event, newValue: number | number[]) => {
    setColValue(newValue as number);
    board_props.col = newValue as number;
    setMode('Custom');
    setShowName(true);
  };

  const handleRowChange = (event: Event, newValue: number | number[]) => {
    setRowValue(newValue as number);
    board_props.row = newValue as number;
    setMode('Custom');
    setShowName(true);
  };


  let menuItems = [];
  for (let i = 0; i < json_modes.length; i++) {
    menuItems.push(<MenuItem value={json_modes[i].mode}>{json_modes[i].mode}</MenuItem>);
  }
  // menuItems.push(<MenuItem value={'classic'}>Classic</MenuItem>);
  // menuItems.push(<MenuItem value={'custom'}>Custom</MenuItem>);

  const handleModeChange = (event: SelectChangeEvent) => {
    let mode = event.target.value;
    setMode(mode);
    board_props.mode = mode as string;
    console.log(board_props.mode);
    for (let i = 0; i < json_modes.length; i++) {
      if (json_modes[i].mode === mode) {
        setRowValue(json_modes[i].rows);
        setColValue(json_modes[i].cols);
        if (json_modes[i].mode === 'Custom') {
          setShowName(true);
        } else {
          setShowName(false);
        }
      }
    }
  };

  return (
    <Grid>
      {showOptions && (<div>
      <Box width={300} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <Slider
                onChange={handleRowChange}
                value={rowValue}
                min={3}
                max={26}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
              Rows: {rowValue}
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Slider
                onChange={handleColChange}
                value={colValue}
                min={3}
                max={26}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
              Columns: {colValue}
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box className="py-5" sx={{ minWidth: 120, maxWidth: 240 }}>
        <FormControl fullWidth>
          <InputLabel id="mode-label">Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={mode}
            id="demo-simple-select"
            label="Mode"
            onChange={handleModeChange}
          >
            {menuItems}
          </Select>
        </FormControl>
        <Button className='py-5' variant="contained" onClick={handleStart}>Start Game</Button>
        {showName && <div>
          <TextField className='p-5' id="outlined-basic" label="Mode Name" variant="outlined" />
          <Button className='py-5' variant="contained" onClick={handleCreateMode}>Create Mode</Button>
          </div>}
      </Box>
      </div>)}
      <Box width={800}>
        Board Max: {alphabet[rowValue - 1]} {nums[colValue - 1]}
        <Board row={rowValue} col={colValue} />
      </Box>
    </Grid>
    
  );
};

export default Options;

