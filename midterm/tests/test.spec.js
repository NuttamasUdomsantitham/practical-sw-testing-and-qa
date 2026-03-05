import { test, expect } from "@playwright/test";

test("submit success with full data", async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await expect(page.locator("#firstName")).toBeVisible();

  // first name //
  await page.locator("#firstName").fill("Nuttamas");
  // last name //
  await page.locator("#lastName").fill("Udomsantitham");
  // email //
  await page.locator("#userEmail").fill("nt@test.com");
  // gender //
  await page.locator("#gender-radio-2").click();
  // number //
  await page.locator("#userNumber").fill("0899999999");
  // date of birth
  await page.locator("#dateOfBirthInput").click();
  await page.locator(".react-datepicker__month-select").selectOption("11");
  await page.locator(".react-datepicker__year-select").selectOption("2005");
  await page.locator(".react-datepicker__day--009:not(.react-datepicker__day--outside-month)").click();
  // subjects
  await page.locator("#subjectsInput").fill("Maths");
  await page.getByText('Maths', { exact: true }).click();
  await page.locator("#subjectsInput").fill("Eng");
  await page.getByText('English', { exact: true }).click();
  // hobbies
  await page.getByRole("checkbox", { name: "Music" }).check();
  // current address
  await page.locator("#currentAddress").fill("Test Current Address");
  // state and city
  await page.locator("#react-select-3-input").click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByText('Delhi', { exact: true }).click();
  // submit
  await page.getByRole("button", { name : "Submit" }).click()
  await expect(page.getByText("Thanks for submitting the form", { exact: true })).toBeVisible();
  // assert modal appeared
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  // close modal 
  await page.mouse.click(0, 0);
  await expect(dialog).toBeHidden();
});

test("remove subject", async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await expect(page.locator("#firstName")).toBeVisible();

  // first name //
  await page.locator("#firstName").fill("Nuttamas");
  // last name //
  await page.locator("#lastName").fill("Udomsantitham");
  // email //
  await page.locator("#userEmail").fill("nt@test.com");
  // gender //
  await page.locator("#gender-radio-2").click();
  // number //
  await page.locator("#userNumber").fill("0899999999");
  // date of birth
  await page.locator("#dateOfBirthInput").click();
  await page.locator(".react-datepicker__month-select").selectOption("11");
  await page.locator(".react-datepicker__year-select").selectOption("2005");
  await page.locator(".react-datepicker__day--009:not(.react-datepicker__day--outside-month)").click();
  // subjects
  await page.locator("#subjectsInput").fill("Maths");
  await page.getByText('Maths', { exact: true }).click();
  await page.locator("#subjectsInput").fill("Eng");
  await page.getByText('English', { exact: true }).click();
  // remove subject
  await page.getByLabel("Remove Maths").click();
  // hobbies
  await page.getByRole("checkbox", { name: "Music" }).check();
  // current address
  await page.locator("#currentAddress").fill("Test Current Address");
  // state and city
  await page.locator("#react-select-3-input").click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByText('Delhi', { exact: true }).click();
  // submit
  await page.getByRole("button", { name : "Submit" }).click()
  await expect(page.getByText("Thanks for submitting the form", { exact: true })).toBeVisible();
  // assert modal appeared
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  // close modal 
  await page.mouse.click(0, 0);
  await expect(dialog).toBeHidden();
});

