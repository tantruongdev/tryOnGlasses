export class GlassesList {
  constructor() {
    this.gList = [];
  }
  addGlasses(glasses) {
    this.gList.push(glasses);
  }

  renderGlasses() {
    // cac the HTML
    let content = "";
    content = this.gList.reduce((glcontent, item) => {
      // noi dung cu + noi dung moi
      let gl = `
      <div class="col-4">
      <img onclick="tryOnGlasses(event)" data-id="${item.id}" class="img-fluid vglasses__items" src="${item.src}"  alt="Glasses">
      </div>
      `;
      return glcontent + gl;
    }, "");
    return content;
  }
}
