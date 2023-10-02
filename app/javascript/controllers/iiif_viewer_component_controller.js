import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    const documentId = this.element.getAttribute("data-docid")
    let canvasIndex = 0
    const params = new URLSearchParams(window.location.search)
    if(params.has("pageNum")) canvasIndex = parseInt(params.get("pageNum")-1)
    let choice = Math.random()
    if(choice < 0.3) {
      let clovers = document.getElementsByTagName("clover-viewer")
      clovers[0].style="display:none;"
      //https://codesandbox.io/s/uv-config-example-7kh4s?file=/uv-config.json
      const data = {
        manifest: "https://www.canadiana.ca/iiif/"+documentId+"/manifest",
        embedded: true // needed for codesandbox frame,
      };
      data.canvasIndex = canvasIndex
      document.getElementById("viewer-name").innerHTML = "Universal Viewer."
      let viewer = UV.init("page-viewer", data);
    } else if(choice < 0.6) {
      let clovers = document.getElementsByTagName("clover-viewer")
      clovers[0].style="display:none;"
      document.getElementById("viewer-name").innerHTML = "Mirador."
      //https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js
      let miradorInstance = Mirador.viewer({
        id: 'page-viewer', // id selector where Mirador should be instantiated
        //selectedTheme: 'dark', // dark also available
        view: "catalogueView",
        window: {
            allowClose: false, // Prevent the user from closing this window
            allowFullscreen: true,
            allowMaximize: false,
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
    } else {
      document.getElementById("page-viewer").style="display:none;"
      document.getElementById("viewer-name").innerHTML = "Clover."
      let clovers = document.getElementsByTagName("clover-viewer")
      clovers[0].setAttribute("id", "https://www.canadiana.ca/iiif/"+documentId+"/manifest") // id="https://api.dc.library.northwestern.edu/api/v2/works/8a833741-74a8-40dc-bd1d-c416a3b1bb38?as=iiif"
    }

  }
}
