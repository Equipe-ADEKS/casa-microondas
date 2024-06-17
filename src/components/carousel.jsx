import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className="carouselImages" src="./logos/s1.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="carouselImages" src="./logos/s2.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="carouselImages" src="./logos/s3.png" onDragStart={handleDragStart} role="presentation" />,
	<img className="carouselImages" src="./logos/s4.png" onDragStart={handleDragStart} role="presentation" />,
	<img className="carouselImagesLG" src="./logos/s5.png" onDragStart={handleDragStart} role="presentation" />,
	<img className="carouselImages" src="./logos/s6.png" onDragStart={handleDragStart} role="presentation" />,
	<img className="carouselImages" src="./logos/s7.png" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
    return (
        <AliceCarousel mouseTracking items={items} />
    )
}

export default Gallery