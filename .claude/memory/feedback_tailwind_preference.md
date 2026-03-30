---
name: use tailwind not inline styles
description: Prefer Tailwind classes over inline styles when Tailwind is set up
type: feedback
---

Use Tailwind classes instead of inline styles when the project has Tailwind configured.

**Why:** User explicitly prefers Tailwind classes for styling even when inline styles would work.

**How to apply:**
- Before using `style={{ ... }}`, check if Tailwind classes can achieve the same result. If yes, use `className="..."` with Tailwind instead.
- Never use arbitrary color values like `border-[#EBEBEB]`. Always use Tailwind's built-in color palette (e.g., `border-neutral-200` instead of `border-[#EBEBEB]`).
