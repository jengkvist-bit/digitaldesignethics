# Instruktioner för Claude

- Ägaren, Jonas, är UX-designer och kodar inte. Skriv på svenska och förklara enkelt vad du gör och varför. Ta ett steg i taget.
- Jonas äger UX och UI. Föreslå alternativ (med skärmbilder för dator och mobil) i stället för att själv bestämma designändringar.
- Sajten är på engelska: `lang="en"`, engelska titlar och beskrivningar.
- Innehåll ligger i `src/content/sidor/` (Markdown, en fil per sida; `start.md` är startsidan). Design ligger i `src/styles/global.css`.
- Behåll de gamla Squarespace-adresserna exakt: `/`, `/what-is-this`, `/who-made-this` (utan snedstreck på slutet). `/home` och `/ethics-audit` leder vidare till `/`.
- Huvudadressen är `https://www.digitaldesignethics.com` (med www).
- Ingen statistik just nu (Jonas beslut nov 2026). Om det läggs till: GoatCounter (cookiefri), som på tractory.se. Inga cookies, ingen cookiebanner.
- YouTube-videon bäddas in via youtube-nocookie.com.
- Sidan /ethics-audit togs bort i nov 2026 eftersom verktyget på Vercel inte fungerade. Den kan läggas tillbaka om verktyget lagas.
- Alla robotar, även AI-träning, får läsa sajten (Jonas beslut nov 2026).
- Rör aldrig DNS hos Loopia eller något hos Squarespace. Det gör Jonas själv.
- Kör `npm run build` innan du pushar och kontrollera att alla sidor byggs.
