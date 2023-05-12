import React from 'react'
import Dashboard_au from '../Dashboard_author/Dashboard_author'
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
import Footer from '../footer';
import ResponsiveAppBar from './menu';
import CardMedia from '@mui/material/CardMedia';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import {Paper} from '@mui/material';
function Editing1  ()  {
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
     <ResponsiveAppBar/>
     
     <Grid item lg={10} md={12} xs={12}   sx={{textAlign: 'center',marginTop:"80px"}}>
        <Typography variant='h2' sx={{textAlign:'center',fontSize:mobile?'20px':'36px',lineHeight:mobile?'24px':'48px',fontWeight:mobile?'600':'600'}}>Editing</Typography>
        </Grid>

<Grid container lg={10} xs={10}  sm={10} md={10} sx={{ margin:'auto',marginTop:'0px',bgcolor:'#F3F5F9'}}>

                <Grid container md={7} xs={11} lg={7} sm={7} >
        
        
        <Grid container md={12} xs={12} lg={10.5}>
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'26px':'56px'}}>Remember those career counselling sessions that you attended in College? They offered you assistance that enabled you to choose your career wisely, which focused on your success and achievement.</Typography>
        </Grid>
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'26px'}}>Your book deserves similar guidance. A solid team of literary editors is essential to the success of your book, from developmental editors who offer insight on story and structure to copy editors and proofreaders who polish your work's mechanics.</Typography>
        </Grid>
        <Grid item lg={11} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'26px'}}>In order to actively select the ideal editor for your book, Hubhawks offers you a diversified marketplace of the greatest editors in the sector. We provide you the freedom and access to the finest talent available: experts who will go the extra mile to make your book flourish.</Typography>
        </Grid>
        <Grid item lg={11} md={12} xs={12}   sx={{textAlign: 'center'}}>
        
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'26px'}}>Here are all the editing services we offer:<br/>
</Typography>
        </Grid>
        <Grid item lg={5} md={12} xs={12}  >
          
        <ul style ={{listStyle: 'disc'}}>
        <li>
          <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'2px'}}>Development Editing</Typography>
          </li>
            <li>
   <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'2px':'2px'}}>Copy-editing</Typography>
</li>
            <li>
   <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'2px':'2px'}}>Proofreading</Typography>
</li>
  <li>
   <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'2px':'2px'}}>Beta-reading</Typography>
</li>
  <li>
   <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'2px':'2px'}}>Editorial Evaluation</Typography>
</li>
  <li>
   <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'2px':'2px'}}>Narrative Assessment</Typography>
</li>
        </ul>
        </Grid>
        </Grid>
        </Grid>
       
     
        
        <Grid container md={5} xs={11} lg={5} sm={5} sx={{marginTop:'56px'}}>
        
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center',}}>
        
				
    <Image src="https://drive.google.com/uc?export=view&id=1u2TduH_mtzlWfWacpW1nnhPnBz-RrW1i"
				 style={{
						justifyContent: 'space-around', width: mobile?'260px':ipad?"345px":'483px', height: mobile?'233px':ipad?"309px":'407px', position: 'absolute',borderRadius:"36px",
						marginLeft:mobile?'31px':ipad?"88px":'0px',marginTop:mobile?'-2px':ipad?"60px":'18px',top:'300px',left:'55%'
					}}
      />

<Image src="https://drive.google.com/uc?export=view&id=1q_ploOzSWjm9XQc-7A5-5JOLlYVtAG55"
				 style={{
						justifyContent: 'space-around', width: mobile?'260px':ipad?"345px":'195px', height: mobile?'233px':ipad?"309px":'195px', position: 'absolute',borderRadius:"36px",
						marginLeft:mobile?'31px':ipad?"88px":'0px',marginTop:mobile?'-2px':ipad?"60px":'18px',zIndex:'-1',top:'590px',left:'48%'
					}}
      />
			
         
        </Grid>
       
        </Grid>
        </Grid>
       
        <Grid container lg={10}>
        <Button
  variant="contained"
  color="primary"
  sx={{
    textTransform: 'none',
    fontWeight: '500',
    fontSize: mobile ? '10px' : '16px',
    borderRadius: '8px',
    height: mobile ? '27px' : '40px',
    display: 'flex',
    margin: '56px auto',
  }}
  onClick={handleExplore}
  endIcon={<KeyboardArrowRightIcon />}
>
  Explore now
</Button>
            </Grid>
      
     <Footer/>
    </>
  )
}

export default Editing1
