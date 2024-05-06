import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';
import { Badge, Box, Button, Grid } from '@mui/material';



export default function JobCard() {

  const [data, setData] = useState([])
    

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    "limit": 20,
    "offset": 0
   });

   console.log(body);
   
   const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
   };
   
   useEffect(() => {
   fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => response.json())
    .then((response)=> setData(response.jdList))
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    console.log(data);
     // eslint-disable-next-line
  },[])

console.log(data);
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} columns={2}>
                  
                    
    {
        
            data.map((details) => (
                <Grid item xs="auto">             
                     
    <Card sx={{ maxWidth: 380 }} style={{borderRadius:15}}>
        <Badge variant="contained" style={{display:"flex", alignItems:"center", justifyContent:"center", margin:15, borderRadius:15, backgroundColor:"#f3f6f4", width:200, height:30}}>Posted 6 days ago</Badge>
    
      <CardContent style={{display:"flex", flexDirection:"row", justifyContent:"flex-start"}}>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: yellow[500] }} aria-label="recipe" src={details.logoUrl}> 
          </Avatar>
        }     
        />
        <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
      <Typography >{details.companyName}</Typography>
      <Typography>{details.jobRole}</Typography>
      <Typography >{details.location}</Typography>
      </div>
      </CardContent>
      
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{display:"flex", justifyContent:"flex-start"}}>
            Estimated Salary: {details.minJdSalary} - {details.maxJdSalary}USD
        </Typography>
        <Typography variant='primary' style={{display:"flex", justifyContent:"flex-start", marginTop:5, }} fontSize={20} fontWeight="490">About Company:</Typography>
        <Typography style={{display:"flex", justifyContent:"flex-start"}} fontWeight="bold">About us</Typography>
        <Typography paragraph color="text.secondary" style={{display:"flex", justifyItems:"flex-start", alignItems:"flex-start", maxHeight:200, overflow:"hidden"}}>
          {details.jobDetailsFromCompany}
        </Typography>
        <p style={{color:"blue"}}>View Job</p>
        <Typography variant="body2" color="text.secondary" style={{display:"flex", justifyContent:"flex-start"}} fontWeight="500">Minimum Experience </Typography>
        <Typography style={{display:"flex", justifyContent:"flex-start"}}>{details.minExp} years</Typography>
        <Button variant="contained"
              style={{
                margin: 10,
                width: "100%",
                height: 40,
                backgroundColor: "#09e8ba",
                color: "black",
                fontWeight: "bold"
              }}>Easy Apply</Button>
        <Button variant="contained"
              style={{
                margin: 10,
                width: "100%",
                height: 40,
                backgroundColor: "#5f20f7",
              }}>Unlock referral asks</Button>
      </CardContent>            
    </Card>
    </Grid>
       ))
     }                    
   </Grid>
   </Box>

  </div>
  );
}