import React, { useRef } from "react";

const randomDescriptions = [
  "Z wakacji na Mazurach! ☀️🚤",
  "Wieczór z przyjaciółkami 💃🥂",
  "Nowa stylizacja na randkę 😘",
  "Selfie po treningu 💪🔥",
  "Chwila relaksu z książką 📚☕",
  "Spacer po plaży 🌊👣",
  "Słodkie lenistwo w domu 🛋️",
  "Kawa na mieście ☕️🥐",
  "Zachód słońca na balkonie 🌅",
  "Nowy look na lato 👗🌸"
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface BlurredTile {
  src: string;
}

interface BlurredTilesProps {
  images: BlurredTile[];
  onShow: () => void;
}

const BlurredTiles: React.FC<BlurredTilesProps> = ({ images, onShow }) => {
  // Zapamiętaj losowe dane na stałe (nawet przy re-renderach)
  const tilesRef = useRef(
    images.map(() => {
      const views = getRandomInt(800, 2500);
      const likes = getRandomInt(Math.floor(views * 0.2), Math.floor(views * 0.5));
      const comments = getRandomInt(Math.floor(likes * 0.1), Math.floor(likes * 0.3));
      const desc = randomDescriptions[getRandomInt(0, randomDescriptions.length - 1)];
      return { views, likes, comments, desc };
    })
  );

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
      {images.map((img, idx) => (
        <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-800 flex flex-col">
          <div className="relative h-64 w-full">
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
          </div>
          <div className="flex flex-col gap-1 px-4 py-2 text-white text-xs font-semibold drop-shadow bg-slate-900/80">
            <span className="text-base font-normal text-rose-100/90 mb-1">{tilesRef.current[idx].desc}</span>
            <div className="flex justify-between">
              <span>👁️ {tilesRef.current[idx].views}</span>
              <span>❤️ {tilesRef.current[idx].likes}</span>
              <span>💬 {tilesRef.current[idx].comments}</span>
            </div>
          </div>
          <button
            onClick={onShow}
            className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold py-3 rounded-b-2xl hover:from-rose-700 hover:to-pink-700 transition-all text-base mt-auto"
          >
            Zobacz zdjęcie
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlurredTiles;
