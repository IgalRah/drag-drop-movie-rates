// Not a good way to import fils ==>
// / <reference path="components/project-input.ts" />
// / <reference path="components/project-list.ts" />
// Better way to import files ==>
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";
new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
