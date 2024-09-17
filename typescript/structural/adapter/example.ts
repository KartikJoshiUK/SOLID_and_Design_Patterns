class MySQLDatabase {
  connectToMySQL(uri: string): void {
    console.log("MySQL Database connected at", uri);
  }
  executeMySQLQuery(query: string): void {
    console.log("Executing MySQL query ", query);
  }
}
class PostgreSQLDatabase {
  connectToPostgreSQL(uri: string): void {
    console.log("PostgreSQL Database connected at", uri);
  }
  executePostgreSQLQuery(query: string): void {
    console.log("Executing PostgreSQL query ", query);
  }
}

class DatabaseAdapter {
  constructor(private database: PostgreSQLDatabase) {}
  connectToMySQL(uri: string): void {
    this.database.connectToPostgreSQL(uri);
  }
  executeMySQLQuery(query: string): void {
    this.database.executePostgreSQLQuery(query);
  }
}

const database = new DatabaseAdapter(new PostgreSQLDatabase());
database.connectToMySQL("postgres-uri");
database.executeMySQLQuery("SELECT * FROM table;");
