import {action, makeObservable, observable} from "mobx";


export default class Athlete {
    name: string;
    age: number;
    teamHistory: string[];
    salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.teamHistory = [];
        this.salary = salary;

        makeObservable(this, {
            wishHappyBirthday: action,
            tradePlayer: action,
            name: observable,
            age: observable,
            salary: true,
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