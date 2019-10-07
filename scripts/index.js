const questionsUrl= 'http://proto.io/en/jobs/candidate-questions/quiz.json';
const resultUrl= 'http://proto.io/en/jobs/candidate-questions/result.json';

const load = (url) => window.fetch(url)
    .then(response => {
        console.log(response);
        return response.json();
    });

const questionsJson = load(questionsUrl);
const resultsJson = load(resultUrl);

let application  = new Application(questionsJson);
(async () => await application.start())();