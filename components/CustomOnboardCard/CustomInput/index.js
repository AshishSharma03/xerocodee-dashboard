import { Input, styled } from '@mui/material'
import React from 'react'
import theme from '../../../themeRegistery/theme'


const CustomInput = styled(Input)({
    border:"1px solid #C0C0C0",
    borderRadius:"5px",
    // padding:"2px 20px",
    '&.Mui-focused': {
        border:`1px solid ${theme.palette.primary.main}`,
      },
})


function OnboardInput({onChange,placeholder,value,type,endAdornment,error}) {
  return (
    <CustomInput 
    type={type}
    
    color='esae'
    sx={{padding:(endAdornment)?"2px 2px 2px 20px":"2px 20px",border:(error)?"1px solid red":""}}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    endAdornment={endAdornment}
    disableUnderline 
    />
  )
}

export default OnboardInput