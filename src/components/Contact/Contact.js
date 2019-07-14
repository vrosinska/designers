import React from 'react';
import {contact} from "../../data/datastore";
import styles from "./Contact.scss";
import ReactHtmlParser from 'react-html-parser';
import classnames from 'classnames';
import {faMapMarkerAlt, faAt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button'

class Contact extends React.Component {

    render() {
        return (
            <div className="container">
                <div className={styles.contact}>
                    <a id="contact"/>
                    <div className="row mb-4 pb-4 mr-0 ml-0">
                        <div className={classnames("col-md-6 col-sm-12 col-12 offset-sm-0")}>
                            <h2> CONTACT US </h2>
                            <p><FontAwesomeIcon className={styles.icons} icon={faMapMarkerAlt}
                                                style={{color: '#343a40'}}/>{ReactHtmlParser(contact.address)}</p>
                            <p><FontAwesomeIcon className={styles.icons} icon={faPhoneAlt}
                                                style={{color: '#343a40'}}/>{ReactHtmlParser(contact.phone)}</p>
                            <p><FontAwesomeIcon className={styles.icons} icon={faAt}
                                                style={{color: '#343a40'}}/>{ReactHtmlParser(contact.email)}</p>
                        </div>

                    </div>


                    {/*FORM*/}
                    <div className="row mb-4 pb-4 mr-0 ml-0">
                        <form className={styles.contactForm} action="https://formspree.io/19456w@gmail.com" method="POST">
                            <div className="row">
                            <div className="col-md-6 col-sm-12">
                            <p><input name="name" placeholder="Your name" required type="text"/></p>
                            <p><input name="email" placeholder="Your e-mail" required type="email"/></p>
                            <p><input name="phone" placeholder="Your phone number" type="numeric"/></p>
                            <p><input name="city" placeholder="Your city" type="text"/></p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                            <p><textarea name="text" rows="7" cols="50" placeholder="Type your message here" required/>
                            </p>
                            <Button className={styles.contactButton} variant="dark" type="submit" value="SEND">
                                <span>Submit</span></Button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;