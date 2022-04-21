import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Instructor } from './models/instructor';

@Injectable({
    providedIn: 'root'
})
export class InstructorService {

    public API = `${environment.apiDebug}`
    constructor(private httpClient: HttpClient) { }

    getIntructors() {
        return this.httpClient.get<Instructor[]>(`${this.API}Instructor`)
    }
    getInstructorByID(id: string) {
        return this.httpClient.get<Instructor>(`${this.API}Instructor/${id}`)
    }
    postInstructor(instructor: Instructor) {
        return this.httpClient.post(`${this.API}Instructor`, instructor)
    }
    updateInstructor(id: string, instructor: Instructor) {
        return this.httpClient.put(`${this.API}Instructor/${id}`, instructor)
    }
    deleteInstructor(id: string) {
        return this.httpClient.delete(`${this.API}Instructor/${id}`)
    }
}
