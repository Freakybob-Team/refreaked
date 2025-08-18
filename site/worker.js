export default {
  async fetch(request, env, ctx) {
    try {
      return await env.ASSETS.fetch(request);
    } catch (err) {
        return new Response(
          await env.ASSETS.fetch(new Request("https://refreaked.wishinawel.workers.dev/404.html")),
          { status: 404, headers: { "Content-Type": "text/html" } }
        )
      }
  }
};
