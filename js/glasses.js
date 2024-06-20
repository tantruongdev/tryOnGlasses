export class Glasses {
  constructor(
    _id,
    _src,
    _virtualImg,
    _brand,
    _name,
    _color,
    _desc,
    _price = -1,
    _status = true
  ) {
    this.id = _id;
    this.src = _src;
    this.virtualImg = _virtualImg;
    this.brand = _brand;
    this.name = _name;
    this.color = _color;
    this.desc = _desc;
    this.status = _status;
    this.price = _price;
  }
}
