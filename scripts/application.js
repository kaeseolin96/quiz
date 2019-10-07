class Application {
    constructor (view, questionsJson) {
        this.view = view;
        this.questionsJson = questionsJson;
    }

    async start () {
        const questionsJson = await this.questionsJson;
        console.log('questionsJson: ', questionsJson);

        this.view.setTitle(questionsJson.title);
    }
}