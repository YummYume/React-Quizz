import React from 'react'
import CreateQuizz from './CreateQuizz';
import AnswerQuizz from './AnswerQuizz';

class Quizz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizz: null,
            view: 'menu'
        };
        this.setView = this.setView.bind(this);
        this.setQuizz = this.setQuizz.bind(this);
    }

    render() {
        const view = this.state.view;
        return (
            <div>
                {view === 'menu' &&
                    <div className="container minWdScreen">
                        <div className="row justify-content-around align-items-center minWdScreen">
                            <h1 className="col-12 text-center mb-3">Quizz</h1>
                            <button className="btn btn-outline-light col-md-5 col-8" value="create" onClick={this.setView}>
                                {this.state.quizz ? 'Edit' : 'Create'}
                            </button>
                            <button className="btn btn-outline-light col-md-5 col-8"
                                disabled={this.state.quizz === null}
                                value="answer"
                                onClick={this.setView}
                            >
                                Answer
                            </button>
                        </div>
                    </div>
                }
                {view === 'create' &&
                    <CreateQuizz quizz={this.state.quizz} setView={this.setView} setQuizz={this.setQuizz} />
                }
                {view === 'answer' &&
                    <AnswerQuizz quizz={this.state.quizz} setView={this.setView} />
                }
            </div>
        )
    }

    setView(button) {
        let view = button.target.value;
        let newView = 'menu';

        switch (view) {
            case 'menu':
                newView = 'menu';
                break;
            case 'create':
                newView = 'create';
                break;
            case 'answer':
                newView = 'answer';
                break;
            default:
                newView = 'menu';
                break;
        }

        this.setState({
            view: newView
        });
    }

    setQuizz(quizz) {
        if (typeof quizz === 'object') {
            this.setState({
                quizz: quizz
            });
        }
    }
}

export default Quizz
