import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChamberlainComponent } from './chamberlain/chamberlain.component';
import { MajorComponent } from './chamberlain/major/major.component';
import { SubitemComponent } from './chamberlain/subitem/subitem.component';
import { DetailComponent } from './chamberlain/detail/detail.component';
import { WorkrecordComponent } from './chamberlain/workrecord/workrecord.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChamberlainComponent,
    MajorComponent,
    SubitemComponent,
    DetailComponent,
    WorkrecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
