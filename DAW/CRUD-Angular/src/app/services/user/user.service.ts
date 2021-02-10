

import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

	constructor() { }

	doLogin(data){
		if (data.email == "josamogax@gmail.com" && data.password == "123456") {
			return {
				code : 200,
				message : "Iniciando sesión",
				data : data
			};
		}else{
			return {
				code : 503,
				message : "Credenciales inválidas",
				data : null
			};
		}
	}

	// doRegister(data){
		// 	return this.http.post('user-add.php',data);	
		// }
	}
