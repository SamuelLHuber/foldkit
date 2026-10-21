import { type Block } from 'foldkit'

import { ApplicationComposition } from './composition'
import { init } from './init'
import { EffectsLayer } from './layer'
import { subscriptions } from './subscription'
import { update } from './update'
import { view } from './view/view'

const implementation = {
  init,
  update,
  view,
  subscriptions,
  EffectsLayer,
}

export const ApplicationBlock: Block.CompletedWithView<
  typeof ApplicationComposition,
  typeof implementation
> = ApplicationComposition.assembleBlock(implementation)
