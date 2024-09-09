import './chatsPage.css'
import Sidebar from '../../Components/Sidebar'
import Chats from '../../Components/Chats'
import Status from '../../Components/Status'
import Channels from '../../Components/Channels'
import Communities from '../../Components/Communities'
import Settings from '../../Components/Settings'
import Profile from '../../Components/Profile'
import ImgDownload from '../../assets/img-download.png'

export default function ChatsPage(){
    
    return(
        <>
        
        <Sidebar />

        <div className="component">
            <div className="content-component show" id='chats'>
                <Chats />
            </div>
        
            <div className="content-component" id='status'>
                <Status />
            </div>
       
       
            <div className="content-component" id='channels'>
                <Channels />
            </div>


            <div className="content-component" id='communities'>
                <Communities />
            </div>

            <div className="content-component" id='profile'>
                <Profile />
            </div>

            <div className="content-component" id='settings'>
                <Settings />
            </div>
       
        </div>

        <div className="component-display">
            <div className="component-styled-display">
                <div className="container-download">
                    <img src={ImgDownload} alt="" />
                    <h3>Download WhatsApp for Windows</h3>
                    <p>Make calls, share your screen and get a faster experience when you download the Windows app.</p>
                    <a href="">Get from Microsoft Store</a>
                </div>
                <div className="container-encrypted">
                    <p><i class="fa-solid fa-lock"></i>Your personal messages are end-to-end encrypted</p>
                </div>
            </div>
        </div>
        </>
    )
    }