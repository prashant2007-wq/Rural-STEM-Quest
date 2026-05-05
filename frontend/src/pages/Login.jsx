import React, { useState } from 'react';

const translations = {
  en: {
    title: 'Login',
    label: 'Enter your name',
    button: 'Continue',
  },
  hi: {
    title: 'लॉगिन',
    label: 'अपना नाम दर्ज करें',
    button: 'जारी रखें',
  },
};

const Login = ({ onLogin, language }) => {
  const [name, setName] = useState('');
  const t = translations[language] || translations.en;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) return;
    onLogin({ name: name.trim() });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-10 shadow-2xl"
      >
        <h1 className="text-4xl font-black mb-6 text-slate-900 dark:text-white">{t.title}</h1>
        <label className="block mb-4 text-slate-500 dark:text-slate-300 font-semibold">
          {t.label}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-5 py-4 text-lg text-slate-900 dark:text-slate-100 outline-none focus:border-indigo-500"
            placeholder="Priya"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-3xl bg-indigo-600 text-white py-4 font-black text-lg hover:bg-indigo-700 transition"
        >
          {t.button}
        </button>
      </form>
    </div>
  );
};

export default Login;
