import {useState,useEffect} from "react";
export default function Main(){
    const  [meme , setMeme ] = useState({
        bottomText: "Walk into Mordor",
        topText: "One does not simply",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [memesData,setMemsData] = useState([])
    function handleImage(){
        const randomNumber = Math.floor(Math.random() * memesData.length)
        const newUrlImage = memesData[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme ,
            imageUrl : newUrlImage
        }))
    }
    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme( prevMeme => ({
            ...prevMeme , 
            [name] : value
        }))
    }

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json()
        .then(data => setMemsData(data.data.memes)))
    },[])
    
    return(
        <main>
            <div className="form">
                <label htmlFor="top-text">
                    Top Text
                </label>
                <input type="text"
                        placeholder="One does not simply"
                        name="topText"
                        id="top-text"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                <label htmlFor="bottom-text">
                    Bottom Text
                </label>
                <input type="text" 
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        id="bottom-text"
                        onChange={handleChange}
                        value={meme.bottomText}
                />
                <button onClick={handleImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}