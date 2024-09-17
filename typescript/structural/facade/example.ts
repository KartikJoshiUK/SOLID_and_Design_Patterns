class Amplifier {
  turnOn() {
    console.log("Amplifier powered on.");
  }

  volume(level: number) {
    console.log("Setting volume to level", level, " dbs.");
  }
}
class DvdPlayer {
  turnOn() {
    console.log("Dvd powered on.");
  }

  play(movie: string) {
    console.log("Playing movie", movie);
  }
}
class Projector {
  turnOn() {
    console.log("Projector powered on.");
  }

  setInput(dvdPlayer: DvdPlayer) {
    console.log("Selecting DVD Player!");
  }
}

class Lights {
  dim(level: number) {
    console.log("Dimming lights to ", level);
  }
}

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private projector: Projector,
    private lights: Lights
  ) {}
  watchMovie(movie: string, volume: number, lights: number) {
    this.lights.dim(lights);
    this.amplifier.turnOn();
    this.amplifier.volume(volume);
    this.dvdPlayer.turnOn();
    this.projector.turnOn();
    this.projector.setInput(this.dvdPlayer);
    this.dvdPlayer.play(movie);
  }
}

const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const lights = new Lights();
const homeTheaterFacade = new HomeTheaterFacade(
  amplifier,
  dvdPlayer,
  projector,
  lights
);

homeTheaterFacade.watchMovie("El Camino", 30, 40);
