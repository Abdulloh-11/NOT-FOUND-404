import {users} from './db.js';

if(process.argv[2] === '--user') {
    let name = process.argv[3];
    console.log(name);
    const existUser = users.filter(user => user.name === name);
    if(existUser.length) {
        console.log('This user already exists');
        process.exit(1);
    }



    users.push({
        id: users.length + 1,
        name
    })

    console.table(users);
}
