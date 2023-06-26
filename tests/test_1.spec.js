const { test } = require('../fixtures');
const { expect } = require('@playwright/test');
test.describe('Launch BStackDemo', () => {
  test('', async ({ page }) => {
    // Assertions use the expect API.
    await page.goto('https://www.bstackdemo.com');

    const title = await page.title('');
    console.log(title);
    expect(title).toEqual( 'StackDemo', 'Expected page title is incorrect!');
  });
});

test.describe('Login To BStack Demo', () => {
  test('', async ({ page }) => {
    // Assertions use the expect API.
    await page.goto('https://www.bstackdemo.com');

    const title = await page.title('');
    console.log(title);
    expect(title).toEqual( 'StackDemos', 'Login Failed!');

  });
});