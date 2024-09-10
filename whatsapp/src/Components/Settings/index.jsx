import profilePhoto from '../../assets/profilePhoto.png'
import './settings.css'


const Settings = () => {
    return(
        // reusing styles
        <div className="container-chats">
        <div className="container-top-chat">
            <h3>Settings</h3>
        </div>

        <div className="container-input-search">
            <form action="" className='input-search'>
            <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" name="search" id="" placeholder='Search settings' />
            </form>
        </div>

        <div className="people-chats settings-profile">
                <div className="radius-profile-settings">
            <img src={profilePhoto} className='profile-photo-settings' alt="Profile photo" />
        </div>
        <div className="container-name-message container-name-settings">
            <h4>Bruno Diniz</h4>
            <p>✅️ +1.000.000 LinkedIn views</p>
        </div>
                </div>

                <div className="container-options-settings">
                    <div className="option-settings">
                    <i class="fa-solid fa-circle-user"></i>
                    <label htmlFor="">Account</label>
                    </div>

                    <div className="option-settings">
                    <i class="fa-solid fa-lock"></i>
                    <label htmlFor="">Privacy</label>
                    </div>

                    <div className="option-settings">
                    <i class="fa-solid fa-message"></i>
                    <label htmlFor="">Chats</label>
                    </div>


                    <div className="option-settings">
                    <i class="fa-solid fa-bell"></i>
                    <label htmlFor="">Notifications</label>
                    </div>

                    <div className="option-settings">
                    <i class="fa-solid fa-keyboard"></i>
                    <label htmlFor="">Shortcuts keyboard</label>
                    </div>


                    <div className="option-settings">
                    <i class="fa-regular fa-circle-question"></i>
                    <label htmlFor="">Help</label>
                    </div>

                    <div className="option-settings">
                    <i class="fa-solid fa-arrow-right-from-bracket" id='icon-disconnect'></i>
                    <label htmlFor="" id='text-disconnect'>Disconnect</label>
                    </div>
                </div>

</div>
    )
}

export default Settings