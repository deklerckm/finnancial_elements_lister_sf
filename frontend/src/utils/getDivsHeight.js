export const getDivsHeight = (toAddDivElementIds) => {
  let divElementsHeightSum = null;

  for (let i = 0; i < toAddDivElementIds.length; i++) {
    const divElement = document.getElementById(toAddDivElementIds[i]);
    if (!divElement) {
      // eslint-disable-next-line no-continue
      continue;
    }
    let divElementHeight = divElement.offsetHeight;
    divElementHeight += parseInt(
      window.getComputedStyle(divElement).getPropertyValue('margin-top'),
      10
    );
    divElementHeight += parseInt(
      window.getComputedStyle(divElement).getPropertyValue('margin-bottom'),
      10
    );
    divElementHeight += parseInt(
      window.getComputedStyle(divElement).getPropertyValue('padding-top'),
      10
    );
    divElementHeight += parseInt(
      window.getComputedStyle(divElement).getPropertyValue('padding-bottom'),
      10
    );

    divElementsHeightSum += divElementHeight;
  }

  return divElementsHeightSum;
};
