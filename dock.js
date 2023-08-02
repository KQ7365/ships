import { getDocks, getHaulers } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "dockLI") {
    const dockClick = itemClicked.dataset.id;
    const dockName = itemClicked.dataset.name;

    const haulerData = getHaulers();
    const shipNames = []; //!For multiple ships
    let haulerFound = false; //!for Boolean
    for (const hauler of haulerData) {
      if (parseInt(dockClick) === parseInt(hauler.dockID)) {
        shipNames.push(hauler.name); //pushed to array
        haulerFound = true; //setting up false boolean
      }
    }
    if (!haulerFound) {
      window.alert(`The ${dockName} dock is currently unloading nothing`);
    } else {
      window.alert(
        `The ${dockName} dock is currently unloading ${shipNames.join(", ")}`
      ); // the join function achieved getting multiple ships on one printed line. Or it just prints 1
    }
  }
});

export const DockList = () => {
  const docks = getDocks();

  let docksHTML = "<ul>";

  for (const dock of docks) {
    docksHTML += `
    <li data-id="${dock.id}" data-type="dockLI" data-name="${dock.location}">${dock.location} can hold ${dock.volume} million tons of cargo</li>`;

    // Convert each dock object to an <li> and append to the docksHTML string
  }

  docksHTML += "</ul>";

  return docksHTML;
};
