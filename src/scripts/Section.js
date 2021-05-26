export class Section{
    constructor(object, selector){
        this._items = object.items;
        this._renderer = object.renderer;
        this._block = document.querySelector(selector);
    }
    renderItems(){
        this._items.forEach((item) => { 
          let element = this._renderer(item);
          
          this.addItem(element);
        });
    }
    addItem(element){
        this._block.prepend(element);
    }
}