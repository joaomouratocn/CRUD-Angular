import {v4 as uuid} from "uuid"

export class UserModel{
    id?:string;
    name?:string;
    cpf?:string;
    bithday?:string;
    email?:string;

    static newUser(){
        const userModel = new UserModel();
        userModel.id = uuid();
        return userModel;
    }
}