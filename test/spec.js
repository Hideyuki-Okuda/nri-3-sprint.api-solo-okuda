const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { setupServer } = require('../src/server');
chai.should();

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
const server = setupServer();
describe('API Server', () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });
    describe('GET /api', () => {
        it("should return the list of json'", async () => {
            const res = await request.get('/api');
            res.should.be.json;
        });
    });
});