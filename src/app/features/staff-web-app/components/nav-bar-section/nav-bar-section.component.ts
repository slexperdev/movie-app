import { Component, EventEmitter, Output } from '@angular/core';
import { ViewsConfig } from 'src/app/core/utils/views-config';

@Component({
  selector: 'app-nav-bar-section',
  templateUrl: './nav-bar-section.component.html',
  styleUrls: ['./nav-bar-section.component.css']
})
export class NavBarSectionComponent {

  public viewConfig = ViewsConfig;

  @Output() requestingView = new EventEmitter<string>();
  changeCurrentView(id:string){

    this.requestingView.emit(id);
  }
}
