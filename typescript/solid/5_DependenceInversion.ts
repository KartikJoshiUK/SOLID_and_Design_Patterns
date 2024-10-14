// Abstraction to prevent coupling
interface IDatabase {
  execute(): void; // Abstraction for executing commands
}

// Lower-level implementations
class MySQLDB implements IDatabase {
  execute(): void {
    console.log("Saving in MySQL");
  }
}

class MongoDB implements IDatabase {
  execute(): void {
    console.log("Saving in MongoDB");
  }
  find(): void {
    console.log("Found!");
  }
}

// Higher-level module using abstraction
class Prisma {
  save(database: IDatabase) {
    database.execute(); // Depends on abstraction, not concrete implementation
  }
}

// Violation of DIP
class Mongoose {
  save(database: MongoDB) {
    database.execute(); // Tightly coupled to MongoDB
  }
}

// CLIENT
const prismaClient = new Prisma();
prismaClient.save(new MongoDB());
prismaClient.save(new MySQLDB()); // Flexibility to use any IDatabase implementation

const mongooseClient = new Mongoose();
mongooseClient.save(new MongoDB());
// mongooseClient.save(new MySQLDB()); // This would cause an error due to coupling
