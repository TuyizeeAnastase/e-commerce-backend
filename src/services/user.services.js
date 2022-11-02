import {User,Role}from "../database/models"

export const createUser=async(user)=>{
    return await User.create(user);
}
