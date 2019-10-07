const questionsUrl= 'http://proto.io/en/jobs/candidate-questions/quiz.json';
const resultUrl= 'http://proto.io/en/jobs/candidate-questions/result.json';

const load = (url) => window.fetch(url)
    .then(response => response.json())
    .catch(error => {
        console.log('Что-то пошло совсем не так...');
        console.log('Error: ', error);
    });

const questionsJson = load(questionsUrl);
const resultsJson = load(resultUrl);

const view = new ApplicationView( {
    //applicationView
    title: document.querySelector('#pageTitle'),
    description: document.querySelector( '#pageDescription'),

    //questionView
    questionList: document.querySelector( '#questionList'),
    questionTemplate: document.querySelector('#questionTemplate')
    });

let application  = new Application(view, questionsJson);
(async () => await application.start())();