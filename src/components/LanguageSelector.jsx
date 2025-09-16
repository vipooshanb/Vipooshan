import { useState, useEffect, useRef } from "react";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const dropdownRef = useRef(null);

  // English, Sinhala, Tamil order
  const languages = [
    { code: "en", name: "EN" },
    { code: "si", name: "සිං" },
    { code: "ta", name: "த" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Load Google Translate script
  useEffect(() => {
    if (!window.google || !window.google.translate) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    }

    const style = document.createElement("style");
    style.textContent = `
      .goog-te-banner-frame,
      .goog-te-menu-frame,
      .goog-te-menu-value,
      .goog-te-gadget,
      .goog-te-combo,
      .skiptranslate {
        display: none !important;
      }
      body { top: 0 !important; }
    `;
    document.head.appendChild(style);

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,si,ta",
            layout: window.google.translate.TranslateElement.InlineLayout.HIDE,
          },
          "google_translate_element"
        );
      }
    };

    return () => delete window.googleTranslateElementInit;
  }, []);

  // Change language without reload
  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);

    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = languageCode;
      select.dispatchEvent(new Event("change"));
    }
  };

  const getCurrentLanguage = () =>
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50" ref={dropdownRef}>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Language Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white bg-opacity-80 backdrop-blur-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        style={{ marginBottom: isOpen ? "0.5rem" : "0" }}
      >
        <span className="mr-2">{getCurrentLanguage().name}</span>
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="flex flex-col items-center justify-center absolute right-0 w-48 rounded-xl shadow-2xl bg-white bg-opacity-80 backdrop-blur-md ring-1 ring-black ring-opacity-5"
          style={{ top: "100%", marginTop: "0.5rem", padding: "1rem 0" }}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`$ {
                currentLanguage === language.code
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-700"
              } group flex items-center justify-center px-6 py-3 text-base w-40 rounded-lg mb-2 hover:bg-gray-100 backdrop-blur-md`}
              style={{ backdropFilter: "blur(8px)" }}
            >
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
