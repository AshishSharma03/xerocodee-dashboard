import { createContext, useState } from "react"
import React from 'react'

export const StepCardProgress = createContext()


function StepProgressProvider({children}) {
    const [steps,setSteps] = useState([false,true,true])
    const [ProgressStatus,setProgressStatus] = useState('Progress..')
    const [StepProgessItems,setSteProgressItems]= useState([])
return (
    <StepCardProgress.Provider value={{setSteps,steps,StepProgessItems,setSteProgressItems,ProgressStatus,setProgressStatus}}>
        {children}
    </StepCardProgress.Provider>
  )
}

export default StepProgressProvider