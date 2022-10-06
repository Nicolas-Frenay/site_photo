import '../styles/form_picture.css'
import {useState} from "react";
import {URL} from '../constants'
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

function FormPicture() {
    const [cookie, setCookie] = useCookies(['access'])


    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [scope, setScope] = useState('')
    const [camera, setCamera] = useState('')
    const [mount, setMount] = useState('')
    const [tracking, setTracking] = useState(false)
    const [focal, setFocal] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    let handleImage = (e) => {
        setImage(e.target.files);
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData();
        form.append('image', image[0]);
        form.append('name', name);
        form.append('scope', scope);
        form.append('camera', camera);
        form.append('mount', mount);
        form.append('tracking', tracking);
        form.append('focal', focal);
        form.append('location', location)

        console.log(image)

        try {
            let res = await fetch(URL, {
                method: "POST",
                headers: {"Authorization": 'Bearer ' + cookie.access},
                body: form,
            });
            if (res.status === 201) {
                setName("");
                setScope("");
                setCamera("");
                setMount("");
                setTracking(false);
                setFocal("");
                setLocation("");
                setImage(null);
                navigate('/');
            }
        } catch (err) {
            console.log(err);
        }

    }


    return (

        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" required
                           onChange={(e => setName(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="scope">Telescope</label>
                    <select name="scope" id="scope"
                            onChange={(e => setScope(e.target.value))}>
                        <option>-- choix de telescope --</option>
                        <option value='newton150'>Newton 150/750</option>
                        <option value='refractor360'>ZenithStar 61</option>
                        <option value='photo'>objectif photo</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="camera">Caméra</label>
                    <select name="camera" id="camera"
                            onChange={(e => setCamera(e.target.value))}>
                        <option>-- choix de camera --</option>
                        <option value='ASI183'>ZWO ASI183MC Pro</option>
                        <option value='ASI294'>ZWO ASI294MM Pro</option>
                        <option value='K1'>Pentax K1 Mk2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="mount">Monture</label>
                    <select name="mount" id="name"
                            onChange={(e => setMount(e.target.value))}>
                        <option>-- choix de monture --</option>
                        <option value='SA'>Sky-Watcher StatAdventurer</option>
                        <option value='GEM28'>iOptron GEM28</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="focal">Longueur focale</label>
                    <input type="number" name="focal" id="focal"
                           onChange={(e => setFocal(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="tracking">Astro-guidage</label>
                    <input type="checkbox" name="tracking" id="tracking"
                           onChange={(e => setTracking(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="location">Lieu d'observation</label>
                    <input type="text" id="location" name="location"
                           maxLength="64"
                           onChange={(e => setLocation(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="image">Choix de l'image</label>
                    <input type="file" name="image" id="image" accept="image/*"
                           onChange={handleImage} />
                </div>
                <input type="submit" value="Envoyer"/>
            </form>
        </div>
    )
}

export default FormPicture
