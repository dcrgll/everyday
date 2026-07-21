# Preferred libraries

Use the libraries already in this project before adding alternatives.

| Need | Use |
| --- | --- |
| Styling | Tailwind CSS 4 |
| Class names | `clsx` with `tailwind-merge` through `cn()` in `@/lib/utils` |
| Motion | `motion` |
| Tooltips | `@radix-ui/react-tooltip` |
| Date utilities | `date-fns` |
| Themes | `next-themes` |

Add a dependency only when the existing stack cannot cover the requirement.
