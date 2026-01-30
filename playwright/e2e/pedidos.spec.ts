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
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-KSP8V3')
  await page.getByRole('button', { name: 'Buscar Pedido' }).click()

  //Assert
  await expect(page.locator('div').filter({ hasText: /^PedidoVLO-KSP8V3$/ }).first()).toBeVisible()
  await expect(page.getByTestId('order-result-VLO-KSP8V3')).toContainText('VLO-KSP8V3')

  await expect(page.getByText('APROVADO')).toBeVisible()
  await expect(page.getByTestId('order-result-VLO-KSP8V3')).toContainText('APROVADO')
})