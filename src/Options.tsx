// create option component
import { Box, Grid, Slider } from '@mui/material';
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
}

const Options = () => {

  const [rowValue, setRowValue] = useState<number>(8);
  const [colValue, setColValue] = useState<number>(8);
  const handleColChange = (event: Event, newValue: number | number[]) => {
    setColValue(newValue as number);
    board_props.col = newValue as number;
  };

  const handleRowChange = (event: Event, newValue: number | number[]) => {
    setRowValue(newValue as number);
    board_props.row = newValue as number;
  };

  return (
    <Box>
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
      <Box width={600}>
        Board Max: {alphabet[rowValue - 1]} {nums[colValue - 1]}
        <Board row={rowValue} col={colValue} />
      </Box>
    </Box>
  );
};

export default Options;

