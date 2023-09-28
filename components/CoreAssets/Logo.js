import { Box } from '@mui/material'
import React from 'react'

function Logo({...props }) {
  return (
    <Box
        component={"img"}
        src={"/Assets/logo.svg"}
        sx={{
            ...props,
          }}
      />
  )
}

export default Logo