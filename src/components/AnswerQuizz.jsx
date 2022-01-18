import React from 'react';

class AnswerQuizz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            selectedAnswer: null,
            answers: null,
        };
    }

    render() {
        return (
            <div>
                <div className="container minWdScreen">
                    <div className="row justify-content-around align-items-center minWdScreen">
                        <div className="col-12 text-center mt-3">
                            <button className="btn btn-outline-light" value="menu" type="submit" onClick={this.props.setView}>Menu</button>
                            <h1 className="text-center mt-3">{this.props.quizz[this.state.currentIndex].title}</h1>
                        </div>
                        <div className="col-md-9 col-12">
                            {/* not finished */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnswerQuizz
