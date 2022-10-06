import NavBar from "./NavBar";
import Home from "./Home";
import FormPicture from "./formPicture";
import Login from "./login";
import {Route, Routes} from 'react-router'

function App() {
    return (
        <>
            <NavBar />
            <div className="App">
                {/*<Home />*/}
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<FormPicture />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
