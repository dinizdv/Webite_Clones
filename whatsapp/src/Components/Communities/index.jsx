import './communities.css'

const Communities = () => {
    return(
                        // reusing styles of the Chat Component
                        <div className="container-chats">
                        <div className="container-top-chat">
                                <h3>Communities</h3>
                            </div>

                            <div className="container-communities">
                                <div className="community">
                                <button id='btn-new-community'><i class="fa-solid fa-users"></i></button>
                                <label htmlFor="">New community</label>    
                                    </div>
                                
                                    <div className="community">
                                <button id='btn-new-community'><i class="fa-solid fa-users"></i></button>
                                <label htmlFor="" id='community-title'>Code is Life</label>    
                                    </div>
                    

                                    <div className="community">
                                <button id='btn-announcement'><i class="fa-solid fa-bullhorn"></i></button>
                                <label htmlFor="">Announcements</label>    
                                    </div>
                    
                                    <div className="community">
                                <button id='btn-reactjs'><i class="fa-brands fa-react"></i></button>
                                <label htmlFor="">Coding in React js</label>    
                                    </div>

                                    <div className="community">
                                <button id='btn-java'><i class="fa-brands fa-js"></i></button>
                                <label htmlFor="">Coding in JavaScript</label>    
                                    </div>

                            </div>

                            <div className="container-btn-view-channel">
        <button>View all</button>
        </div>

                            </div>
    )
}

export default Communities