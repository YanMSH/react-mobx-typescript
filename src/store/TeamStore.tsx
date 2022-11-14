import { makeAutoObservable } from "mobx";
import Athlete from "../models/Athlete";
import React, { useRef, useContext } from "react";

export default class TeamStore {
    constructor(players: Athlete[]) {
        this.players = players;
        makeAutoObservable(this);
    }

    homeState: string = 'New York';
    setHomeState = (homeState: string) => {
        this.homeState = homeState;
    };

    mascot: string = "";
    setMascot = (mascot: string) => {
        this.mascot = mascot;
    };

    players: Athlete[] = [];

    get teamName(): string {
        return this.homeState + ' ' + this.mascot
    }

    get totalYearlyCost(): number {
        return this.players.reduce(
            (totalSalary, currentAthlete) => totalSalary + currentAthlete.salary,
            0
        );

    }

    addPlayer = (player: Athlete) => {
        this.players.push(player);
    }

}

const TeamStoreContext = React.createContext<TeamStore>(
    null as unknown as TeamStore
);

export const useTeamStore = () => useContext(TeamStoreContext);

type Props = {
    children: React.ReactNode,
    players: Athlete[];
};

export function TeamStoreProvider({children, players}: Props) {
    const store = useRef(new TeamStore(players));

    return (
        <TeamStoreContext.Provider value={store.current}>
            {children}
        </TeamStoreContext.Provider>
    )
}