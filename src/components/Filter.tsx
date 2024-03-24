import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { IDataItem } from 'types';

import Button from './Button';

interface FilterProps {
    data: IDataItem[];
}

const Filter: FC<FilterProps> = ({ data }) => {
    const [cards, setCards] = useState(
        data.filter((el) => el.category === 'car')
    );

    const buttons = data.reduce((acc: string[], el) => {
        if (acc.includes(el.category)) return acc;
        return [...acc, el.category];
    }, []);

    const handleFilter = (selector: string) => {
        setCards(data.filter((el) => el.category === selector));
    };

    return (
        <div>
            <div>
                {buttons.map((btn) => (
                    <Button
                        key={btn}
                        text={btn}
                        handleClick={() => handleFilter(btn)}
                    />
                ))}
            </div>
            <div
                style={{
                    overflow: 'hidden',
                    maxWidth: 400,
                }}
            >
                <AnimatePresence initial={false} mode="wait">
                    {cards.map((item) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            style={{
                                float: 'left',
                                backgroundColor: '#2196f3',
                                color: '#fff',
                                width: '100px',
                                lineHeight: '100px',
                                textAlign: 'center',
                                margin: '2px',
                            }}
                            key={item.title}
                        >
                            {item.title}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Filter;
