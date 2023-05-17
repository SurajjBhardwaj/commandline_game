#!/usr/bin/env node

//it will color the output text in the terminal
import  chalk  from "chalk";

// add rainbow animation in that text
import  chalkAnimation  from "chalk-animation";

// to implement ascii art from text
import  figlet  from "figlet";

// it has capacity to take input from terminal
import  inquirer  from "inquirer";
import  inspector  from "inspector";

// for a spinning effect in terminal and also for checking answers
import  {createSpinner}  from "nanospinner";

// for coloring the terminal
import  gradientString  from "gradient-string";
import { type } from "os";
import gradient from "gradient-string";
import { promises } from "dns";

//for test
// console.log(chalk.bgYellow("heyyy dear"));
// console.log(chalkAnimation.rainbow("heyyy dear"));




let player;

// javascript does'nt allow us to implement a promise based timeout so this line of code will help
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r , ms));

async function welcome() {

    console.clear();
    const tittle = chalkAnimation.rainbow(
        'who wants to be my friend ? \n'
    );

    await sleep();
    tittle.stop();

    console.log(`
      ${chalk.bgBlue(' how to play ')}
look, i am not a computer
i am a human being name ${chalk.yellow(' surajj')}
so if you wants to be my friend must answer the right answers.    
    `);

}

async function playername() {

    const answers = await inquirer.prompt({
        //  variable name
        name: 'player_name',

        // specify the type
        type: 'input',

        // from what prompt you want to take the input from user
        message: 'what is your name',

        // it will give the default value as player
        default(){
            return 'Player'
        }

    })

    // assining the global variable player to the input of the user 
    player = answers.player_name;
}

// define your question
async function question1() {

    console.clear();
    const answers = await inquirer.prompt ({
        name: 'question1',
        type: 'list',
        message: chalk.yellow('ok so the first question \n why do you want to be my friend ? \n'),
        choices: [
            'because i have no friends',
            'because you have no friends',
            'because we will grow together',
            'because we are classmate'
        ],
    });

    answers.question1 == 'because we will grow together';
    return handleAnswer1(answers.question1 == 'because we will grow together' );
}


async function question2() {

    console.clear();
    const answers = await inquirer.prompt ({
        name: 'question2',
        type: 'list',
        message: chalk.yellow('next question: \n let me check how well you know me!! \n tell me what is my hobby'),
        choices: [
            'coding',
            'photography',
            'videography',
            'public speaking'
        ],
    });

    answers.question1 == 'because we will grow together';
    return handleAnswer2(answers.question2 == 'coding' );
}



async function question3() {

    console.clear();
    const answers = await inquirer.prompt ({
        name: 'question3',
        type: 'list',
        message: chalk.yellow('Okay !! you know me, still i want to know how you can help me ? \n becuse i have no time to waste with wrong guys \n'),
        choices: [
            'i will help you in finding internship',
            'i will help in your bad times with emotional support',
            'i will help you by helping you to make new gf',
            'hehe !!, i will never help you but i will show you the path'
        ],
    });

   
    return handleAnswer3(answers.question3 == 'hehe !!, i will never help you but i will show you the path' );
}



async function question4() {

    console.clear();
    const answers = await inquirer.prompt ({
        name: 'question4',
        type: 'list',
        message: chalk.yellow(`Good going Mr. ${player} \n One last question what i dislike the most ? \n`),
        choices: [
            'not doing the thing which is important for me',
            'work for society',
            'loving a person',
            'put efforts'
        ],
    });

   
    return handleAnswer4(answers.question4 == 'not doing the thing which is important for me' );
}





// it will return a boolean either it is correct or incorrect
async function handleAnswer1(isCorrect) {

    const Spinner =  createSpinner('checking answer...').start();
    await sleep();

    if(isCorrect){
        Spinner.success({text : `I like it, ${player} !!`});
        await sleep();
    }
    else {
        Spinner.error({text : `game over mr ${player}. you can't be my friend !!`});
        process.exit(1);
    }
}

async function handleAnswer2(isCorrect) {

    const Spinner =  createSpinner('checking answer...').start();
    await sleep();

    if(isCorrect){
        Spinner.success({text : `Gud job, Mr. ${player} !!`});
        await sleep();
    }
    else {
        Spinner.error({text : `game over mr ${player}. you can't be my friend !!`});
        process.exit(1);
    }


}

async function handleAnswer3(isCorrect) {

    const Spinner =  createSpinner('checking answer...').start();
    await sleep();

    if(isCorrect){
        Spinner.success({text : `you are toally my type, brother !!`});
        await sleep();
    }
    else {
        Spinner.error({text : `game over mr ${player}. you can't be my friend !!`});
        process.exit(1);
    }


}




async function handleAnswer4(isCorrect) {

    const Spinner =  createSpinner('checking answer...').start();
    await sleep();

    if(isCorrect){
        Spinner.success();
       await winner();
    }
    else {
        Spinner.error({text : `game over mr ${player}. you can't be my friend !!`});
        process.exit(1);
    }


}

const sleep2 = (ms = 500) => new Promise((r)=>setTimeout(r,ms))
const sleep3 = (ms = 10000) => new Promise((r)=>setTimeout(r,ms))

async function handlelast() {

    await sleep2();
    const Spinner =  createSpinner('a present...').start();
    await sleep();
    await sleep();
    Spinner.success();
}

async function winner(){

    console.clear();
    const msg = `Congrats  ${player} !`;
    const msg2 = `Surajj 🤝 ${player}`
    figlet(msg, (err, data)=>{
        console.log(gradient.pastel.multiline(data));
        
        if(`${player}`==='Agrim' || `${player}`==='agrim' ){

            console.log(gradient.passion.multiline(`\n                       you are my best friends.`));
        
        }
        else if (`${player}` === 'Jyoti' || `${player}` === 'jyoti' || `${player}` === 'Jyoti km' || `${player}` === 'jyoti km'){


            console.log(gradient.passion.multiline(`\n                       you are my love,i love you jaan`));
        }

        else if (`${player}` === 'Kamal' || `${player}` === 'kamal' || `${player}` === 'saka' || `${player}` === 'kamalnayan' || `${player}` === 'kamal nayan' || `${player}` === 'Kamal Nayan' || `${player}` === 'Kamal nayan' || `${player}` === 'KamalNayan' ){


            console.log(gradient.passion.multiline(`\n                       you are my brother`));
        }

        else if (`${player}` === 'niraj' || `${player}` === 'Niraj' || `${player}` === 'niraj pandey' || `${player}` === 'Niraj pandey' ){


            console.log(gradient.passion.multiline(`\n                       you are my brother`));
        }
        
        else{
            console.log(gradient.passion.multiline(`\n                       we are friends, Now !!`));
        }
       
    })

    await handlelast();

    figlet(msg2, (err,data)=>{
        console.log(gradient.passion.multiline(data));
    })

    await sleep3();
}




await welcome();
await playername();
await question1();
await question2();
await question3();
await question4();