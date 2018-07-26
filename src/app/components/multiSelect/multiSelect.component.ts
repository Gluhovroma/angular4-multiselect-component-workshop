import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';




@Component({
  selector: 'multi-select',
  host: {
    '(document:click)': 'onClick($event)',
  },
  templateUrl: './multiSelect.component.html',
  styleUrls: ['./multiSelect.component.scss'],
})
export class MultiSelectComponent implements OnInit {
  @Input() items: Array<any>;
  @Input() selectedItem: any;
  @Input() isGrouping;
  
  @Output() onSelectItem = new EventEmitter<any>();

  isOpen = false;
  constructor(private _eref: ElementRef) { 
   
  }

  ngOnInit() {     

  }
  onClick(event) {
    
    // this.isEditing = false;
     if (!this._eref.nativeElement.contains(event.target)) {
     
       this.isOpen = false;

     }
     
       //doSomething();
    }
 
  
  open() {
        this.isOpen ? this.isOpen = false : this.isOpen = true;
        console.log("open")
  }
  selectItem(item) {
      this.isOpen = false;
    console.log("my item", item);
    this.onSelectItem.emit(item);
  
  }
}