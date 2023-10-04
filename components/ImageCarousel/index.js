import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities";
import { motion } from 'framer-motion';

const ImageCarousel = ({ images, company, color }) => {

  const [currentColor, setCurrentColor] = useState(color)

  const runColor = (color) => {
    const theme = themeFromSourceColor(argbFromHex(color));
    return theme
  }

  useEffect(() => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(runColor(currentColor), {target: document.getElementById(`${company}-theme`), dark: systemDark})
  }, [currentColor]);

  return (
    
    <motion.div
      id={`${company}-theme`}
      className="max-w-4xl mx-auto my-6 relative top-8"
      initial={{ opacity: 0 }}
      whileInView= {{ opacity: 1, top: 0 }}
      transition={{ duration: 0.3, delay: .2, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
    >
      <Carousel showArrows={true} emulateTouch>
        {
          images.map((item, i) => (
            <div key={i} className="bg-themeSurfaceVariant text-themeOnSurfaceVariant relative flex flex-col rounded-2xl p-2 py-6 md:p-6">
              <img className="z-0 relative rounded-xl" src={item.src}/>
              <span className="w-full text-left mt-2 text-xs">{item.caption}</span>
            </div>
          ))
        }
      </Carousel>
    </motion.div>
  );
}

export default ImageCarousel