import { getHaulers } from "./database.js";
import { getShippingShips } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "hauler") {
    const haulerID = itemClicked.dataset.id;
    let shipCounter = 0;
    const shippingShips = getShippingShips();
    for (const ship of shippingShips) {
      if (parseInt(haulerID) === ship.haulerID) {
        shipCounter++;
      }
    }
    window.alert(`This hauler is carrying ${shipCounter} shipping ships`);
  }
});

export const haulerList = () => {
  const haulers = getHaulers();

  let shipsHTML = "<ul>";

  for (const hauler of haulers) {
    shipsHTML += `
      <li data-id="${hauler.id}" data-type="hauler">${hauler.name}</li>`;

    // Convert each dock object to an <li> and append to the shipsHTML string
  }
  shipsHTML += "</ul>";

  return shipsHTML;
};
