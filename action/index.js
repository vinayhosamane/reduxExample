const  TYPE_USERNAME = 'TYPE_USERNAME';
const  TYPE_PASSWORD = 'TYPE_PASSWORD';

export const typeUsername = (text) =>{
    return Object.assign({}, state, { 
        type:TYPE_USERNAME,
        username:text
    });
}

export const typePassword = (text) =>{
    return Object.assign({}, state, { 
        type:TYPE_PASSWORD,
        password:text
    });
}

export {TYPE_PASSWORD,TYPE_USERNAME};
