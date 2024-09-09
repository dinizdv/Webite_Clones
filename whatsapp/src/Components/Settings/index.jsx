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

        <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={profilePhoto} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Bruno Diniz</h4>
            <p>Dashboard responsivo com React, CSS, JS, Tailwind, test, test,</p>
        </div>
                </div>

</div>
    )
}

export default Settings