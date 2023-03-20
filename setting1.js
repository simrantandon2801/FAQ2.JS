import React from 'react'
import { Paper,Box, Typography, Button } from '@mui/material';
import Dashboard_menu from './Dashboard_menu';
import useMediaQuery from '@mui/material/useMediaQuery';
// import DashboardFooter from './DashboardFooter';
import {TextField} from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Confetti from "react-confetti";
import Dashboard_au from './Dashboard_author';
import { Link} from 'react-router-dom';
import {Tabs} from '@mui/material';
import {Tab} from '@mui/material';
import { useState } from 'react';
import {Autocomplete} from '@mui/material';

const ServicesE = [
];
function Setting1() {
	const mobile = useMediaQuery('(max-width:600px)');
	const[email,setEmail]=useState('');
	const [showConfetti, setShowConfetti] = React.useState(false);
	const styles = {
		paperContainer: {
			backgroundImage: mobile?`url(https://drive.google.com/uc?export=view&id=19eIDGRfBybfg2NM3sqpc5st9g-Wgw7YA),url(https://drive.google.com/uc?export=view&id=10AfCZlkqBJNXIqQmUSA1fV5sWtNfj242)`:`url(https://drive.google.com/uc?export=view&id=11K46_gkQ5voIg-2ia3SwujJLoDtrbIQ2),url(https://drive.google.com/uc?export=view&id=12vB0TKVYwiTQHlHQuXqcOcjwDui3fspu)`,
			backgroundSize: mobile?'30%,38%':'11%,15%',
			backgroundPosition:'top left,bottom Right'
		}
	}
	const [open, setOpen] = React.useState(false);
	const [showGrid, setShowGrid] = useState(false);
	const [value1, setValue1] = React.useState(1);
	const [selectedOptions, setSelectedOptions] = useState([]);
	const navigate = useNavigate();
	const handleClose = () => {
		setOpen(false);
		
	};
	const handleExplore =  (e) => {
		setOpen(true);
	};
	const handleChange = (event, newValue) => {
		setValue1(newValue);
		};
		const handleChange11 = (event, value) => {
			setSelectedOptions(value);
			navigate(`../${value}`);
		}
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
width:mobile?'275px': '75%',
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
        <Tab label="Account Settings" value1='1' style={{textTransform:'none'}}href="/Settings1" />
       
		</Tabs>
					: 
	  <Tabs style={{marginTop:"26px",marginLeft:'38px'}}
					value={value1}
					onChange={handleChange}
      
      >
					<Tab label="Personal Settings" value1='0' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}}component={Link} to="/setting"  />
							<Tab label="Account Settings" value1='1' style={{ textTransform: 'none', color: '#000000', fontSize: '16px', fontWeight: 600 }} component={Link} to="/Setting1" />
							
		</Tabs>
		  
		  }
		  <Grid container lg={12} md={10} xs={12}>
		  <Grid container lg={12} md={12} xs={12}>
      <Grid item lg={8} md={8} xs={10}sx={{textAlign:'initial'}}>
			<Typography variant='h4' sx={{ marginLeft:'0px',marginTop:mobile?'30px':'56px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Current  Password *</Typography>
			</Grid>
            <Grid item  lg={6} md={8} xs={10}>
         <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}></label>
             <input
            type="Current password"
            placeholder="Enter current name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
			style={{width:mobile?"250px":'470px',marginTop:mobile?'6px':'12px',
							height:mobile?"40px":'40px',marginRight:mobile?'6px':'12px'}}					  />
								  </Grid>
                  </Grid>
				  <Grid container lg={12} md={12} xs={12}>
      <Grid item lg={8} md={8} xs={10}sx={{textAlign:'initial'}}>
			<Typography variant='h4' sx={{ marginLeft:'0px',marginTop:mobile?'16px':'58px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>New Password *</Typography>
			</Grid>
            <Grid item  lg={6} md={8} xs={10}>
         <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}></label>
             <input
            type="New Password *"
            placeholder="Enter new password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
			style={{width:mobile?"250px":'470px',marginTop:mobile?'6px':'12px',
							height:mobile?"40px":'40px',marginRight:mobile?'6px':'12px'}}					  />
								  </Grid>
                  </Grid>
				  <Grid container lg={12} md={12} xs={12}>
      <Grid item lg={8} md={8} xs={10}sx={{textAlign:'initial'}}>
			<Typography variant='h4' sx={{ marginLeft:'0px',marginTop:mobile?'16px':'58px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Confirm Password *</Typography>
			</Grid>
            <Grid item  lg={6} md={8} xs={10}>
         <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}></label>
             <input
            type="Confirm Password *"
            placeholder="Re-nter new password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
			style={{width:mobile?"250px":'470px',marginTop:mobile?'6px':'12px',
							height:mobile?"40px":'40px'}}					  />
								  </Grid>
                  </Grid>
				 
				  <Grid container lg={2} md={12} xs={12}>
				 
							  <Grid item md={12} xs={11} lg={6} sx={{justifyContent:mobile?"center":"initial",display:'flex'}} >				  
       
							  </Grid>
							  
				  </Grid>
		  </Grid>
		  <Grid container lg={12} xs={8}>
			<Grid container lg={10} xs={12}>
			<Grid item md={12} xs={6} lg={2} sx={{justifyContent:mobile?"center":"initial",display:'flex'}} >				  
        <Button
              variant="contained"
              
				sx={{marginTop:mobile?'16px':'26px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'12px':'16px',borderRadius:'8px',
								  height: mobile ? '40px' : '48px',display:'flex',backgroundColor:'#F3F5F9',color:'#63636D',border:'1px solid #ACACAC',
							  }}
							  onClick={handleExplore}
            >
              DISCARD
							  </Button>
							  </Grid>
							  <Grid item md={12} xs={6} lg={2} sx={{justifyContent:mobile?"center":"initial",display:'flex'}} >				  
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
			<Grid container lg={2}>
			<Button
              variant="contained"
              
				sx={{marginTop:mobile?'16px':'26px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'12px':'16px',borderRadius:'8px',
								  height: mobile ? '40px' : '48px',display:'flex',backgroundColor:'#F3F5F9',color:'#FF0000',border: '1px solid #FF0000'
							  }}
							  onClick={handleExplore}
            >
             Delete Account 
							  </Button>
			</Grid>
		  </Grid>
		  </Box>
		  </Box>
	  </>
  )
}
export default Setting1;
