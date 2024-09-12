import './channels.css'
import wppIcon from '../../assets/wpp-icon.png'
import netflix from '../../assets/netflix.png'
import realMadrid from '../../assets/real-madrid.png'
import barcelona from '../../assets/barcelona.png'

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
            <img src={wppIcon} className='profile-photo-chat' alt="Profile photo" />
        </div>

        <div className="container-name-message">
            <div className="container-channel-details">
            <div className="container-btn-follow-channel">
            <button>Follow</button>
            </div>
            <div className="container-name-channel">
            <h4>WhatsApp</h4><i class="fa-solid fa-circle-check"></i>
            </div>
            <p>188.6M followers</p>
            </div>

        </div>
</div>



<div className="people-chats">
                <div className="radius-chat-profile" id='bg-realMadrid'>
            <img src={realMadrid} className='profile-photo-chat' alt="Profile photo" />
        </div>

        <div className="container-name-message">
            <div className="container-channel-details">
            <div className="container-btn-follow-channel">
            <button>Follow</button>
            </div>
            <div className="container-name-channel">
            <h4>Real Madrid C.F.</h4><i class="fa-solid fa-circle-check"></i>
            </div>
            <p>63.4M followers</p>
            </div>

        </div>
</div>


<div className="people-chats">
                <div className="radius-chat-profile" id='bg-realMadrid'>
            <img src={barcelona} className='profile-photo-chat' alt="Profile photo" />
        </div>

        <div className="container-name-message">
            <div className="container-channel-details">
            <div className="container-btn-follow-channel">
            <button>Follow</button>
            </div>
            <div className="container-name-channel">
            <h4>FC Barcelona</h4><i class="fa-solid fa-circle-check"></i>
            </div>
            <p>40.5M followers</p>
            </div>

        </div>
</div>



<div className="people-chats">
                <div className="radius-chat-profile">
            <img src={netflix} className='profile-photo-chat' alt="Profile photo" />
        </div>

        <div className="container-name-message">
            <div className="container-channel-details">
            <div className="container-btn-follow-channel">
            <button>Follow</button>
            </div>
            <div className="container-name-channel">
            <h4>Netflix</h4><i class="fa-solid fa-circle-check"></i>
            </div>
            <p>34.6M followers</p>
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