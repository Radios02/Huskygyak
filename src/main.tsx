import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
import * as Sentry from "@sentry/react";
import AllChamp from './pages/AllChamp.tsx'
import NewChamp from './pages/NewChamp.tsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx'

Sentry.init({
  dsn: "https://b9713bf3db053861fa8054e692010aa9@o4510912048660480.ingest.de.sentry.io/4510912053117008",
  integrations: [
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],
  enableLogs: true,
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
