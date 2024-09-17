class Logger {
  private static instance: Logger;
  private constructor() {
    console.log("Logger instance has been created.");
  }
  public static getInstance() {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }
  public log(message: string): void {
    const timestamp = new Date();
    console.log(`[${timestamp.toLocaleString()}] - ${message}`);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Hello world from logger 1");
logger2.log("Hello world from logger 2");

class Applicaton {
  constructor(private _logger: Logger) {} // <-- Tight coupling with Logger Singleton
  run() {
    this._logger.log("Starting up!");
    this._logger.log("Shutting down!");
  }
}

const app = new Applicaton(logger1); // <--- Tight coupling with Logger Singleton
app.run();
