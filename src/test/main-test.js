'use strict';

describe('fizzbuzzwhizz', () => {

    it('when there is no rule, should print the number itself', () => {
        expect(fizzbuzzwhizz(1)).toEqual('1');
        expect(fizzbuzzwhizz(41)).toEqual('41');

    });

    it('when num = 3, print fizz', () => {
        expect(fizzbuzzwhizz(3)).toEqual('fizz');
    });

    it('when num = 5, print buzz.', () => {
        expect(fizzbuzzwhizz(5)).toEqual('buzz');
    });

    it('when num = 7, print whizz.', () => {
        expect(fizzbuzzwhizz(7)).toEqual('whizz');
    });

    it('when num = 15, print fizzbuzz.', () => {
        expect(fizzbuzzwhizz(15)).toEqual('fizzbuzz');
    });

    it('when num = 21, print fizzwhizz.', () => {
        expect(fizzbuzzwhizz(21)).toEqual('fizzwhizz');
    });

    it('when num = 70, print buzzwhizz.', () => {
        expect(fizzbuzzwhizz(70)).toEqual('buzzwhizz');
    });

    it('when num = 105, print fizzbuzzwhizz.', () => {
        expect(fizzbuzzwhizz(105)).toEqual('fizzbuzzwhizz');
    });

    it("when num includes '3',print fizz", () => {
        expect(fizzbuzzwhizz(33)).toEqual('fizz');
        expect(fizzbuzzwhizz(321)).toEqual('fizz');
        expect(fizzbuzzwhizz(53)).toEqual('fizz');
        expect(fizzbuzzwhizz(123)).toEqual('fizz');
        expect(fizzbuzzwhizz(135)).toEqual('fizz');

    });




});
