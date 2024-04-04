import 'index.css'

import { createRoot } from 'react-dom/client'

import Home from '@/pages/home'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<Home />)
