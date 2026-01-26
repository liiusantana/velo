import { test, expect } from '@playwright/test'

// AAA - Arrange, Act, Assert - Padrão de teste do playwright (Preparação, Ação, Verificação)

test('Deve consultar um pedido aprovado', async ({ page }) => {
    //Arrange
    await page.goto('http://localhost:5173/')
  //Checkpoint
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')
  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
   //Checkpoint
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  //Act
  await page.getByTestId('search-order-id').fill('VLO-KSP8V3')
  await page.getByTestId('search-order-button').click()

  //Assert
  await expect(page.getByTestId('order-result-id')).toBeVisible()
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-KSP8V3')

  await expect(page.getByTestId('order-result-status')).toBeVisible()
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')
})