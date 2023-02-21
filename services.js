import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from '@mui/material/Grid';
import { Box, Button, Typography } from "@mui/material";
import Image from "mui-image";
import ResponsiveAppBar from "./menu";
import Footer from "../footer";
import { padding } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDevice } from '../responsive/devices'
import { Link} from 'react-router-dom';
export default function Services() {
	const Devices = useDevice();
	const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
	return (
		<>
	<ResponsiveAppBar/>
    <Box sx={{ margin:mobile?"0px": "100px",margin:ipad?'auto':'0px' }}>
      <Typography variant="h2" sx={{ textAlign: "center",fontSize:ipad?'32px':"36px",fontWeight:"600",marginTop:mobile?"36px":ipad?'64px':'0px', }}>
        Services Offered
      </Typography>
      <ImageList
        sx={{ margin:mobile?"24px":ipad?'30px': "70px" }}
        cols={mobile?2:4} gap={25}
        style={{ overflow: "hidden" }}
      >
					<>
						
						<ImageListItem >
						<Link to='/signup' style={{textTransform:"none",textDecoration:'none'}}> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1SdaDciOlxeYWXUAKPzjfvEapAkZqH4OF"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px"}}
								/>
							</Link>	
							<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
								<Typography variant="subtitle2" sx={{ mt: mobile ? '8px' : "16px", mb: mobile ? '16px' : "32px", fontSize: mobile ? '12px' : "18px", fontWeight: '600', textAlign: 'initial', textDecoration: 'none' }}>Editing</Typography>
							</Link> 
							<Link to='/signup' style={{textTransform:"none",textDecoration:'none'}}> 
								<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1iSfLAbXy5Am04pQge6HmmwEHEG1777pF" style={{ m: "auto", transitionDuration: '0', animation: '0', borderRadius: mobile ? '8px' : "12px" }} /></Link>
							{mobile ?
								<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
								<Typography variant="subtitle2" sx={{ mt: "8px", mb: "16px", fontSize: "12px", fontWeight: '600', textAlign: 'initial' }}>AMS</Typography></Link>
								:<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
							
								<Typography variant="subtitle2" sx={{ mt: "16px", mb: "32px", fontSize: "18px", fontWeight: '600', textAlign: 'initial' }}>Amazon Marketing Services</Typography> </Link>
		} </ImageListItem>
							
						<ImageListItem>
						<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
							
            <Image  Duration={0}
              src="https://drive.google.com/uc?export=view&id=1bKNPL8v-xRco7O0CY7Fd2rzK_3e-SyT1"
              style={{ m: "auto",transitionDuration:'0',animation:'0' }}
								/>
							</Link>
							<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
            <Typography variant="subtitle2" sx={{mt:mobile?'8px':"16px",mb:mobile?'16px':"32px",fontSize:mobile?'12px':"18px",fontWeight:'600',textAlign:'initial'}}>Cover Designing</Typography>
							</Link>
							<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
		    <Image  Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px"}}/>
							</Link>
							<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
								<Typography variant="subtitle2" sx={{ mt: mobile ? '8px' : "16px", mb: mobile ? '16px' : "32px", fontSize: mobile ? '12px' : "18px", fontWeight: '600', textAlign: 'initial' }}>Book Reviews</Typography>
          </Link>
						</ImageListItem>
						<ImageListItem>
						<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1UReQ66aY349xHnCACnDMGBGSEN_K2k5k"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px"  }}
								/></Link>
							<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
            <Typography variant="subtitle2" sx={{mt:mobile?'8px':"16px",mb:mobile?'16px':"32px",fontSize:mobile?'12px':"18px",fontWeight:'600',textAlign:'initial'}}>Translation</Typography>
							</Link>
							<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
								<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1eP94nn1zrWdQelGJkJ-IxVx6tqQ-UFZW" style={{ m: "auto", transitionDuration: '0', animation: '0', borderRadius: mobile ? '8px' : "12px" }} />
           </Link>
		   <Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
							<Typography variant="subtitle2" sx={{ mt: mobile ? '8px' : "16px", mb: mobile ? '16px' : "32px", fontSize: mobile ? '12px' : "18px", fontWeight: '600', textAlign: 'initial' }}>Book Trailer</Typography>
          </Link>
						</ImageListItem>
						<ImageListItem>
						<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
            <Image  Duration={0}
              src="https://drive.google.com/uc?export=view&id=1JlhoJV-AJhEpbGWJDVi4qqfAxQPMwFER"
              style={{ m: "auto",transitionDuration:'0',animation:'0',borderRadius:mobile?'8px':"12px" }}
								/>
							</Link>
							<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
            <Typography variant="subtitle2" sx={{mt:mobile?'8px':"16px",mb:mobile?'16px':"32px",fontSize:mobile?'12px':"18px",fontWeight:'600',textAlign:'initial'}}>Ghost Writing</Typography>
							</Link>
							<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
								<Image Duration={0} src="https://drive.google.com/uc?export=view&id=14fyDCc6OZddGybRtVel8yfXV2dCYcZ4H" style={{ m: "auto", transitionDuration: '0', animation: '0', borderRadius: mobile ? '8px' : "12px" }} />
							</Link>
							<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
								<Typography variant="subtitle2" sx={{ mt: mobile ? '8px' : "16px", mb: mobile ? '16px' : "32px", fontSize: mobile ? '12px' : "18px", fontWeight: '600', textAlign: 'initial' }}>BookStore</Typography>
          </Link>
						</ImageListItem>
        </>
				</ImageList>
				<Grid container md={12} xs={12}>
					<Grid item md={12} xs={12} sx={{marginTop:ipad?'-25px':'0px'}}>
					<Link to='/signup' style={{ textTransform: "none", textDecoration: 'none', color: 'black' }}>
						<Button variant="contained" size='large' sx={{textTransform:'none',width:"128px",height:"48px",borderRadius:"8px",padding:'12px 20px',fontSize:"16px",fontWeight:"500",marginBottom:ipad?'46px':'0px'}}>See more</Button>
					</Link>
					</Grid>
				</Grid>
			</Box>
			<Footer/>
			</>
  );
}
