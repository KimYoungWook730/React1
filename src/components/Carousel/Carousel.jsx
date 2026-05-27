import { useState } from "react";
import { galleryimages } from "./imgData";
import style from "./Carousel.module.css"

export default function Carousel() {
    
    const [index, setIndex] = useState(0)
    const [more, setMore] = useState(false);


    function handleNext() {
        if (index === galleryimages.length - 1) {
            setIndex(0)
        } else{
            setIndex (index + 1);
            console.log(index);
        }
    }

    function handlePrevious() {
        if (index === 0) {
            setIndex(galleryimages.length -1)
        } else {
            setIndex(index - 1);
            console.log(index);
        }
    }

    function handleMoreClick() {
        setMore(!more);
    }

    let slide = galleryimages[index];
    return(
        <section className={style.wrapper}>
            <h2>
                <i>{slide.name}</i>
                by {slide.artist}
            </h2>
            <h3>
                ({index + 1} of {galleryimages.length})
            </h3>
            <img src={slide.url} alt={slide.alt} />
            {/* <p>{slide.description}</p> */}
            <p>
                <button onClick={handlePrevious}  className={style.button}>Previous</button>
                <button onClick={handleNext}  className={style.button}>Next</button>
            </p>
            <button onClick={handleMoreClick}>
                {more ? "Hide" : "Show"} description
            </button>
            {more && <p>{slide.description}</p>}
        </section>
    );
}