import React from 'react'
import ImageGallery from 'react-image-gallery';
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
        const images = [
            {
              original: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
              thumbnail: 'https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png',
              originalHeight: 400,
            },
            {
                original: 'https://preview.redd.it/6a4wysdp9hw21.png?auto=webp&s=655482b20a939bbd0bf6f8402ba7e5d99fba186a',
                thumbnail: 'https://preview.redd.it/6a4wysdp9hw21.png?auto=webp&s=655482b20a939bbd0bf6f8402ba7e5d99fba186a',
                originalHeight: 400,
            },
            {
                original: 'https://img.devrant.com/devrant/rant/r_1521138_rLfaG.jpg',
                thumbnail: 'https://img.devrant.com/devrant/rant/r_1521138_rLfaG.jpg',
                originalHeight: 400,
            },
            {
                original: 'https://dilshankelsen.com/static/cbf18317406da615a5b9b55326e096b0/4b190/meme-battle.jpg',
                thumbnail: 'https://dilshankelsen.com/static/cbf18317406da615a5b9b55326e096b0/4b190/meme-battle.jpg',
                originalHeight: 400,
            },
        ];
        return (
            <div>
                {view === 'menu' &&
                    <div className="container minWdScreen">
                        <div className="row justify-content-around align-items-center minWdScreen">
                            <h1 className="col-12 text-center mb-3">Quizz</h1>
                            <div className="col-12 mb-3">
                                <ImageGallery items={images} />
                            </div>
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
