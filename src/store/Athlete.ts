import {makeObservable} from "mobx";

export default class Athlete {
    name: string;
    age: number;
    teamHistory: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.teamHistory = [];

        makeObservable(this, {
            name: true,
            age: true,
            teamHistory: true,
        })
    }
}