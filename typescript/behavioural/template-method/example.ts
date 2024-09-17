abstract class DataParser {
  public parseData(): void {
    this.loadData();
    const data = `{"name" : "Kartik"}`;
    const parsedData = this.parse(data);
    this.validate(parsedData);
    this.useData(parsedData);
  }
  protected loadData(): void {
    console.log("Data loaded");
  }
  protected validate(parseData: any): void {
    console.log("Data validated", parseData);
  }
  protected useData(parseData: any): void {
    console.log("Data used", parseData);
  }
  protected abstract parse(parseData: any): any;
}

class JSONParser extends DataParser {
  protected parse(data: any) {
    console.log("Parsing data to json.", data);
    return JSON.parse(data);
  }
}
class XMLParser extends DataParser {
  protected parse(data: any) {
    console.log("Parsing data to xml", data);
    return "XML Data";
  }
}

// USAGE

function parseData(parser: DataParser) {
  parser.parseData();
}
parseData(new JSONParser());
