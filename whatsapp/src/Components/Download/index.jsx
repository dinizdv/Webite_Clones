import './download.css'
import ImgDownload from '../../assets/img-download.png'

const Download = () => {
    return (
        <div className="container-download-component">
        <div className="component-styled-display" id='download'>
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
    )
}

export default Download