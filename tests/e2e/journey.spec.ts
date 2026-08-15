import { expect, test } from '@playwright/test';

test('viaja em trilhos suspensos e apresenta questões', async ({ page }) => {
  await page.goto('#/inicio');
  await page.getByLabel('Como você quer ser chamado?').fill('Felipe');
  await page.getByRole('button', { name: 'Entrar no mapa' }).click();
  await expect(page.getByRole('heading', { name: /Central das Linhas/ })).toBeVisible();
  await expect(page.locator('.line-badge')).toHaveCount(9);
  await page.getByRole('button', { name: 'Linha Matemática' }).click();
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: 'Embarcar e iniciar' }).click();
  await expect(page.getByLabel('Carrinho viajando em trilhos suspensos')).toBeVisible();
  await expect(page.locator('.mine-cart')).toBeVisible();
  await expect(page.locator('.air-track i')).toHaveCount(14);
  await expect(page.getByText(/Portal do Conhecimento/i)).toBeVisible();
  await page.getByRole('button', { name: /Responder e continuar/ }).click();
  await expect(page.getByRole('heading', { name: /questão 1 de 2/ })).toBeVisible();
  await expect(page.locator('#prompt')).toBeVisible();
  await expect(page.getByRole('button', { name: /Confirmar e liberar trilho/ })).toBeVisible();
  await page.getByRole('button', { name: '37', exact: true }).click();
  await page.getByRole('button', { name: /Confirmar e liberar trilho/ }).click();
  await expect(page.getByRole('status', { name: /Resposta correta/ })).toBeVisible();
  await expect(page.getByText('ACERTOU!')).toBeVisible();
  await expect(page.getByText('+100 XP')).toBeVisible();
  await expect(page.getByRole('heading', { name: /questão 2 de 2/ })).toBeVisible({ timeout: 3000 });
});
