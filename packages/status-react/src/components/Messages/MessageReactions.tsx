import React, { useCallback } from 'react'

import { Emoji } from 'emoji-mart'
import styled from 'styled-components'

import { ReactionButton } from '../Reactions/ReactionButton'

import type { BaseEmoji } from 'emoji-mart'

interface MessageReactionsProps {
  messageReactions: BaseEmoji[]
  setMessageReactions: React.Dispatch<React.SetStateAction<BaseEmoji[]>>
}

export function MessageReactions({
  messageReactions,
  setMessageReactions,
}: MessageReactionsProps) {
  const isMyReactionIncluded = (emoji: BaseEmoji) =>
    messageReactions.includes(emoji) // temporary function while message reactions are not added to waku

  const handleReaction = useCallback(
    (emoji: BaseEmoji) => {
      messageReactions.find(e => e === emoji)
        ? setMessageReactions(prev => prev.filter(e => e != emoji))
        : setMessageReactions(prev => [...prev, emoji])
    },
    [messageReactions, setMessageReactions]
  )

  return (
    <Reactions>
      {messageReactions.map(reaction => (
        <EmojiReaction
          className={`${isMyReactionIncluded(reaction) && 'chosen'}`}
          key={reaction.id}
          onClick={() => handleReaction(reaction)}
        >
          <Emoji emoji={reaction} set={'twitter'} size={16} />
          <p>1</p>
        </EmojiReaction>
      ))}
      <ReactionButton
        messageReactions={messageReactions}
        setMessageReactions={setMessageReactions}
        className="small"
      />
    </Reactions>
  )
}

export const Reactions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`

const EmojiReaction = styled.button`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 2px 10px 10px 10px;
  color: ${({ theme }) => theme.primary};
  font-size: 12px;
  line-height: 16px;
  padding: 2px 8px 2px 2px;
  margin-right: 4px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  & > p {
    margin-left: 4px;
  }

  & > span {
    height: 16px;
  }

  &.chosen {
    background: ${({ theme }) => theme.blueBg};
    border: 1px solid ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.tertiary};
  }
`