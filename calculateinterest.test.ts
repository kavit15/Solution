// src/calculateInterest.test.ts
import { calculateInterest } from './interest';

describe('calculateInterest function', () => {

 it('Test whether error returned if the principal is -ve', () => {
        expect(() => calculateInterest(-35,0.05)).toThrowError('Principal or rate cannot be zero or negative');
       
  });

 it('Test whether error returned if the rate is -ve', () => {
    expect(() => calculateInterest(1000,-0.05)).toThrowError('Principal or rate cannot be zero or negative');
   
 });

 it('Test whether error returned if the principal is 0', () => {
    expect(() => calculateInterest(0,0.90)).toThrowError('Principal or rate cannot be zero or negative');
   
});
it('Test whether error returned if the rate is 0', () => {
    expect(() => calculateInterest(8900,0)).toThrowError('Principal or rate cannot be zero or negative');
   
});

it('Test whether result given correctly in case of valid values', () => {
  const principal = 2700;
  const rate = 9;
  const result = calculateInterest(principal, rate);
  expect(result).toBeCloseTo(24300, 2);  
});

it('Test whether result given correctly in case of rate is decimal', () => {
    const principal = 2700;
    const rate = 0.03;
    const result = calculateInterest(principal, rate);
    expect(result).toBeCloseTo(81, 2);  
  });

  it('Test whether result given correctly if both input is decimal', () => {
    const principal = 0.15;
    const rate = 0.25;
    const result = calculateInterest(principal, rate);
    expect(result).toBeCloseTo(0.04, 2);  
  });

  it('Test whether result given correctly in case of input with 4 or more decimal places ', () => {
    const principal = 8.7891;
    const rate = 9.5678;
    const result = calculateInterest(principal, rate);
    expect(result).toBeCloseTo(84.09, 2);
  });


});
