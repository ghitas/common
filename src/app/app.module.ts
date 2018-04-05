import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { LeftContentComponent } from './components/left-content/left-content.component';
import { RightContentComponent } from './components/right-content/right-content.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { Http, HttpModule } from '@angular/http';
import { PlayListService } from './services/playlist.service';
import { EventService } from './services/event.service';
import { PlaceholderDirective } from './directives/place-holder.directive';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  declarations: [
    // Components
    AppComponent, ToolBarComponent, 
    MainContentComponent, LeftContentComponent, 
    RightContentComponent, LoginComponent,

    // Directives
    PlaceholderDirective
  ],

  bootstrap: [ AppComponent ],

  providers: [ PlayListService, EventService] ,
})
export class AppModule { }
