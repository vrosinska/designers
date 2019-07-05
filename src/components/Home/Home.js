import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import styles from './Home.scss'
import {homeCarousel} from "../../data/datastore";
import ReactHtmlParser from "react-html-parser";


class Home extends React.Component {

    render() {
        return (
            <div className="mb-2">
                <a id="home"/>
                <Carousel>
                    {homeCarousel.map((homeCarouselItem, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                    className={styles.CarouselContainer}
                                    src={homeCarouselItem.image}
                                    alt=""
                                />
                                <Carousel.Caption>
                                    <a className={homeCarouselItem.buttonClassName}
                                       href={homeCarouselItem.href}>{ReactHtmlParser(homeCarouselItem.buttonText)}</a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}
export default Home;
