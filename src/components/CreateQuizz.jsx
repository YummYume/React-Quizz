import React from 'react';

class CreateQuizz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: '',
                firstAnswer: '',
                secondAnswer: '',
                thirdAnswer: '',
                fourthAnswer: '',
                correctAnswer: 1
            },
            selectedQuestion: 0
        };
        this.onQuestionTitleChange = this.onQuestionTitleChange.bind(this);
        this.onFirstAnswerChange = this.onFirstAnswerChange.bind(this);
        this.onSecondAnswerChange = this.onSecondAnswerChange.bind(this);
        this.onThirdAnswerChange = this.onThirdAnswerChange.bind(this);
        this.onFourthAnswerChange = this.onFourthAnswerChange.bind(this);
        this.onCorrectAnswerChange = this.onCorrectAnswerChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onQuestionChange = this.onQuestionChange.bind(this);
    }

    render() {
        return (
            <div>
                <div className="container minWdScreen">
                    <div className="row justify-content-around align-items-center minWdScreen">
                        <div className="col-12 text-center mt-3">
                            <button className="btn btn-outline-light" value="menu" type="submit" onClick={this.props.setView}>Menu</button>
                            <h1 className="text-center mt-3">Quizz</h1>
                        </div>
                        {this.props.quizz !== null &&
                            <div className="col-md-9 col-12">
                                <div className="row">
                                    <div className="col-md-4 col-3">
                                        <div className="list-group" id="list-tab" role="tablist">
                                        {this.props.quizz.map((item, index) => (
                                            <a className={'list-group-item list-group-item-action' + (index === this.state.selectedQuestion ? ' active' : '')}
                                                id={index}
                                                key={index}
                                                data-toggle="list"
                                                href={'#item-' + index}
                                                role="tab"
                                                aria-controls={'item-' + index}
                                                onClick={this.onQuestionChange}
                                            >
                                                {item.title.slice(0, 26) + (item.title.length > 25 ? '...' : '')}
                                            </a>
                                        ))}
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-9">
                                        <div className="tab-content" id="nav-tabContent">
                                            {this.props.quizz.map((item, index) => (
                                                <div className={'tab-pane fade' + (index === this.state.selectedQuestion ? ' show active' : '')}
                                                    id={index}
                                                    key={index}
                                                    role="tabpanel"
                                                    aria-labelledby={'item-' + index}
                                                >
                                                    <h3>{item.title}</h3>
                                                    <div>
                                                        <strong>First answer : </strong>
                                                        <span className={'text-' + (item.correctAnswer === 1 ? 'success' : 'danger')}>{item.firstAnswer}</span>
                                                    </div>
                                                    <div>
                                                        <strong>Second answer : </strong>
                                                        <span className={'text-' + (item.correctAnswer === 2 ? 'success' : 'danger')}>{item.secondAnswer}</span>
                                                    </div>
                                                    <div>
                                                        <strong>Third answer : </strong>
                                                        <span className={'text-' + (item.correctAnswer === 3 ? 'success' : 'danger')}>{item.thirdAnswer}</span>
                                                    </div>
                                                    <div>
                                                        <strong>Fourth answer : </strong>
                                                        <span className={'text-' + (item.correctAnswer === 4 ? 'success' : 'danger')}>{item.fourthAnswer}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <form className="col-md-9 col-12" onSubmit={this.onSubmit}>
                            <h3 className="col-12 text-center">Add a question</h3>
                            <div className="form-group">
                                <label htmlFor="questionTitle">Question</label>
                                <input type="text"
                                    className="form-control"
                                    id="questionTitle"
                                    placeholder="Title for the question"
                                    value={this.state.formData.title}
                                    onChange={this.onQuestionTitleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <div className="row justify-content-around">
                                    <div className="col-md-6 col-12">
                                        <label htmlFor="firstAnswer">First answer</label>
                                        <input type="text"
                                            className="form-control"
                                            id="firstAnswer"
                                            value={this.state.formData.firstAnswer}
                                            onChange={this.onFirstAnswerChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <label htmlFor="secondAnswer">Second answer</label>
                                        <input type="text"
                                            className="form-control"
                                            id="secondAnswer"
                                            value={this.state.formData.secondAnswer}
                                            onChange={this.onSecondAnswerChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <label htmlFor="thirdAnswer">Third answer</label>
                                        <input type="text"
                                            className="form-control"
                                            id="thirdAnswer"
                                            value={this.state.formData.thirdAnswer}
                                            onChange={this.onThirdAnswerChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <label htmlFor="fourthAnswer">Fourth answer</label>
                                        <input type="text"
                                            className="form-control"
                                            id="fourthAnswer"
                                            value={this.state.formData.fourthAnswer}
                                            onChange={this.onFourthAnswerChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="exampleFormControlSelect1">Correct answer</label>
                                <select className="form-control" id="questionCorrectAnswer" onChange={this.onCorrectAnswerChange} required>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="text-center mt-3">
                                <button className="btn btn-outline-light" type="submit">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    onQuestionTitleChange(e) {
        this.setState({
            formData: {
                ...this.state.formData,
                title: e.target.value
            }
        });
    }

    onFirstAnswerChange(e) {
        this.setState({
            formData: {
                ...this.state.formData,
                firstAnswer: e.target.value
            }
        });
    }

    onSecondAnswerChange(e) {
        this.setState({
            formData: {
                ...this.state.formData,
                secondAnswer: e.target.value
            }
        });
    }

    onThirdAnswerChange(e) {
        this.setState({
            formData: {
                ...this.state.formData,
                thirdAnswer: e.target.value
            }
        });
    }

    onFourthAnswerChange(e) {
        this.setState({
            formData: {
                ...this.state.formData,
                fourthAnswer: e.target.value
            }
        });
    }

    onCorrectAnswerChange(e) {
        this.setState({
            formData: {
                ...this.state.formData,
                correctAnswer: parseInt(e.target.value, 10)
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
        let quizz = this.props.quizz ?? [];
        let question = this.state.formData;

        quizz.push(question);

        this.setState({
            formData: {
                title: '',
                firstAnswer: '',
                secondAnswer: '',
                thirdAnswer: '',
                fourthAnswer: '',
                correctAnswer: 1
            }
        });
        this.props.setQuizz(quizz);
    }

    onQuestionChange(e) {
        this.setState({
            selectedQuestion: parseInt(e.target.id)
        });
    }
}

export default CreateQuizz
