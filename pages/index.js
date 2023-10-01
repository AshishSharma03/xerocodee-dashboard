  import { useRouter } from 'next/router'
  import Dashboard from '../components/DashboardCompoents/Dashboard'
  import { useEffect, useState } from 'react'
  import LoadingScreen from '../components/CoreAssets/LoadingScreen'
  import { useSession } from 'next-auth/react'
  import { Redis } from '@upstash/redis'
  import getConfig from 'next/config';
  export const revalidate = 0 // disable cache 


  export default function Home() {
    
    const { data: session } = useSession()
    const router = useRouter()
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
      if (!session) {
        router.push('/onboard/Signin')
      }
    })

  

    useEffect(()=>{
      setTimeout(()=>{
          setLoading(false)
      },1000)
    })



    if(session){

      if(loading){
        return <LoadingScreen/>
      }
      return (
        <Dashboard  user={session?.user}  />
        )
      }

      
    
      return <LoadingScreen/>

  }


