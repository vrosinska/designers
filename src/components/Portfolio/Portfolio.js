import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import {portfolio} from "../../data/datastore";
import styles from './Portfolio.scss';
import './Carousel_override.css'
import ReactHtmlParser from 'react-html-parser';

class Portfolio extends React.Component {

    render() {
        return (
            <div className="container">
                <Carousel showArrows={true} showThumbs={true} dynamicHeight={true} showIndicators={false} useKeyboardArrows={true} infiniteLoop={true}>
                    {portfolio.map((portfolioItem, index) => {
                        return (
                            <div key={index}>
                                <img src={portfolioItem.original} alt="" className={styles.portfolioImage}/>
                                <p className={styles.portfolioItemDescription}> {ReactHtmlParser(portfolioItem.description)}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}


export default Portfolio;