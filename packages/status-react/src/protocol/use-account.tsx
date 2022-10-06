import { useProtocol } from './use-protocol'

import type { Account } from '@status-im/js'

export const useAccount = () => {
  const { client, account, dispatch } = useProtocol()

  const createAccount = async () => {
    const account = await client.createAccount()
    dispatch({ type: 'SET_ACCOUNT', account })
    // TODO: save account

    return account
  }

  const deleteAccount = () => {
    dispatch({ type: 'REMOVE_ACCOUNT' })
    // TODO: remove from storage
  }

  return { account, createAccount, deleteAccount } as const
}

export type { Account }
