import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Student } from './models/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    public API = `${environment.apiDebug}`
    constructor(private httpClient: HttpClient) { }

    getStudents() {
        return this.httpClient.get<Student[]>(`${this.API}Student`)
    }
    getStudentByID(id: string) {
        return this.httpClient.get<Student>(`${this.API}Student/${id}`)
    }
    postStudent(student: Student) {
        return this.httpClient.post(`${this.API}Student`, student)
    }
    updateStudent(id: string, student: Student) {
        return this.httpClient.put(`${this.API}Student`, student)
    }
    deleteStudent(id: string) {
        return this.httpClient.delete(`${this.API}Student/${id}`)
    }
}
