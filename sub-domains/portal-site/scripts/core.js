// Function used to create insights that is inherited by multiple pages
function createInsight(insightData, insightSentence) {
    let grid = document.getElementById('insightGrid');
    let gridItem = document.createElement('div');
    let container = document.createElement('div');
    let title = document.createElement('p');
    let insightText = document.createElement('p');
    gridItem.setAttribute('class', 'servicesGridItem insightGridItem');
    container.setAttribute('class', 'flexContainer flexContainerRow flexContainerNoMargin center');
    title.setAttribute('class', 'insightHeading');
    insightText.setAttribute('class', 'insightSentence');
    title.innerText = insightData;
    insightText.innerText = insightSentence;
    container.append(title, insightText);
    gridItem.append(container);
    grid.append(gridItem);
}
// generic api request headers
export { createInsight }; 