// Correct: Each class has a single responsibility
class MyReport1 {
  constructor(private title: string, private content: string) {}

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string {
    return this.content;
  }
}

class ReportPrinter {
  public printReport(report: MyReport1): void {
    console.log(`Title: ${report.getTitle()}`);
    console.log(`Content: ${report.getContent()}`);
  }
}

// Wrong: The class has multiple responsibilities
class MyReport2 {
  constructor(private title: string, private content: string) {}

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string {
    return this.content;
  }

  public printReport(): void {
    console.log(`Title: ${this.title}`);
    console.log(`Content: ${this.content}`);
  }
}
