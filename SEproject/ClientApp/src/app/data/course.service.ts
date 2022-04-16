import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

    public API = `${environment.apiDebug}`
    constructor(private httpClient: HttpClient) { }

    getCourses() {
        return this.httpClient.get<Course[]>(`${this.API}Courses`)
    }
    getCourseByID(id: string) {
        return this.httpClient.get<Course>(`${this.API}Courses/${id}`)
    }
    postCourse(course: Course) {
        return this.httpClient.post(`${this.API}/Courses`, course)
    }
    updateCourse(id: string, course: Course) {
        return this.httpClient.put(`${this.API}/Courses`, course)
    }
    deleteCourse(id: string) {
        return this.httpClient.delete(`${this.API}/Courses/${id}`)
    }
}
