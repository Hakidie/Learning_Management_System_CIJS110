export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://mindx-mockup-server.vercel.app';
export const API_KEY = import.meta.env.VITE_API_KEY || '';

export const getApiUrl = (endpoint) => {
  return `${API_BASE_URL}/api/resources/${endpoint}?apiKey=${API_KEY}`;
};
