import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:[
    MainComponent
  ]
})
export class ComponentsModule { }
