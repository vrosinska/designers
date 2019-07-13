import React from 'react';
import styles from '../../styles/general.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <footer className="fixed-bottom bg-white">
            <div className="d-flex">
                <div className="col-md-4 col-xs-12 d-flex justify-content-center" style={{textColor:'#343a40'}}>
                    © 2019 STYLISH
                </div>
                <div className="col-4 d-none d-md-flex justify-content-center">
                    <div className={styles.logo} style={{color: '#343a40'}}>STYLISH</div>
                </div>
                <div className="d-none d-md-flex justify-content-center col-4 list-unstyled">
                    <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faFacebookF} style={{color: '#4968ad'}}/></a>
                    </li>
                    <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faInstagram} style={{color: 'black'}}/></a>
                    </li>
                    <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faTwitter} style={{color: '#49a1eb'}}/></a>
                    </li>
                    <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faYoutube} style={{color: '#eb3223'}}/></a>
                    </li>
                </div>
            </div>
        </footer>
    )
}
export default Footer;

