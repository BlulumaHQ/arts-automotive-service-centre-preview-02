# Domain-Based SEO Indexing Protection

- [x] Inspect actual app stack, existing SEO and deployment/domain state.
- [x] Determine whether hosting supports safe hostname-conditional crawler-visible noindex: no supported control is documented or exposed for this hosting stack.
- [x] Document the hosting blocker without changing website behavior.
- [x] Check real project responses, nested routes, tests and available build signals; report modified versus deployed/verified status in DOMAIN_INDEXING.md.
- [ ] Apply production platform-host noindex while keeping public access and custom-domain SEO — blocked on supported hostname-conditional header control at the serving host.