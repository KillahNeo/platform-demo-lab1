const { after, before, test } = require("node:test");
const assert = require("node:assert/strict");
const { createServer } = require("../src/app");
const { version } = require("../package.json");

let server;
let baseUrl;

before(async () => {
  server = createServer();

  await new Promise((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  const { port } = server.address();
  baseUrl = `http://127.0.0.1:${port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
});

test("GET / returns the service information", async () => {
  const response = await fetch(`${baseUrl}/`);

  assert.equal(response.status, 200);

  assert.deepEqual(await response.json(), {
    service: "platform-demo",
    message: "Hello from the platform demo!",
  });
});

test("GET /health reports a healthy service", async () => {
  const response = await fetch(`${baseUrl}/health`);

  assert.equal(response.status, 200);

  assert.deepEqual(await response.json(), {
    status: "ok",
  });
});

test("GET /version returns the service version", async () => {
  const response = await fetch(`${baseUrl}/version`);

  assert.equal(response.status, 200);

  assert.deepEqual(await response.json(), {
    service: "platform-demo",
    version,
  });
});

test("an unknown route returns 404", async () => {
  const response = await fetch(`${baseUrl}/unknown`);

  assert.equal(response.status, 404);

  assert.deepEqual(await response.json(), {
    error: "not found",
  });
});