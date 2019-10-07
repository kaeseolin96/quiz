class ApplicationView {
    constructor (config) {
        this.config = config;
    }
    setTitle (title) {
        this.config.title.textContent = title;
    }
}