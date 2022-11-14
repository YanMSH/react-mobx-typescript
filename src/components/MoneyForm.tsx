import React from 'react';
import {observer} from "mobx-react-lite";
import {action, computed, observable, toJS} from "mobx";

type FormState = {
    years: number;
    salary: number;
}

const formState: FormState = observable({
    years: 0,
    salary: 0,
});


function MoneyForm(){

    const totalValue = computed(() => formState.salary * formState.years);


    return (
        <div style={{display: 'flex', flexDirection:'column'}}>
            <h1 style={{marginBottom:0}}>Money Talks</h1>
            <>Total: {toJS(totalValue)}</>
            <input
                type='number'
                placeholder='Years...'
                style={{height:'40px'}}
                onChange={action((e)=>{
                    formState.years = Number(e.target.value)
                })}
            />
            <input
                type='number'
                placeholder='Yearly salary...'
                style={{height:'40px'}}
                onChange={action((e) => {
                    formState.salary = Number(e.target.value)
                })}
            />
        </div>
    );
}

export default observer(MoneyForm);