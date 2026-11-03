import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from '../Router/Login.jsx'
import App from '../App.jsx'
function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default RouterApp;