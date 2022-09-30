import '../styles/form_picture.css'

// import {useState} from "react";

function FormPicture() {

    // const handleSubmit = (evt) => {
    //
    // }


    return (
        // <form onSubmit={handleSubmit}>
        <div className="form">
            <form>
                <div>
                    <label for="name">Nom</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div>
                    <label for="scope">Telescope</label>
                    <select name="scope" id="scope">
                        <option value="newton150">Newton 150/750</option>
                        <option value='refractor360'>ZenithStar 61</option>
                        <option value='photo'>objectif photo</option>
                    </select>
                </div>
                <div>
                    <label for="camera">Caméra</label>
                    <select name="camera" id="camera">
                        <option name='ASI183'>ZWO ASI183MC Pro</option>
                        <option name="ASI294">ZWO ASI294MM Pro</option>
                        <option name="K1">Pentax K1 Mk2</option>
                    </select>
                </div>
                <div>
                    <label for="mount">Monture</label>
                    <select value="mount">
                        <option name="STARADVENTURER">Sky-Watcher
                            StatAdventurer
                        </option>
                        <option name="GEM28">iOptron GEM28</option>
                    </select>
                </div>
                <div>
                    <label for="focal">Longueur focale</label>
                    <input type="number" name="focal" id="focal"/>
                </div>
                <div>
                    <label for="tracking">Astro-guidage</label>
                    <input type="checkbox" name="tracking" id="tracking"/>
                </div>
                <div>
                    <label for="location">Lieu d'observation</label>
                    <input type="text" id="location" name="location"
                           maxLength="64"/>
                </div>
                <div>
                    <label for="image">Choix de l'image</label>
                    <input type="file" name="image" id="image"/>
                </div>
            </form>
        </div>
    )
}

export default FormPicture
