import './chats.css'
import profilePhoto from '../../assets/profilePhoto.png'
import person from '../../assets/person.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'

const Chats = () => {

    const showIndividualChat = (event) => {
        const clickedComponent = event.currentTarget;
        const contentComponents = document.querySelectorAll('.content-right-component');
        
        contentComponents.forEach((component) => {
          component.classList.remove('show-right');
        });
    
        const contentId = clickedComponent.getAttribute('content-id');
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
          contentElement.classList.add('show-right');
        }
};




    return (
        <div className="container-chats">
            <div className="container-top-chat">
                <h3>Chats</h3>
                <div className="container-top-icons-chat">
                <i class="fa-regular fa-square-plus"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>

            <div className="container-input-search">
                <form action="" className='input-search'>
                <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="search" id="" placeholder='Search' />
                </form>
            </div>

            <div className="container-btn-chats">
                <button>All</button>
                <button>Unread</button>
                <button>Groups</button>
            </div>

            <div className="container-archived">
                <i class="fa-regular fa-square-caret-down"></i>
                <label htmlFor="" className='archived'>Archived</label>
                {/* !create conditional */}
                <label htmlFor="" className='archived-number'>5</label>
            </div>

            <div className="container-people-chats">
                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Emma Lee</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>

                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person2} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>John Smith</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>


                <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={person3} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Joana Perez</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>


                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Emma Lee</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>

                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person2} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>John Smith</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>


                <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={person3} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Joana Perez</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>


                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Emma Lee</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>

                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person2} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>John Smith</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>


                <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={person3} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Joana Perez</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>


                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Emma Lee</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>

                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person2} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>John Smith</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>


                <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={person3} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Joana Perez</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>

                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Emma Lee</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>

                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person2} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>John Smith</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>


                <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={person3} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Joana Perez</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>

                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Emma Lee</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>

                <div className="people-chats" onClick={showIndividualChat} content-id='individual-chat'>
                <div className="radius-chat-profile">
            <img src={person2} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>John Smith</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>


                <div className="people-chats">
                <div className="radius-chat-profile">
            <img src={person3} className='profile-photo-chat' alt="Profile photo" />
        </div>
        <div className="container-name-message">
            <h4>Joana Perez</h4>
            <p>Responsive React & CSS dashboard. This is a awesome project</p>
        </div>
                </div>



            </div>
        </div>
    )
}

export default Chats