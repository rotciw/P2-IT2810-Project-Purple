# IT2810 project 2

## Krav til funksjonalitet

### Innhold
Prosjektet har tilsammen 12 SVG-filer (for bildene), 12 mp3-filer (for lyden) og 3 JSON-filer (for diktene). Hver JSON-fil inneholder fire dikt.

Bildene er hentet fra https://undraw.co/ som lager open-source SVG-filer.
MP3-filene er hentet fra: https://freesound.org

### Oppsett
Siden har en header med navn på utstillingen. Videre er nettsiden delt i to. På venstresiden velger man mellom tre kategorier, og alternativer for ulike kombinasjoner.
På høyresiden vises kombinasjonen av bilde, tekst og lyd. 

Det er også implementert responsiv design, ved at høyresiden wrappes under venstresiden når bredden på siden blir tilstrekkelig liten. (mer om dette under)

### Lagring
Filene er lagret lokalt i sine respektive mapper under `/public/assets/` i prosjektets filstruktur.

## Krav til teknologi

### React

Vi bygget alle komponentene fra bunn av i prosjektet vårt. Vi benyttet oss av både klasse komponenter og funksjonelle komponenter. 

Dette er komponentstrukturen vi bruker:

![Komponent Struktur](componentStructure.png)



### Ajax
SVG-filene og JSON-filene lastes inn med AJAX, der vi bruker `fetch()`.

Filene lastes kun inn ved behov, og vi bruker sessionStorage for å unngå at samme fil lastes inn flere ganger (mer om det under).

Lyd håndteres med HTML5 tag for audio.

### HTML Web Storage
Vi har benyttet HTML Web Storage til ulike formål. Dersom et bilde, tekst eller lyd blir lastet inn på siden blir det lagret i sessionStorage. Hvis brukeren trykker tilbake til dette mediet senere i samme sesjon, vil det hentes fra sessionStorage fremfor å lastes inn på nytt. På denne måten unngår vi at samme data sendes fra serveren flere ganger. Denne funksjonaliteten er implementert ved at vi sjekker om et gitt medie-element er i sessionStorage før det lastes inn. Hvis det er tilfellet hentes det fra sessionStorage, og hvis ikke lastes det inn som tidligere beskrevet. Dersom brukeren lukker fanen, vil lagret data forsvinne.

I prosjektet har vi også tatt i bruk HTML localStorage for å lagre brukerens valg hvis fanen eller nettleseren lukkes. Hver gang en bruker velger en kombinasjon av mediekategorier lagres disse til localStorage. Hvis en bruker åpner en ny fane eller nettleservindu hentes disse valgene fra localStorage slik at den samme utstillingen vises. På denne måten lagres valgene til brukeren på tvers av ulike sesjoner. Ved bruk av localStorage lagres data uten utløpsdato.

### Responsive web design
Utstillingen har et responsivt design som tar hensyn til ulike skjermstørrelser og utforminger.

Siden er som nevnt ovenfor delt i to, der venstre siden består av knapper, mens høyre er selve utstillingen. Ved større skjermer så vises disse to seksjonene ved siden av hverandre.

Når skjermen blir tilstrekkelig liten, som feks. på en mobil, vil høyre seksjon wrappes under venstre seksjon. På denne måten kan brukeren velge kategorier og alternativer for å se utstillingen.

Som følge av dette får vi en flytende og fleksibel layout.

Høyreseksjonen består av tre elementer: bilde, tekst, og lyd. Disse elementene ligger vertikalt over hverandre, og wrappes ikke. Elementene scaler også godt innad i rammen, eneste unntaket er lydkontrollene i mobilformat. Da er kontrollen for å spole frem og tilbake for liten, men gruppen konkluderte med at det uansett ikke er mange som har behov for å spole i så korte lydspor. 

I prosjektet blir Viewport og media-queries brukt. Viewport blir automatisk definert i React index filen. Media-query blir brukt ved to tilfeller:
- Ved å skalere knapper for de ulike enhetene.
- Selve utstillinge. Når seksjonene på siden wrappes, vil høyreseksjon bli større, for å benytte den nye plassen som elementet får ved wrap.

SVG-bildene som er implementert skalerer også fint avhengig av skjermbredde.

### Testing

Vi satt opp testing i Jest. For å få Jest til å fungere måtte vi sette opp devDependencies. Vi satt opp en snapshot-test på Button-komponentene våre. 
Her måtte vi ignorere css filen ved å lage en tom mockup å referere til for alle css filer. 
Dette var det eneste vi testet i Jest da testen ikke skulle være for omfattende og vi derfor ikke så noe poeng i å lage mockups eller shallowrender da dette prosjektet stort sett handlet om oppsett.

Testing av det responsive designet og sidens funksjonalitet ble utført på laptop (Windows og Mac), mobil (iOS og Android) og nettbrett (iPad). Vi har testet med følgende nettlesere for laptop: Google Chrome (76.0.3809.132), Safari (12.1.1) og Mozilla FireFox (68.0.2), og følgende nettlesere for mobil og nettbrett: Google Chrome (76.0.3809.123) og Safari (12.1.1). Under testen lastet vi inn nettsiden og systematisk testet ut all funksjonalitet. Resultatet av testen viser at alle side-elementene vises korrekt, og at interaksjonen oppfører seg som forventet med de ulike nettleserne/enhetene. I tillegg har vi benyttet Chrome utviklingsverktløy for å dynamisk teste siden med ulike skjermbredder.


