const AccessControl = require('accesscontrol');

let grantsObject = {
    admin:{
        profile:{
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        },
        articles:{
            'read:any': ['*'],
        },
        article:{
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        }
    },
    user:{
        profile:{
            'read:own': ['*','!password','!_id','!date'],
            'update:own': ['*'],
        }
    }
}


const roles = new AccessControl(grantsObject);

module.exports = { roles }