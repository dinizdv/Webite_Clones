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
                                <label htmlFor="" id='community-title'>Coding in Community</label>    
                                    </div>
                    

                                    <div className="community">
                                <button id='btn-new-community'><i class="fa-solid fa-bullhorn"></i></button>
                                <label htmlFor="">Announcements</label>    
                                    </div>
                    
                                    <div className="community">
                                <button id='btn-new-community'><i class="fa-brands fa-react"></i></button>
                                <label htmlFor="">Coding in React js</label>    
                                    </div>
                                    <div className="community">
                                <button id='btn-new-community'><i class="fa-brands fa-vuejs"></i></button>
                                <label htmlFor="">Coding in Vue js</label>    
                                    </div>

                            </div>

                    
                            </div>
    )
}

export default Communities