import React from 'react';
import  { useState, useEffect } from 'react';
// import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';
import jwt_decode from "jwt-decode";
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Typography } from '@mui/material';
import Image from "mui-image";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDevice } from '../responsive/devices';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Dashboard_menu from '../Dashboard_author/Dashboard_menu'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ResponsiveAppBar from './menu';
import { BASE_URL } from './helper';
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
		
    }
};

function Signin() {
	const devices = useDevice();
	const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
	// const google = () => {
	// 	window.open("http://localhost:8080/api/auth/google", "_self");
	// 	console.log('lol')
	// };
	// const [profile, setProfile] = useState([]);
	const [show, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
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
		console.log(userObject,'rajiv');
		localStorage.setItem('user', response.credential);
		console.log(userObject,response.credential, 'kiki');
		navigate('/Explore')
	}
	const handleSubmit1 = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const { data: res } = await axios.post(`${BASE_URL}/api/auth/`, data);
			localStorage.setItem("token", res.data);
			
			navigate('/Explore')
			
		} catch (error) {
			setIsLoading(false);
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				
			}
		}
		finally {
			setIsLoading(false);
		  }
	};

	
    const onSuccess = (res) => {
		// setProfile(res.profileObj);
		// console.log(res);
		// console.log(res.profileObj);
    };

    const onFailure = (err) => {
        // console.log('failed', err);
    };

    const logOut = () => {
		// setProfile(null);
		
		
		sessionStorage.clear();
		localStorage.clear();
    };
	
	// const r = () => { <>
	// 	{/* <h1>Rajiv</h1>
    //                 <img src={profile.imageUrl}  referrerPolicy='no-referrer' alt="user image" />
    //                 <h3>User Logged in</h3>
    //                 <p>Name: {profile.name}</p>
    //                 <p>Email Address: {profile.email}</p>
    //                 <br />
	// 				<br /></> */}
	// }
	
	return (<>
		<>
			<ResponsiveAppBar />
			
			<Grid container lg={12} md={12} xs={12}>	
				<Grid item lg={5} md={12} xs={12}>

					<Paper style={{backgroundImage: devices.desktop?`url(${'https://drive.google.com/uc?export=view&id=1nJaKiSCz6MkSuZf624PYifAkUNYfwxNV'})`:ipad?`url(${'https://drive.google.com/uc?export=view&id=1_bSnmg_Y4DQCNXHpGGA3gfvN4RiFgFKr'})`:`url(${'https://drive.google.com/uc?export=view&id=1Tgg2Ou3AcbJ9HB0q35a4RI4P4UTfBSM5'})`,
		width: mobile?'-webkit-fill-available':'-webkit-fill-available',backgroundRepeat:'no-repeat',backgroundSize:mobile?"cover":'100%',
		height:mobile?'280px':'741px'}}>
					
				</Paper>
				</Grid>
				<Grid item lg={7} md={12} xs={12}>	
				<Paper style={{height:mobile?"600px":"741px",marginTop:mobile?'-38px':ipad?"-105px":'-96px',marginLeft:mobile?'0px':'-12px',borderTopLeftRadius:'20px',borderTopRightRadius:mobile?'20px':ipad?"20px":'0px'}}>
			
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
		<Grid container md={12} xs={12} sx={{marginLeft:mobile?'0px':'185px',marginTop:mobile?'36px':'102px'}}>
          <Typography  variant={ mobile?"h5":'h3'}sx={{ fontstyle: 'normal',fontsize: mobile?'4px':'36px',textAlign:'center',fontWeight:'600',lineheight: '48px',marginLeft: mobile? '120px':0}}>
            Sign in
										</Typography>
										
			</Grid>
		<Box component="form" noValidate onSubmit={handleSubmit1} sx={{ mt: 3 }}>
            <Grid container >
			<Grid container md={12} xs={12} sx={{mt:'10px',mb:'20px'}} >
			<Grid item md={4} xs={12}>
			<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>E-mail</Typography>
			</Grid>
			<Grid item md={12} xs={12} >
                <TextField
                  autoComplete="given-name"
                  required
														fullWidth
											name="email"
				  onChange={handleChange}
				  value={data.email}
                  placeholder="Enter your email"
                  size='small'
                />
              </Grid>
              </Grid>
			
				<Grid container md={12} xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item md={4} xs={12} >
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial'}}>Password</Typography>
				</Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
				  placeholder="Enter your password"
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
              <Grid item md={12} xs={12} >
			  <Grid container justifyContent="flex-end" md={12} xs={12}>
				<Grid item >
                <Link to="../forgotpassword" variant="body2" style={{textDecoration:"none",backgroundColor: 'transparent',color: '#3A81F3'}}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
              </Grid>
            </Grid>
            <Button
											type="submit"
											disabled={isLoading}
              fullWidth
              variant="contained"
			sx={{
				mt: 3, mb: 2, background: '#3A81F3',
				borderRadius: '8px',textTransform:"none"}}
			>
			{isLoading ? <CircularProgress size={30} color="primary" /> : 'Sign In'}
			</Button>	
									
								
					  
                   
                    
													
									<Grid container md={12} xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item md={12} xs={12} >
					<Typography variant='h4' sx={{  fontSize: mobile?'14px':'18px', fontWeight:mobile?'400': '600', fontStyle: 'normal',color:'#63636D' }}>Or</Typography>
				</Grid>
				<Grid item md={12} xs={12} sx={{marginLeft:mobile?'52px':"100px",marginBottom:"20px",marginTop:"20px"}}>
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
									<Grid container justifyContent="flex-end" md={12} xs={12}>
              <Grid item md={12} xs={12}>
                <Typography href="#" variant="body2" >
				Don’t have an account? <Link to="/Signup" variant="body2"style={{textDecoration:'none'}}>Signup</Link> 
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
            
			
		</>
        )
    }
export default Signin;
