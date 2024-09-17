// NOTE - Undo functionality is not handled properly - its just for demonstration of its existence

class CreateFileCommand implements ICommand {
  constructor(private path: string) {}
  execute(): void {
    console.log(`Creating File at ${this.path}`);
  }
  undo(): void {
    console.log(`Un-Creating File at ${this.path}`);
  }
}
class DeleteFileCommand implements ICommand {
  constructor(private path: string) {}
  execute(): void {
    console.log(`Deleting File at ${this.path}`);
  }
  undo(): void {
    console.log(`Un-Deleting File at ${this.path}`);
  }
}
class UpdateFileCommand implements ICommand {
  constructor(
    private path: string,
    private newContent: string,
    private oldContent: string
  ) {}
  execute(): void {
    console.log(
      `Updating File at ${this.path} +${this.newContent} -${this.oldContent}`
    );
  }
  undo(): void {
    console.log(
      `Un-Updating File at ${this.path} -${this.newContent} +${this.oldContent}`
    );
  }
}
class ReadFileCommand implements ICommand {
  constructor(private path: string) {}
  execute(): void {
    console.log(`Reading File at ${this.path}`);
  }
  undo(): void {
    console.log(`Deleting my memory of File at ${this.path}`);
  }
}
class MyFileSystem {
  private commandQueue: ICommand[] = [];
  addCommand(command: ICommand): void {
    this.commandQueue.push(command);
  }
  executeCommand(): void {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.shift();
      command?.execute();
    }
  }
  undoPrevCommand(): void {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.pop();
      command?.undo();
    }
  }
  hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}

// USAGE
const myFileSystem = new MyFileSystem();
// Create
myFileSystem.addCommand(new CreateFileCommand("/path/file.txt"));
// Update
myFileSystem.addCommand(
  new UpdateFileCommand("path/file.txt", "new content", "old content")
);
// Read
myFileSystem.addCommand(new ReadFileCommand("/path.file.txt"));
// Delete
myFileSystem.addCommand(new DeleteFileCommand("/path.file.txt"));

// Undo
// myFileSystem.undoPrevCommand();

// Executing all command at once
while (myFileSystem.hasCommands()) myFileSystem.executeCommand();
