// Lägger varje princip på startsidan (rubriken "#1 Freedom" och texten under)
// i en egen <section class="princip">, så att designen kan forma dem som block eller kort.
export default function rehypePrinciper() {
  return (tree) => {
    const ny = [];
    let aktuell = null;
    for (const nod of tree.children) {
      const ärPrincip = nod.type === 'element' && nod.tagName === 'h2' &&
        /^#\d+/.test((nod.children?.[0]?.value || '').trim());
      const bryter = nod.type === 'element' && (nod.tagName === 'h2' || nod.tagName === 'hr' || nod.tagName === 'nav');
      if (ärPrincip) {
        // Lägg numret ("#1") i en egen <span class="nummer"> så att det kan formas separat
        const [, nr, rest] = nod.children[0].value.trim().match(/^(#\d+)\s*(.*)$/);
        nod.children = [{ type: 'element', tagName: 'span', properties: { className: ['nummer'] }, children: [{ type: 'text', value: nr }] }, { type: 'text', value: ' ' + rest }];
        // Fast länk till varje princip, t.ex. /#freedom eller /#peace-of-mind
        const id = rest.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
        aktuell = { type: 'element', tagName: 'section', properties: { className: ['princip'], id }, children: [nod] };
        ny.push(aktuell);
      } else if (aktuell && !bryter && !(nod.type === 'raw' && /<nav/.test(nod.value))) {
        aktuell.children.push(nod);
      } else {
        aktuell = null;
        ny.push(nod);
      }
    }
    // Samla alla principer i en gemensam behållare
    const första = ny.findIndex((n) => n.properties?.className?.includes('princip'));
    if (första >= 0) {
      let sista = första;
      while (ny[sista + 1] && (ny[sista + 1].properties?.className?.includes('princip') || (ny[sista + 1].type === 'text' && !ny[sista + 1].value.trim()))) sista++;
      const grupp = { type: 'element', tagName: 'div', properties: { className: ['principer'] }, children: ny.slice(första, sista + 1) };
      ny.splice(första, sista - första + 1, grupp);
    }
    tree.children = ny;
  };
}
