import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pizza1 from '../constants/img/p1.png';
import pizza2 from '../constants/img/p2.png';
import pizza3 from '../constants/img/p3.png';

const pizzas = [pizza1, pizza2, pizza3];

const PizzaAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pizzas.length);
    }, 10000); // 10 წამში ერთხელ პიცა შეიცვლება

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pizza-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex} // პიცა შეიცვლება
          src={pizzas[currentIndex]}
          alt="Pizza"
          className="pizza-image"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default PizzaAnimation;