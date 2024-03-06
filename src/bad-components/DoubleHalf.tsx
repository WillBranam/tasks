import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerProps {
    setDhValue: (value: number) => void;
    dhValue: number;
}

interface HalverProps {
    setDhValue: (value: number) => void;
    dhValue: number;
}

const Doubler: React.FC<DoublerProps> = ({ setDhValue, dhValue }) => {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
};

const Halver: React.FC<HalverProps> = ({ setDhValue, dhValue }) => {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
};

export const DoubleHalf: React.FC = () => {
    const [dhValue, setDhValue] = useState<number>(1);

    return (
        <div>
            <h3>Double Half</h3>
            <span>The current value is: {dhValue}</span>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
};