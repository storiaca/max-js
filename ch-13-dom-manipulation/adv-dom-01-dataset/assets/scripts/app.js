class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
    element.scrollIntoView({ behavior: "smooth" });
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? "afterbegin" : "beforeend",
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tooltipElement.style.position = "absolute";
    tooltipElement.style.left = x + "px";
    tooltipElement.style.top = y + "px";

    tooltipElement.addEventListener("click", this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    //projectElement.dataset.someInfo = "Test";
    const tooltip = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      tooltipText,
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener(
      "click",
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const someScript = document.createElement("script");
    // someScript.textContent = 'alert("Hi there")';
    // document.head.append(someScript);

    // document
    //   .getElementById("start-analytics-btn")
    //   .addEventListener("click", this.startAnalytics);

    const timerId = setTimeout(this.startAnalytics, 3000);
    document
      .getElementById("stop-analytics-btn")
      .addEventListener("click", () => {
        clearTimeout(timerId);
      });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement("script");

    analyticsScript.src = "assets/scripts/analytics.js";

    analyticsScript.defer = true;

    document.head.append(analyticsScript);
  }
}

App.init();

/* Handling scrolling */
//const ul = document.querySelector("section ul");

//console.log(ul.scrollTo(0, 50)); // add amount of hom much want to scroll by x or y axe, this case scroll 50px by y axe

//console.log(ul.scrollBy(0, 50)); // this will add that number that we defined

//console.log(ul.scrollTo({ top: 50, behavior: "smooth" }));
//console.log(ul.scrollBy({ top: 50, behavior: "smooth" }));

/* The "location" and "history" Objects */

// console.log(location);

//console.log((location.href = "https://academind.com")); // send user to new location

//console.log(location.replace("https://academind.com")); // same as href but we can't go back

//console.log(location.assign("https://academind.com")); // same as href, just call method

//console.log(location.host); // tels on which host this running

//console.log(location.origin); // full domain

//console.log(location.pathname); // shows where you are on the page

//console.log(history);

//console.log(history.back()); // back to the page where we came from

// console.log(history.forward);

//console.log(history.length); // how manu steps user did in this tab browser

// console.log(history.go(5)); // go back 5 steps in history

/* The "navigator" Object */
//console.log(navigator);

//console.log(navigator.userAgent); // userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
// ovo nije sigurno, ako zelimo da proverimo koji browser koristi user, mozemo da proverimo fature od tog browsera

// console.log(navigator.clipboard);

// console.log(
//   navigator.geolocation.getCurrentPosition((data) => {
//     console.log(data);
//   })
// ); // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1687847322663}

/* Working with Dates */
// console.log(new Date());

// const date = new Date(); // 27.06.2023

// console.log(date.getDate()); // 27 date in month
// console.log(date.getDay()); // 2 day in week

// console.log(date.getTime()); // 1687847798553 time since begining of time in ms for js 01.01.1970.

// const date2 = new Date("07/11/23");

// console.log(date2);

// console.log(date - date2); // 1178365781
// console.log(1178365781 / 1000 / 60 / 60 / 24); // 13.6 get number of days between two dates

/* The "Error" Object & Constructor Function */
//throw new Error("Something went wrong");

const customError = new Error("Custom error");

customError.message = "Lorem ipsum";

customError.code = 404;

console.dir(customError);
