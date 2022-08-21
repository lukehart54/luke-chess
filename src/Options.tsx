// create option component
import { Box, Grid, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Options = () => {

  const [rowValue, setRowValue] = useState<number>(8);
  const [colValue, setColValue] = useState<number>(8);

  const handleColChange = (event: Event, newValue: number | number[]) => {
    setColValue(newValue as number);
  };

  const handleRowChange = (event: Event, newValue: number | number[]) => {
    setRowValue(newValue as number);
  };

  return (
    <Box width={300} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <Slider
              onChange={handleRowChange}
              value={rowValue}
              min={3}
              max={24}
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
              max={24}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
            Columns: {colValue}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Options;


