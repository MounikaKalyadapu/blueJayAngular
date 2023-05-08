import {Component, EventEmitter, Output} from '@angular/core';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    toggleBar = true
    @Output() emitToggle = new EventEmitter<boolean>();
    toggleBarCall(){
        console.log("clicked");
        this.toggleBar = !this.toggleBar;
        this.emitToggle.emit(this.toggleBar)
    }
}