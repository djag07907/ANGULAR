
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})


export class AppComponent {
	title = 'Registro Estudiantil';

	// Add few students for initial listing
	studentsList = [
		{
		
		}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
