import { NgModule }from '@angular/core';
import { MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule, MdProgressSpinnerModule, MdTooltipModule} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdProgressSpinnerModule,
    MdTooltipModule],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdProgressSpinnerModule,
    MdTooltipModule]
})

export class MaterialModule { }
