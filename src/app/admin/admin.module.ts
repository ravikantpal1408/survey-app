import { AdminRoutingModule } from './admin.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
