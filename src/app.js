import {Routes, Route} from 'react-router-dom';
import {Login} from './Pages/Login';
import {Registrarse} from './Pages/Registrarse';
import {AuthProvider} from './context/authContext';

function App(){
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route  path="/register" element={<Registrarse/>}/>
            </Routes>
        </AuthProvider>
    )
}
export default App;