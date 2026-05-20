class LoginPage {

    constructor(page) {

        this.page = page;

    }

    async login(username, password) {

        await this.page.goto(
            'https://automationexercise.com/login'
        );

        await this.page.locator(
            'input[data-qa="login-email"]'
        ).fill(username);

        await this.page.locator(
            'input[data-qa="login-password"]'
        ).fill(password);

        await this.page.locator(
            'button[data-qa="login-button"]'
        ).click();

    }

}

module.exports = LoginPage;