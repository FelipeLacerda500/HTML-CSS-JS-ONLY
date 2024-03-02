export class Router {
  #routes = {};

  #add(route, page) {
    this.#routes[route] = page;
  }

  addRoute(routeName, pageName) {
    this.#add(routeName, pageName);
  }

  route(event) {
    event = event || globalThis.event;

    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.#routes[pathname];

    fetch(route)
      .then((data) => {
        return data.text();
      })
      .then((html) => {
        document.getElementById("app").innerHTML = html;
      });
  }
}
