import { useEffect } from 'react'
import { Navbar } from '../../components/navbars/Navbar'
import { LoadingSpinner } from '../../components/loadingSpinner'
import { useChannels, useUserDetails } from '../../shared/hooks'
import './dashboardPage.css'
import { Content } from '../../components/dashboard/Content'
import { Sidebar } from '../../components/navbars/Sidbar'
import { getFollowedChannel } from '../../services'


export const DashboardPage = () => {   
  
  const { getChannels, allChannels, isFetching} = useChannels()
  const { isLogged } = useUserDetails ()

  useEffect(() =>{
    getChannels(isLogged)

  }, [])

if(isFetching){
  <LoadingSpinner/>
}

  return (
  
    <div className='dashboard-container'>

    <Navbar/>
    <Sidebar channels={getFollowedChannel}/>
    <Content channels={allChannels || []} getChannels={getChannels}/>

    </div>

  )
}
