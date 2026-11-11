import Trollface from "../assets/Trollface.png"
export default function Header(){
    return(
        <header className="header">
            <img src={Trollface} alt="troll_face_image" />
            <h1>Meme Generator</h1>
        </header>
    )
}