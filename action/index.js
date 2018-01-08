const  TYPE_USERNAME = 'TYPE_USERNAME';
const  TYPE_PASSWORD = 'TYPE_PASSWORD';
const LOGIN_CLICKED = 'LOGIN_CLICKED';

export const typeUsername = (text) =>{
    
    return{
        type:TYPE_USERNAME,
        username:text
    };
}

export const typePassword = (text) =>{
    return{
        type:TYPE_PASSWORD,
        password:text
    };
}

export const loginClicked =(usr,psw)=>{
    return{
        type:LOGIN_CLICKED,
        username:usr,
        password:psw
    };
}

export {TYPE_PASSWORD,TYPE_USERNAME,LOGIN_CLICKED};
