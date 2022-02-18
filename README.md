

```tsx
// Example.tsx

function Example() {
  const { createState, state } = useReuse()

  useEffect(() => {
    const data = axios.get('api.com')
    createState('example', data)
  }, [])

  return (
    <p>{state.example._id}</p>
  )
}

```



```tsx
// App.tsx
import { ReuseProvider } from 'reuse'

// ...
function App() {
  return (
    <ReuseProvider>
      <App />
    </ReuseProvider>
  )
}
// ...
```
