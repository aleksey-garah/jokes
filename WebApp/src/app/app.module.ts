import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { JokesService } from './shared/services';
import { JokesComponent } from './jokes/jokes.component';
import { JokeComponent } from './jokes/joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
