interface Subject1 {
  registerObserver(observer: Observer1): void;
  removeObserver(observer: Observer1): void;
  notifyObservers(): void;
}
interface Observer1 {
  update(temperature: number, humidity: number, pressure: number): void;
}

class WeatherData implements Subject1 {
  private observers: Observer1[] = [];
  constructor(
    private temperature: number,
    private humidity: number,
    private pressure: number
  ) {}

  registerObserver(observer: Observer1): void {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer1): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyObservers(): void {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }
  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.humidity = humidity;
    this.temperature = temperature;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

class ConditionDisplay implements Observer1 {
  update(temperature: number, humidity: number, pressure: number): void {
    console.log(
      `Weather conditions update\nTemperature : ${temperature} deg Celcius \nHumidity : ${humidity} g/kg\nPressure : ${pressure} Pa`
    );
  }
}

const conditionsDisplay = new ConditionDisplay();
const weather = new WeatherData(26, 45, 36);
weather.registerObserver(conditionsDisplay);
weather.setMeasurements(35, 32, 67);
weather.setMeasurements(35, 32, 54);
