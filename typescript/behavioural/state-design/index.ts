interface LightState {
  switchState(lightSwitch: LightSwitch): void;
}
class LightSwitch {
  constructor(private state: LightState) {}
  setState(lightState: LightState): void {
    this.state = lightState;
  }
  press(): void {
    // behaviour of object is changing when its state is changing
    this.state.switchState(this);
  }
}
class OnState implements LightState {
  switchState(lightSwitch: LightSwitch): void {
    console.log("Off to On");
    lightSwitch.setState(new OffState());
  }
}
class OffState implements LightState {
  switchState(lightSwitch: LightSwitch): void {
    console.log("On to Off");
    lightSwitch.setState(new OnState());
  }
}

// Usage
const lightsOnSwitch = new LightSwitch(new OnState());
lightsOnSwitch.press();
lightsOnSwitch.press();
