import React from 'react'
import ResponsiveAppBar from './menu'
import Footer from '../footer'
import {Image} from 'mui-image'
import { Grid } from '@mui/material'
import {Typography} from '@mui/material'
import { useDevice } from '../responsive/devices'
import useMediaQuery from '@mui/material/useMediaQuery';

function Blog2  ()  {
	const mobile = useMediaQuery('(max-width:600px)');
  const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
  return (
    <>
    
    <Grid container sm={10} md={10} xs={12} lg={10} sx={{margin:'auto'}}>
<Grid item sm={12} md={12} xs={10} sx={{textAlign:'center',margin:mobile?'auto':'0px'}}>
        <Typography variant='h2' sx={{fontSize:mobile?'24px':'36px',marginTop:mobile?'35px':'64px',fontWeight:'600',lineHeight:"48px",textAlign: 'center',marginBottom:mobile?'26px':'64px'}}>
        Types of Editing and How it Refines Your Manuscript
          </Typography>
          </Grid>     
</Grid>  
<Grid container  sm={12}  xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
    <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=13fKbtAl71NOq_TLbnSCZRnTx3mu94Qs8"
              style={{ transitionDuration:'0',animation:'0',borderRadius:"12px",marginTop:mobile?'6px':'6px'}}
           />
            </Grid>
		  </Grid>
      <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}} >
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'26px':'56px'}}>
        Have you finished writing your book? Only 25% of what it takes to produce a successful book is writing. Perhaps even less!
          </Typography>
          
</Grid>  
</Grid>
<Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}  >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px'}}>
        You may believe that your life's pinnacle experience is writing "THE END" on the last page of your book, but that is far from true!
          </Typography>
          </Grid>        
  

<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}  >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px'}}>
        Writing the story is the easiest step of your literary journey. If you want your book to become a bestseller, you will have to ensure that the story is engaging, the characters are relatable, and there are no loopholes in the narrative arc.
          </Typography>
          
</Grid>  
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px'}}>
        You might ask, what exactly is editing?
          </Typography>
          
</Grid>  
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px'}}>
        It is an act of refining and enhancing a written piece. It is important to understand that a professional edit differs significantly from a self-edit. Every book requires an expert edit! Even if the author is a qualified editor, editing their own work would prevent them from gaining the necessary fresh perspective.
          </Typography>
          
</Grid> 
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px',}}>
        A writer may go through multiple rounds of self-editing to refine their work. Both edits and editors come in a wide variety of forms. Let's examine each of these in greater depths:
          </Typography>
          
</Grid> 
</Grid>
<Grid container sm={12}  xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>


<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography variant='h3'sx={{textAlign:"initial",fontSize:mobile?'14px':"24px",fontWeight:'600',marginTop:mobile?'36px':ipad?'32px':'32px'}}>
        Developmental Editing

          </Typography>
          
</Grid> 
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'8px':'8px'}}>
        It is a type of substantive editing in which the entire work is assessed. In fiction, this entails spotting plot holes, underdeveloped characters, bizarre pacing, odd point-of-view shifts, characters who emerge out of nowhere and then vanish, and many more inconsistencies. You could redo the entire thing, condense, enlarge, delete, or rearrange the chapters.
          </Typography>
          
</Grid> 

<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'8px'}}>
        For non-fiction, the developmental editor will assist in making sure that your arguments are coherent, your book flows logically, and you don't focus excessively on any one idea.
          </Typography>
          
</Grid> 
</Grid>
<Grid container sm={12}  xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography variant='h3'sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",fontWeight:'600',marginTop:mobile?'36px':'32px'}}>
        Line-Editing

          </Typography>
               
</Grid> 
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}  >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'8px':'8px',}}>
        Also known as copyediting in some industries like marketing and advertising, it is more about making small adjustments than the large ones. In contrast to stylistic or structural flaws, a copy editor looks for mechanical errors. A professional copy editor will also search for other issues that can distract from your book, such as the overuse of passive voice, italicization, or other forms of emphasis.
          </Typography>
</Grid> 
</Grid> 
<Grid container sm={12}  xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
        <Typography variant='h3'sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",fontWeight:'600',marginTop:mobile?'8px':'32px',lineHeight:mobile?'24px':'28px'}}>
        Proofreading

          </Typography>
          
</Grid> 
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'8px':'8px',}}>
        You can find errors and any other mistakes that might have gotten past your earlier rounds of editing by proofreading your work at the end of the process. The finer points, such as proper sentence structure, consistent spelling, and grammar, are attended to during this procedure. It also provides you an opportunity to study the book when it appears on your screen in a somewhat different format than the typical Word format, enabling you to find mistakes that went unnoticed previously.
          </Typography>
          
</Grid> 
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px',marginTop:mobile?'12px':'12px',}}>
        So much happens once the writer completes the manuscript! Isn’t it exciting?
          </Typography>
          
</Grid>
<Grid item sm={10}  xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
        <Typography sx={{fontSize:mobile?'14px':'18px',lineHeight:mobile?'24px':'28px',textAlign:'initial',fontWeight:'400px'}}>
        It might sound like a LOT, but with the right editorial support, all of this can be achieved smoothly. We hope this article has enlightened you enough on this subject. Happy writing!
          </Typography>
</Grid>      
</Grid>

    
    </>
  )
}

export default Blog2;
