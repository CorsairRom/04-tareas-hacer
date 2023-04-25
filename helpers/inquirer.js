import inquirer from 'inquirer';
 
import colors from 'colors';

const question = [
    {
        type: 'list',
        name: 'options',
        message: 'What do you need to do?',
        choices: [
            {
                value: '1',
                name: '1. Create a new task'
            },
            {
                value: '2',
                name: '2. List all tasks'
            },
            {
                value: '3',
                name: '3. List all tasks completed'
            },
            {
                value: '4',
                name: '4. List pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Delete task(s)'
            },
            {
                value: '0',
                name: '0. Exit '
            },
        ],
    },
];

const inquirerMenu  = async() =>{
    console.clear()
    console.log('============================'.green);
    console.log('      Select an option      '.green);
    console.log('============================\n'.green);

    const {options} = await inquirer.prompt(question);
    return options;

};

const pause = async() =>{
    const question = [
            {
                type: 'input',
                name: 'message',
                message: `Press ${'Enter'.red} to continue`,
            }
        ];
    console.log('\n');  
    await inquirer.prompt(question);
    
};

const caputureInput = async( message ) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length === 0){
                    return 'Please insert a value'
                }
                return true
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;

};


export { inquirerMenu, pause, caputureInput};