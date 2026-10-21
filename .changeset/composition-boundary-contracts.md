---
'foldkit': minor
---

Add `Block.CompositionFor<typeof Definition, typeof bindings>` for explicitly annotating an exported Composition. Together with the existing `Completed*` contract aliases, applications can give the Composition and completed Block declared types, so editor member access resolves the contract without rechecking the `makeComposition` or `assembleBlock` call after every edit. All call-site validation still runs and reports in place.

```ts
const bindings = [HomeBinding, SearchBinding] as const

export const ApplicationComposition: Block.CompositionFor<
  typeof ApplicationDefinition,
  typeof bindings
> = ApplicationDefinition.makeComposition({ bindings })

const implementation = { init, update, view, subscriptions, EffectsLayer }

export const ApplicationBlock: Block.CompletedWithView<
  typeof ApplicationComposition,
  typeof implementation
> = ApplicationComposition.assembleBlock(implementation)
```
