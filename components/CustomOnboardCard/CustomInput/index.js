import { Input, styled } from '@mui/material'
import React from 'react'
import theme from '../../../themeRegistery/theme'


const CustomInput = styled(Input)({
    border:"1px solid #C0C0C0",
    borderRadius:"5px",
    padding:"2px 20px",
    '&.Mui-focused': {
        border:`1px solid ${theme.palette.primary.main}`,
      },
})


function OnboardInput({onChange,placeholder,value}) {
  return (
    <CustomInput 
    
    color='esae'
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    disableUnderline 
    />
  )
}

export default OnboardInput