test("no first name", async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await expect(page.locator("#firstName")).toBeVisible();

  // first name //
  // await page.locator("#firstName").fill("Nuttamas");
  // last name //
  await page.locator("#lastName").fill("Udomsantitham");
  // email //
  await page.locator("#userEmail").fill("nt@test.com");
  // gender //
  await page.locator("#gender-radio-2").click();
  // number //
  await page.locator("#userNumber").fill("0899999999");
  // date of birth
  await page.locator("#dateOfBirthInput").click();
  await page.locator(".react-datepicker__month-select").selectOption("11");
  await page.locator(".react-datepicker__year-select").selectOption("2005");
  await page.locator(".react-datepicker__day--009:not(.react-datepicker__day--outside-month)").click();
  // subjects
  await page.locator("#subjectsInput").fill("Maths");
  await page.getByText('Maths', { exact: true }).click();
  await page.locator("#subjectsInput").fill("Eng");
  await page.getByText('English', { exact: true }).click();
  // hobbies
  await page.getByRole("checkbox", { name: "Music" }).check();
  // current address
  await page.locator("#currentAddress").fill("Test Current Address");
  // state and city
  await page.locator("#react-select-3-input").click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByText('Delhi', { exact: true }).click();
  // submit
  await page.getByRole("button", { name : "Submit" }).click()
  await expect(page.getByText("Thanks for submitting the form", )).not.toBeVisible();
  // modal should NOT exist
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("no last name", async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await expect(page.locator("#firstName")).toBeVisible();

  // first name //
  await page.locator("#firstName").fill("Nuttamas");
  // last name //
  // await page.locator("#lastName").fill("Udomsantitham");
  // email //
  await page.locator("#userEmail").fill("nt@test.com");
  // gender //
  await page.locator("#gender-radio-2").click();
  // number //
  await page.locator("#userNumber").fill("0899999999");
  // date of birth
  await page.locator("#dateOfBirthInput").click();
  await page.locator(".react-datepicker__month-select").selectOption("11");
  await page.locator(".react-datepicker__year-select").selectOption("2005");
  await page.locator(".react-datepicker__day--009:not(.react-datepicker__day--outside-month)").click();
  // subjects
  await page.locator("#subjectsInput").fill("Maths");
  await page.getByText('Maths', { exact: true }).click();
  await page.locator("#subjectsInput").fill("Eng");
  await page.getByText('English', { exact: true }).click();
  // hobbies
  await page.getByRole("checkbox", { name: "Music" }).check();
  // current address
  await page.locator("#currentAddress").fill("Test Current Address");
  // state and city
  await page.locator("#react-select-3-input").click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByText('Delhi', { exact: true }).click();
  // submit
  await page.getByRole("button", { name : "Submit" }).click()
  await expect(page.getByText("Thanks for submitting the form", )).not.toBeVisible();
  // modal should NOT exist
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("no gender", async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await expect(page.locator("#firstName")).toBeVisible();

  // first name //
  await page.locator("#firstName").fill("Nuttamas");
  // last name //
  await page.locator("#lastName").fill("Udomsantitham");
  // email //
  await page.locator("#userEmail").fill("nt@test.com");
  // gender //
  // await page.locator("#gender-radio-2").click();
  // number //
  await page.locator("#userNumber").fill("0899999999");
  // date of birth
  await page.locator("#dateOfBirthInput").click();
  await page.locator(".react-datepicker__month-select").selectOption("11");
  await page.locator(".react-datepicker__year-select").selectOption("2005");
  await page.locator(".react-datepicker__day--009:not(.react-datepicker__day--outside-month)").click();
  // subjects
  await page.locator("#subjectsInput").fill("Maths");
  await page.getByText('Maths', { exact: true }).click();
  await page.locator("#subjectsInput").fill("Eng");
  await page.getByText('English', { exact: true }).click();
  // hobbies
  await page.getByRole("checkbox", { name: "Music" }).check();
  // current address
  await page.locator("#currentAddress").fill("Test Current Address");
  // state and city
  await page.locator("#react-select-3-input").click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByText('Delhi', { exact: true }).click();
  // submit
  await page.getByRole("button", { name : "Submit" }).click()
  await expect(page.getByText("Thanks for submitting the form", )).not.toBeVisible();
  // modal should NOT exist
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("no mobile", async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await expect(page.locator("#firstName")).toBeVisible();

  // first name //
  await page.locator("#firstName").fill("Nuttamas");
  // last name //
  await page.locator("#lastName").fill("Udomsantitham");
  // email //
  await page.locator("#userEmail").fill("nt@test.com");
  // gender //
  await page.locator("#gender-radio-2").click();
  // number //
  // await page.locator("#userNumber").fill("0899999999");
  // date of birth
  await page.locator("#dateOfBirthInput").click();
  await page.locator(".react-datepicker__month-select").selectOption("11");
  await page.locator(".react-datepicker__year-select").selectOption("2005");
  await page.locator(".react-datepicker__day--009:not(.react-datepicker__day--outside-month)").click();
  // subjects
  await page.locator("#subjectsInput").fill("Maths");
  await page.getByText('Maths', { exact: true }).click();
  await page.locator("#subjectsInput").fill("Eng");
  await page.getByText('English', { exact: true }).click();
  // hobbies
  await page.getByRole("checkbox", { name: "Music" }).check();
  // current address
  await page.locator("#currentAddress").fill("Test Current Address");
  // state and city
  await page.locator("#react-select-3-input").click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByText('Delhi', { exact: true }).click();
  // submit
  await page.getByRole("button", { name : "Submit" }).click()
  await expect(page.getByText("Thanks for submitting the form", )).not.toBeVisible();
  // modal should NOT exist
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("input mobile under 10 digits", async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await expect(page.locator("#firstName")).toBeVisible();

  // first name //
  await page.locator("#firstName").fill("Nuttamas");
  // last name //
  await page.locator("#lastName").fill("Udomsantitham");
  // email //
  await page.locator("#userEmail").fill("nt@test.com");
  // gender //
  await page.locator("#gender-radio-2").click();
  // number //
  await page.locator("#userNumber").fill("089");
  // date of birth
  await page.locator("#dateOfBirthInput").click();
  await page.locator(".react-datepicker__month-select").selectOption("11");
  await page.locator(".react-datepicker__year-select").selectOption("2005");
  await page.locator(".react-datepicker__day--009:not(.react-datepicker__day--outside-month)").click();
  // subjects
  await page.locator("#subjectsInput").fill("Maths");
  await page.getByText('Maths', { exact: true }).click();
  await page.locator("#subjectsInput").fill("Eng");
  await page.getByText('English', { exact: true }).click();
  // hobbies
  await page.getByRole("checkbox", { name: "Music" }).check();
  // current address
  await page.locator("#currentAddress").fill("Test Current Address");
  // state and city
  await page.locator("#react-select-3-input").click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByText('Delhi', { exact: true }).click();
  // submit
  await page.getByRole("button", { name : "Submit" }).click()
  await expect(page.getByText("Thanks for submitting the form", )).not.toBeVisible();
  // modal should NOT exist
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("input mobile with another characters (not a digit)", async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await expect(page.locator("#firstName")).toBeVisible();

  // first name //
  await page.locator("#firstName").fill("Nuttamas");
  // last name //
  await page.locator("#lastName").fill("Udomsantitham");
  // email //
  await page.locator("#userEmail").fill("nt@test.com");
  // gender //
  await page.locator("#gender-radio-2").click();
  // number //
  await page.locator("#userNumber").fill("abcdef");
  // date of birth
  await page.locator("#dateOfBirthInput").click();
  await page.locator(".react-datepicker__month-select").selectOption("11");
  await page.locator(".react-datepicker__year-select").selectOption("2005");
  await page.locator(".react-datepicker__day--009:not(.react-datepicker__day--outside-month)").click();
  // subjects
  await page.locator("#subjectsInput").fill("Maths");
  await page.getByText('Maths', { exact: true }).click();
  await page.locator("#subjectsInput").fill("Eng");
  await page.getByText('English', { exact: true }).click();
  // hobbies
  await page.getByRole("checkbox", { name: "Music" }).check();
  // current address
  await page.locator("#currentAddress").fill("Test Current Address");
  // state and city
  await page.locator("#react-select-3-input").click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByText('Delhi', { exact: true }).click();
  // submit
  await page.getByRole("button", { name : "Submit" }).click()
  await expect(page.getByText("Thanks for submitting the form", )).not.toBeVisible();
  // modal should NOT exist
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("input email incorrect format", async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await expect(page.locator("#firstName")).toBeVisible();

  // first name //
  await page.locator("#firstName").fill("Nuttamas");
  // last name //
  await page.locator("#lastName").fill("Udomsantitham");
  // email //
  await page.locator("#userEmail").fill("nttest");
  // gender //
  await page.locator("#gender-radio-2").click();
  // number //
  await page.locator("#userNumber").fill("0899999999");
  // date of birth
  await page.locator("#dateOfBirthInput").click();
  await page.locator(".react-datepicker__month-select").selectOption("11");
  await page.locator(".react-datepicker__year-select").selectOption("2005");
  await page.locator(".react-datepicker__day--009:not(.react-datepicker__day--outside-month)").click();
  // subjects
  await page.locator("#subjectsInput").fill("Maths");
  await page.getByText('Maths', { exact: true }).click();
  await page.locator("#subjectsInput").fill("Eng");
  await page.getByText('English', { exact: true }).click();
  // hobbies
  await page.getByRole("checkbox", { name: "Music" }).check();
  // current address
  await page.locator("#currentAddress").fill("Test Current Address");
  // state and city
  await page.locator("#react-select-3-input").click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByText('Delhi', { exact: true }).click();
  // submit
  await page.getByRole("button", { name : "Submit" }).click()
  await expect(page.getByText("Thanks for submitting the form", )).not.toBeVisible();
  // modal should NOT exist
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
