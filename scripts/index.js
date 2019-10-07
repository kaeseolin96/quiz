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

let application  = new Application(questionsJson);
(async () => await application.start())();