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
    //TODO テスト実行時にDBをリセットするように修正する

    describe('GET /shops', () => {
        it("should return the list of all shops'", async () => {
            const res = await request.get('/shops');
            res.body.should.deep.equal(shop);
        });
    });

    describe('POST /shops', () => {
        it('should add a shop', async () => {
            const res = await request.post('/shops').send(newShop);
            console.log(res.body);
            res.status.should.equal(200);
        });
    });

    describe('PATCH /shops/:id', () => {
        it('should edit a shop by id', async () => {
            const res = await request.patch('/shops/1').send(editShop);
            console.log(res.body);
            res.status.should.equal(200);
        });
    });

    describe('DELETE /shops/:id', () => {
        it('should delete a shop by id', async () => {
            const res = await request.delete('/shops/1');
            console.log(res.body);
            res.status.should.equal(200);
        });
    });
});
