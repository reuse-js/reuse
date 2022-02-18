import { useMemo } from 'react'
import { ReuseHook } from './hook'

export function useReuse<M>() {
  const { changeState, createState, state } = ReuseHook<M>()

  return useMemo(() => {
    return {
      changeState,
      createState,
      state
    }
  }, [changeState, createState, state])
}
