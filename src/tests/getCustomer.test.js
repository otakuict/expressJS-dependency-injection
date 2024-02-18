import app from "../app.js";
import request from "supertest";
describe("GET /user", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/api/customer/")

      .expect(200, done);
  });
});
