import { FC } from 'react';

import Collapsible from './components/Collapsible';

import './App.css';

const App: FC = () => {
    return (
        <div>
            <Collapsible title="Toggle content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                ducimus asperiores dicta unde error aspernatur minus ratione
                adipisci dolores. Aliquam soluta aut id blanditiis omnis ipsum
                enim nam atque nulla.
            </Collapsible>
        </div>
    );
};

export default App;
