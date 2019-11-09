import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService, AppConfigService, JokesService } from './shared/services';
import { JokesComponent } from './jokes/jokes.component';
import { JokeComponent } from './jokes/joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ AppConfigService, ApiService, JokesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
