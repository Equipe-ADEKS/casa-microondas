import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/carousel.css'

const items = [
  "./logos/s1.png",
  "./logos/s2.png",
  "./logos/s3.png",
  "./logos/s4.png",
  "./logos/s5.png",
  "./logos/s6.png",
  "./logos/s7.png",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1, 
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
};

const Gallery = () => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-container-img">
            <img
              className="carouselImages"
              src={item}
              alt={`slide ${index + 1}`}
              onDragStart={handleDragStart}
              role="presentation"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;