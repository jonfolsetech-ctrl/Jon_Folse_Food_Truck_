import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the branded homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Jon Folse Food Truck/);
  assert.match(html, /A little taste of Louisiana/);
  assert.match(html, /Book the truck/);
  assert.match(html, /Gonzales/);
  assert.match(html, /Baton Rouge/);
  assert.match(html, /New Orleans/);
  assert.match(html, /South Louisiana/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /FoodEstablishment/);
  assert.match(html, /rel="canonical"/);
  assert.doesNotMatch(html, /codex-preview/);
});
