#! /usr/bin/env node 

import inquirer from "inquirer"


class player{
    name:string;
    rolling:number = 1000;
    constructor(name:string){
        this.name =name;
    }
    rollongDecrease(){
        let rolling =this.rolling -100
        this.rolling = rolling
    }
    rollingIncrease(){
        this.rolling = 1000
    }
}

class opponent{
    name:string;
    rolling:number = 1000;
    constructor(name:string){
        this.name =name;
    }
    rollongDecrease(){
        let rolling =this.rolling -100
        this.rolling = rolling
    }
    rollingIncrease(){
        this.rolling = 1000
    }
}

let players= await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:" Please Enter your Name"
    }
])
let opponents = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        massage:"Select  your oppenent",
        choices:["Rollance_Adenture_Balls","Ramp_Car_Rolling","BUbbles_rolling_Shotter" ]
    }
])

let p1 = new player(players.name)
let o1 =new opponent(opponents.select)

do{

    //Rollance_Adenture_Balls
    if(opponents.select  =="Rollance_Adenture_Balls"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What wolud you like  to do",
                choices:["Scrolling","Energy_Bosster","Giveup"]
            }
        ]);

        if(ask.opt == "Scrolling"){
            let num = Math.floor(Math.random() * 3)
            if(num > 0){
                p1.rollongDecrease()
                console.log(`${p1.name} rolling is ${p1.rolling}`);
                console.log(`${o1.name} rolling is ${o1.rolling}`);
                if (p1.rolling <= 0){
                    console.log ("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.rollongDecrease()
                console.log(`${p1.name} rolling is ${p1.rolling}`);
                console.log(`${o1.name} rolling is ${o1.rolling}`);
                if (o1.rolling <= 0){
                    console.log ("You Win");
                    process.exit()
                }
            }

        }
        if(ask.opt =="Energy_Bosster"){
            p1.rollingIncrease()
            console.log(`you getit energy bosster, your rooling is ${p1.rolling}`);
        }
        if(ask.opt == "Giveup"){
            console.log("You Loose, Better Luck Next Time")
            process.exit()
        }
  
    }
    

    //Ramp_Car_Rolling

    if(opponents.select  =="Ramp_Car_Rolling"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What wolud you like  to do",
                choices:["Scrolling","Energy_Bosster","Giveup"]
            }
        ]);

        if(ask.opt == "Scrolling"){
            let num = Math.floor(Math.random() * 3)
            if(num > 0){
                p1.rollongDecrease()
                console.log(`${p1.name} rolling is ${p1.rolling}`);
                console.log(`${o1.name} rolling is ${o1.rolling}`);
                if (p1.rolling <= 0){
                    console.log ("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.rollongDecrease()
                console.log(`${p1.name} rolling is ${p1.rolling}`);
                console.log(`${o1.name} rolling is ${o1.rolling}`);
                if (o1.rolling <= 0){
                    console.log ("You Win");
                    process.exit()
                }
            }

        }
        if(ask.opt =="Energy_Bosster"){
            p1.rollingIncrease()
            console.log(`you getit energy bosster, your rooling is ${p1.rolling}`);
        }
        if(ask.opt == "Giveup"){
            console.log("You Loose, Better Luck Next Time")
            process.exit()
        }
  
    }

    //BUbbles_rolling_Shotter

    
    if(opponents.select  =="BUbbles_rolling_Shotter"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What wolud you like  to do",
                choices:["Scrolling","Energy_Bosster","Giveup"]
            }
        ]);

        if(ask.opt == "Scrolling"){
            let num = Math.floor(Math.random() * 3)
            if(num > 0){
                p1.rollongDecrease()
                console.log(`${p1.name} rolling is ${p1.rolling}`);
                console.log(`${o1.name} rolling is ${o1.rolling}`);
                if (p1.rolling <= 0){
                    console.log ("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.rollongDecrease()
                console.log(`${p1.name} rolling is ${p1.rolling}`);
                console.log(`${o1.name} rolling is ${o1.rolling}`);
                if (o1.rolling <= 0){
                    console.log ("You Win");
                    process.exit()
                }
            }

        }
        if(ask.opt =="Energy_Bosster"){
            p1.rollingIncrease()
            console.log(`you getit energy bosster, your rooling is ${p1.rolling}`);
        }
        if(ask.opt == "Giveup"){
            console.log("You Loose, Better Luck Next Time")
            process.exit()
        }
  
    }
}

while(true)