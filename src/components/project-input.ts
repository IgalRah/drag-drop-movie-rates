// / <reference path="base-component.ts" />
// / <reference path="../decorators/autobind.ts" />
// / <reference path="../utility/validation.ts" />
// / <reference path="../state/project-state.ts" />

import { Component } from "./base-component.js";
import { Validatable, validate } from "../utility/validation.js";
import { AutoBind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");

    this.titleInputElement = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent() {}

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 4,
    };
    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    // Not a good validation:
    // if (
    //   enteredTitle.length === 0 ||
    //   enteredDescription.length === 0 ||
    //   enteredPeople.length === 0
    // ) {
    //   alert("Invalid input - Please try again");
    //   return;
    // } else {
    //   return [enteredTitle, enteredDescription, +enteredPeople];
    // }

    // Better validation (this was a pain in the ass)
    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input - Please try again");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, decs, people] = userInput;
      projectState.addProject(title, decs, people);

      this.clearInputs();
    }
  }
}
