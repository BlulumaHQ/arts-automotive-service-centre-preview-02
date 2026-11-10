# Domain-Based SEO Indexing Protection — this project only

## Result

**Blocked at the hosting layer; no website or deployment changes were made.**

This project is a Classic React 18 + Vite 5 static SPA using React Router. Lovable hosting owns the production HTTP responses and SPA fallback. The available official documentation and project tools expose no supported project-only control for hostname-conditional `X-Robots-Tag` on this hosting stack. That is a limitation of the available configuration, not proof that the hosting operator cannot implement such a feature internally.

Consequently, the requested combination of public platform pages, reliable crawler-visible noindex, and untouched custom-domain SEO cannot be safely implemented with this project's current configuration access. No speculative `_headers` file, global robots meta tag, Vite development header, client-only rule, server, or unused provider adapter was added.

## Stack and SEO inspected

- `package.json`: React 18.3.1, Vite 5.4.19, React Router 6.30.1; static frontend build.
- `vite.config.ts`: development server and dependency configuration only; no production request middleware.
- `src/App.tsx`: `/`, `/services`, `/contact`, and a catch-all not-found view.
- `index.html`: business-specific title, description and social metadata; no robots noindex directive. Existing canonical is `https://artsauto.ca/` and is unchanged.
- `public/robots.txt`: crawling allowed for all agents; unchanged.
- No sitemap or Netlify/Cloudflare deployment configuration was found in the project.
- No custom domains are connected; the project is not published, according to the project URL and domain tools.
- `artsauto.ca` is the existing source/canonical address, not a verified deployment of this project. Its hosting was not changed or assessed.

The existing fixed canonical is not automatically personalized for future custom domains. When an official domain is actually selected, its canonical and a sitemap should be verified against that domain. No platform-domain sitemap or invented official-domain URL was created in this task.

## Real HTTP observations

Checked without login or following redirects on **2026-11-10 at approximately 08:43 UTC**.

| Project hostname | GET paths tested | Response | X-Robots-Tag | Meaning |
| --- | --- | --- | --- | --- |
| `id-preview--76c65554-d7e7-4362-971b-79e51ad2d874.lovable.app` | `/`, `/services`, `/contact`, `/services/inspection`, `/robots.txt`, `/sitemap.xml` | 401 | `noindex, nofollow` | Existing preview access restriction; this is not a publicly accessible protected website. |
| `arts-automotive-service-centre-preview-02.lovable.app` | Same paths | 404 | absent | Existing unpublished-project response; not the deployed app. |

Googlebot-user-agent GET and HEAD requests to `/services` confirmed the same outcomes for both hosts. The named host additionally returned `x-lovable-serve-error: not_published`.

`/services/inspection` probes nested response handling; it is not an existing business page. No route was added or removed.

No project deployments under `*.workers.dev`, `*.pages.dev`, or `*.netlify.app` were found in the inspected configuration or returned project domain metadata. Those host families have not been deployed, protected, or verified by this task. Their presence cannot be inferred from Cloudflare's server header: Lovable using Cloudflare does not mean this project is a customer-controlled Worker or Pages deployment.

There are no connected official custom domains on which to verify index eligibility, headers, canonical or sitemap. No conclusion about future deployed headers can be drawn from today's preview 401 or unpublished 404 responses.

## Safety and required hosting capability

A supported production response rule would need to evaluate the actual request hostname, not a browser-side value or an untrusted forwarded-host header. It must use exact suffix boundaries for `.lovable.app`, `.workers.dev`, `.pages.dev`, and `.netlify.app`; lookalike official domains such as `lovable.app.example.com` must not match. It must apply `X-Robots-Tag: noindex` only to those project platform hosts on root and nested responses, with no effect on custom-domain SEO headers. Any response cache must remain isolated by hostname so noindex cannot leak between platform and official domains.

On host infrastructure that supports it, this is a request-time HTTP header operation, not a shared HTML or path-only static-header operation. A proxy on an official custom domain cannot change responses delivered directly by Lovable's platform hostname.

**Blocker:** a supported hostname-conditional response-header control on this project's current hosting, or authorized hosting infrastructure that actually serves the relevant platform URLs. No external deployment, domain move, publication, authentication change, or redirect was performed.

## Validation and delivery status

- Existing test run: `bunx vitest run src/test/example.test.ts` — one test passed. This is an existing smoke test, not evidence of an implemented hostname policy.
- Automatic build diagnostic: `build OK` at `2026-11-10T08:43:33Z`. No separate manual production build was run.
- Local development `/` returned HTTP 200; local development headers do not establish deployed header behavior.
- **Runtime/configuration files modified:** none.
- **Documentation files added/updated:** `DOMAIN_INDEXING.md`, `AGENTS.md`, `roadmap.md`.
- **Deployed:** nothing. Publishing, domain settings, visibility and route behavior are unchanged.
- **Verified:** the existing external HTTP responses listed above and the available build/test signals only.
- **Not implemented or verified:** public platform-host noindex on app content; platform-host coverage after publication; custom-domain deployed SEO; Worker/Pages/Netlify deployments.

## Official references

- [Lovable hosting](https://docs.lovable.dev/features/hosting)
- [Publishing and SPA routing](https://docs.lovable.dev/features/publish#spa-routing-deep-links-page-refresh)
- [SEO & AI search review](https://docs.lovable.dev/features/seo-aeo)
- [Deploying outside Lovable](https://docs.lovable.dev/tips-tricks/external-deployment-hosting)