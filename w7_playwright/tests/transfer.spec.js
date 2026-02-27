import { test, expect } from "@playwright/test";

test("transfer success", async ({ page }) => {
  await page.goto(
    "https://atm-buddy-lite.lovable.app/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExY1RVU2UzVlhZNU1ZVFV6SwEeG95HaKRUZ4S4SsfHUDDsw3FFGPEyhRh_Fn_77KciqvuNxyxd4FkEFK02O9c_aem_ycGlUd5UYRQc-LADxvwcLQ",
  );
  await page.getByRole("textbox", { name: "ตัวอย่าง: 123456" }).click();
  await page.getByRole("textbox", { name: "ตัวอย่าง: 123456" }).fill("123456");
  await page.getByRole("textbox", { name: "รหัส PIN 4 หลัก" }).click();
  await page.getByRole("textbox", { name: "รหัส PIN 4 หลัก" }).fill("1234");
  await page.getByRole("button", { name: "เข้าสู่ระบบ" }).click();
  await expect(page.getByText("เข้าสู่ระบบสำเร็จ", { exact: true })).toBeVisible();
  await page.getByText("Transfer").click();
  await page.getByRole("textbox", { name: "กรอกหมายเลขบัญชี 6 หลัก" }).click();
  await page.getByRole("textbox", { name: "กรอกหมายเลขบัญชี 6 หลัก" }).fill("789012");
  await page.getByRole("button", { name: "฿1,000.00" }).click();
  await page.getByRole("button", { name: "โอนเงิน ฿1,000.00" }).click();
  await expect(page.getByText("โอนเงินสำเร็จ", { exact: true })).toBeVisible();
});

test("transfer fail", async ({ page }) => {
  await page.goto(
    "https://atm-buddy-lite.lovable.app/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExY1RVU2UzVlhZNU1ZVFV6SwEeG95HaKRUZ4S4SsfHUDDsw3FFGPEyhRh_Fn_77KciqvuNxyxd4FkEFK02O9c_aem_ycGlUd5UYRQc-LADxvwcLQ",
  );
  await page.getByRole("textbox", { name: "ตัวอย่าง: 123456" }).click();
  await page.getByRole("textbox", { name: "ตัวอย่าง: 123456" }).fill("123456");
  await page.getByRole("textbox", { name: "รหัส PIN 4 หลัก" }).click();
  await page.getByRole("textbox", { name: "รหัส PIN 4 หลัก" }).fill("1234");
  await page.getByRole("button", { name: "เข้าสู่ระบบ" }).click();
  await expect(page.getByText("เข้าสู่ระบบสำเร็จ", { exact: true })).toBeVisible();
  await page.getByText("Transfer").click();
  await page.getByRole("textbox", { name: "กรอกหมายเลขบัญชี 6 หลัก" }).click();
  await page.getByRole("textbox", { name: "กรอกหมายเลขบัญชี 6 หลัก" }).fill("789012");
  await page.getByPlaceholder("0").fill("0.10")
  await page.getByRole("button", { name: "โอนเงิน ฿0.10" }).click();
  await expect(page.getByText("โอนเงินสำเร็จ")).not.toBeVisible();
});
