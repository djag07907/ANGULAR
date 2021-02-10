
 import { Injectable } from '@angular/core';

 @Injectable()
 export class StudentService {

   constructor() { }

   // Get all students list via API or any data storage
   getAllStudents(){
     let studentList:any;
     if(localStorage.getItem('students') && localStorage.getItem('students') != '') {
       studentList = {
         code : 200,
         message : "Lista obtenida",
         data : JSON.parse(localStorage.getItem('students'))
       }
     }else{
       studentList = {
         code : 200,
         message : "Lista obtenida",
         data : JSON.parse(localStorage.getItem('students'))
       }
     }
     return studentList;
   }

   doRegisterStudent(data, index){
     let studentList = JSON.parse(localStorage.getItem('students'));
     let returnData;
     console.log("index", index);
     if(index != null) {


       for (var i = 0; i < studentList.length; i++) {
         if (index != i && studentList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Email Address Already In Use",
             data : null
           }    
           return returnData;
         }
       }

       studentList[index] = data;
       localStorage.setItem('students',JSON.stringify(studentList));
       returnData = {
         code : 200,
         message : "Actualizado exitosamente",
         data : JSON.parse(localStorage.getItem('students'))
       }    
     }else{      
       data.id = this.generateRandomID();
       for (var i = 0; i < studentList.length; i++) {
         if (studentList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Correo en uso, favor verifique",
             data : null
           }    
           return returnData;
         }
       }
       studentList.unshift(data);

       localStorage.setItem('students',JSON.stringify(studentList));

       returnData = {
         code : 200,
         message : "Estudiante agregado exitosamente",
         data : JSON.parse(localStorage.getItem('students'))
       }    
     }
     return returnData;
   }

   deleteStudent(index:number){
     let studentList = JSON.parse(localStorage.getItem('students'));

     studentList.splice(index, 1);

     localStorage.setItem('students',JSON.stringify(studentList));

     let returnData = {
       code : 200,
       message : "Estudiante eliminado exitosamente",
       data : JSON.parse(localStorage.getItem('students'))
     }

     return returnData;
   }



   getStudentDetails(index:number){
     let studentList = JSON.parse(localStorage.getItem('students'));

     let returnData = {
       code : 200,
       message : "Student Details Fetched",
       studentData : studentList[index]
     }

     return returnData;
   }


   generateRandomID() {
     var x = Math.floor((Math.random() * Math.random() * 9999));
     return x;
   }

 }
