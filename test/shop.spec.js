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
describe('gourmet API Server -SHOP', () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });

    describe('GET /shops', () => {
        it('should return the list of all shops', async () => {
            const res = await request.get('/shops');
            res.body.should.deep.equal(shop);
        });
    });

    describe('GET /shops/:idOrName', () => {
        it("should return the shop by id'", async () => {
            const res = await request.get('/shops/3');
            res.body.should.deep.equal([shop[2]]);
        });
        it("should return the shop by name'", async () => {
            const res = await request.get(
                '/shops/%E3%81%8A%E3%81%95%E3%81%8B%E3%81%AA'
            );
            res.body.should.deep.equal([shop[1]]);
        });
    });

    describe('POST /shops', () => {
        it('should add a shop', async () => {
            const res = await request.post('/shops').send(newShop);
            res.status.should.equal(200);
        });
    });

    describe('PATCH /shops/:id', () => {
        it('should edit a shop by id', async () => {
            const res = await request
                .patch('/shops/' + editShop.id)
                .send(editShop);
            res.status.should.equal(200);
        });
    });

    describe('DELETE /shops/:id', () => {
        it('should delete a shop by id', async () => {
            const res = await request.delete('/shops/4');
            res.status.should.equal(200);
        });
    });
});
