# Deploying the Vision Into Vector portfolio (Vite SPA)

## Static hosting

Build the site:

```bash
npm install
npm run build
```

Upload the `dist/` folder to **Vercel**, **Netlify**, **Cloudflare Pages**, **GitHub Pages** (with `base` if using a subpath), or any static file host.

## Vercel checklist

1. Push the project to a GitHub repository.
2. Import that repository into Vercel.
3. Keep the framework preset as **Vite**.
4. Leave the build command as `npm run build`.
5. Leave the output directory as `dist`.
6. Add `VITE_CONTACT_API_URL` in Project Settings if you want the contact form to post somewhere.
7. Keep `vercel.json` committed so browser refreshes on routes like `/about` and `/projects` resolve back to the SPA entry.

## Contact form backend

The SPA posts JSON to `VITE_CONTACT_API_URL` when set. The expected request body matches `ContactFormValues` in `src/lib/schemas/contact.ts` (`name`, `email`, `subject`, `message`).

### Option A — Vercel serverless endpoint

1. Create a route such as `api/contact.ts` with a `POST` handler that validates the request body and forwards the message using **Resend**, **SendGrid**, or another email provider.
2. In Vercel Project Settings, add the server-side secrets your email provider needs.
3. Set `VITE_CONTACT_API_URL` to `https://<your-vercel-domain>/api/contact` before the production build runs.

### Option B — Netlify Function

1. Add `netlify/functions/contact.ts` (or `.mjs`) that validates the body and calls **Resend** / **SendGrid**.
2. In `netlify.toml`, redirect `/api/contact` to that function.
3. Set `VITE_CONTACT_API_URL` at build time to `https://<your-site>.netlify.app/api/contact` (or your custom domain).

### Option C — Cloudflare Worker

Create a Worker with a `fetch` handler on `POST /contact`, validate JSON, send email via a provider API, enable CORS for your site origin.

### Option D — Separate API (Railway / Render / Fly.io)

Deploy a tiny Node or Bun service with one `POST /contact` route; point `VITE_CONTACT_API_URL` to its public URL.

### Option E — Form backend as a service

Use **Formspree**, **Getform**, or **Web3Forms**: set their endpoint as `VITE_CONTACT_API_URL` only if their API accepts JSON in the shape your app sends (you may need a thin adapter function).

## Environment variables

Copy `.env.example` to `.env` locally. For CI/CD, configure `VITE_CONTACT_API_URL` in your host’s environment variables **before** `npm run build` so Vite inlines the value.

## Security notes

- Rate-limit the contact endpoint (e.g. Upstash Redis, Cloudflare rate limiting).
- Verify CAPTCHA (hCaptcha / Turnstile) if you see spam.
- Never commit API keys; use host secrets only on the serverless side.

## Troubleshooting: Vite warns about `#` in the project path

Vite rejects `#` and `?` in the resolved project root (they break URLs and tooling).

1. **Pinned root:** This repo sets `root` in `vite.config.ts` at the repo root to the folder that contains that file, so a bad shell `cwd` alone should no longer confuse Vite.
2. **If the warning persists:** Check for a real folder or file named `#` under the project (delete or rename it), and avoid opening the project from a path that includes `#` (for example a URL fragment pasted into the terminal).
