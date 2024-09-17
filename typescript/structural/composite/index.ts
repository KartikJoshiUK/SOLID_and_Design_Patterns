// COMPONENT
interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

// LEAF 1
class Developer implements Employee {
  constructor(private name: string, private salary: number) {}
  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  getRole(): string {
    return "Developer";
  }
}
// LEAF 2
class Designer implements Employee {
  constructor(private name: string, private salary: number) {}
  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  getRole(): string {
    return "Designer";
  }
}

// COMPOSITION INTERFACE
interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

// COMPOSITE & LEAF 3
class Manager implements CompositeEmployee {
  private employees: Employee[] = [];
  constructor(private name: string, private salary: number) {}
  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
  removeEmployee(employee: Employee): void {
    this.employees = this.employees.filter(
      (emp) => emp.getName() !== employee.getName()
    );
  }
  getEmployees(): Employee[] {
    return this.employees;
  }
  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  getRole(): string {
    return "Manager";
  }
}

// USAGE
const dev1 = new Developer("Kartik Joshi", 35000);
const dev2 = new Developer("Shubham Pandey", 40000);
const des1 = new Designer("Rajat Rastogi", 15000);
const manager = new Manager("Michael Scott", 80000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(des1);
manager.removeEmployee(dev2);
console.log(manager);
