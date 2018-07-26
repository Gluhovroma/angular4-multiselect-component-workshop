import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'multi-select-item',
  templateUrl: './multiSelectItem.component.html',
  styleUrls: ['./multiSelectItem.component.scss'],
})
export class MultiSelectComponentItem implements OnInit{
  @Input() item: any;
  @Output() onSelect = new EventEmitter<any>();
  @Input() selectedItem: any;

    isOpen = false;
  constructor() { 

  }

  ngOnInit() { 
    if (this.selectedItem) {
      for (let child of this.item.childs) {        
        if (child.id === this.selectedItem.id) {
          this.isOpen = true;
        }
      }
    }
  }
 
  selectItem(item) {
    this.onSelect.emit(item);
 
  }

  open() {
      this.isOpen ? this.isOpen = false : this.isOpen = true;
    //console.log("open")
  }
}