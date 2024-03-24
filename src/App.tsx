import { FC } from 'react';

import { data } from './data';

import Filter from './components/Filter';

import './App.css';

const App: FC = () => {
    return (
        <div>
            <Filter data={data} />
        </div>
    );
};

export default App;
