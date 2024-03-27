abstract class Department {
  static fiscalYear = 2024;
  // private name: string;
  // private readonly id: string
  protected employees: string[] = [];

  constructor(private name: string, protected readonly id: number) {
    // this.name = n;
    // this.id = i
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// const departments = new Department("Hatihim Hasrey Kavod", 555); ===> This whole class is abstract so we can't create an instance it
// console.log(departments);
// departments.describe();

// departments.addEmployee("Igal");
// departments.addEmployee("Tar");
// departments.addEmployee("Liran");

// departments.printEmployeeInformation();

class ITDepartment extends Department {
  // admins: string[];
  constructor(role: string, public admins: string[]) {
    super(role, 1);
    // this.admins = admins;
  }

  describe() {
    console.log(`Overwrite ITDepartment id: ${this.id}`);
  }

  printAdmins() {
    console.log(this.admins);
  }
  printItEmployees() {
    console.log(this.employees);
  }
}

const itDepartment = new ITDepartment("IT", ["Igal", "Tar", "Liran"]);
console.log(itDepartment);

const staticEmployee = Department.createEmployee("Static employee");
console.log(staticEmployee, Department.fiscalYear);

itDepartment.addEmployee("Muzi");
itDepartment.printAdmins();
itDepartment.printItEmployees();

itDepartment.describe();

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found!");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please add a report");
    } else {
      this.addAndPrintReports(value);
    }
  }

  private constructor(id: string, private reports: string[]) {
    super("Accounting", 2);
    this.lastReport = reports[0];
  }

  // If we want to create only 1 AccountingDepartment instance. We initialize it in line 123
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    } else {
      return (this.instance = new AccountingDepartment("Accounting", []));
    }
  }

  describe() {
    console.log(`Overwrite Accounting Department id: ${this.id}`);
  }

  addEmployee(employee: string) {
    if (employee === "Max") {
      return;
    } else {
      this.employees.push(employee);
    }
  }

  addAndPrintReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
    console.log(this.reports);
  }
}

// const accountingDepartment = new AccountingDepartment("Accounting", []);
const accountingDepartment = AccountingDepartment.getInstance();
console.log(accountingDepartment);

// accountingDepartment.mostRecentReport; ===> This throws intentional error from line 64
accountingDepartment.mostRecentReport = "End of the year report";

accountingDepartment.addAndPrintReports("First report");

accountingDepartment.addEmployee("Max");
accountingDepartment.addEmployee("Maya");
accountingDepartment.printEmployeeInformation();

accountingDepartment.describe();
