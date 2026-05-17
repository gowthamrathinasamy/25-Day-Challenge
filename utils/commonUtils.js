async function clickElement(locator) {

  await locator.click();

}

async function fillText(locator, value) {

  await locator.fill(value);

}

async function waitForElement(locator) {

  await locator.waitFor();

  return locator;

}

module.exports = {
  clickElement,
  fillText,
  waitForElement
};