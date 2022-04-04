## Sobre o Reuse
- focado em gerenciar estado
- assim como o famoso Redux, o Reuse possui uma árvore de estado única
- lógica componível
- feito para React
- não distribui o dado, passa essa responsabilidade pro Context API


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
