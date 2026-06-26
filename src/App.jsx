import { SettingsProvider } from './store.jsx';
import TopBar from './components/TopBar.jsx';
import Deck from './components/Deck.jsx';

export default function App() {
  return (
    <SettingsProvider>
      <div className="h-[100svh] w-full flex flex-col" style={{ backgroundColor: 'var(--bg)' }}>
        <TopBar />
        <div className="flex-1 relative overflow-hidden">
          <Deck />
        </div>
      </div>
    </SettingsProvider>
  );
}
