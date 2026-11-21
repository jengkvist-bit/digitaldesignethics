// Strukturerad data (schema.org) som hjälper Google och AI-tjänster att förstå sajten.
// Allt här räknas fram från Markdown-filerna, så det håller sig uppdaterat av sig självt.
export const SAJT = 'https://www.digitaldesignethics.com';

export const jonas = {
  '@type': 'Person',
  '@id': `${SAJT}/who-made-this#jonas`,
  name: 'Jonas Engkvist',
  url: `${SAJT}/who-made-this`,
  jobTitle: 'Service designer',
  image: `${SAJT}/bilder/Jonas-Engkvist-OneDayInteract-M.png`,
  sameAs: [
    'https://se.linkedin.com/in/jonas-engkvist',
    'https://medium.com/@jonasengkvist',
    'https://www.onedayinteract.se',
    'https://www.tractory.se/om-oss',
  ],
  worksFor: { '@id': 'https://www.onedayinteract.se/#organisation' },
};

// Plockar ut principerna ur startsidans Markdown: "## #1 Freedom" + stycket "As a user" och "As a designer".
export function principer(markdown: string) {
  const delar = markdown.split(/^## #(\d+)\s+(.+)$/m).slice(1);
  const lista = [];
  for (let i = 0; i < delar.length; i += 3) {
    const [nr, namn, text] = [Number(delar[i]), delar[i + 1].trim(), delar[i + 2]];
    const stycke = (etikett: string) => {
      const m = text.match(new RegExp(`\\*\\*As a ${etikett},?\\*\\*,?\\s*([^\\n]+)`, 'i'));
      return m ? m[1].trim() : '';
    };
    lista.push({ nr, namn, id: namn.toLowerCase().replace(/[^a-z0-9]+/g, '-'), användare: stycke('user'), designer: stycke('designer') });
  }
  return lista;
}

// Frågor och svar: varje "## Rubrik?" följd av text fram till nästa rubrik.
export function fragor(markdown: string) {
  const delar = markdown.split(/^##\s+(.+\?)\s*$/m).slice(1);
  const lista = [];
  for (let i = 0; i < delar.length; i += 2) {
    const svar = delar[i + 1].split(/^#/m)[0]
      .replace(/<[^>]+>/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '')
      .replace(/\s+/g, ' ').trim();
    if (svar) lista.push({ fråga: delar[i].trim(), svar });
  }
  return lista;
}
