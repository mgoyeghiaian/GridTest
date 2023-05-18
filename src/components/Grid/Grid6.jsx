import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Grid1.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#0005',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: '450px',
  color: "#fff",
}));

export default function Grid6() {
  return (
    <Box className='boxx' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs={10} md={8} >
          <Item className='Itemsgrid'>+ add Items</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className='Itemsgrid'>+ add Items</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className='Itemsgrid'>+ add Items</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item className='Itemsgrid'>+ add Items</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
