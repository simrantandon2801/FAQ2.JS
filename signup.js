import React from 'react';
import { useState } from "react";
import Paper from '@mui/material/Paper';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Typography } from '@mui/material';
import Image from "mui-image";
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ResponsiveAppBar from './menu';
import Container from '@mui/material/Container';
import { useDevice } from '../responsive/devices';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BASE_URL,Email_URL } from './helper';
import useMediaQuery from '@mui/material/useMediaQuery';
const theme = createTheme();
function Copyright(props) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
		<Link color="inherit" href="https://mui.com/">
		  Your Website
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }
const styles = {
    paperContainer: {
		backgroundImage: `url(${'https://drive.google.com/uc?export=view&id=1nJaKiSCz6MkSuZf624PYifAkUNYfwxNV'})`,
		width: '608px',
		height:'750px'
    }
};


function Home() {
	const devices = useDevice();
	const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
	const [data, setData] = useState({
		Name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const responseGoogle = (response) => {
		
		var userObject = jwt_decode(response.credential);
		
		localStorage.setItem('user', response.credential);
		
		navigate('/Explore')
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			
			const { data: res } = await axios.post(`${BASE_URL}/api/users/`, data);
			const resData = await res;
			
			navigate("/Sign in");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	const google = () => {
		window.open(`${Email_URL}/auth/google/`, "_self");
		console.log('lol')
	};
	return (<>
		<ResponsiveAppBar />
		
		<Grid container lg={12} md={12} xs={12}>	
			<Grid item lg={5} md={12} xs={12}>
			<Paper style={{backgroundImage: devices.desktop?`url(${'https://drive.google.com/uc?export=view&id=1nJaKiSCz6MkSuZf624PYifAkUNYfwxNV'})`:ipad?`url(${'https://drive.google.com/uc?export=view&id=1_bSnmg_Y4DQCNXHpGGA3gfvN4RiFgFKr'})`:`url(${'https://drive.google.com/uc?export=view&id=1Tgg2Ou3AcbJ9HB0q35a4RI4P4UTfBSM5'})`,
		width: mobile?'-webkit-fill-available':'-webkit-fill-available',backgroundRepeat:'no-repeat',backgroundSize:mobile?"cover":'100%',
		height:mobile?'280px':'741px'}}>
					
				</Paper>
				</Grid>
				
			<Grid item  lg={7} md={12} xs={12}>	
			<Paper style={{height:mobile?"600px":"741px",marginTop:mobile?'-38px':ipad?'-240px':'-96px',marginLeft:mobile?'0px':'-12px',borderTopLeftRadius:'20px',borderTopRightRadius:mobile?'20px':ipad?'20px':'0px'}}>
			<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
								marginTop: mobile ? '20px' : 12,
								marginLeft: mobile? '20px':0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
							>
		<Grid container md={12} xs={10} sx={{marginLeft:mobile?'0px':'185px',marginTop:mobile?'36px':'102px'}}>
								<Typography variant={ mobile?"h5":'h3'} sx={{ fontstyle: 'normal',fontSize: mobile?'24px':'36px',textAlign:'center',fontWeight:'600',lineheight: '48px',marginLeft: mobile? '50px':ipad?'-50px':0}}>
            Create Account 
          </Typography>
			</Grid>
		<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container >
			<Grid container md={12} xs={12} sx={{mt:'10px',mb:'20px'}} >
			<Grid item  md={4} xs={12}>
			<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial'}}>Name</Typography>
			</Grid>
			<Grid item md={12} xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
				  id="Name"
				  onChange={handleChange}
				  value={data.Name}
                  placeholder='Enter your name'
                  size='small'
                />
              </Grid>
              </Grid>
			<Grid container md={12} xs={12} sx={{mt:'10px',mb:'20px'}} >
				<Grid item md={4} xs={12} spacing={2}>
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Email</Typography>
				</Grid>
				<Grid item md={12} xs={12}>
				<TextField
                  required
                  fullWidth
                  id="email"
                 placeholder='Enter your email'
				 name="email"
				 onChange={handleChange}
				  value={data.email}
				autoComplete="email"
				size='small'
				/>
				</Grid>
				</Grid>
				<Grid container md={12}xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item md={4}xs={12} >
					<Typography variant='h4' sx={{ fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Password</Typography>
				</Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder='Enter your password'
                  type="password"
													id="password"
													onChange={handleChange}
				  value={data.password}
													autoComplete="new-password"
													size='small'
                />
				</Grid>
										</Grid>
										{error && <div className={styles.error_msg}>{error}</div>}
              <Grid item md={12} xs={12}>
			  <Grid container justifyContent="flex-end" md={12} xs={12}>
              <Grid item >
                <Link to="../forgotpassword" variant="body2" style={{textDecoration:'none',color: '#3A81F3'}}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
			sx={{
				mt: 3, mb: 2, background: '#3A81F3',
				borderRadius: '8px',textTransform:'none'}}
			>
			Sign Up
			</Button>	
            
			<Grid container md={12} xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item md={12}xs={12} >
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',color:'#63636D' }}>Or</Typography>
				</Grid>
              <Grid item md={12}xs={12}sx={{marginLeft:mobile?'52px':"100px",marginBottom:"20px",marginTop:"20px"}} >
			  <GoogleOAuthProvider 
                clientId={`73790928133-suk88f55p624r77bnohl5iv3l6g3tjtm.apps.googleusercontent.com`}
                >
             <GoogleLogin style={{ width: "500px" }}	
              render={(renderProps) => (
                <button
                  type="button"
                  
                  onClick={renderProps.onClick}
					disabled={renderProps.disabled}
														
                >
															{/* <FcGoogle className="mr-4" /> */}
															Sign in with5 google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
            </GoogleOAuthProvider>
				</Grid>
				</Grid>
				<Grid container  md={12} xs={12}>
              <Grid item md={12} xs={12} >
                <Typography href="#" variant="body2"style={{textAlign:'center'}} >
                  Already have an account?<Link to="/Sign in" variant="body2"style={{textDecoration:'none'}}>Sign in</Link> 
                </Typography>
              </Grid>
			</Grid>
									
          </Box>
        </Box>
		
		</Container>
					</ThemeProvider>
					</Paper>	
		</Grid>
		</Grid>
		</>
        )
    }
export default Home;
