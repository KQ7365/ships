import { getShippingShips, getHaulers } from "./database.js";

document.addEventListener("click", (newClickEvent) => {
  const clickedElement = newClickEvent.target;

  if (clickedElement.dataset.type === "hauledBy") {
    const shipName = clickedElement.textContent;
    const haulers = getHaulers();
    const ship = getShippingShips().find((ship) => ship.name === shipName);
    const hauler = haulers.find((hauler) => hauler.id === ship.haulerID);

    if (ship && hauler) {
      window.alert(`${ship.name} is being hauled by ${hauler.name}`);
    }
  }
});

export const shippingShipList = () => {
  const haulers = getShippingShips();

  let docksHTML = "<ul>";

  for (const ships of haulers) {
    docksHTML += `
        <li data-id="${ships.haulerID}" data-type="hauledBy">${ships.name}</li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};
