import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
import * as Sentry from "@sentry/react";
import AllChamp from './pages/AllChamp.tsx'
import NewChamp from './pages/NewChamp.tsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx'

Sentry.init({
  dsn: "https://87b233aa5fec8419d086fb82850694be@o4510912048660480.ingest.de.sentry.io/4510968903434320",
  sendDefaultPii: true
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllChamp/>}/>
        <Route path='/New' element={<NewChamp/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
