import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

export const BeforeAfterSlider = ({ beforeImage, afterImage }: BeforeAfterSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateSliderPosition = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        // Clamp between 0 and 100
        const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
        setSliderPosition(clampedPercentage);
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        updateSliderPosition(e.touches[0].clientX);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        updateSliderPosition(e.clientX);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
                window.removeEventListener('touchmove', handleTouchMove);
                window.removeEventListener('touchend', handleMouseUp);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] md:h-[600px] overflow-hidden cursor-ew-resize select-none"
            onClick={handleClick}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <div className="absolute top-4 right-4 z-10 bg-white text-black px-3 py-1 text-[16px] font-heading font-bold uppercase">
                    After
                </div>
                <img
                    src={afterImage}
                    className="w-full h-full object-cover"
                    alt="After"
                    draggable={false}
                />
            </div>

            {/* Before Image (Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <div className="absolute top-4 left-4 z-10 bg-white text-black px-3 py-1 text-[16px] font-heading font-bold uppercase">
                    Before
                </div>
                <img
                    src={beforeImage}
                    className="w-full h-full object-cover"
                    alt="Before"
                    draggable={false}
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute inset-y-0 z-30 flex items-center justify-center"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* Vertical Line */}
                <div className="w-1 h-full bg-white shadow-lg" />

                {/* Draggable Circle */}
                <div className="absolute w-12 h-12 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center shadow-xl cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                    <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
