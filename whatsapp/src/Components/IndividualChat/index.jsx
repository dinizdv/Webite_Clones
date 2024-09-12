import './individualChat.css'
import person from '../../assets/person.png'
import Cactus from '../../assets/cactus.png'

const IndividualChat = () => {
    return(
        <div className="container-individual-chat">
            <div className="topbar-individual-chat">
                <div className="container-person-individual-chat">

                    {/* reusing styles */}
                <div className="radius-chat-individual-profile">
            <img src={person} className='profile-photo-individual-chat' alt="Profile photo" />
        </div>
        <label htmlFor="">Emma Lee</label>
                </div>

            <div className="container-icons-topbar-individual-chat">
            <i class="fa-solid fa-video"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            </div>

            {/* bg img */}
            <div className="bg-individual-chat">

            <div className="container-bg-messages">
            <div className="container-all-messages">

{/* first message */}

<div className="message">
            <div className="text-message">
            <div className="img-message">
                <img src={Cactus} alt="" />
            </div>

            </div>

            </div>



            <div className="message">
            <div className="text-message">
            <label className='label-message'>Hello!!! Diniz, how are you?<label htmlFor="" className='label-hour-message'>14:19</label></label>

            </div>

            </div>

{/* message */}
            <div className="message">
            <div className="text-message">
            <label className='label-message'>Recently, I′ve been on Atibaia  and I found this cactus, It remembered me of you!<label htmlFor="" className='label-hour-message'>14:19</label></label>

            </div>

            </div>


{/* message */}
            <div className="message">
                <div className="text-message right">
                <label className='label-message label-my-message'>Hello!!! I´m very fine, and you?<label htmlFor="" className='label-hour-message'>14:19</label><i class="fa-solid fa-check"></i></label>
                </div>

{/*  */}
                <div className="text-message">
                <label className='label-message'>
                    <div className="container-reply">
                        <div className="reply">
                            <label htmlFor="">You</label>
                            <label htmlFor="" className='reference-reply'>Hello!!! I´m very fine, and you?</label>
                        </div>
                    </div>
                    I′m better now, my friend!!!<label htmlFor="" className='label-hour-message'>14:19</label></label>
            </div>

            </div>

{/*  */}

<div className="message">
                <div className="text-message right">
                <label className='label-message label-my-message emoji-message'>😀😀😀<label htmlFor="" className='label-hour-message'>14:19</label><i class="fa-solid fa-check"></i></label>
                </div>
</div>

            </div>


            </div>


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