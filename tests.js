const { expect } = require("chai");
const { Server } = require("socket.io");
const sinon = require("sinon");

describe("Socket server", function () {
  let io;
  let sandbox;

  before(function () {
    sandbox = sinon.createSandbox();
    io = new Server();
  });

  beforeEach(function () {
    sandbox.stub(console, "log");
  });

  afterEach(function () {
    sandbox.restore();
  });

  it("should call console.log when a user connects", function () {
    const mockSocket = { on: sandbox.stub() };
    io.emit("connection", mockSocket);
    expect(console.log.calledOnceWith("a user connected")).to.be.true;
  });

  // Agrega más pruebas según sea necesario para cubrir otras funciones del servidor
});
