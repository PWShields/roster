import React, { useRef, useState } from 'react';

const ImageComponent = ({src, alt, width, height}) => {
    const image = useRef(null);
    const [valid, setValid] = useState(true);

    const checkValid = () => {
        if (!image.current.complete || image.current.naturalWidth < 1 || image.current.naturalHeight < 1) setValid(false);
    }

    if (valid) {
        return (
            <img
                src={src}
                onLoad={checkValid}
                onError={() => setValid(false)}
                ref={image}
                alt={alt}
                width={width}
                height={height}
            />
        );
    }
    return null;
};

export default ImageComponent;
