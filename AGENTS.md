# Architecture rules

- Treat production response headers in this Classic Vite SPA as hosting-owned; do not assume Vite development headers or another provider's configuration executes on Lovable hosting, because shared static artifacts cannot safely enforce hostname-specific indexing.