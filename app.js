import colors from 'colors';
import { inquirerMenu, 
        pause, 
        caputureInput 
    } from './helpers/inquirer.js';
// import {Task}  from './models/task.js'
import {Tasks}  from './models/tasks.js'

// const { showMenu , pause} = require('./helpers/messages');

const main = async () =>{
    console.clear()
    let opt = '';
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await caputureInput('describe: ');
                tasks.createTask(desc)
                break;
        
            case '2':
                console.log(tasks._list);
                break;
        }
        
        await pause();
        
    } while (opt !=='0');

   
}

main();

