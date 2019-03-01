
const localStorageKey = 'globalOptions';

export function saveOptions(options) {
    // Prioritise preferences from AdaptiveWeb plugin, but use HTML localStorage as a fallback
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem(localStorageKey, JSON.stringify(options));
    }
}

export function getOptions() {
    let response = localStorage.getItem(localStorageKey);
    if (response !== undefined) response = JSON.parse(response);
    return response;
}