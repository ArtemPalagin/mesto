export class Section{
    constructor(object, selector){
        this._items = object.items;
        this._renderer = object.renderer;
        this._selector = selector;
    }
    renderItems(){
        this._items.forEach((item) => { 
          let element = this._renderer(item);
          
          this.addItem(element);
        });
    }
    addItem(element){
        document.querySelector(this._selector).prepend(element);
    }
}