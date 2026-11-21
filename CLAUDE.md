# Instruktioner för Claude

- Ägaren, Jonas, är UX-designer och kodar inte. Skriv på svenska och förklara enkelt vad du gör och varför. Ta ett steg i taget.
- Jonas äger UX och UI. Föreslå alternativ (med skärmbilder för dator och mobil) i stället för att själv bestämma designändringar.
- Sajten är på engelska: `lang="en"`, engelska titlar och beskrivningar.
- Innehåll ligger i `src/content/sidor/` (Markdown, en fil per sida; `start.md` är startsidan). Design ligger i `src/styles/global.css`.
- Behåll de gamla Squarespace-adresserna exakt: `/`, `/what-is-this`, `/who-made-this`, `/ethics-audit` (utan snedstreck på slutet). `/home` leder vidare till `/`.
- Huvudadressen är `https://www.digitaldesignethics.com` (med www).
- Statistik med GoatCounter (cookiefri). Inga cookies, ingen cookiebanner.
- YouTube-videon bäddas in via youtube-nocookie.com. Ethics audit-verktyget ligger på Vercel (ethics-audit.vercel.app) och bäddas in på /ethics-audit; det är inte en del av det här repot.
- Rör aldrig DNS hos Loopia eller något hos Squarespace. Det gör Jonas själv.
- Kör `npm run build` innan du pushar och kontrollera att alla sidor byggs.
