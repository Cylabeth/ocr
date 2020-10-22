
import React from 'react'
import iconarchive from './archivewhite.png'
import iconcamera from './camerawhite.png'
import iconhelp from './helpwhite.png'
import { Link } from 'react-router-dom'
import './Footer.css'

/*
export default () => {
<>
<footer>
    <div>
        <div><img src={iconarchive} alt="archive" /></div>
        <div><img src={iconcamera} alt="camera" /></div>
        <div><img src={iconhelp} alt="help" /></div>
    </div>
<p>{new Date().getFullYear()} Todos los derechos reservados</p>

</footer>
</>

}
<p>{new Date().getFullYear()} Todos los derechos reservados</p>*/

const Footer = () => {
    return (
    <>    
        <footer>
            <div className="footerBox">
                <div><Link to="/archive"><img src={iconarchive} alt="archive" className="icon"/></Link></div>
                <div><Link to="/newDoc"><img src={iconcamera} alt="camera" className="icon" /></Link></div>
                <div><Link to="/help"><img src={iconhelp} alt="help" className="icon"/></Link></div>
            </div>
        </footer>
</>


    )


}
export default Footer