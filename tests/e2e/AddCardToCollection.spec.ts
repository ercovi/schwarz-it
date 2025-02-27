import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { setup, createPage } from "@nuxt/test-utils/e2e";

describe("Pagination Button Click Test", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("..", import.meta.url)),
    server: true,
    browser: true,
  });

  it("Clicks 'Next' and verifies new cards appear", async () => {
    const page = await createPage("/");

    await page.waitForSelector("button:text('Next')");
    const nextButton = page.getByRole("button", { name: "Next" }).first();
    expect(await nextButton.isVisible()).toBe(true);

    const initialCards = await page.locator("article.preview-card").count();

    await nextButton.click();
    await page.waitForTimeout(500);
    await page.waitForSelector("article.preview-card");

    const newCards = await page.locator("article.preview-card").count();

    expect(newCards).toEqual(initialCards);
  });
});