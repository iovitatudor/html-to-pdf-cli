# HTML to PDF CLI

Modern HTML to PDF CLI generator built with Node.js, TypeScript, and Puppeteer.

## Features

- HTML to PDF conversion
- TypeScript architecture
- Modern CLI interface
- Configurable PDF format
- Landscape support
- Custom margins
- Chromium-based rendering

---

## Installation

```bash
npm install
```

---

## Development

Run the CLI in development mode:

```bash
npm run cli -- --help
```

Generate PDF:

```bash
npm run generate example.html output.pdf
```

---

## Build

Compile TypeScript:

```bash
npm run build
```

Run production build:

```bash
npm run start -- generate example.html output.pdf
```

---

## CLI Usage

```bash
htmlpdf generate <input> <output>
```

### Options

| Option | Description |
|---|---|
| `-f, --format` | PDF page format |
| `-l, --landscape` | Enable landscape mode |
| `-m, --margin` | Set page margin |

---

## Example

```bash
npm run generate invoice.html invoice.pdf -- --format A4
```

---

## Tech Stack

- Node.js
- TypeScript
- Puppeteer
- Commander
- Chalk

---

## License

MIT
