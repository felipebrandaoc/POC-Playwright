const { expect } = require('@playwright/test');

exports.TQHomePage = class TQHomePage {

    constructor(page) {
        this.page = page;
    }

    async goTo(address) {
        await this.page.goTo(address)
        await expect(this.page).toHaveTitle(/Thálysson Brandão/);
        const text = this.page.getByText(/Desenvolvedor Web/).nth(0);
        await expect(text).toHaveAttribute('class', 'sub-heading');
    }
}