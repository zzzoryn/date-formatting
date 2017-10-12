const assert = require('assert');
const {describe, it} = require('mocha');
const formatting = require('./index');
const date = new Date('September 8, 2017 7:04:08:001');
const options = {
  format: {
    monthShort: '%b',
    day: '%d',
    yearFull: '%Y',
    hourAmPm: '%I',
    minutes: '%M',
    markerAmPm: '%p',
    timezone: '%Z'
  }
};

describe('default', () => {
  it('dayWeekMin', () => assert.equal('Fri', formatting(date, 'D')));
  it('dayWeek', () => assert.equal('Friday', formatting(date, 'DD')));
  it('dayMin', () => assert.equal('8', formatting(date, 'd')));
  it('day', () => assert.equal('08', formatting(date, 'dd')));
  it('monthMin', () => assert.equal('9', formatting(date, 'M')));
  it('month', () => assert.equal('09', formatting(date, 'MM')));
  it('monthShort', () => assert.equal('Sep', formatting(date, 'MMM')));
  it('monthFull', () => assert.equal('September', formatting(date, 'MMMM')));
  it('yearShort', () => assert.equal('17', formatting(date, 'yy')));
  it('yearFull', () => assert.equal('2017', formatting(date, 'yyyy')));
  it('hourMin', () => assert.equal('7', formatting(date, 'H')));
  it('hour', () => assert.equal('07', formatting(date, 'HH')));
  it('hourAmPmMin', () => assert.equal('7', formatting(date, 'h')));
  it('hourAmPm', () => assert.equal('07', formatting(date, 'hh')));
  it('minutesMin', () => assert.equal('4', formatting(date, 'm')));
  it('minutes', () => assert.equal('04', formatting(date, 'mm')));
  it('secondsMin', () => assert.equal('8', formatting(date, 's')));
  it('seconds', () => assert.equal('08', formatting(date, 'ss')));
  it('milliseconds', () => assert.equal('001', formatting(date, 'sss')));
  it('markerAmPm', () => assert.equal('AM', formatting(date, 'a')));
  it('timezone', () => assert.equal('-180', formatting(date, 'Z')));
  it('empty string', () => assert.equal('Sep 08, 2017 07:04 -180', formatting(date)));
});

describe('custom format', () => {
  const string = '%b %d, %Y %I:%M%p %Z';
  it(string, () => assert.equal('Sep 08, 2017 07:04AM -180', formatting(date, string, options)));
});