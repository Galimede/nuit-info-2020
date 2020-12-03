/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import { request } from 'express';
import { settings } from '../config.js';

const should = chai.should;
const baseUrl = settings.base_url;

describe('/spots/', () => {
    describe('GET /', () => {
      it('should send all spots', () => {
        request(`${baseUrl}/spots/`, (response, body) => {
          body.should.have.property(spots);
          body.spots.should.be.a('array');

          done();
        });
      });
    });
    describe('GET /:id', () => {
        it('should send the spot', () => {
          request(`${baseUrl}/spots/1`, (response, body) => {
            body.should.have.property('longitude');
            body.should.have.property('latitude');
            body.should.have.property('baigneurs');
            body.should.have.property('score_polution');
            body.should.have.property('bateaux');
            body.should.have.property('pratiquants');

            body.longitude.should.be.a('number');
            body.latitude.should.be.a('number');
            body.baigneurs.should.be.a('number');
            body.score_polution.should.be.a('number');
            body.bateaux.should.be.a('object');
            body.pratiquants.should.be.a('number');

            done();
          });
        });
    });
});
