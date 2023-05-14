import "./app.element.css";
import { TableModelAndOptions, TableModelIf, TableOptions } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";
import { GuiexpertTableComponent } from "@guiexpert/webcomponent-table"; // <-- our library


export class AppElement extends HTMLElement {

  public static observedAttributes = ['data'];


  constructor() {
    super();
  }

  connectedCallback() {
    console.info('connectedCallback...');
    this.innerHTML = `
      <guiexpert-table-component
        style="width:100%;height:100%;background:transparent;margin:0;padding:0;"
        ></guiexpert-table-component>`;

    const table = this.querySelector("guiexpert-table-component") as GuiexpertTableComponent;
    table.addEventListener("tableReady", (e) => console.info("table api:", (e as CustomEvent).detail));

    const tableModel: TableModelIf = generateSimpleModel(1000, 100);
    const tableOptions = new TableOptions();
    console.info(table);
    console.info(tableModel);
    console.info(typeof table);
    // table.setData(new TableModelAndOptions(tableModel, tableOptions));
    table.data = (new TableModelAndOptions(tableModel, tableOptions));
  }

}

customElements.define("webcomponent-table-demo-root", AppElement);

