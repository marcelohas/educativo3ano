import type {Preferences} from '../domain/types';
export function applyPreferences(p:Preferences){document.body.classList.toggle('calm',p.preset==='calm');document.body.classList.toggle('high-contrast',p.highContrast);document.body.classList.toggle('large-text',p.largeText);document.body.classList.toggle('no-decoration',!p.decorations)}
