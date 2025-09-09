/// <reference types="vite/client" />

// הגדרה עבור Google Analytics dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
