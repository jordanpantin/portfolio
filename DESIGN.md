# Portfolio Design Rules

## Intent
- Build a portfolio for a salaried lead tech / architect profile, not a freelance landing page.
- The interface should feel deliberate, calm, and credible in an engineering context.
- The site should communicate technical leadership, architecture judgment, product pragmatism, and team enablement.

## Visual Direction
- Use `awesome-design-md` as inspiration with a bias toward Vercel-like restraint.
- Apply `impeccable` principles: distill, clarify, normalize, polish.
- Prefer editorial layouts over generic marketing blocks.
- Use subtle depth, soft borders, and sparse accents.
- Avoid loud gradients, oversized badges, and excessive hover theatrics.

## Theme System
- Support both light and dark themes through CSS variables only.
- Keep the same hierarchy, contrast strategy, and spacing in both themes.
- Never hardcode page-critical colors in components when a semantic token can be used.
- Theme toggle should be explicit, persistent, and work without layout shifts.

## Layout
- Prefer asymmetric compositions over centered template heroes.
- Keep page width controlled and sections well paced.
- Use cards only when they help segmentation; avoid card-in-card patterns.
- Favor structured lists and editorial panels over repetitive grids when possible.

## Typography
- Use a sober sans-serif for content and a restrained monospace for labels.
- Headlines should be concise, sharp, and information-dense.
- Avoid startup cliches, inflated claims, and vague marketing language.

## Copywriting
- Write for a salaried lead tech / architect audience.
- Emphasize responsibility, architecture, team guidance, delivery quality, and maintainability.
- Avoid freelance framing such as "mission", "client acquisition", or service selling language unless the content specifically requires it.
- Prefer wording around teams, products, organizations, systems, and long-term ownership.

## Components
- Buttons: compact, deliberate, and low-noise.
- Tags: informative, not decorative.
- Social links: utility-first, not dominant.
- Animations: short, quiet, and only when they support readability.
- Forms: clear and professional, with strong focus states and minimal visual noise.

## Anti-Patterns
- No generic Astro/DaisyUI-looking sections.
- No primary/secondary/accent rainbow treatment.
- No timeline or project gallery styling that looks like a default portfolio template unless heavily adapted.
- No pure black on light theme or weak gray-on-gray contrast.
- No bouncy motion, elastic easing, or oversized shadows.

## Content Priorities
- Hero: technical positioning and operating model.
- Expertise: how responsibilities map to business and team outcomes.
- Experience: role, context, scope, and technical contribution.
- Projects: examples of judgment, simplification, migration, and delivery.
- Contact: discussion around role fit, technical context, and product environment.
