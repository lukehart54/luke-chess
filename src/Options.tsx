// create option component
import { Box, Grid, Slider, Select, InputLabel, FormControl, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Board from './Board';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];

let board_props = {
  row: 8,
  col: 8,
  mode: 'classic'
}

const Options = () => {

  const [rowValue, setRowValue] = useState<number>(8);
  const [colValue, setColValue] = useState<number>(8);
  const [mode, setMode] = useState<string>('classic');
  const [showOptions, setShowOptions] = useState<boolean>(true);

  const handleStart = () => {
    setShowOptions(false);
  }
  const handleColChange = (event: Event, newValue: number | number[]) => {
    setColValue(newValue as number);
    board_props.col = newValue as number;
    setMode('custom');
  };

  const handleRowChange = (event: Event, newValue: number | number[]) => {
    setRowValue(newValue as number);
    board_props.row = newValue as number;
    setMode('custom');
  };

  let menuItems = [];
  menuItems.push(<MenuItem value={'classic'}>Classic</MenuItem>);
  menuItems.push(<MenuItem value={'custom'}>Custom</MenuItem>);

  const handleModeChange = (event: SelectChangeEvent) => {
    let mode = event.target.value;
    setMode(mode);
    board_props.mode = mode as string;
    if (mode === 'classic') {
      setRowValue(8);
      setColValue(8);
    } else if (mode === 'lukechess') {
      setRowValue(12);
      setColValue(12);
    } else if (mode === 'ava_mode') {
      setRowValue(5);
      setColValue(5);
    }
    console.log(board_props.mode);
  };

  return (
    <Box>
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
            <MenuItem value={'classic'}>Classic</MenuItem>
            <MenuItem value={'lukechess'}>Luke Chess</MenuItem>
            {/* <MenuItem value={'ava_mode'}>Ava Mode</MenuItem> */}
            <MenuItem value={'custom'}>Custom</MenuItem>
          </Select>
        </FormControl>
        <Button className='py-5' variant="contained" onClick={handleStart}>Start Game</Button>
      </Box>
      </div>)}
      <Box width={800}>
        Board Max: {alphabet[rowValue - 1]} {nums[colValue - 1]}
        <Board row={rowValue} col={colValue} />
      </Box>
    </Box>
  );
};

export default Options;

