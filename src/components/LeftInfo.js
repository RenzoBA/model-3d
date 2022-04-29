import React from "react";
import { motion } from "framer-motion";

export default function LeftInfo(props) {

    const fadeInContainerWithStagger = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.25,
            type: "tween",
            ease: "easeIn",
            when: "beforeChildren",
            staggerChildren: 0.3,
          }
        }
      };

    const fadeInRight = {
        hidden: {
          opacity: 0,
          x: 40,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
          }
        }
      };
      
      const fadeInLeft = {
        hidden: {
          opacity: 0,
          x: -40,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
          }
        }
      };

    return (
        <motion.div className="left-info" variants={fadeInContainerWithStagger} initial="hidden" animate="visible" >
            <motion.div variants={fadeInLeft}>
                <h2 className="description-title">{props.title}</h2>
                <p className="description-text">{props.text}</p>
            </motion.div>
            <motion.img alt="description-image" variants={fadeInRight} />
        </motion.div>
    )
}