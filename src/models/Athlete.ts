import {action, makeObservable, observable} from "mobx";

export default class Athlete {
    name: string;
    age: number;
    teamHistory: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.teamHistory = [];

        makeObservable(this, {
            wishHappyBirthday: action,
            tradePlayer: action,
            name: observable,
            age: observable,
            teamHistory: true,
        })
    }

    wishHappyBirthday(){
        this.age++;
    }

    tradePlayer(team: string){
        this.teamHistory.push(team);
    }
}