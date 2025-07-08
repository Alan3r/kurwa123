import React from "react";

interface BlurredCarouselProps {
  images: { src: string; views: number; likes: number; comments: number }[];
}

const BlurredCarousel: React.FC<BlurredCarouselProps> = ({ images }) => {
  return (
    <div className="w-full overflow-x-auto flex gap-4 py-4">
      {images.map((img, idx) => (
        <div key={idx} className="relative min-w-[220px] h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-slate-800">
          <img
            src={img.src}
            alt="Ukryte zdjęcie"
            className="w-full h-full object-cover filter blur-md scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-black/70 text-white text-lg font-bold px-4 py-2 rounded-xl border-2 border-rose-400">
              Dostępne po rejestracji
            </span>
          </div>
          <div className="absolute bottom-2 left-0 w-full flex justify-center gap-4 text-white text-xs font-semibold drop-shadow">
            <span>👁️ {img.views}</span>
            <span>❤️ {img.likes}</span>
            <span>💬 {img.comments}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlurredCarousel;
