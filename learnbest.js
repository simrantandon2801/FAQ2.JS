import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Dashboard_au from '../Dashboard_author/Dashboard_author';
import {useMediaQuery} from '@mui/material';
import {Grid} from '@mui/material';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import { Autocomplete } from '@mui/material';
import {ServicesE} from '../components/Services';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Paper} from '@mui/material';
import Image from 'mui-image';
import {Link} from '@mui/material';
function Learnbest () {
    const [selectedOptions, setSelectedOptions] = useState([]);
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
    
      <Box sx={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=1a9C2MSUDCGw-b7DDDTyCRZAcspkMvKWA)", background:mobile?'':'#F3F5F9',backgroundSize:mobile?"100%":'',display:"flex",width:mobile?'auto':'auto',height:mobile?'912px':'1350px'}}>
      {mobile?'':<Grid container md={12} sx={{marginTop:"20px"}}>
				<Grid container md={6}>
					<Grid item md={12}>
					<Typography sx={{fontSize:'36px',color:'#BB0000',fontWeight: '600'}}>Marketplace</Typography>	
					</Grid>
				</Grid>
                
				<Grid container md={6}>
					<Grid item md={6}>
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
					<Grid item md={2}>
					<Button variant="contained" color="primary" sx={{textDecoration:'none',textTransform:'none',borderRadius:"8px",width:'119px',height:"48px"}}>
            Contact Us
          </Button>
					</Grid>
				</Grid>
			</Grid>}
            
			<Box component='form' width="1152px" height='750px' sx={{
				position: 'absolute',
width:mobile?'272px': '75%',
height: mobile?'800px':'1198px',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',
background: '#FFFFFF',
				borderRadius: '12px'
			}}>
        <Grid container lg={12} >
                <Grid container md={12} xs={11} lg={7.5}>
        <Grid item lg={9} md={12} xs={12}   sx={{textAlign: 'center'}}>
          
       <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'32px':'64px',marginTop:mobile?'36px':'132px',color: '#3A81F3',lineHeight:mobile?'36px':'66px',fontweight:mobile?'700px':''}}><b>LEARN FROM THE BEST</b></Typography> 
        </Grid>
       
        <Grid item md={12} xs={11} lg={12} >
          
          
           {mobile?
           <Link to='..learnbest' style={{textDecoration:'none',color:'black'}}>
           
           <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'20px':'16px',marginTop:mobile?'16px':'26px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapi, tellus vitae, euismod neque. Nulla facilisi.</Typography>
          
          </Link>
       :
        
        <Link to='../learnbest' style={{textDecoration:'none',color:'black'}}>
        
       
       <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'20px':'16px',marginTop:mobile?'35px':'26px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrivel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</Typography> 
       
       </Link>
           }
        </Grid>
        <Button
              variant="contained"
              color="primary"
				sx={{marginTop:mobile?'16px':'26px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'10px':'16px',borderRadius:'8px',
								  height: mobile ? '27px' : '48px',display:'flex',
							  }}
							  onClick={handleExplore}
            >
              Explore now
					  </Button>
            </Grid>
            </Grid>
            
                      <Grid container md={12} xs={12} lg={4.5}  >
			  <Grid item  xs={12} lg={10} md={10} sx={{margin:'auto'}} >
			  <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1oqJWafHVHnqBaZ7I5oEsHXvcDhK4ZyRV"
              style={{ transitionDuration:'0',animation:'0',width:mobile?'128px':"100%",height:mobile?'88px':"282px",borderRadius:"12px",marginTop:mobile?'26px':'100px',}}
            />
			  </Grid>
		  </Grid>
    
            </Box>
          
                </Box>
    </>
  )

  }
export default Learnbest;
