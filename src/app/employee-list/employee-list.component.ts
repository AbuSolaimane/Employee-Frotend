import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void { 
    this.employeeService.getAllEmployees().subscribe(data => this.employees = data)
  }

  updateEmployee(id: any): void {
    this.router.navigate(['updateEmployee/',id])
  }

}
