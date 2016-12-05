import { NgModule } from '@angular/core';


import { MaterialModule } from '@angular/material';
import { LayoutModule } from 'ng2-flex-layout';

@NgModule({
	imports: [
		MaterialModule.forRoot(),
		LayoutModule
	],
	exports: [
		MaterialModule,
		LayoutModule
	]
})
export class SharedModule { }