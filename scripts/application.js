class Application {
    constructor (questionsJson) {
        this.questionsJson = questionsJson;
    }

    async start () {
        const questionsJson = await this.questionsJson;
        console.log('questionsJson: ', questionsJson);
    }
}