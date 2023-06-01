const {test, expect} = require('@playwright/test');
import TQHomePage from '../pages/tq-homepage'

test.describe('TQrino website', () => {

    test.only('TQrino Homepage LinkedIn', async ({page, context}) => {
        const tqHomePage = new TQHomePage();
        await tqHomePage.goto('https://tqbrandao.com/')
        // await page.goto('https://tqbrandao.com/');
        // await expect(page).toHaveTitle(/Thálysson Brandão/);
        // const text = page.getByText(/Desenvolvedor Web/).nth(0);
        // await expect(text).toHaveAttribute('class', 'sub-heading');

        const linkedIn = page.getByRole('link', {name: /Linkedin/});
        let [newPage] = await Promise.all([
            context.waitForEvent('page'),
            await linkedIn.click()
        ])

        await newPage.waitForLoadState();
        await expect(newPage.url()).toContain('/in/tqbrandao/')
    });

    test('Change Page Language', async ({ page }) => {
        await page.goto('https://tqbrandao.com/');
        await expect(page).toHaveTitle(/Thálysson Brandão/);
        await page.locator('[class=nav-flag]').click()
        await expect(page.url()).toContain('en-us')
    });

    test('About TQBrandao', async ({ page }) => {
        await page.goto('https://tqbrandao.com/');
        await expect(page).toHaveTitle(/Thálysson Brandão/);
        const aboutMe = page.getByRole('link', {name: 'Sobre mim'})
        await aboutMe.click()
        await expect(page.url()).toContain('about')
    })
})



