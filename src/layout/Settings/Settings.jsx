import { useState, useEffect } from 'react';
import { useTonConnectUI, THEME } from '@tonconnect/ui-react';
import style from './Settings.module.css';

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
    <div className={style.settings_wrapper}>
      <h5 className={style.title}>Settings</h5>
      <div>
        <p className={style.select_title}>Language</p>
        <select className={style.select} value={lang} onChange={e => setLang(e.target.value)}>
          <option value="ru">RUS</option>
          <option value="en">ENG</option>
        </select>
      </div>

      <div>
        <p className={style.select_title}>Theme Wallet</p>
        <select className={style.select} value={theme} onChange={e => setTheme(e.target.value)}>
          <option value={THEME.DARK}>DARK</option>
          <option value={THEME.LIGHT}>LIGHT</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
