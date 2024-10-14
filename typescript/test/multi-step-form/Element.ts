import { Form, Tab } from "./Composite";
import { IUIElement } from "./UIElement";
// export interface IElement {
//   render(hostId: string): void;
//   id: string;
//   title: string;
// }

export class TextInput extends IUIElement {
  addStyles(styles: Partial<CSSStyleDeclaration>) {
    const textInputElement = document.getElementById(this.id)!;
    if (styles) {
      for (const [key, value] of Object.entries(styles)) {
        if (value) {
          textInputElement.style[key as any] = value.toString();
          console.log(key, value.toString());
        }
      }
    }
  }
  render(hostId: string): void {
    const textInputElement = document.createElement("input");
    textInputElement.id = this.id;
    textInputElement.type = "text";
    textInputElement.name = this.title;
    textInputElement.placeholder = this.title;
    document.getElementById(hostId)?.appendChild(textInputElement);
  }
}
export abstract class Button extends IUIElement {
  enable(): void {
    const element = document.getElementById(this.id);
    if (element) {
      element.removeAttribute("disabled");
    }
  }

  disable(): void {
    const element = document.getElementById(this.id);
    if (element) {
      element.setAttribute("disabled", "true");
    }
  }
  hide(): void {
    document.getElementById(this.id)!.style.display = "none";
  }
  show(): void {
    document.getElementById(this.id)!.style.display = "inline";
  }
  abstract render(hostId: string): void;
}
export class SimpleButton extends Button {
  private _callbackFunction: (event: MouseEvent) => void;
  set callBackFunction(fun: (event: MouseEvent) => void) {
    this._callbackFunction = fun;
  }
  render(hostId: string): void {
    const buttonElement = document.createElement("button");
    buttonElement.id = this.id;
    buttonElement.type = "button";
    buttonElement.innerText = this.title;
    buttonElement.onclick = this._callbackFunction;
    document.getElementById(hostId)?.appendChild(buttonElement);
  }
}
export class SubmitButton extends Button {
  private _callbackFunction: (event: SubmitEvent) => void;
  set callBackFunction(fun: (event: SubmitEvent) => void) {
    this._callbackFunction = fun;
  }
  render(hostId: string): void {
    const buttonElement = document.createElement("button");
    buttonElement.id = this.id;
    buttonElement.type = "submit";
    buttonElement.innerText = this.title;
    document.getElementById(hostId)?.appendChild(buttonElement);
    const form = buttonElement.closest("form");
    form!.onsubmit = this._callbackFunction;
  }
}

export class Checkbox extends IUIElement {
  toggle(): void {
    const checkBoxElement = document.getElementById(
      this.id
    ) as HTMLInputElement;
    checkBoxElement.checked = !checkBoxElement.checked;
  }
  render(hostId: string): void {
    console.log("HERE");

    const checkBoxElement = document.createElement("input");
    checkBoxElement.id = this.id;
    checkBoxElement.type = "checkbox";
    checkBoxElement.title = this.title;
    checkBoxElement.name = this.title;
    checkBoxElement.placeholder = this.title;
    document.getElementById(hostId)?.appendChild(checkBoxElement);
  }
}

export enum ElementType {
  TEXT_INPUT,
  BUTTON,
  SUBMIT_BUTTON,
  TAB,
  FORM,
  CHECKBOX,
}

export class ElementFactory {
  static createElement(
    type: ElementType,
    id: string,
    title: string
  ): IUIElement {
    switch (type) {
      case ElementType.BUTTON:
        return new SimpleButton(id, title);
      case ElementType.SUBMIT_BUTTON:
        return new SubmitButton(id, title);
      case ElementType.TEXT_INPUT:
        return new TextInput(id, title);
      case ElementType.CHECKBOX:
        return new Checkbox(id, title);
      case ElementType.TAB:
        return new Tab(id, title);
      case ElementType.FORM:
        return new Form(id, title);
      default:
        throw new Error("Invalid Type!");
    }
  }
}
