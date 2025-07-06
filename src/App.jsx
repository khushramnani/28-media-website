import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
function App() {
  const children = useRoutes(routes);

  return (
    <main className="w-full min-h-screen">
      {children}
    </main>
  )
}

export default App
