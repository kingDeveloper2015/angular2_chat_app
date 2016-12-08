import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		ReactiveFormsModule
	],

	declarations: [
		ShowAuthedDirective
	],

	exports: [
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
		ShowAuthedDirective
	],

	providers: [

	]
})
export class SharedModule { }