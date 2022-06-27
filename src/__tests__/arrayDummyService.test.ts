import supertest from "supertest";
import app from "../app";
 
describe("dummy-service", () => {

    it("api retorna una respuesta", async () => {
        const { status } = await supertest(app).get("/v1/arraydummy")
        expect(status).toBeDefined()

    })

    it("api retorna lista de usuarios", async () => {
        const { body: { payload } } = await supertest(app).get("/v1/arraydummy")
        expect(payload.length).toBeGreaterThan(0)

    })

})