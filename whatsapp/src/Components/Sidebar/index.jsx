import './sidebar.css'
import profilePhoto from '../../assets/profilePhoto.png'

const Sidebar = () => {
    const handleComponentClick = (event) => {
        const clickedComponent = event.currentTarget;
        const contentComponents = document.querySelectorAll('.content-component');
        
        contentComponents.forEach((component) => {
          component.classList.remove('show');
        });
    
        const contentId = clickedComponent.getAttribute('content-id');
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
          contentElement.classList.add('show');
        }
      };


    return (
        <div className="sidebar">
        <div className="container-components-sidebar">
            <button onClick={handleComponentClick} content-id='chats'><i class="fa-solid fa-message"></i></button>
            <button onClick={handleComponentClick} content-id='status'><i class="fa-solid fa-circle-notch"></i></button>
            <button onClick={handleComponentClick} content-id='channels'><i class="fa-solid fa-comment-dots"></i></button>
            <button onClick={handleComponentClick} content-id='communities'><i class="fa-solid fa-users"></i></button>
        </div>

        <div className="container-profile-sidebar">
        <button onClick={handleComponentClick}><i class="fa-solid fa-gear"></i></button>
        <div className="radius-profile" onClick={handleComponentClick} content-id='profile'>
            <img src={profilePhoto} alt="Profile photo"/>
        </div>
        </div>
        </div>        
    )
}

export default Sidebar