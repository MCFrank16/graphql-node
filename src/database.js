const uuid = require('uuid');
const collection = [
    {
        id: 'facsda',
        firstname: 'Frank',
        lastname: 'Pro'
    },
    {
        id: 'cdacad',
        firstname: 'Frank',
        lastname: 'Pro'
    }
];

class Users {
    constructor(){
        this.collection = [];
    }

    addUser({ id, firstname, lastname }){
        if(!firstname || !lastname) return undefined;
        const user = {
            id,
            firstname,
            lastname
        }
        return this.collection.push(user);        
    }

    getUserById(id){
        let user;
        if(!id) return undefined;
        user = this.collection.find(el => el.id === id);
        return user;
    }
}

let newData = new Users();
newData.addUser({
    id: uuid.v4(),
    firstname: 'Frank',
    lastname: 'Mutabazi'
})

newData.addUser({
    id: uuid.v4(),
    firstname: 'Frank',
    lastname: 'Cyuzuzo'
})

console.log(newData);

