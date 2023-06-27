import { useSearchEngine } from '@/hooks/use-search-engine'
import * as Dialog from '@radix-ui/react-dialog'
import { Text } from '@status-im/components'
import { HighlightMatches } from './highlight-matches'
import { useEffect, useState } from 'react'
import { Link } from './link'
import { slugify } from '@/utils/slugify'

type Props = {
  onOpenChange: (open: boolean) => void
}

export const FullscreenSearch = (props: Props) => {
  const { onOpenChange } = props

  const search = useSearchEngine()
  const [value, setValue] = useState('')

  useEffect(() => {
    search.query(value)
  }, [value])

  return (
    <Dialog.Root defaultOpen onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blur-white/70 backdrop-blur-md" />
        <Dialog.Content className="fixed inset-0 flex justify-center pt-20">
          <div className="w-full max-w-[582px]">
            <div className="grid gap-1">
              <Text size={27} color="$neutral-80/80">
                I need help with
              </Text>
              <input
                ref={ref => ref?.focus()}
                className="block w-full font-sans text-[64px] placeholder:text-neutral-80/20"
                placeholder="try crypto"
                value={value}
                onChange={async e => setValue(e.target.value)}
              />
            </div>

            <div className="flex flex-col divide-y divide-dashed divide-neutral-80/20 py-6">
              {value !== '' && search.results.length === 0 && (
                <Text size={15}>No results for “{value}”.</Text>
              )}
              {search.results.map(result => {
                return (
                  <div key={result.title} className="py-2">
                    <Link
                      href={{
                        pathname: result.path,
                        hash: slugify(result.headings[0].text),
                      }}
                      className="flex flex-col rounded-2xl px-3 py-2 hover:bg-customisation-blue/5"
                      onClick={() => onOpenChange(false)}
                    >
                      <Text size={19} weight="semibold">
                        <HighlightMatches
                          text={result.title}
                          searchWords={result.match}
                        />
                      </Text>
                      {result.headings.map((heading, idx) => (
                        <div
                          key={heading.text + idx}
                          className="flex flex-col gap-2"
                        >
                          <Text size={13} weight="semibold">
                            <HighlightMatches
                              text={heading.text}
                              searchWords={heading.match}
                            />
                          </Text>
                          {heading.paragraphs.map(({ text, match }, idx) => {
                            return (
                              <Text size={13} key={text + idx}>
                                <HighlightMatches
                                  text={text}
                                  searchWords={match}
                                />
                              </Text>
                            )
                          })}
                        </div>
                      ))}
                    </Link>
                  </div>
                )
              })}
            </div>
            <Dialog.Close />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
