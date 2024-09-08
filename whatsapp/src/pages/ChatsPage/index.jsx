import './chatsPage.css'
import ImgDownload from '../../assets/img-download.png'

export default function ChatsPage(){
    return(
        <>
        <div className="sidebar">
            <a>oi</a>
        </div>
        
        <div className="component">
            <label>testssssssssssssssssss</label>
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