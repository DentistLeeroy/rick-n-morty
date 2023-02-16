import React, { useState } from 'react';
import './CardStyle.css';

interface CardProps {
  image?: string;
  gif?: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export default function Card({
    image = "./src/assets/ricknmorty.png",
    gif = "./src/assets/blink.gif",
    title,
    subtitle,
    onClick,
  }: CardProps) {

  const [isGifVisible, setGifVisible] = useState(false);

  return (
    <div 
      className="cardComponent" 
      onClick={onClick} 
      onMouseEnter={() => setGifVisible(true)}
      onMouseLeave={() => setGifVisible(false)}
    >
      <img src={isGifVisible ? gif : image} alt={title} />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
};
