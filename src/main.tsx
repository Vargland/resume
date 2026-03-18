import '@open-void-ui/tokens/css'
import '@open-void-ui/tokens/planets/mercury'
import '@open-void-ui/tokens/planets/venus'
import '@open-void-ui/tokens/planets/earth'
import '@open-void-ui/tokens/planets/moon'
import '@open-void-ui/tokens/planets/mars'
import '@open-void-ui/tokens/planets/jupiter'
import '@open-void-ui/tokens/planets/saturn'
import '@open-void-ui/tokens/planets/europa'
import '@open-void-ui/tokens/planets/uranus'
import '@open-void-ui/tokens/planets/neptune'
import '@open-void-ui/tokens/planets/io'
import '@open-void-ui/tokens/planets/nostromo'
import '@open-void-ui/library/styles'
import './styles/global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
