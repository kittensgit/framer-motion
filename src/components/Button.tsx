import { FC } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    text: string;
    handleClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, handleClick }) => {
    return (
        <motion.button
            style={btnStyle}
            whileHover={{ backgroundColor: '#ddd' }}
            whileTap={{ backgroundColor: '#ccc' }}
            onClick={handleClick}
        >
            {text}
        </motion.button>
    );
};

export default Button;

const btnStyle = {
    border: 'none',
    outline: 'none',
    padding: '12px 16px',
    backgroundColor: '#f1f1f1',
    cursor: 'pointer',
    color: 'black',
};
