import React from 'react';

export const dataForAccordion = [
    {
        id: '1',
        header: {
            name: 'Жарнул1',
        },
        body: (
            <React.Fragment>
                <span>test</span>
                <div>Журнал test</div>
            </React.Fragment>
        ),
    },
    {
        id: '2',
        header: {
            name: 'Жарнул2',
            componentActions: (
                <button
                    onClick={() => {
                        alert('Действие');
                    }}
                >
                    Нажми меня
                </button>
            ),
        },
        body: (
            <React.Fragment>
                <span>test</span>
                <div>Журнал test</div>
                <div>01.04.2019</div>
            </React.Fragment>
        ),
    },
];
