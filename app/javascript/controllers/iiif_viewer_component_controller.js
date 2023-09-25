import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    const documentId = this.element.getAttribute("data-docid")
    const data = {
      manifest: "https://www.canadiana.ca/iiif/"+documentId+"/manifest",
      embedded: true // needed for codesandbox frame,
    };
    const params = new URLSearchParams(window.location.search)
    if(params.has("pageNum")) data.canvasIndex = parseInt(params.get("pageNum")-1)
    let viewer = UV.init("uv", data);
    console.log(viewer)
    //if(params.has("pageNum")) viewer.triggerSocket('uv.onCanvasIndexChanged', parseInt(params.get("pageNum")))
  }
}
