// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { lazy } from 'react';

const About = lazy(() => import('shop/Module'));

export function App() {
  return (
    <div>
      <About />
    </div>
  );
}

export default App;
