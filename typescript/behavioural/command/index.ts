class Light {
  turnOn() {
    console.log("The Light is on!");
  }
  turnOff() {
    console.log("The Light is off!");
  }
}
interface ICommand {
  execute(): void;
  undo(): void;
}
class TurnOnCommand implements ICommand {
  constructor(private light: Light) {}
  execute(): void {
    this.light.turnOn();
  }
  undo(): void {
    this.light.turnOff();
  }
}
class TurnOffCommand implements ICommand {
  constructor(private light: Light) {}
  execute(): void {
    this.light.turnOff();
  }
  undo(): void {
    this.light.turnOn();
  }
}
class SimpleRemoteControl {
  private currentCommand!: ICommand;
  private undoCommand!: ICommand;
  private commandQueue: ICommand[] = [];
  setCommand(command: ICommand) {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQueue.push(command);
  }
  buttonWasPressed() {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.shift();
      command?.execute();
    }
  }
  undoButtonWasPressed() {
    this.undoCommand.execute();
  }
  hasCommands() {
    return this.commandQueue.length > 0;
  }
}

const remote = new SimpleRemoteControl();
const light = new Light();
remote.setCommand(new TurnOnCommand(light));
remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();
remote.buttonWasPressed();
remote.undoButtonWasPressed();

// Create a command queue
console.log("Command queue...");

remote.setCommand(new TurnOnCommand(light));
remote.setCommand(new TurnOffCommand(light));
while (remote.hasCommands()) {
  remote.buttonWasPressed();
}
