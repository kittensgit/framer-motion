import { FC, ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleProps {
    title: string;
    children: ReactNode;
}

const Collapsible: FC<CollapsibleProps> = ({
    title = 'click me',
    children,
}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const changeVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <div
                onClick={changeVisibility}
                style={{
                    color: '#000',
                    backgroundColor: '#ddd',
                    width: '300px',
                    padding: '0.8rem 1.2rem',
                }}
            >
                {title}
            </div>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{
                            height: 0,
                        }}
                        animate={{
                            height: 'auto',
                        }}
                        exit={{
                            height: 0,
                        }}
                        style={{
                            overflow: 'hidden',
                            border: '1px solid #ddd',
                        }}
                        transition={{
                            // duration: 0.2,
                            type: 'tween',
                            ease: 'easeOut',
                        }}
                    >
                        <div
                            style={{
                                padding: '10px',
                                width: '300px',
                            }}
                        >
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Collapsible;
