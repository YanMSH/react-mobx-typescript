import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import Athlete from "../store/Athlete";

type Props = {
    athlete: Athlete
}

const TradeForm = ({athlete}: Props) => {

    const [teamName, setTeamName] = useState<string>('');

    return (
        <>
         <input
            type='text'
            placeholder="Team name..."
            onChange={e => setTeamName(e.target.value)}
            />
            <span>
                <button type='button' onClick={() => athlete.tradePlayer(teamName)}>
                    Trade
                </button>
            </span>
        </>
    );
};

export default observer(TradeForm);