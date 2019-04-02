import React from 'react';
import './header.css';
import arrowDownIco from '../../icons/chevron-down.svg';

type HeaderProps = {
    id: string;
    header: { name: string; componentActions?: React.ReactNode };
    isExpanded: boolean;
    onClick: (value: string) => void;
};

export function Header({ id, header, isExpanded, onClick }: HeaderProps) {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = event => {
        const { value } = event.currentTarget.dataset;
        value && onClick(value);
    };

    return (
        <div data-value={id} className="Header" role="button" onClick={handleClick}>
            <div className="ArrowSection">
                <img src={arrowDownIco} alt="X" />
            </div>
            <span className="Label">{header.name}</span>
            {header.componentActions ? <div className="BlockActions">{header.componentActions}</div> : null}
        </div>
    );
}
