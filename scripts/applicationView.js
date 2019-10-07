class ApplicationView {
    constructor (config) {
        this.config = config;
    }
    setTitle (title) {
        this.config.title.textContent = title;
    }
    setDescription (description) {
        this.config.description.textContent = description;
    }

    renderQuestion (question) {
        const element = Utils.createTemplate(this.config.questionList, this.config.questionTemplate);

        new QuestionView(element);
    }
}