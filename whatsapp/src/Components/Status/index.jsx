import './status.css'
import profilePhoto from '../../assets/profilePhoto.png'


const Status = () => {
    return(
        // reusing styles of the Chat Component
        <div className="container-chats">
        <div className="container-top-chat">
                <h3>Status</h3>
                <div className="container-top-icons-chat">
                <i class="fa-solid fa-plus"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>

        
            <div className="container-status-chats">
                <div className="status">
                <div className="radius-status-profile">
                {/* <i class="fa-solid fa-circle-plus"></i> */}
                <i class="fa-solid fa-plus"></i>
            <img src={profilePhoto} className='profile-photo-status' alt="Profile photo" />
        </div>
        <div className="container-status-message">
            <h4>My status</h4>
            <p>Click to add status update</p>
        </div>
                </div>


        <div className="container-recent-status">
            <h4>recent</h4>
        </div>
            
            {/* reusing styles of the Chat Component */}
            <div className="container-people-chats">
                <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={profilePhoto} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Bruno Diniz</h4>
            <p>Yesterday at 19:28</p>
        </div>
                </div>

                </div>

                <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={profilePhoto} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Bruno Diniz</h4>
            <p>Yesterday at 19:28</p>
        </div>
                </div>

<div className="container-encrypted-status">
<p><i class="fa-solid fa-lock"></i>Your personal messages are <label htmlFor="" className='end-to-end-encrypted'>end-to-end encrypted</label></p>

</div>

            </div>


            </div>
    )
}

export default Status