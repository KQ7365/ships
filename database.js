const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    { id: 1, name: "Nina", dockID: 1 },
    { id: 2, name: "Pinta", dockID: 1 },
    { id: 3, name: "Santa Maria", dockID: 3 },
  ],
  shippingShips: [
    { id: 1, name: "Big Papa", haulerID: 1 },
    { id: 2, name: "Lil Papa", haulerID: 2 },
    { id: 3, name: "Tiny Papa", haulerID: 3 },
    { id: 4, name: "Other Papa", haulerID: 2 },
    { id: 5, name: "The Papa", haulerID: 1 },
    { id: 6, name: "Holy Papa", haulerID: 3 },
  ],
};

export const getDocks = () => {
  return database.docks.map((docks) => ({ ...docks }));
};

export const getHaulers = () => {
  return database.haulers.map((haulers) => ({ ...haulers }));
};

export const getShippingShips = () => {
  return database.shippingShips.map((ships) => ({ ...ships }));
};
