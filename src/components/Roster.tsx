import React from 'react';
import {observer} from "mobx-react-lite";
import Athlete from "../models/Athlete";
import TradeForm from "./TradeForm";

const lebronJames = new Athlete('Lebron James', 37);
const stephCurry = new Athlete('Steph Curry', 34);

const Roster = () => {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Teams</th>
                <th>Trade Form</th>
                <th>Is it their birthday?</th>
            </tr>
            {[lebronJames, stephCurry].map(athlete => {
                return (
                    <tr key={athlete.name}>
                        <td>{athlete.name}</td>
                        <td>{athlete.age}</td>
                        <td>{athlete.teamHistory.join(', ')}</td>
                        <td><TradeForm athlete={athlete}/></td>
                        <td><button
                            type="button"
                            style={{width:"100%"}}
                            onClick={()=>athlete.wishHappyBirthday()}>
                        Wish happy birthday!
                        </button></td>
                    </tr>
                );
            })}
        </table>
    );
};

export default observer(Roster);