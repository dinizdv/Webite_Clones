import './individualChat.css'
import profilePhoto from '../../assets/profilePhoto.png'
import bgWpp from '../../assets/bg-wpp.png'

const IndividualChat = () => {
    return(
        <div className="container-individual-chat">
            <div className="topbar-individual-chat">
                <div className="container-person-individual-chat">

                    {/* reusing styles */}
                <div className="radius-chat-individual-profile">
            <img src={profilePhoto} className='profile-photo-individual-chat' alt="Profile photo" />
        </div>
        <label htmlFor="">Lucas</label>
                </div>

            <div className="container-icons-topbar-individual-chat">
            <i class="fa-solid fa-video"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            </div>

            {/* bg img */}
            <div className="bg-individual-chat">

            <div className="container-square">
            <div className="container-all-messages">
            <div className="message">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias pariatur officiis ex eius ea.</p>
            </div>
            </div>

            <div className="container-all-messages">
            <div className="message">
                <p className='right'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias pariatur officiis ex eius ea.</p>
            </div>
            </div>

            </div>

                <img src={bgWpp} alt="Background Chat" />

                <div className="container-send-message">
                
                <div className="container-icon-send-message">
                <i class="fa-regular fa-face-smile"></i>
                <i class="fa-solid fa-plus"></i>
                </div>

                <form action="" className='input-search' id='search-message'>
                    <input type="text" name="search" id="search-message" placeholder='Type a message' />
                
                </form>
                <i class="fa-solid fa-microphone"></i>
                </div>
            </div>
        </div>
    )
}

export default IndividualChat