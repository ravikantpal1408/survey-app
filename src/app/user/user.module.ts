import { CommonService } from './../services/common.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';



@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    CommonService
  ],
  declarations: [UserComponent, UserHomeComponent],
  bootstrap: [UserComponent]
})
export class UserModule { }
