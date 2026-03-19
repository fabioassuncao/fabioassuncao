export const onRequest: PagesFunction = async (context) => {
  const { params, request } = context;

  const path = (params.path as string[]) || [];

  // Esperado: /gh/{repo[@branch]}/{path...}
  const [repoWithBranch, ...rest] = path;

  if (!repoWithBranch || rest.length === 0) {
    return new Response("Invalid GitHub raw path", { status: 400 });
  }

  // Repo + branch opcional
  const [repo, branch = "main"] = repoWithBranch.split("@");

  // Segurança básica
  if (!/^[a-zA-Z0-9._-]+$/.test(repo)) {
    return new Response("Invalid repository name", { status: 400 });
  }

  const filePath = rest.join("/");

  const baseUrl = `https://raw.githubusercontent.com/fabioassuncao/${repo}`;

  let target = `${baseUrl}/${branch}/${filePath}`;

  // 🔥 Fetch com cache Cloudflare
  let response = await fetch(target, {
    cf: {
      cacheTtl: 3600, // 1h cache
      cacheEverything: true,
    },
  });

  // 🔁 Fallback automático: main → master
  if (response.status === 404 && branch === "main") {
    target = `${baseUrl}/master/${filePath}`;

    response = await fetch(target, {
      cf: {
        cacheTtl: 3600,
        cacheEverything: true,
      },
    });
  }

  if (!response.ok) {
    return new Response(`File not found: ${repo}/${filePath}`, {
      status: 404,
    });
  }

  // 🧠 Clona response para customizar headers
  const newHeaders = new Headers(response.headers);

  // Força cache no browser também
  newHeaders.set("Cache-Control", "public, max-age=3600");

  return new Response(response.body, {
    status: 200,
    headers: newHeaders,
  });
};
