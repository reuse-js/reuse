import { useContext } from 'react'
import { ReuseContext, ReuseContextProps } from './provider'

export const ReuseHook = <T extends Record<any, any>>() => {
  const ctx = useContext<ReuseContextProps<T>>(ReuseContext)
  return ctx
}
