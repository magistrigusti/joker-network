import { useState, useEffect } from 'react';
import { useTonConnectUI, THEME } from '@tonconnect/ui-react';

const Settings = () => {
  const tonConnectUI = useTonConnectUI(); // Сохраняем результат в переменную
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(THEME.LIGHT);

  useEffect(() => {
    if (tonConnectUI && tonConnectUI[1]) {  // Проверяем, что второй элемент доступен
      const setOptions = tonConnectUI[1];
      setOptions({
        language: lang,
      });
    }
  }, [tonConnectUI, lang]);

  useEffect(() => {
    if (tonConnectUI && tonConnectUI[1]) {
      const setOptions = tonConnectUI[1];
      setOptions({
        uiPreferences: { theme },
      });
    }
  }, [tonConnectUI, theme]);

  return (
    <div>
      <div>
        <p>Language</p>
        <select value={lang} onChange={e => setLang(e.target.value)}>
          <option value="ru">Rus</option>
          <option value="en">Eng</option>
        </select>
      </div>

      <div>
        <p>Theme</p>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value={THEME.DARK}>DARK</option>
          <option value={THEME.LIGHT}>LIGHT</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
