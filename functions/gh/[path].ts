export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url)

  // Remove /gh/
  const fullPath = url.pathname.replace(/^\/gh\//, '')

  const parts = fullPath.split('/')

  const [repoWithBranch, ...rest] = parts

  if (!repoWithBranch || rest.length === 0) {
    return new Response('Invalid GitHub raw path', { status: 400 })
  }

  const [repo, branch = 'main'] = repoWithBranch.split('@')

  if (!/^[a-zA-Z0-9._-]+$/.test(repo)) {
    return new Response('Invalid repository name', { status: 400 })
  }

  const filePath = rest.join('/')

  const baseUrl = `https://raw.githubusercontent.com/fabioassuncao/${repo}`

  let target = `${baseUrl}/${branch}/${filePath}`

  let response = await fetch(target, {
    cf: {
      cacheTtl: 3600,
      cacheEverything: true
    }
  })

  // fallback main → master
  if (response.status === 404 && branch === 'main') {
    target = `${baseUrl}/master/${filePath}`

    response = await fetch(target, {
      cf: {
        cacheTtl: 3600,
        cacheEverything: true
      }
    })
  }

  if (!response.ok) {
    return new Response(`File not found: ${repo}/${filePath}`, {
      status: 404
    })
  }

  return new Response(response.body, {
    status: 200,
    headers: {
      ...Object.fromEntries(response.headers),
      'Cache-Control': 'public, max-age=3600'
    }
  })
}