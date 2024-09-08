import { Routes, Route } from 'react-router-dom'
import ChatsPage from '../pages/ChatsPage'
// import Error from '../pages/Error'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <ChatsPage/> } />
            {/* <Route path='*' element={ <Error/> } /> */}
        </Routes>
    )
}