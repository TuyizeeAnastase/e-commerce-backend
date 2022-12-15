import {User,Role}from "../database/models"

export const createUser=async(user)=>{
    return await User.create(user);
}

export const getUSers=async()=>{
    return await User.findAll({
        include: [
            {
              model: Role,
              as: "role",
            },
        ]
    })
}

export const getUserById=async(id)=>{
  return await User.findOne({
    where:{
        id
    }
  })
}