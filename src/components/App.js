import React from 'react';
import Question from './Question';
import WelcomePage from './WelcomePage';
import ThanksPage from './ThanksPage';
import Pagination from './Pagination';

const pages = [WelcomePage, Question, ThanksPage]; // tablica z listą stron w odpowiedniej kolejności

class App extends React.Component {
    state = {
        page: "1", // chcemy, by jako pierwsza wyświetlała się strona WelcomePage
    };

    handleClick = e => {
        this.setState({ ...this.state, page: e.target.value }); // do stanu komponentu zapisujemy informację o numerze strony
    };

    render() {
        const Component = pages[this.state.page - 1]; // wykorzystujemy index, aby wybrać z tablicy komponent adekwatny do numeru strony

        return (
            <main className="questionnaire">
                <Component />

                <Pagination handleClick={this.handleClick} numberOfPages={pages.length}/>
            </main>
        );
    }
}

export default App;