import { Component } from 'react';

const data = ["hello", "world"];
const number1 = 5;
const number2 =6;
const string = "I love React!"
class TestComp extends Component {
    render() {
        return <h1>
            {
                data[0] + " " + data[1]
            }
            <br />
            {
               `${number1} + ${number2} =  ${(number1 + number2)}`
            }
            <br />
            {
                string + " - length is:"+string.length
            }
        </h1>

    }
}

export default TestComp;
