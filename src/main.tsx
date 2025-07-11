import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { hidelinkRedirect } from "./hidelink";

hidelinkRedirect();

createRoot(document.getElementById("root")!).render(<App />);
