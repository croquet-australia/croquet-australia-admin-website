import { binding, given, then } from 'cucumber-tsflow';
import * as chai from 'chai';

const should = chai.should();

@binding()
class ArithmeticSteps {
    private computedResult: number;

    @given(/^I enter '(\d+)' and '(\d+)'$/)
    public givenTwoNumbers(num1: string, num2: string): void {
        this.computedResult = parseInt(num1) + parseInt(num2);
    }

    @given(/^I subtract '(\d+)' from '(\d+)'$/)
    public givenSubtractNumbers(num1: string, num2: string): void {
        this.computedResult = parseInt(num2) - parseInt(num1);
    }

    @then(/I receive the result '(\d*)'/)
    public thenResultReceived(expectedResult: string): void {
        parseInt(expectedResult).should.equal(this.computedResult);
    }
}

export = ArithmeticSteps;