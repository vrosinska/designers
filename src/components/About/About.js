import React from 'react';
import {aboutUs} from "../../data/datastore";
import styles from "./About.scss";
import ReactHtmlParser from 'react-html-parser';
import classnames from 'classnames';


class About extends React.Component {

    render() {
        return (
            <div className="container">
                <div className={styles.aboutUs}>
                    <a id="about"/>

                    {aboutUs.map((aboutPerson, index) => {
                        return (
                            <div className="row mb-4 pb-4" key={index}>
                                <div className={classnames("col-md-3 col-sm-12 col-10 offset-1 offset-sm-0",
                                    index % 2 === 0 ? "" : "order-md-2")}>
                                    <img
                                        className={styles.aboutPhoto}
                                        src={process.env.PUBLIC_URL + aboutPerson.image}
                                        alt=""
                                    />
                                </div>
                                <div className="col-md-9 col-sm-12 col-10 offset-1 offset-sm-0">
                                    <h3 className={styles.name}>{ReactHtmlParser(aboutPerson.name)}</h3>
                                    <p>{ReactHtmlParser(aboutPerson.description)}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default About;