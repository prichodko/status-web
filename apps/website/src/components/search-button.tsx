import { Shortcut, Text } from '@status-im/components'
import { CommandIcon, SearchIcon } from '@status-im/icons'
import { cva } from 'class-variance-authority'

import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts'

import type { VariantProps } from 'class-variance-authority'
import { useState } from 'react'
import { FullscreenSearch } from './fullscreen-search'

type Props = {
  size: NonNullable<VariantProps<typeof styles>['size']>
}

export const SearchButton = (props: Props) => {
  const [open, setOpen] = useState(false)

  useKeyboardShortcuts({
    '$mod+K': () => setOpen(true),
  })

  return (
    <>
      <button className={styles(props)} onClick={() => setOpen(true)}>
        <span className="flex items-center gap-1">
          <SearchIcon size={20} color="$neutral-50" />
          <Text size={15} weight="medium">
            Search
          </Text>
        </span>

        <span className="flex gap-[2px]">
          <Shortcut variant="secondary" icon={CommandIcon} />
          <Shortcut variant="secondary" symbol="K" />
        </span>
      </button>

      {open && <FullscreenSearch onOpenChange={setOpen} />}
    </>
  )
}

const styles = cva(
  'inline-flex items-center rounded-xl border border-neutral-20 shadow-1',
  {
    variants: {
      size: {
        38: 'h-[38px] gap-4 px-4',
        32: 'h-[32px] gap-2 px-2',
      },
    },
  }
)
