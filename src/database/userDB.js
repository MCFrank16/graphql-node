const uuid = require('uuid');

class Users {
    constructor(){
        this.collection = [
        {   
            id: 'c00cbd58-b1df-41de-ae73-44a8a9c904a1',
            firstname: 'Frank',
            lastname: 'Mutabazi' 
        },
        {   
            id: 'c00cb258-b1df-41de-ae73-44a8a9c904a1',
            firstname: 'Castro',
            lastname: 'Kanuma' 
        }
        ];
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

    updateUser(id, newObject){
        if((!newObject)) return undefined;
        const index = this.collection.findIndex(el => el.id === id);
        return this.collection.splice(index, 1, newObject);
    }

    deleteUser(id){
        if(!id) return undefined;
        const index = this.collection.findIndex(el => el.id === id);
        return this.collection.splice(index, 1);
    }
}
let initializeDB = new Users();

module.exports = initializeDB;
