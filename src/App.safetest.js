import { render } from 'safetest/react';
import { describe, it, expect, retryTimes, browserMock } from 'safetest/jest';
import Footer from './Footer';

retryTimes(3);

describe('Main', () => {
    it('should render', async () => {
        const { page } = await render();
        expect(page).toBeTruthy();
        await expect(page.getByText('Welcome to my app')).toBeVisible();
        expect(await page.screenshot()).toMatchImageSnapshot();
    });

    it('should render footer', async () => {
        const { page } = await render(<Footer/>);
        expect(page).toBeTruthy();
        await expect(page.getByText('Powered by bitheap.tech')).toBeVisible();
    });

    it('should increment footer counter', async () => {
        const { page } = await render(<Footer/>);
        await page.click("#increment");
        const counterText = await page.innerText('#counter'); 
        expect(counterText).toBe(" Counter: 1") 
    });
});