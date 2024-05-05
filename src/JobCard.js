
// export const JobCard = ({owner, imageUrl}) => {
//     return (
//         <div class="w-full rounded overflow-hidden shadow-lg m-2">
//             <img class="w-full h-64 object-center" src={imageUrl} />
//             <div class="px-6 py-4">
//                 <div class="font-regular text-xl mb-2">{owner}</div>
//             </div>
//         </div>
//     );
// }
import { useEffect, useState } from 'react';
import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
//import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
//import CardActions from '@mui/material/CardActions';
//import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
//import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge, Box, Button, Grid } from '@mui/material';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function JobCard() {

    const [data, setData] = useState([])
    
      // const [isLoading, setIsLoading] = useState(false);
      // const [error, setError] = useState(null);
      // const [page, setPage] = useState(1);
    
      // ... rest of the component
    


  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    "limit": 10,
    "offset": 0
   });
   
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

  //const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} columns={2}>
                  
                    
    {
        
            data.map((details) => (
                <Grid item xs="auto">             
                     
    <Card sx={{ maxWidth: 380 }}>
        <Badge variant="secondary" style={{textAlign:"left"}}>Posted 6 days ago</Badge>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: yellow[500] }} aria-label="recipe" src={details.logoUrl}>
           
          </Avatar>
        }
        style={{display:"flex", justifyContent:"flex-start"}}
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={details.companyName}
        subheader={[details.jobRole, details.location]}
        
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{display:"flex", justifyContent:"flex-start"}}>
            Estimated Salary: {details.minJdSalary} - {details.maxJdSalary}LPA
        </Typography>
        <Typography style={{display:"flex", justifyContent:"flex-start"}}>About Company:</Typography>
        <Typography style={{display:"flex", justifyContent:"flex-start"}}>About us</Typography>
        <Typography paragraph color="text.secondary" style={{display:"flex", justifyContent:"flex-start"}}>
          {details.jobDetailsFromCompany}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{display:"flex", justifyContent:"flex-start"}}>Minimum Experience </Typography>
        <Typography style={{display:"flex", justifyContent:"flex-start"}}>{details.minExp} years</Typography>
        
       
        <Button variant="contained"
              style={{
                margin: 10,
                width: "100%",
                height: 40,
                backgroundColor: "#09e8ba",
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
