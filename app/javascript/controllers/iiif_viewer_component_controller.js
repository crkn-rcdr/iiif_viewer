import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    const documentId = this.element.getAttribute("data-docid")
    let canvasIndex = 0
    const params = new URLSearchParams(window.location.search)
    if(params.has("pageNum")) canvasIndex = parseInt(params.get("pageNum")-1)
    if(Math.random() < 0.5) {
      //https://codesandbox.io/s/uv-config-example-7kh4s?file=/uv-config.json
      const data = {
        manifest: "https://www.canadiana.ca/iiif/"+documentId+"/manifest",
        embedded: true // needed for codesandbox frame,
      };
      data.canvasIndex = canvasIndex
      document.getElementById("uv").style = "height: 40rem;";
      let viewer = UV.init("uv", data);
    } else {
      //https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js
      document.getElementById("mirador").style = "width: 100%; height: 40rem; position: relative;";
      let miradorInstance = Mirador.viewer({
        id: 'mirador', // id selector where Mirador should be instantiated
        //selectedTheme: 'dark', // dark also available
        view: "catalogueView",
        window: {
            allowClose: false, // Prevent the user from closing this window
            defaultSideBarPanel: 'info',
            sideBarOpenByDefault: true,
            defaultView: 'book',
            views: [ // Only allow the user to select single and gallery view
              { key: 'single', behaviors: ['individuals', 'paged'] },
              { key: 'book', behaviors: ['paged'] },
              { key: 'scroll', behaviors: ['continuous'] },
              { key: 'gallery' },
            ]
        },
        windows: [{
          manifestId: "https://www.canadiana.ca/iiif/"+documentId+"/manifest",
          //view: 'single',
          canvasIndex,
        }],
        workspace: {
            type: 'mosaic',
        },
        workspaceControlPanel: {
            enabled: false, // Remove extra workspace settings
        },
      });
    }
  }
}
