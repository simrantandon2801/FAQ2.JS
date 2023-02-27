import React from 'react'
import Dashboard_au from '../Dashboard_author/Dashboard_author';
import { Box } from '@mui/system';
import {useMediaQuery} from '@mui/material';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';
import { Autocomplete } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {TextField} from '@mui/material';
import {Image} from 'mui-image';
function Episode1 ()  {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const mobile = useMediaQuery('(max-width:600px)');
    const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
    const handleChange11 = (event, value) => {
      setSelectedOptions(value);
      navigate(`../${value}`);
  }
  const navigate = useNavigate();
  const handleExplore =  (e) => {
  navigate('/Editing')
};
  const ServicesE = [
      
    ];
  return (
    <>
      <Dashboard_au/>
      
      <Box sx={{  backgroundImage: "url(https://drive.google.com/uc?export=view&id=1a9C2MSUDCGw-b7DDDTyCRZAcspkMvKWA)", background:mobile?'':'#F3F5F9',backgroundSize:mobile?"100%":'',display:"flex",width:mobile?'auto':'auto',height:mobile?'1600px':(showGrid)?"0px":'1000px'}}>
		{mobile?'':<Grid container lg={12} sx={{marginTop:"20px"}}>
				<Grid container lg={6}>
					<Grid item lg={9} sx={{display:'flex',justifyContent:'end'}}>
					<Typography sx={{fontSize:'36px',color:'#BB0000',fontWeight: '600'}}>Marketplace</Typography>	
					</Grid>
				</Grid>
				<Grid container lg={6} sx={{justifyContent:'space-around'}}>
					<Grid item lg={6}>
						<Autocomplete
							disableClearable
							value={ServicesE.value}
							onChange={handleChange11}
							style={{ backgroundColor: '#FFFFFF' }}
        options={ServicesE.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
				placeholder="Search for book services"	
            InputProps={{
              ...params.InputProps,
              type: "search"
            }}
          />
        )}
      />
		
					</Grid>
					<Grid item lg={4} sx={{display:'flex',justifyContent:"start"}}>
					<Button variant="contained" color="primary" sx={{backgroundColor:'#3A81F3',textDecoration:'none',textTransform:'none',borderRadius:"8px",width:'119px',height:"48px"}}>
            Contact Us
          </Button>
					</Grid>
				</Grid>
		  </Grid>}	
		  <Box   width="1152px" height='1148px' sx={{
				position: 'absolute',
width: mobile?'272px': '75%',
height: mobile?(showGrid)?"1500px":'1400px':(showGrid)?"2000px":'100px',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',
top: mobile?'90px': '115px',
		  }}>
        <Grid container lg={12} >
                <Grid container md={12} xs={11} lg={8}>
        <Grid item lg={9} md={12} xs={12}   sx={{textAlign: 'center'}}>
          
        <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1oqJWafHVHnqBaZ7I5oEsHXvcDhK4ZyRV"
              style={{ transitionDuration:'0',animation:'0',width:mobile?'128px':"100%",height:mobile?'88px':"282px",borderRadius:"12px",}}></Image> 
        </Grid>
        <Grid item lg={9} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'16px':'24px',lineHeight:mobile?'20px':'40px',fontWeight:mobile?'700':'600'}}>Episode 1: Introduction</Typography>
        </Grid>
        </Grid>
        <Grid container md={12} xs={11} lg={4}>
        {mobile?'':<Grid item lg={9} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'32px':'24px',lineHeight:mobile?'36px':'40px',fontWeight:mobile?'700':'600'}}>Up next</Typography>
        </Grid>}
        <Grid container md={12} xs={12} lg={12}>
        <Grid item lg={12} md={12} xs={6}   sx={{textAlign: 'center'}}>
          
        <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1lIXWIcxe3w_Uos-bZdxkV0vWpDmwUu0Q"
              style={{ transitionDuration:'0',animation:'0',width:mobile?'128px':"276px",height:mobile?'88px':"180px",borderRadius:"12px",marginTop:mobile?'12px':'12px'}}></Image> 
        </Grid>
        <Grid item lg={12} md={12} xs={6}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':'22px',fontWeight:mobile?'700':'600',marginTop:mobile?'12px':'8px'}}>Episode 2: What is this course about?</Typography>
        </Grid>
        </Grid>
        <Grid container md={12} xs={12} lg={12}>
        <Grid item lg={12} md={12} xs={6}   sx={{textAlign: 'center'}}>
          
        <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1Cqa_EKmPCzDlxdpyUqPeEiOizBK6qSZ3"
              style={{ transitionDuration:'0',animation:'0',width:mobile?'128px':"276px",height:mobile?'88px':"180px",borderRadius:"12px",marginTop:mobile?'12px':'26px'}}></Image> 
        </Grid>
        <Grid item lg={12} md={12} xs={6}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':'22px',fontWeight:mobile?'700':'600',marginTop:mobile?'12px':'8px'}}>Episode 3: Where to get ides from?</Typography>

        </Grid>
        </Grid>
        </Grid>
        
        </Grid>
      </Box>

</Box>
    </>
  )
}

export default Episode1;

