import './profile.css'
import profilePhoto from '../../assets/profilePhoto.png'

const Profile = () => {
    return (
        <div className="container-chats">
        <div className="container-top-chat">
                <h3>Profile</h3>
                </div>
        
        <div className="container-img-profile">
        <div className="radius-profile-profile">
            <img src={profilePhoto} className='profile-profile-chat' alt="Profile photo" />
        </div>

        </div>

        <div className="container-texts-profile">
        <label htmlFor="" className='your-name-profile'>Your name</label>
        
        <div className="container-name-profile">
        <label htmlFor="" className='name-profile'>Bruno Diniz</label>
        <i class="fa-solid fa-pen"></i>
        </div>

        <p>This is not your username or PIN. This name will be visibe to your WhatsApp contacts.</p>


        <label htmlFor="" className='your-name-profile about-profile'>About</label>
        
        <div className="container-name-profile">
        <label htmlFor="" className='name-profile'>✅️ +1.000.000 LinkedIn views</label>
        <i class="fa-solid fa-pen"></i>
</div>
        </div>

        </div>
    )
}

export default Profile