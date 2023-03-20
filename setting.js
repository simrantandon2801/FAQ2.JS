import React from 'react'
import { Button } from '@mui/material';
import { Box} from '@mui/material';
import {Grid} from '@mui/material';
import {Typography} from '@mui/material';
import { useState } from 'react';
import Dashboard_au from './Dashboard_author'
import {Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Input from '@mui/material/Input';
import {useMediaQuery} from '@mui/material';
import {TextField} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import {  } from '@mui/base';
import { Autocomplete } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import {Tabs} from '@mui/material';
import {Tab} from '@mui/material';
const ServicesE = [
];
function Setting  ()  {
    const mobile=useMediaQuery('(max-width:600px)')
  const[email,setEmail]=useState('');
  const[otp,setOtp]=useState('');
  const navigate = useNavigate();
  const [value1, setValue1] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleChange11 = (event, value) => {
		setSelectedOptions(value);
		navigate(`../${value}`);
	}
  const handleChange = (event, newValue) => {
    setValue1(newValue);
	};
  const handleExplore =  (e) => {
		setOpen(true);
	};
  
    return (
 
          <> 
          <Dashboard_au />
		  <Box sx={{  backgroundImage: "url(https://drive.google.com/uc?export=view&id=1a9C2MSUDCGw-b7DDDTyCRZAcspkMvKWA)", background:mobile?'':'#F3F5F9',backgroundSize:mobile?"100%":'',display:"flex",width:mobile?'auto':'auto',height:mobile?'1600px':(showGrid)?"0px":'1000px'}}>
	  	{mobile?'':<Grid container lg={12} sx={{marginTop:"20px"}}>
				<Grid container lg={6}>
					<Grid item lg={9} sx={{display:'flex',justifyContent:'end'}}>
					<Typography sx={{fontSize:'36px',color:'#BB0000',fontWeight: '600'}}>Setting</Typography>	
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
      <Box component='form' width="1152px" height='950px' sx={{
				position: 'absolute',
width:mobile?'272px': '75%',
height: mobile?(showGrid)?"850px":'650px':'1200px',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',

				borderRadius: '12px'
			}}>
        {mobile?<Tabs
					value={value1}
					onChange={handleChange}
        
      >
					<Tab label="Personal Settings" value1='0' style={{textTransform:'none'}} href="/Setting"  />
        <Tab label="Account Settings" value1='1' style={{textTransform:'none'}}href="/Setting1" />
       
		</Tabs>
					: 
	  <Tabs style={{marginTop:"26px",marginLeft:'38px'}}
					value={value1}
					onChange={handleChange}
      
      >
					<Tab label="Personal Settings" value1='0' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:600}}component={Link} to="/Setting"  />
							<Tab label="Account Settings" value1='1' style={{ textTransform: 'none', color: '#000000', fontSize: '16px', fontWeight: 400 }} component={Link} to="/Setting1" />
							
		</Tabs>
		  
		  }
      <Grid container lg={12}>
        <Grid container lg={10}>
      <Grid container lg={6} md={12} xs={12}>
      <Grid item lg={8} md={8} xs={10}sx={{textAlign:'initial'}}>
			<Typography variant='h4' sx={{ marginLeft:'0px',marginTop:mobile?'26px':'15px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>First Name*</Typography>
			</Grid>
            <Grid item  lg={6} md={8} xs={10}>
         <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}></label>
             <input
            type="First Name"
            placeholder="Enter your first name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
			style={{width:mobile?"250px":'363px',marginTop:mobile?'6px':'12px',margin:mobile?'auto':'auto',
							height:mobile?"40px":'40px'}}					  />
								  </Grid>
                  </Grid>
                  <Grid container lg={6} md={12} xs={12}>
      <Grid item lg={8} md={8} xs={10}sx={{textAlign:'initial'}}>
			<Typography variant='h4' sx={{ marginLeft:'0px',marginTop:mobile?'16px':'15px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Last Name*</Typography>
			</Grid>
            <Grid item  lg={8} md={8} xs={10}>
         <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}></label>
             <input
            type="last Name"
            placeholder="Enter your last name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
			style={{width:mobile?"250px":'363px',marginTop:mobile?'6px':'12px',margin:mobile?'auto':'auto',
							height:mobile?"40px":'40px'}}					  />
								  </Grid>
                  </Grid>
                  <Grid container lg={6} md={12} xs={12}>
      <Grid item lg={8} md={8} xs={10}sx={{textAlign:'initial'}}>
			<Typography variant='h4' sx={{ marginLeft:'0px',marginTop:mobile?'16px':'58px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Phone Number*</Typography>
			</Grid>
            <Grid item  lg={8} md={8} xs={10}>
         <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}></label>
             <input
            type="phone number"
            placeholder="Enter your phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
			style={{width:mobile?"250px":'363px',marginTop:mobile?'6px':'12px',margin:mobile?'auto':'auto',
							height:mobile?"40px":'40px'}}					  />
								  </Grid>
                  </Grid>
                  <Grid container lg={6} md={12} xs={12}>
      <Grid item lg={8} md={8} xs={10}sx={{textAlign:'initial'}}>
			<Typography variant='h4' sx={{ marginLeft:'0px',marginTop:mobile?'16px':'58px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Email*</Typography>
			</Grid>
            <Grid item  lg={8} md={8} xs={10}>
         <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}></label>
             <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
			style={{width:mobile?"250px":'363px',marginTop:mobile?'6px':'12px',margin:mobile?'auto':'auto',
							height:mobile?"40px":'40px'}}					  />
								  </Grid>
                  </Grid>
                  </Grid>
                  <Grid container lg={2} md={12} xs={12} sx={{margin:'auto'}}>
                  
                  <Grid item  lg={8} md={8} xs={10}>
               <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"24px",marginTop:'8px'}}></label>
                   <Input
                  type="Upload Picture"
                  placeholder="Upload Picture"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
            style={{width:mobile?'':'180px',
                    height:mobile?"40px":'138px'}}	
                    startAdornment={<>
                      <InputAdornment position="start">
                        <CameraAltOutlinedIcon />
                      </InputAdornment>
                       <InputAdornment position="end">
                       <AddIcon sx={{color:'#3A81F3'}}/>     
                     </InputAdornment>
                     </>
                    }	  />
                        </Grid>
                        </Grid>
                  
                  <Grid container lg={10}>
			<Grid item md={12} xs={11} lg={2} sx={{justifyContent:mobile?"center":"initial",display:'flex'}} >				  
        <Button
              variant="contained"
              
				sx={{marginTop:mobile?'16px':'26px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'12px':'16px',borderRadius:'8px',border:'1px solid #ACACAC',
								  height: mobile ? '40px' : '48px',display:'flex',backgroundColor:'transparent',color:'#63636D'
							  }}
							  onClick={handleExplore}
            >
              DISCARD
							  </Button>
							  </Grid>
							  <Grid item md={12} xs={11} lg={2} sx={{justifyContent:mobile?"center":"initial",display:'flex'}} >				  
        <Button
              variant="contained"
              
				sx={{marginTop:mobile?'16px':'26px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'12px':'16px',borderRadius:'8px',
								  height: mobile ? '40px' : '48px',display:'flex',backgroundColor:'#3A81F3',color:'primary'
							  }}
							  onClick={handleExplore}
            >
              Save
							  </Button>
							  </Grid>
			</Grid>
                  
                  </Grid>
                  </Box>
		  </Box>
           

</> 
  
  )
}

export default Setting;
