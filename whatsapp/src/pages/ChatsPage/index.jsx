import './chatsPage.css'
import Sidebar from '../../Components/Sidebar'
import Chats from '../../Components/Chats'
import Status from '../../Components/Status'
import Channels from '../../Components/Channels'
import Communities from '../../Components/Communities'
import Settings from '../../Components/Settings'
import Profile from '../../Components/Profile'
import IndividualChat from '../../Components/IndividualChat'
import Download from '../../Components/Download'

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
        <div className='content-right-component show-right' id='download'>
            <Download />
        </div>

        <div className="content-right-component" id='individual-chat'>

        <IndividualChat />
</div>
        </div>

        </>
    )
    }