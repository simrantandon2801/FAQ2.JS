import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Dashboard_au from '../Dashboard_author/Dashboard_author';
import { useMediaQuery } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import {Image} from 'mui-image';
import { Autocomplete } from '@mui/material';
const ServicesE = [
	{ title: "Editing" ,value:'editing'},
	{ title: "Cover Designing"},
	{ title: "Translation" },
	{ title: "Book Store" },
	{ title: "Book Reviews" },{ title: "Book Trailer" },{ title: "Ghost Writing" },{ title: "Amazon Ads" }
  ];

function Playlist() {
	const mobile = useMediaQuery('(max-width:600px)');
	const [showGrid, setShowGrid] = useState(false);
	const navigate = useNavigate();
	const [selectedOption, setSelectedOptions] = useState("");
	const handleChange11 = (event, value) => {
		setSelectedOptions(value);
		navigate(`../${value}`);
	}
  return (<>
	<Dashboard_au />
		<Box sx={{  backgroundImage: "url(https://drive.google.com/uc?export=view&id=1a9C2MSUDCGw-b7DDDTyCRZAcspkMvKWA)", background:mobile?'':'#F3F5F9',backgroundSize:mobile?"100%":'',display:"flex",width:mobile?'auto':'auto',height:mobile?'1600px':(showGrid)?"0px":'0px'}}>
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
			   <Grid container lg={12} sx={{gridRowGap: '64px',gridColumnGap:"16px"}}>
				  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1pAQzoyrZegi-EHsOIkzuNHvqf9PXkgfo"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 1: Introduction</Typography>
					  </Grid>
					  
					  
				  </Grid>
				  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1lIXWIcxe3w_Uos-bZdxkV0vWpDmwUu0Q"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 2: What is this course about?</Typography>
					  </Grid>
					  
					  
				  </Grid>
				  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1Cqa_EKmPCzDlxdpyUqPeEiOizBK6qSZ3"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 3: Where to get ides from?</Typography>
					  </Grid>
					  
					  
				  </Grid>
				  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=14UUPc8-486E-DY8YuRciDZYz8FIhzpT7"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 4: Choose a theme</Typography>
					  </Grid>
					  
					  
				  </Grid>
				  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1acPYix99V22OKT8oJTdYaPDTrG98PFua"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 5: Reseach</Typography>
					  </Grid>
					  
					  
			  </Grid>

			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1WWYL2D8TNWdpvCrNKMT0DPg2_705Rm_1"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 6: Plot</Typography>
					  </Grid>
					  
					  
			  </Grid>
			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1wgHzYo1iqYgoASs0C-W0h_9oVzqvMunS"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 7: Characters</Typography>
					  </Grid>
					  
					  
			  </Grid>
			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1t5XA36RqqgNjeksNKCiW5bJpYNdHbGh3"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 8: Setting</Typography>
					  </Grid>
					  
					  
			  </Grid>
			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1o4xdFu7PXoSm89e351hfL3TuQbAdHLbh"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 9:</Typography>
					  </Grid>
					  
					  
			  </Grid>
			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=10vng-WxBBP8O3v3502Q-1Zp0y0PoA3S_"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 10:</Typography>
					  </Grid>
					  
					  
			  </Grid>
			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1fZBxrJ3uEh_BQLjASs2lqe8-XXdgGH_7"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 11:</Typography>
					  </Grid>
					  
					  
			  </Grid>

			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1rDiqu0znmGlrakZsD2VWUXqlP6lMqk4M"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 12:</Typography>
					  </Grid>
					  
					  
			  </Grid>
			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=12sRqHelGaUVh-M9c58ZPn3rq5xn4rKRS"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 13:</Typography>
					  </Grid>
					  
					  
			  </Grid>
			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1oxxJfVnhfx_iarKMcKgrS1znzkORI_LS"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 14:</Typography>
					  </Grid>
					  
					  
			  </Grid>
			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=11Zv_kTB5gftH4RxTOJ2MN77xZC9nXEmP"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 15:</Typography>
					  </Grid>
					  
					  
				  </Grid>
				  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1-3gkws_GU5X7luDFD-Rc768cn-Sillpy"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 16:</Typography>
					  </Grid>
					  
					  
			  </Grid>
			  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1U5wxhMiUbr0GBmsp0ixxyd9mQeAVPdBF"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 17:</Typography>
					  </Grid>
					  
					  
				  </Grid>
				  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1yFwD4DL68oBLeG3TWDxniLus_6othdM8"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 18:</Typography>
					  </Grid>
					  
					  
				  </Grid>
				  < Grid container lg={2.8}>
				<Grid item lg={12}>  
			  <Link to='/course' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1pLjWmBISFA57ewFTzp5Nu3fW39gl9rt7"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px",wdith:"100%",height:"100%"}}
								/>
						  </Link>	 
					  </Grid>
					  <Grid item lg={12}>
						  <Typography sx={{fontSize: '18px',textAlign:'initial'}}>Episode 19:</Typography>
					  </Grid>
					  
					  
			  </Grid>
		
		  </Grid>
			  
		  </Box>
		 
		  
	  </Box>
	  </>
  )
}
export default Playlist;
