import { Play } from "lucide-react";
import { useRef, useState } from "react";

export function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.currentTime = 0; // Restart video from beginning
            videoRef.current.play();
            videoRef.current.controls = true;
            setIsPlaying(true);
        }
    };

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1190px]">
                <div
                    className="relative w-full aspect-video md:aspect-[2.0/1] overflow-hidden group cursor-pointer bg-gray-100"
                    onClick={!isPlaying ? handlePlay : undefined}
                >
                    {/* Video */}
                    <video
                        ref={videoRef}
                        src="/image/home-video.mp4"
                        loop
                        className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? '' : 'grayscale'}`}
                    />

                    {/* Play Button */}
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-14 h-14 md:w-20 md:h-20 bg-orange-500 flex items-center justify-center transition-transform duration-300">
                                <Play className="w-6 h-6 md:w-8 md:h-8 text-black fill-black ml-1" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
