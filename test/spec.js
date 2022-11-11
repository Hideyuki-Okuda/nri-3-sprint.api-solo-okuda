//require
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { setupServer } = require('../src/server');
chai.should();

//data
const shop = require('../src/data/shop.json');
const newShop = require('../src/data/newShop.json');
const editShop = require('../src/data/editShop.json');

//describe
const server = setupServer();
describe('gourmet API Server', () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });

    describe('GET /shop', () => {
        it("should return the list of all shops'", async () => {
            const res = await request.get('/shop');
            res.body.should.deep.equal(shop);
        });
    });

    describe('POST /shop', () => {
        it('should add a shop', async () => {
            const res = await request.post('/shop').send(newShop);
            console.log(res.body);
            res.status.should.equal(200);
        });
    });

    describe('PATCH /shop/:id', () => {
        it('should edit a shop by id', async () => {
            const res = await request.patch('/shop/1').send(editShop);
            console.log(res.body);
            res.status.should.equal(200);
        });
    });

    describe('DELETE /shop/:id', () => {
        it('should delete a shop by id', async () => {
            const res = await request.delete('/shop/1');
            console.log(res.body);
            res.status.should.equal(200);
        });
    });
});
