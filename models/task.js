import { v4 as uuidv4 } from 'uuid';


class Task {

    id = '';
    desc = '';
    complete = null;
    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.complete = null;
    }

}

export {Task}