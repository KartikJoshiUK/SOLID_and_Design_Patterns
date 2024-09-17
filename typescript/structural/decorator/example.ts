interface ServerRequest {
  handle(request: any): void;
}

class BaseServer implements ServerRequest {
  handle(request: any): void {
    console.log("Handling request with this data", request);
  }
}

abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}
  abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }
  handle(request: any): void {
    const timestamp = new Date().toLocaleString();
    this.serverRequest.handle(request);
    console.log(`[${timestamp}]`);
  }
}

class AuthMiddleware extends ServerRequestDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }
  handle(request: any): void {
    console.log("Authenticating user...");
    if (request.isAuthenticated) {
      console.log("User Authenticated!");
      this.serverRequest.handle(request);
    } else throw new Error("User not authorized!");
  }
}

const request = {
  isAuthenticated: true,
  body: "hello world",
};

let server = new BaseServer();

server = new LoggingMiddleware(server);
server = new AuthMiddleware(server);

server.handle(request);
