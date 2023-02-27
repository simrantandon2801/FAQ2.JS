import React from 'react'
import Dashboard_au from '../Dashboard_author/Dashboard_author'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import {Typography} from '@mui/material'
import {useMediaQuery} from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import {Autocomplete} from '@mui/material'
import {ServicesE} from '../components/Services';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Image} from 'mui-image'
function Instructor () {
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
      <Box  sx={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=1a9C2MSUDCGw-b7DDDTyCRZAcspkMvKWA)", background:mobile?'':'#F3F5F9',backgroundSize:mobile?"100%":'',display:"flex",width:mobile?'auto':'auto',height:mobile?'912px':'1350px'}}>
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
            
		
                <Grid container lg={12} >
                <Grid container md={12} xs={11} lg={7.5}>
                <Grid item  xs={12} lg={10} md={10} sx={{margin:'auto'}} >

                <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1oqJWafHVHnqBaZ7I5oEsHXvcDhK4ZyRV"
              style={{ transitionDuration:'0',animation:'0',width:mobile?'128px':"400px",height:mobile?'88px':"331px",borderRadius:"12px",marginTop:mobile?'26px':'100px',}}></Image>

        </Grid>
            
            
            </Grid>
            <Grid container md={12} xs={11} lg={12}>
                <Grid item  xs={12} lg={10} md={10} sx={{margin:'auto'}} >
                <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'32px':'18px',marginTop:mobile?'36px':'26px',lineHeight:mobile?'36px':'66px',fontweight:mobile?'700px':'600'}}>About the instructor</Typography>
</Grid>
</Grid>

<Grid container md={10} xs={11} lg={8}>
                <Grid item  xs={10} lg={7.5} md={7} sx={{margin:'auto'}} >
                <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'32px':'16px',marginTop:mobile?'36px':'-10px',lineHeight:mobile?'36px':'24px',fontweight:mobile?'700px':'400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrivel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</Typography>

</Grid>
</Grid>
</Grid>
<Box style={{backgroundcolor:'Red'}}>
<Grid container lg={4.5}>
<Grid container md={12} xs={11} lg={12}>
                <Grid item  xs={12} lg={10} md={10} sx={{margin:'auto'}} >
                <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'32px':'18px',marginTop:mobile?'36px':'26px',lineHeight:mobile?'36px':'66px',fontweight:mobile?'700px':'600'}}>Writing lessons by Kevin Missal </Typography>
</Grid>
</Grid>

<Grid container md={10} xs={11} lg={8}>
                <Grid item  xs={10} lg={7.5} md={7} sx={{margin:'auto'}} >
                <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'32px':'16px',marginTop:mobile?'36px':'-10px',lineHeight:mobile?'36px':'24px',fontweight:mobile?'700px':'400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrivel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi.</Typography>

</Grid>
</Grid>
<Grid container md={10} xs={11} lg={8}>
                <Grid item  xs={10} lg={7.5} md={7} sx={{margin:'auto'}} >
                <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'32px':'16px',marginTop:mobile?'36px':'26px',lineHeight:mobile?'36px':'24px',fontweight:mobile?'700px':'600'}}>Key learnings</Typography>

</Grid>
</Grid>
<Grid container md={10} xs={11} lg={8}>
                <Grid item  xs={10} lg={7.5} md={7} sx={{margin:'auto'}} >
                <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'32px':'16px',marginTop:mobile?'36px':'8px',lineHeight:mobile?'36px':'24px',fontweight:mobile?'700px':'600'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>

</Grid>
</Grid>
</Grid>
            </Box>
      </Box>
      
    </>
  )
}

export default Instructor
