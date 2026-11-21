// /llms.txt: en kort sammanfattning av sajten i klartext, gjord för AI-tjänster.
// Räknas fram från startsidans Markdown, så den följer med när principerna ändras.
import { getEntry } from 'astro:content';
import { SAJT, principer } from '../lib/schema';

export async function GET() {
  const start = (await getEntry('sidor', 'start'))!;
  const lista = principer(start.body ?? '');
  const text = `# Digital Design Ethics

> 10 universal principles for ethics in digital design, written as user stories ("As a user…" / "As a designer…") that teams can add to any design or redesign project. Based on the UN Universal Declaration of Human Rights. Created by Jonas Engkvist, One Day Interact (Sweden), first published 2020. Free to use and share.

## Pages

- [10 universal principles](${SAJT}/): the principles in full
- [What is this?](${SAJT}/what-is-this): background, how to use the principles, and why design ethics matters
- [Who made this?](${SAJT}/who-made-this): Jonas Engkvist and One Day Interact

## The 10 principles

${lista.map((p) => `### ${p.nr}. ${p.namn}\n\n- As a user, ${p.användare}\n- As a designer, ${p.designer}\n- Link: ${SAJT}/#${p.id}`).join('\n\n')}

## Contact

Jonas Engkvist, jonas@onedayinteract.se
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
