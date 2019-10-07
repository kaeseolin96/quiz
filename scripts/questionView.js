class QuestionView {
    constructor(element, data) {
        this.element = element;
        this.data = data;

        const title = this.element.querySelector('[data-title]');
        const img = this.element.querySelector('[data-img]');

        title.textContent = this.data.title;
        img.src = this.data.img;

    }
}