import React from 'react'
import ResponsiveAppBar from './menu'
import Footer from '../footer'
import {Image} from 'mui-image'
import { Grid } from '@mui/material'
import {Typography} from '@mui/material'
import { useDevice } from '../responsive/devices'
import useMediaQuery from '@mui/material/useMediaQuery';
function Blog4  ()  {
	const mobile = useMediaQuery('(max-width:600px)');
  const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
  return (
    <>
    
    <Grid container sm={10} md={10} xs={12} lg={10} sx={{margin:'auto'}}>
<Grid item sm={12} md={12} xs={10}  sx={{textAlign: 'center',margin:mobile?'auto':'0px'}}  >
        <Typography variant='h2' sx={{fontSize:mobile?'24px':'36px',marginTop:mobile?'36px':'64px',fontWeight:'600',lineHeight:"30px",textAlign: mobile?'initial':'center',marginBottom:mobile?'26px':'64px'}}>
        How to Write a Captivating Blurb?

          </Typography>
          </Grid>  
          </Grid> 
          <Grid container sm={12} xs={12} lg={10}  sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
    <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1R97Z__BFgDkWpVwb2TyXP6SLH5pBuHkJ"
              style={{transitionDuration:'0',animation:'0',borderRadius:"12px",marginTop:mobile?'6px':'6px'}}
            />
            </Grid> 
            </Grid>

            <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>	 
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:'28px',textAlign:'initial',fontWeight:',400px',marginTop:mobile?'26px':'56px',}}>
        What is the first thing that comes to your mind when you hear the statement ‘Just do it’? Does this sound familiar to you?
          </Typography>
          </Grid>     
</Grid>  
<Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>	
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px'}}>
        This iconic statement is the label that represents Nike. The tagline is still used by Nike in a majority of its existing branding and advertising.
          </Typography>  
          
</Grid> 
</Grid>

<Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'24px':'12px',}}>
        Wondering why we are discussing branding in the first place?
          </Typography>
          </Grid>
</Grid>  
<Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px',}}>
        Similar to a tagline, a blurb acts as a label that promotes a product in the publishing industry, in this case, your book. The blurb of your book will influence potential readers, much as a catchy tagline that can impact the entire marketing strategy for a product. After all, it is one of the most important things that a reader will look at before purchasing your book.
          </Typography>
          </Grid>    
</Grid>  

<Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'24px':'12px',}}>
        Here are a few points to keep in mind for making your blurb more interesting:
          </Typography>
          </Grid>     
          </Grid>
<Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography variant='h3'sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",fontWeight:'600',marginTop:mobile?'36px':'32px'}}>
        Catchy Hook

          </Typography>
          
</Grid> 
<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'8px':'8px',}}>
        The opening sentences of the book are known as the hook, and they are meant to catch the reader's eye right away. Consider what is the most intriguing element of your story to have a catchy hook. If your book is fiction, think about what makes your plot unique. If the work is non-fiction, think about the distinct angle that you have chosen on the subject about which you are writing.s. Make your first line the most captivating one, which is difficult to pass by.
          </Typography>
          </Grid>    
</Grid> 
<Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography variant='h3'sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",fontWeight:'600',marginTop:mobile?'36px':'32px'}}>
        Compelling Conflict

          </Typography>
          
</Grid> 
<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'8px':'8px',}}>
        Every great book has a conflict at its core. If your protagonist's life is constantly smooth, readers will grow impatient quickly. They want to read more because they want to see how the conflict unfolds. The idea is to make it challenging for potential readers to put the book down once they've read the blurb. You can tease your readers with the meaty details in your blurb, but avoid giving away too much. It might just kill the curiosity to explore more.
          </Typography>
          </Grid>   
</Grid> 
<Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}} >
<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography variant='h3'sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",fontWeight:'600',marginTop:mobile?'36px':'32px',lineHeight:mobile?'24px':'28px'}}>
        Fascinating Protagonist

          </Typography> 
          
</Grid> 
<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}  >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'8px':'8px',}}>
        A good blurb helps readers get a sense of the protagonist who will drive the action in the story. Since readers will be spending several hundred pages with them, it is important to give them assurance that they will love reading about their life. Rather than outlining their biography, give interesting details about their personality, which might pique readers' interest.
          </Typography>
          
</Grid> 
<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px',}}>
        While you include all these elements, ensure that the blurb is short and crisp. Encapsulate all the key points within 500 words.
          </Typography>
          
</Grid>
<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px',}}>
        Want to have some great examples to refer to? Why don’t you turn to your bookshelf and pick up your all-time favourite classics? The secret lies there!
          </Typography>
          
</Grid>
<Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px',}}>
        Blurbs are sometimes an overlooked aspect of a writer's marketing strategy. It can be somewhat overwhelming to write more after spending so much in composing the entire story. But these blurbs are truly a major element of book sales and can turn a little-known story into a bestseller.
          </Typography>
          </Grid>     
</Grid>
    
    </>
  )
}

export default Blog4
