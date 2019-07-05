import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {offer} from "../../data/datastore";
import styles from "./Offer.scss";
import ReactHtmlParser from 'react-html-parser';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";


class Offer extends React.Component {

    render() {
        return (
            <div className="container">
            <div className={styles.offerContainer}>
            <Accordion className="pb-5">
                <a id="offer"/>
                {offer.map((offerItem, index) => {
                        return (
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={index} style={{color: 'black', height: '18vh'}}>
                                        {ReactHtmlParser(offerItem.headline)}
                                        <FontAwesomeIcon className={styles.icons} icon={faAngleDoubleRight} style={{color: 'black'}}/>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index}>
                                    <Card.Body>{ReactHtmlParser(offerItem.description)}</Card.Body>
                                </Accordion.Collapse>
                            </Card>)
                    }
                )}

            </Accordion>
            </div>
            </div>
        )
    }
}

export default Offer;