export default {
  async fetch(request, env, ctx) {
    try {
      return await env.ASSETS.fetch(request);
    } catch (err) {
      let notFoundPage;

      try {
        notFoundPage = await env.ASSETS.fetch(new Request("https://refreaked.wishinawel.workers.dev/404.html"));
      } catch {
        notFoundPage = new Response("<h1>404 - Page not found</h1><p>There was also an error loading the 404 page!</p>", {
          headers: { "Content-Type": "text/html" }
        });
      }

      return new Response(await notFoundPage.text(), {
        status: 404,
        headers: { "Content-Type": "text/html" }
      });
    }
  }
};
