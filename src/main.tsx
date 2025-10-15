import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(<App />);

// === Inject Aya Chatbot Widget ===
if (typeof window !== "undefined") {
  const script = document.createElement('script');
  script.src = "https://aya-portfolio-chatbot.vercel.app/embed.js"; // ✅ Correct URL
  script.async = true;
  script.defer = true;
  script.onload = () => console.log("💬 Aya Chatbot widget loaded");
  document.body.appendChild(script);
}
