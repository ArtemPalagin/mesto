export class Section{
    constructor(renderer, selector){
        // this._items = object.items;
        // this._renderer = object.renderer;
        this._renderer = renderer;
        this._block = document.querySelector(selector);
    }
    renderItems(object, MyCardId){
        object.forEach((item) => { 
          let element = this._renderer(item, MyCardId);

          this.addItem(element);
        });
    }
    addItem(element){
        this._block.prepend(element);
    }
}