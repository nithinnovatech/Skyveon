import React, { useState } from 'react';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    lazy = true,
    showLoader = true
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {showLoader && !isLoaded && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg"></div>
            )}
            <img
                src={src}
                alt={alt}
                loading={lazy ? 'lazy' : 'eager'}
                onLoad={() => setIsLoaded(true)}
                className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            />
        </div>
    );
};

export default OptimizedImage;
