import '../styles/PictureItem.css'
import {useState, useEffect} from "react";
import {URL} from "../constants";

function PictureItem() {

    const [pics, setPics] = useState([]);

    const getPictures = async () => {
        const response = await fetch(
            URL
        ).then((response) => response.json());
        // console.log(response.results)
        // TODO: a voire plus tard, pour garder le nombre de page
        setPics(response.results);
    };

    useEffect(() => {
        getPictures();
    }, []);

    return (
        <div className='photo'>
            <ul>
                {pics.map(({
                               id,
                               name,
                               scope,
                               camera,
                               mount,
                               tracking,
                               location,
                               image
                           }) => (
                    <li className='astro_pic' key={'photo' + id}>
                        <img className='picture-item' src={image}
                             alt={`${name}`}/>
                        <p>nom : {name}</p>
                        <p>telescope : {scope}</p>
                        <p>camera : {camera}</p>
                        <p>monture : {mount}</p>
                        <p>guidage : {tracking ? 'oui' : 'non'}</p>
                        <p>lieu : {location}</p>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PictureItem