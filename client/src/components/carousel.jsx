import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/carousel.css";

const Gallery = () => {
    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        fetch("/Marca")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar marcas: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                setMarcas(data);
            })
            .catch(error => {
                console.error("Erro ao carregar marcas:", error);
                alert("Erro ao carregar marcas. Verifique o console para mais detalhes.");
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000
    };

    const handleDragStart = e => e.preventDefault();

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {marcas.map((marca, index) => (
                    <div key={index} className="carousel-container-img">
                        <img
                            className="carouselImages"
                            src={marca.logo_marca}
                            alt={`Marca ${marca.desc_marca}`}
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
