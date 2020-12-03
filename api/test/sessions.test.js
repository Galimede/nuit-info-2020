/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import { request } from 'express';
import { settings } from '../config.js';

const should = chai.should;
const baseUrl = settings.base_url;

describe('/sessions/', () => {
    describe('GET /', () => {
      it('should send all sessions', () => {
        request(`${baseUrl}/sessions/`, (response, body) => {
          body.should.have.property(sessions);
          body.sessions.should.be.a('array');

          done();
        });
      });
    });
    describe('GET /:id', () => {
        it('should send the spot', () => {
          request(`${baseUrl}/sessions/1`, (response, body) => {
            body.should.have.property('datetime_start');
            body.should.have.property('datetime_end');
            body.should.have.property('spot');
            body.should.have.property('waterman');
            body.should.have.property('ville');

            body.datetime_start.should.be.a('datetime');
            body.datetime_end.should.be.a('datetime');
            body.spot.should.be.a('object');
            body.waterman.should.be.a('string');
            body.ville.should.be.a('string');

            done();
          });
        });
    });
});
