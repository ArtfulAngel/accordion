import React from 'react';

import './App.css';
import { Accordion } from './accordion';
import { dataForAccordion } from './data';

export function App() {
    return (
        <div className="App">
            <main className="Block">
                <Accordion data={dataForAccordion} multiple={true} expandSection="all" />
            </main>
        </div>
    );
}
