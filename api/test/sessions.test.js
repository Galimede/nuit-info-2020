/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'express';
// import settings from '../config.js';
import app from '../index.js';

chai.use(chaiHttp);
const should = chai.should;
// const baseUrl = settings.base_url;


describe('/sessions/', () => {
    describe('GET /', () => {
      it('should send all sessions', () => {
        chai.request(app)
            .get('/sessions')
            .end((res) => {
                res.body.should.have.property(sessions);
                res.body.sessions.should.be.a('array');
                done();
            });
      });
    });
    describe('GET /:id', () => {
        it('should send the spot', () => {
        chai.request(app)
            .get('/sessions/1')
            .end((res) => {
                res.body.should.have.property('datetime_start');
                res.body.should.have.property('datetime_end');
                res.body.should.have.property('spot');
                res.body.should.have.property('waterman');
                res.body.should.have.property('ville');

                res.body.datetime_start.should.be.a('datetime');
                res.body.datetime_end.should.be.a('datetime');
                res.body.spot.should.be.a('object');
                res.body.waterman.should.be.a('string');
                res.body.ville.should.be.a('string');
                done();
          });
        });
    });
});
