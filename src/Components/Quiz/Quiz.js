import { Component } from 'react';
import Q1Input from './Q1Input';
import Q1Title from './Q1Title';
import Q2Title from './Q2Title';
import QuizTitle from './QuizTitle';
import Q2Input from './Q2Input';

class Quiz extends Component {
    render() {
        return (
            <div className="quiz">
                <QuizTitle/>
                <Q1Title/>
                <Q1Input/>
                <Q2Title/>
                <Q2Input/>
            </div>
        )
    }
}

export default Quiz;