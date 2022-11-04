import { expect, use } from "chai";
import chaiHttp from "chai-http";
const request = require("supertest");
import "dotenv/config";
import { getToken, decoding } from "../src/util/token";
import { token } from "./mocks/token.mocks";

describe("UTILS - TEST", () => {
  const params = {
    id: 1,
    role: "finance",
  };

  it("should return token", (done) => {
    expect(getToken(params)).to.be.a("string");
    done();
  });

  it("should return payload", (done) => {
    expect(decoding(token)).to.be.a("object");
    done();
  });

});
