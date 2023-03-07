import { motion } from "framer-motion";
import "../css/LotteryBall.css";

const LotteryNumber = ({ number, delay }) => {
  const variants = {
    start: {
      y: -100,
    },
    end: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
        mass: 0.8,
        delay: delay,
      },
    },
  };

  return (
    <motion.span
      variants={variants}
      initial="start"
      animate="end"
      style={{ marginRight: 40 }}
    >
      <div className="lottery-ball-container">
        <div className={`lottery-ball`}>
          <span className="ball-number">{number}</span>
        </div>
      </div>
    </motion.span>
  );
};

const LotteryNumbers = ({ numbers }) => {
  return (
    <div>
      <div 
      className="lottery-numbers"
      >
        {numbers?.map((number, index) => (
          <LotteryNumber key={index} delay={index * 0.1} number={number} />
        ))}
      </div>
      
    </div>
  );
};

export default LotteryNumbers;
