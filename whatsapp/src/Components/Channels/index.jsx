import './channels.css'
import profilePhoto from '../../assets/profilePhoto.png'

const Channels = () => {
    return(
                // reusing styles of the Chat Component
                <div className="container-chats">
                <div className="container-top-chat">
                        <h3>Channels</h3>
                        <div className="container-top-icons-chat">
                        <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>

<div className="container-channels-info">
<p className='channels-info'>Stay updated on your favorite topics</p>
                    <p className='channels-second-info'>Find channels to follow below</p>



{/* reusing styles */}
            <div className="container-people-chats">

                    <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={profilePhoto} className='profile-photo-chat' alt="Profile photo" />
        </div>

        <div className="container-name-message">
            <div className="container-channel-details">
            <div className="container-btn-follow-channel">
            <button>Follow</button>
            </div>
            <div className="container-name-channel">
            <h4>WhatsApp</h4><i class="fa-solid fa-circle-check"></i>
            </div>
            <p>185.6M followers</p>
            </div>

        </div>
</div>


<div className="people-chats">
                <div className="radius-chat-profile">
            <img src={profilePhoto} className='profile-photo-chat' alt="Profile photo" />
        </div>

        <div className="container-name-message">
            <div className="container-channel-details">
            <div className="container-btn-follow-channel">
            <button>Follow</button>
            </div>
            <div className="container-name-channel">
            <h4>WhatsApp</h4><i class="fa-solid fa-circle-check"></i>
            </div>
            <p>185.6M followers</p>
            </div>

        </div>
</div>
        
<div className="container-discover-more">
<button className='discover-channels'>Discover more</button>
</div>


                </div>

                
</div>


</div>        
    )
}

export default Channels 