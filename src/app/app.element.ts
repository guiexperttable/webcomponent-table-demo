import "./app.element.css";
import { TableModelIf, TableOptions } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";
import { TableComponent } from "@guiexpert/webcomponent-table"; // <-- our library


export class AppElement extends HTMLElement {

  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `<guiexpert-table style="width:100%;height:100%;background:transparent;margin:0;padding:0;"></guiexpert-table>`;

    const table = this.querySelector("guiexpert-table") as TableComponent;
    table.addEventListener("tableReady", (e) => console.info("table api:", (e as CustomEvent).detail));

    const tableModel: TableModelIf = generateSimpleModel(1000, 100);
    const tableOptions = new TableOptions();
    table.setData(tableModel, tableOptions);
  }

}

customElements.define("webcomponent-table-demo-root", AppElement);
