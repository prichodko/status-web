import { findAll } from 'highlight-words-core'

type Props = {
  text: string
  searchWords: string[]
}

export const HighlightMatches = (props: Props) => {
  const { text, searchWords } = props

  const chunks = findAll({
    textToHighlight: text,
    searchWords,
  })

  return (
    <>
      {chunks.map((chunk, idx) => {
        const { start, end, highlight } = chunk
        const value = text.substring(start, end)

        if (!highlight) {
          return value
        }

        return (
          <mark
            key={idx}
            className="rounded-md bg-customisation-blue-50/10 px-1"
          >
            {value}
          </mark>
        )
      })}
    </>
  )
}
