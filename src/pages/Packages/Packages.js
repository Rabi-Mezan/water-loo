import React, { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Packages.css'


const Packages = () => {

    const [content, setContent] = useState([])

    useEffect(() => {
        fetch('/slider.json')
            .then(res => res.json())
            .then(data => setContent(data))
    }, [])

    return (
        <div className=''>
            <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat  center`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "100%", position: "absolute" }}
                    >
                        <div className="center">
                            <p className='text-5xl font-bold text-white'>{item.title}</p>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Packages;