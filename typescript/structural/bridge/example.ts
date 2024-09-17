// IMPLEMENTATION
interface Database {
  connect(): void;
  query(query: string): void;
  close(): void;
}
class PostgreSQLDatabase implements Database {
  connect(): void {
    console.log("PostgreSQL connected.");
  }
  query(sql: string): void {
    console.log("PostgreSQL query executed!", sql);
  }
  close(): void {
    console.log("PosgreSQL connection closed.");
  }
}
class MongoDatabase implements Database {
  connect(): void {
    console.log("MongoDB connected.");
  }
  query(query: string): void {
    console.log("MongoDB query executed", query);
  }
  close(): void {
    console.log("MongoDB connection closed.");
  }
}

// ABSTRACTION
abstract class DatabaseService {
  constructor(protected database: Database) {}
  abstract fetchData(query: string): any;
}

class ClientDatabaseService extends DatabaseService {
  fetchData(query: string) {
    this.database.connect();
    this.database.query(query);
    this.database.close();
  }
}

// USER
const mongoDatabase = new MongoDatabase();
const postgreSQLDatabase = new PostgreSQLDatabase();
const clientDatabaseService = new ClientDatabaseService(postgreSQLDatabase);
clientDatabaseService.fetchData("SELECT * FROM table;");
