# Cambios Realizados

Fecha: 2026-04-14

## 1) Nuevo componente `Alert`

Se agregó el componente completo en:

- `src/stories/components/alert/Alert.tsx`
- `src/stories/components/alert/alert.css`
- `src/stories/components/alert/Alert.stories.tsx`
- `src/stories/components/alert/Alert.test.tsx`
- `src/stories/components/alert/index.ts`

### Incluye

- Estructura: `Icon` + `Message` + `Close Button`.
- Tipos de alerta: `neutral`, `informative`, `warning`, `success`, `error` (prop `type`).
- Cierre en modo controlado/no controlado:
  - `open`, `defaultOpen`, `onOpenChange`.
- Estados accesibles:
  - `role="status"` para `neutral/informative/success`.
  - `role="alert"` para `warning/error`.

## 2) Storybook Docs (espacio vertical extra)

Se corrigió el contenedor global de preview en Docs para que no crezca de más:

- `.storybook/preview.ts`

Cambio aplicado: se removió `minHeight: "100vh"` del decorador global.

## 3) Sistema de tokens global

Se actualizó `src/stories/tokens/design-tokens.css` para alinearlo al JSON compartido:

- Se agregaron familias de color completas.
- Se agregaron aliases semánticos (`--ds-color-*`) para:
  - `support`, `border`, `surfaces`, `icons`, `highlight`, `text`.
- Se migró `spacing` a esquema de número base + alias en px:
  - `--spacing-*` (número)
  - `--spacing-*-px` (listo para CSS)
- Se migró typography web a esquema string + resolución de peso:
  - `Regular | Semibold | Bold`
  - aliases `*-value` con pesos numéricos para render.

Además se adecuó:

- `src/stories/components/alert/alert.css` (sin colores hardcodeados)
- `src/stories/components/checkbox/checkbox-group.css` (uso de spacing tokenizado)

## 4) Cobertura de tests por componente

Se ampliaron/crearon tests para tener suites completas:

- `Accordion.test.tsx` (toggle, disabled, controlado)
- `Alert.test.tsx` (roles, close, dismissible false, defaultOpen false, controlado)
- `CheckboxGroup.test.tsx` (toggle, disabled, controlado)
- `RadioGroup.test.tsx` (single select, opción disabled, controlado)
- `InputField.test.tsx` (label/helper/counter, error state, typing, disabled)
- `Text.test.tsx` (default render, variante+tag, click handler)

## 5) Métricas y scripts de calidad

Se agregaron scripts en `package.json`:

- `test:unit`
- `test:coverage`
- `test:storybook`

Se configuraron thresholds en `vitest.unit.config.ts`:

- `statements: 95`
- `lines: 95`
- `functions: 95`
- `branches: 85`

También se agregó setup de matchers para unit tests:

- `vitest.setup.ts` con `@testing-library/jest-dom/vitest`

## 6) Fix de error en Storybook Tests (`[birpc] rpc is closed`)

Se estabilizó el runner de Storybook tests con:

- Upgrade de versiones:
  - `storybook` y addons a `10.3.5`
  - `vitest` y `@vitest/*` a `4.1.4`
- Eliminación del setup deprecado:
  - removido `.storybook/vitest.setup.ts`
  - ajustado `vitest.config.ts` para no usar `setProjectAnnotations`.

## 7) ESLint

Se ajustó:

- `eslint.config.mjs`

Cambios:

- Activadas reglas de Storybook (`flat/recommended`).
- Ignorado `coverage/**` para evitar ruido del reporte.

## 8) Validación ejecutada

Comandos corridos con éxito:

- `npm run lint`
- `npm run test:unit`
- `npm run test:coverage`
- `npm run test:storybook`

Resultados observados:

- Unit tests: 23/23 OK.
- Storybook tests: 37/37 OK.
- Coverage global (unit):
  - Statements: 96.42%
  - Branches: 87.85%
  - Functions: 96.42%
  - Lines: 99.05%
