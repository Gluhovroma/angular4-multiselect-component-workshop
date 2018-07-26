import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'single-select-item',
  templateUrl: './singleSelectItem.component.html',
  styleUrls: ['./singleSelectItem.component.scss'],
})
export class SingleSelectComponentItem implements OnInit{
  @Input() item: Array<any>;
  @Input() selectedItem: any;
  @Output() onSelect = new EventEmitter<any>();   
  constructor() { 
   
  }

  ngOnInit() { 
    console.log(this.item);
    console.log(this.selectedItem);
  }

  selectItem(item) {
    this.onSelect.emit(item); 
  }
}