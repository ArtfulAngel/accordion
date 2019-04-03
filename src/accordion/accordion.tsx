import React, { useState } from 'react';

import './accordion.css';
import { Header } from './header';

type TAccordion = {
    id: string | number;
    header: { name: string; componentActions?: React.ReactNode };
    body: React.ReactNode;
};

type Props = {
    data: TAccordion[];
    multiple: boolean;
    expandSection: TSections; //  если all, то метод раскрытия не должен работать!
};

type TSections = 'one' | 'all';

export function Accordion(props: Props) {
    const { data, multiple, expandSection } = props;

    const getIds = () => {
        if (data.length > 0) {
            if (expandSection === 'all') {
                return data.map(el => el.id);
            }
            return [data[0].id];
        }
        return [];
    };

    const [sectionSelectedIds, setSectionSelectedIds] = useState(getIds());

    const handleClick = (id: string) => {
        if (sectionSelectedIds.includes(id)) {
            setSectionSelectedIds(sectionSelectedIds.filter(el => el !== id));
        } else {
            setSectionSelectedIds(multiple ? [...sectionSelectedIds, id] : [id]);
        }
    };

    const checkExpand = (id: string) => sectionSelectedIds.includes(id);

    return (
        <div className="Accordion">
            {data.map(item => {
                const isExpanded = checkExpand(String(item.id));

                return (
                    <section key={item.id} className="Wrapper">
                        <Header id={String(item.id)} header={item.header} onClick={handleClick} />
                        <div className={`Body ${!isExpanded ? 'Hidden' : ''}`}>{item.body}</div>
                    </section>
                );
            })}
        </div>
    );
}
