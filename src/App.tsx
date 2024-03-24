import { FC } from 'react';
import { motion } from 'framer-motion';

import viteLogo from '/vite.svg';

import './App.css';

const App: FC = () => {
    const pVariants = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const listVariants = {
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.6,
                type: 'spring',
                ease: 'easeInOut',
            },
        }),
        hidden: {
            opacity: 0,
            y: 10,
        },
    };

    const items = ['item1', 'item2', 'item3'];
    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <motion.img
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        delay: 2,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2,
                        repeatType: 'reverse',
                        type: 'tween',
                        ease: 'easeIn',
                    }}
                    src={viteLogo}
                    className="logo"
                    alt="Vite logo"
                />
            </a>
            <motion.p
                initial={'hidden'}
                animate={'visible'}
                transition={{
                    delay: 0.5,
                    type: 'spring',
                }}
                variants={pVariants}
            >
                Hello World!!
            </motion.p>
            <motion.a whileHover={{ scale: 1.2, color: 'white' }} href="!#">
                Link
            </motion.a>
            <ul>
                {items.map((item, index) => (
                    <motion.li
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default App;
