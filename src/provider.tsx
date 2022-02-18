/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useCallback
} from 'react'

type ReuseContextProps<T> = {
  state: T
  changeState: <M extends Record<any, any>>(key: keyof T, payload: M) => void
  createState: (name: string, payload: any) => void
}

type ReuseProviderProps = {
  children: ReactNode
}

const ReuseContext = createContext<any>(null)

export const ReuseProvider = <T extends Record<keyof T, any>>({
  children = null
}: ReuseProviderProps) => {
  const [state, setState] = useState({} as T)

  function changeState<M extends Record<any, any>>(key: keyof T, payload: M) {
    type PayloadType = typeof payload
    setState((prev) => ({
      ...prev,
      [key]: payload as PayloadType
    }))
  }

  const createState = useCallback((name: string, payload: any) => {
    setState((prev) => ({
      ...prev,
      [name]: payload
    }))
  }, [])

  return (
    <ReuseContext.Provider value={{ state, changeState, createState }}>
      {children}
    </ReuseContext.Provider>
  )
}

export const useReuse = <T extends Record<any, any>>() => {
  const ctx = useContext<ReuseContextProps<T>>(ReuseContext)
  return ctx
}
