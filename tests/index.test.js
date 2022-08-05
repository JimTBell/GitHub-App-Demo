const {expect} = require('chai')
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');

describe('Testing suite', function(){
    it('Testing / route', function(){
        chai.request(app).get('/').end((error, res) => {
            expect(res).to.have.status(200);
        })
    })
})

