import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Image from 'mui-image'
import ResponsiveAppBar from './menu'
import { useDevice } from '../responsive/devices'
import useMediaQuery from '@mui/material/useMediaQuery';


function Blog3 () {
    const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
    return (
		<>
			<ResponsiveAppBar/>
	  <Box>
		  <Grid container sm={10} md={10} xs={12} lg={10} sx={{margin:'auto'}}>
			  <Grid item sm={12} md={12} xs={10}  sx={{textAlign: 'center',margin:mobile?'auto':'0px'}}>
				  <Typography variant='h2' sx={{fontSize:mobile?'24px':'36px',marginTop:mobile?'35px':'64px',fontWeight:'600',lineHeight:"30px",textAlign:'center',marginBottom:mobile?'26px':'64px'}}>
				  Tricks to Writing a Non-Fiction Bestseller
				  </Typography>
			  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10}  sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
			  <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1SuJ-eE-74BrNcg05LVfms7sXErth3usK"
              style={{ transitionDuration:'0',animation:'0',borderRadius:"12px",marginTop:mobile?'6px':ipad?'56px':'6px',width:ipad?'70%':'100%'}}
            />
			  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}} >
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>	  
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'26px':"56px"}}>
				  If you're a novice non-fiction writer, you'll need a clear writing strategy in addition to stellar literary abilities.</Typography>
			  </Grid>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>	  
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'12px':"12px"}}>
				  As a newbie, you may lack the perspective that comes with experience. Uncertainty about the correct course of action can be one of your biggest obstacles along the way. But, the right approach can take you a long way!
					</Typography>
					</Grid>
					<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >	  
				  <Typography sx={{lineHeight:mobile?'24px':'28px',fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'12px':"12px"}}>
				  Here are some tricks of the trade that will come in handy if you’re beginning your career in writing non-fiction:</Typography>
			  </Grid>
			  
		  </Grid>
		  <Grid container  sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item  sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3'sx={{textAlign:"initial",lineHeight:mobile?'24px':'28px',fontSize:mobile?'16px':"24px",fontWeight:'600',marginTop:mobile?'36px':'32px'}}>Engaging Writing style</Typography>
			  </Grid>  
			  <Grid item  sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px",lineHeight:mobile?'24px':'28px'}}>It is true that a lot of excellent novels fail to make the bestsellers list. It's also true that most novels on the list, especially those that remain there for a while, are well-written and engaging. If you are writing a self-help book, engaging writing pertains to being more interactive in your voice and style. While for academic books, the focus should be on the right terminology. Refrain from drowning your page with tedious descriptions and information overload. Instead, present the facts in an interesting manner.</Typography>
				  </Grid> 
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{lineHeight:mobile?'24px':'28px',textAlign:"initial",width:mobile?'300px':'804px',fontSize:mobile?'16px':"24px",marginTop:mobile?'36px':"26px",marginBottom:mobile?'8px':'8px',fontWeight:"600"}}>Accurate Facts and information is the heart and soul of writing non-fiction</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px",lineHeight:"24px"}}>While writing non-fiction, there is no room for creative licence especially when you are dealing with facts, data and technical information. Examine everything meticulously by engaging in rigorous fact-checking to ensure authenticity.</Typography>
			  </Grid> 
			  
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",marginTop:mobile?'36px':"26px",fontWeight:"600"}}>Write to Connect, not to Impress</Typography>
			  </Grid>  
			  <Grid item  sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px",lineHeight:mobile?'24px':'28px'}}>Connecting with your target audience is the main goal of your book. Your word choice and writing style must take into account their needs. You should express yourself in a clear and refined language. By the same principle, you shouldn't write to impress others by using bombastic words" or possibly complicated terms when there are simpler ones that can convey the same ideas.</Typography>
			  </Grid> 
			  
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",marginTop:mobile?'36px':"26px",fontWeight:"600"}}>Intensive Research</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"12px",lineHeight:mobile?'24px':'28px'}}>Read as many informative, best-selling books about your field as possible. Become well-versed with the main ideas that have been expressed in your area of research.</Typography>
			  </Grid> 
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",margin:'auto',textAlign:'initial',marginTop:mobile?'12px':"12px",lineHeight:mobile?'24px':'28px'}}>Survey and speak with a variety of people. Expand your pool by turning towards documentaries and films. You might just get some nuggets of wisdom which can give your book a distinct angle that can differentiate it from the crowd.</Typography>
			  </Grid>
			  
				</Grid>
				<Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",marginTop:mobile?'36px':"26px",fontWeight:"600",lineHeight:mobile?'24px':'28px'}}>One Last Thing</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"12px",lineHeight:mobile?'24px':'28px'}}>It is good to strive for the top but don’t forget to enjoy the journey. Appreciate the fact that you have made a significant contribution with your writing in your field that will still be useful and inspire a large number of people.</Typography>
			  </Grid> 
			  <Grid sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'12px':"12px",}}>No matter what, it's a worthwhile achievement!</Typography>
			  </Grid>
			  
			  </Grid>
			</Box>
			</>
  )
}

export default Blog3;
