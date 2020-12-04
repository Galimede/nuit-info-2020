/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'express';
// import settings from '../config.js';
// eslint-disable-next-line import/no-useless-path-segments
import app from '../index.js';

chai.use(chaiHttp);

const should = chai.should;
// const baseUrl = settings.base_url;

describe('/spots/', () => {
    describe('GET /', () => {
      it('should send all spots', () => {
        chai.request(app)
            .get('/spots/')
            .end((res) => {
              res.body.should.have.property(spots);
              res.body.spots.should.be.a('array');
              done();
        });

      });
    });
    describe('GET /:id', () => {
      it('should send the spot', () => {
        chai.request(app)
            .get('/spots/1')
            .end((res) => {
              res.body.should.have.property('longitude');
              res.body.should.have.property('latitude');
              res.body.should.have.property('swimmers');
              res.body.should.have.property('score_polution');
              res.body.should.have.property('boats');
              res.body.should.have.property('adherent');

              res.body.longitude.should.be.a('number');
              res.body.latitude.should.be.a('number');
              res.body.swimmers.should.be.a('number');
              res.body.score_polution.should.be.a('number');
              res.body.boats.should.be.a('object');
              res.body.adherent.should.be.a('number');
              done();
          });
        });
    });
});
