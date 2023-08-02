import { haulerList } from "./hauler.js";
import { DockList } from "./dock.js";
import { shippingShipList } from "./cargo.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Shipping Ships</h1>
<article class="docks">
    <section class="detail--docks">
        <h2>Docks<h2>
        ${DockList()}
    </section>
    <section class="detail--haulers">
        <h2>Hauling Ships</h2>
            ${haulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
            ${shippingShipList()}
    </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;
