// apps/web/app/composables/usePdfExport.ts
type Currency = 'MXN' | 'USD'

type PricingSheetData = {
  locale: string
  currency: Currency
  otherCurrency: Currency
  exchangeRate: number | null
  exchangeRateLabel: string

  projectName?: string
  batchSize: number
  wastePercent: number
  overheadPercent: number
  setupHours: number
  setupHourlyRate: number
  targetMarginPercent: number
  wholesaleDiscountPercent: number

  materials: Array<{ name: string; quantity: number; unitCost: number; lineTotal: number }>
  labor: Array<{ name: string; hours: number; hourlyRate: number; lineTotal: number }>

  materialsSubtotal: number
  laborSubtotal: number
  setupSubtotal: number

  // results from your shared calculator
  unitCost: number
  suggestedRetail: number
  suggestedWholesale: number
  profitPerUnitAtRetail: number
  marginPercentAtRetail: number

  // converted displays (optional)
  unitCostOther?: number | null
  retailOther?: number | null
  wholesaleOther?: number | null
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export function usePdfExport() {
  function buildHtml(data: PricingSheetData) {
    const title = data.locale === 'es' ? 'Hoja de precios' : 'Pricing sheet'
    const subtitle =
      data.locale === 'es'
        ? 'Papel hecho a mano y producción en tiraje pequeño'
        : 'Handmade paper & small-batch production'

    const labels = data.locale === 'es'
      ? {
          project: 'Proyecto',
          date: 'Fecha',
          currency: 'Moneda',
          batch: 'Tamaño del lote',
          waste: 'Merma',
          overhead: 'Gastos indirectos',
          setup: 'Preparación',
          setupHours: 'Horas',
          setupRate: 'Tarifa',
          targetMargin: 'Margen objetivo',
          wholesaleDisc: 'Descuento mayoreo',
          rate: 'Tipo de cambio',
          materials: 'Materiales',
          labor: 'Mano de obra',
          name: 'Nombre',
          qty: 'Cant.',
          unitCost: 'Costo unit.',
          hours: 'Horas',
          rateCol: 'Tarifa',
          lineTotal: 'Total',
          subtotal: 'Subtotal',
          results: 'Resultados',
          trueUnit: 'Costo real por unidad',
          retail: 'Precio retail sugerido',
          wholesale: 'Precio mayoreo sugerido',
          profit: 'Ganancia por unidad (retail)',
          margin: 'Margen (retail)',
          notes: 'Notas'
        }
      : {
          project: 'Project',
          date: 'Date',
          currency: 'Currency',
          batch: 'Batch size',
          waste: 'Waste',
          overhead: 'Overhead',
          setup: 'Setup',
          setupHours: 'Hours',
          setupRate: 'Rate',
          targetMargin: 'Target margin',
          wholesaleDisc: 'Wholesale discount',
          rate: 'Exchange rate',
          materials: 'Materials',
          labor: 'Labor',
          name: 'Name',
          qty: 'Qty',
          unitCost: 'Unit cost',
          hours: 'Hours',
          rateCol: 'Rate',
          lineTotal: 'Line total',
          subtotal: 'Subtotal',
          results: 'Results',
          trueUnit: 'True unit cost',
          retail: 'Suggested retail',
          wholesale: 'Suggested wholesale',
          profit: 'Profit per unit (retail)',
          margin: 'Margin (retail)',
          notes: 'Notes'
        }

    const fmt = (n: number) => `${n.toFixed(2)} ${data.currency}`
    const fmtOther = (n: number | null | undefined) =>
      typeof n === 'number' ? `${n.toFixed(2)} ${data.otherCurrency}` : '—'

    const today = new Date().toLocaleDateString(data.locale === 'es' ? 'es-MX' : 'en-US')

    const materialsRows = data.materials
      .map(
        (m) => `
        <tr>
          <td>${escapeHtml(m.name || '')}</td>
          <td class="num">${m.quantity.toFixed(2)}</td>
          <td class="num">${m.unitCost.toFixed(2)}</td>
          <td class="num">${m.lineTotal.toFixed(2)}</td>
        </tr>
      `
      )
      .join('')

    const laborRows = data.labor
      .map(
        (l) => `
        <tr>
          <td>${escapeHtml(l.name || '')}</td>
          <td class="num">${l.hours.toFixed(2)}</td>
          <td class="num">${l.hourlyRate.toFixed(2)}</td>
          <td class="num">${l.lineTotal.toFixed(2)}</td>
        </tr>
      `
      )
      .join('')

    const rateLine =
      data.exchangeRate
        ? `${data.exchangeRateLabel}: ${data.exchangeRate.toFixed(4)}`
        : `${data.exchangeRateLabel}: —`

    return `<!doctype html>
<html lang="${data.locale}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>

  <style>
    @page { size: letter; margin: 14mm; }
    /* If you prefer A4, change to: size: A4; */

    :root {
      --text: #111;
      --muted: rgba(0,0,0,0.65);
      --border: rgba(0,0,0,0.12);
      --card: rgba(0,0,0,0.03);
    }

    body {
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
      color: var(--text);
      margin: 0;
    }

    .wrap { max-width: 860px; margin: 0 auto; }

    .header {
      display: flex;
      justify-content: space-between;
      gap: 14px;
      align-items: flex-start;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border);
    }

    .h1 { font-size: 20px; font-weight: 900; letter-spacing: -0.02em; margin: 0; }
    .sub { margin: 6px 0 0; color: var(--muted); font-size: 12px; }

    .meta {
      font-size: 12px;
      color: var(--muted);
      text-align: right;
      line-height: 1.5;
      white-space: nowrap;
    }

    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .card {
      border: 1px solid var(--border);
      background: var(--card);
      border-radius: 10px;
      padding: 10px;
    }

    .k { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
    .v { font-size: 13px; font-weight: 700; margin-top: 4px; }

    h2 {
      font-size: 13px;
      margin: 16px 0 8px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
    }

    thead th {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      text-align: left;
      background: rgba(0,0,0,0.03);
      padding: 10px;
      border-bottom: 1px solid var(--border);
    }

    tbody td {
      padding: 10px;
      border-bottom: 1px solid var(--border);
      font-size: 12px;
      vertical-align: top;
    }

    tbody tr:last-child td { border-bottom: none; }

    .num { text-align: right; font-variant-numeric: tabular-nums; }

    .footrow {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      font-size: 12px;
      color: var(--muted);
      margin-top: 8px;
    }

    .results {
      margin-top: 14px;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 12px;
    }

    .resgrid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .resitem { border: 1px solid var(--border); border-radius: 10px; padding: 10px; background: rgba(0,0,0,0.02); }
    .reslabel { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
    .resvalue { font-size: 16px; font-weight: 900; margin-top: 6px; font-variant-numeric: tabular-nums; }
    .resother { font-size: 12px; color: var(--muted); margin-top: 4px; font-variant-numeric: tabular-nums; }

    .notes {
      margin-top: 12px;
      font-size: 12px;
      color: var(--muted);
      border-top: 1px dashed var(--border);
      padding-top: 10px;
    }

    /* print safety */
    @media print {
      .noprint { display: none !important; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>

<body>
  <div class="wrap">
    <div class="header">
      <div>
        <h1 class="h1">Amatl — ${escapeHtml(title)}</h1>
        <p class="sub">${escapeHtml(subtitle)}</p>
      </div>

      <div class="meta">
        <div><strong>${escapeHtml(labels.date)}:</strong> ${escapeHtml(today)}</div>
        <div><strong>${escapeHtml(labels.currency)}:</strong> ${escapeHtml(data.currency)}</div>
        <div><strong>${escapeHtml(labels.rate)}:</strong> ${escapeHtml(rateLine)}</div>
        ${data.projectName ? `<div><strong>${escapeHtml(labels.project)}:</strong> ${escapeHtml(data.projectName)}</div>` : ''}
      </div>
    </div>

    <div class="grid2">
      <div class="card">
        <div class="k">${escapeHtml(labels.batch)}</div>
        <div class="v">${data.batchSize}</div>
      </div>

      <div class="card">
        <div class="k">${escapeHtml(labels.waste)} / ${escapeHtml(labels.overhead)}</div>
        <div class="v">${data.wastePercent}% / ${data.overheadPercent}%</div>
      </div>

      <div class="card">
        <div class="k">${escapeHtml(labels.setup)}</div>
        <div class="v">${Number(data.setupHours).toFixed(2)} ${escapeHtml(labels.setupHours)} × ${Number(data.setupHourlyRate).toFixed(2)} ${escapeHtml(data.currency)}</div>

      </div>

      <div class="card">
        <div class="k">${escapeHtml(labels.targetMargin)} / ${escapeHtml(labels.wholesaleDisc)}</div>
        <div class="v">${data.targetMarginPercent}% / ${data.wholesaleDiscountPercent}%</div>
      </div>
    </div>

    <h2>${escapeHtml(labels.materials)}</h2>
    <table>
      <thead>
        <tr>
          <th>${escapeHtml(labels.name)}</th>
          <th class="num">${escapeHtml(labels.qty)}</th>
          <th class="num">${escapeHtml(labels.unitCost)}</th>
          <th class="num">${escapeHtml(labels.lineTotal)} (${escapeHtml(data.currency)})</th>
        </tr>
      </thead>
      <tbody>
        ${materialsRows || `<tr><td colspan="4">${data.locale === 'es' ? 'Sin materiales' : 'No materials'}</td></tr>`}
      </tbody>
    </table>
    <div class="footrow">
      <div></div>
      <div><strong>${escapeHtml(labels.subtotal)}:</strong> ${data.materialsSubtotal.toFixed(2)} ${escapeHtml(data.currency)}</div>
    </div>

    <h2>${escapeHtml(labels.labor)}</h2>
    <table>
      <thead>
        <tr>
          <th>${escapeHtml(labels.name)}</th>
          <th class="num">${escapeHtml(labels.hours)}</th>
          <th class="num">${escapeHtml(labels.rateCol)}</th>
          <th class="num">${escapeHtml(labels.lineTotal)} (${escapeHtml(data.currency)})</th>
        </tr>
      </thead>
      <tbody>
        ${laborRows || `<tr><td colspan="4">${data.locale === 'es' ? 'Sin mano de obra' : 'No labor'}</td></tr>`}
      </tbody>
    </table>
    <div class="footrow">
      <div><strong>${escapeHtml(labels.setup)}:</strong> ${data.setupSubtotal.toFixed(2)} ${escapeHtml(data.currency)}</div>
      <div><strong>${escapeHtml(labels.subtotal)}:</strong> ${data.laborSubtotal.toFixed(2)} ${escapeHtml(data.currency)}</div>
    </div>

    <h2>${escapeHtml(labels.results)}</h2>
    <div class="results">
      <div class="resgrid">
        <div class="resitem">
          <div class="reslabel">${escapeHtml(labels.trueUnit)}</div>
          <div class="resvalue">${fmt(data.unitCost)}</div>
          <div class="resother">${fmtOther(data.unitCostOther ?? null)}</div>
        </div>

        <div class="resitem">
          <div class="reslabel">${escapeHtml(labels.retail)}</div>
          <div class="resvalue">${fmt(data.suggestedRetail)}</div>
          <div class="resother">${fmtOther(data.retailOther ?? null)}</div>
        </div>

        <div class="resitem">
          <div class="reslabel">${escapeHtml(labels.wholesale)}</div>
          <div class="resvalue">${fmt(data.suggestedWholesale)}</div>
          <div class="resother">${fmtOther(data.wholesaleOther ?? null)}</div>
        </div>

        <div class="resitem">
          <div class="reslabel">${escapeHtml(labels.profit)}</div>
          <div class="resvalue">${fmt(data.profitPerUnitAtRetail)}</div>
          <div class="resother">${escapeHtml(labels.margin)}: ${data.marginPercentAtRetail.toFixed(2)}%</div>
        </div>
      </div>

      <div class="notes">
        <strong>${escapeHtml(labels.notes)}:</strong>
        ${data.locale === 'es'
          ? 'Este documento es una guía. Ajusta según tu mercado (San Miguel de Allende), comisiones de tienda/galería y valor percibido.'
          : 'This document is a guide. Adjust for your market (San Miguel de Allende), shop/gallery commissions, and perceived value.'}
      </div>
    </div>

    <div class="noprint" style="margin-top:12px; font-size:12px; color: rgba(0,0,0,0.55);">
      ${data.locale === 'es'
        ? 'Consejo: En la ventana de impresión, elige “Guardar como PDF”.'
        : 'Tip: In the print dialog, choose “Save as PDF”.'}
    </div>
  </div>

  <script>
    // Auto-open print dialog once layout is ready
    window.addEventListener('load', () => {
      setTimeout(() => window.print(), 250);
    });
  </script>
</body>
</html>`
  }

  function openPrintWindow(html: string) {
    // Create a real URL the browser can render reliably
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    // Must be called synchronously from click to avoid popup blockers
    const w = window.open(url, '_blank', 'noopener,noreferrer')

    if (!w) {
      // popup blocked — cleanup and signal failure
      URL.revokeObjectURL(url)
      return false
    }

    // cleanup the blob URL later
    // (give the new tab time to load it)
    setTimeout(() => URL.revokeObjectURL(url), 60_000)

    return true
  }

  function exportPricingSheet(data: PricingSheetData) {
    if (!import.meta.client) return true
    const html = buildHtml(data)
    return openPrintWindow(html)
  }

  return { exportPricingSheet }



}
