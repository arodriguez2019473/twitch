const imagenUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHpV1Nj9mF63oZw1zRrN6QFVl-1VSGTeNkp6iXD_VDQ&s'
 
const ChannelAvatar = ({url}) => {
 
    return(

        <div className="channel-avatar-container">

            <img src={url ? url : imagenUrl} width='100%' height='100%' alt="userImage" />

        </div>

    )


}

export const ChannelCard = ({

    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler

}) => {
    
    const handleNavigate = () => {
            navigateToChannelHandler(id)    
        }

        return(
            <div className="channels-card" onClick={handleNavigate}>

                <ChannelAvatar url={avatarUrl}/>
                <span className="channels-card-title">{title}</span>
                <span className="channels-card-title">{username}</span>

                <span className="channels-card-title" style={{color : isOnline ? 'green' : 'red'}}>
                        {isOnline ? 'Online' : 'OffLine'}                
                </span>                

            </div>
        )

}
