import { expect,use } from "chai";
import chaiHttp from "chai-http";
const request=require("supertest");
import app from "../src/app";
import "dotenv/config";
import {registerNewUSer,registeredUser,loginSuccess,userNotExist,passwordNotMatch} from './mocks/user.mocks'

use(chaiHttp);

describe("USER AUTH",async()=>{
    it("should register new user",(done)=>{
        request(app)
        .post("/api/v1/users/register")
        .send(registerNewUSer)
        .end((err,res)=>{
            expect(res.statusCode).to.greaterThanOrEqual(201);
            expect(res.body).to.have.property("user");
            expect(res.body).to.have.property("message");
            done();
        });
    });
    it("Should not register existed user ",(done)=>{
        request(app)
        .post("/api/v1/users/register")
        .send(registeredUser)
        .end((err,res)=>{
            expect(res.statusCode).to.equal(404);
            expect(res.body).to.have.property("message")
            done();
        });
    });
    it("Should not register user with empty field",(done)=>{
        request(app)
        .post("/api/v1/users/register")
        .end((err,res)=>{
            expect(res.statusCode).to.equal(400);
            expect(res.body).to.have.property("message")
            done();
        })
    })
    it("Should login user",(done)=>{
        request(app)
        .post("/api/v1/users/login")
        .send(loginSuccess)
        .end((err,res)=>{
            expect(res.statusCode).to.equal(200)
            expect(res.body).to.have.property("token")
            done();
        });
    });
    it("Should not login, if user does not exist",(done)=>{
        request(app)
        .post("/api/v1/users/login")
        .send(userNotExist)
        .end((err,res)=>{
            expect(res.statusCode).to.equal(404)
            expect(res.body).to.have.property("message")
            done()
        });
    });
    it("Should not login, if password does not match",(done)=>{
        request(app)
        .post("/api/v1/users/login")
        .send(passwordNotMatch)
        .end((err,res)=>{
            expect(res.statusCode).to.equal(401)
            expect(res.body).to.have.property("message")
            done()
        })
    })
})