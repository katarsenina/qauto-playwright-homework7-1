import { test, expect } from '@playwright/test';

test.describe('Guest adds a car to Garage', () => {
  test('Guest log in → Add car → Audi → TT → Mileage 12000', async ({ page }) => {
    // 1. Open QAuto and log in as a guest.
    await page.goto('/');
    await page.getByRole('button', { name: 'Guest log in' }).click();
    await expect(page).toHaveURL(/\/panel\/garage/);

    // 2. Open Add car and select Audi TT.
    await page.getByRole('button', { name: 'Add car' }).click();
    await page.getByLabel('Brand').selectOption({ label: 'Audi' });
    await page.getByLabel('Model').selectOption({ label: 'TT' });

    // 3. Enter the mileage and save the car.
    await page.getByRole('spinbutton', { name: 'Mileage' }).fill('12000');
    await page.getByRole('button', { name: 'Add' }).click();

    // 4. Verify the added car is visible in Garage.
    await expect(page).toHaveURL(/\/panel\/garage/);
    await expect(page.getByText('Audi TT', { exact: true })).toBeVisible();
  });
});
