import { showError } from './showError';
export * from './db';
export * from './data';
export * from './store';

if (!window.indexedDB) {
  showError("Your browser doesn't support indexedDB.");
}
