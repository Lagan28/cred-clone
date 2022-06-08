import React, {useEffect, useRef, useState} from 'react';

const ScreenText = ({screen, setCurrentImage, i}) => {

    const [showAnimation, setShowAnimation] = useState(false);

    const toggleAnimation = (e) => {
        if(e[0].isIntersecting){
            setShowAnimation(true);
            setCurrentImage(i);
        }

    }

    const ref = useRef(null);

    const options = {
        root:null,
        rootMargin: '0px',
        threshold: 0.6,
    }

    useEffect(()=>{
        //intersection-observer API
        const observer = new IntersectionObserver(toggleAnimation, options)

        if(ref.current){
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current){
                observer.unobserve(ref.current);
            }
        }
    })

    return (
        <div className={`screen-text ${showAnimation ? 'text-visible': ""}`} ref={ref}>
            <div className="screen-heading">
                {screen.heading}
            </div>
            <div className="mobile-mockup-wrapper only-mobile">
                <div className="mobile-mockup">
                    <div className="mobile-mockup-screen flex absolute-center">
                        <img
                            src={screen.mobileImg}
                            className="mobile-screen-img"
                            alt={screen.heading}
                        />
                    </div>
                </div>
            </div>
            <div className="screen-desc">
                {screen.description}
            </div>
        </div>
    );
};

export default ScreenText;