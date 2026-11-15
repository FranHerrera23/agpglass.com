# AGP · Prototipo CRUDA

Sitio estático. México es la muestra completa; Brasil y Colombia son placeholders.

Abrir index.html. La visita guiada opcional recorre 11 pasos.

Los textos, las familias del catálogo mexicano, cargos y condiciones requieren validación de AGP. Portal profesional demostrativo, sin autenticación. No incluir documentación confidencial.

Fuentes visuales y corporativas: https://agpglass.com/ y https://agpglass.com/es/abc-system-360/ . Ilustración SUV original conceptual, no Audi ni plano técnico.

## RESPALDO AGP — bilingual Mexico prototype

- Spanish: `/mx/index.html`. English: `/mx/en/index.html`.
- Market selectors: `/index.html` and `/en/index.html`. Country selection is independent of language.
- `RESPALDO` brings together historical editorial concepts and four audience guides.
- `scripts/build-positioning.py` contains paired ES/EN copy and builds the static Mexico pages with no third-party dependencies. Run `python scripts/build-positioning.py` after editorial changes.
- Shared additions: `assets/respaldo.css` and `assets/respaldo.js`. Product filters, the System 360 explorer and same-page language switching work in both languages.
- The professional-area files remain legacy material outside the new public navigation. Brazil and Colombia previews are unchanged.
- This is a noindex prototype, not the official AGP production website. Historical project details, local catalogue and warranty terms, leadership biographies and Mexico-specific contacts require AGP validation. Historic projects do not establish equivalent protection for other products or institutional endorsement.
