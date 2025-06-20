export function setToLocalStorage<T>(key: string, value: T): boolean {
    try {
      const encodedValue = btoa(JSON.stringify(value));
      localStorage.setItem(key, encodedValue);
      return true;
    } catch (error) {
      console.error('Error setting to localStorage:', error);
      return false;
    }
  }
  
  export function getFromLocalStorage<T>(key: string): T | null {
    try {
      const encodedValue = localStorage.getItem(key);
      if (!encodedValue) return null;
      return JSON.parse(atob(encodedValue)) as T;
    } catch (error) {
      console.error('Error getting from localStorage:', error);
      return null;
    }
  }
  
  export function removeFromLocalStorage(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  }