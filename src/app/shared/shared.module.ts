import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
	],

	declarations: [
		ShowAuthedDirective
	],

	exports: [
		FormsModule,
		CommonModule,

		ShowAuthedDirective
	]
})
export class SharedModule { }