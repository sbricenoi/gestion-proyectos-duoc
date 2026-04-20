# ✅ FORMATOS OFFICE REALES - Actualización Completa

## 🎉 ¡Ahora con Excel y Word Nativos!

El sitio web ahora genera archivos en **formatos Office reales**:

- ✅ **Excel .xlsx** (no CSV)
- ✅ **Word .docx** (no RTF)

## 📦 Archivos que se Descargan

### 1. Matriz de Riesgos → `GPY2202_Exp2_S6_matriz_riesgos_grupo15.xlsx`
**Formato:** Microsoft Excel nativo (.xlsx)

**Contenido:**
- 15 riesgos completos
- 12 columnas (ID, Nombre, Categoría, Descripción, Causa Raíz, Probabilidad, Impacto, Nivel, Estrategia, Plan, Responsable, Trigger)
- Columnas autoajustadas
- Formato de tabla Excel estándar

**Cómo usarlo:**
- Abrir directamente en Excel ✅
- Importar a Google Sheets ✅
- Copiar a plantilla oficial ✅

### 2. Informe de Monitoreo → `GPY2202_Exp2_S6_informe_monitoreo_riesgos_grupo15.docx`
**Formato:** Microsoft Word nativo (.docx)

**Contenido:**
- Título centrado con formato
- Secciones con estilos de encabezado
- Colores semánticos (🔴 rojo para críticos, 🟢 verde para exitosos)
- Listas con viñetas
- Texto con negritas y formato
- Firma al final

**Cómo usarlo:**
- Abrir directamente en Word ✅
- Editar en Google Docs ✅
- Copiar a plantilla oficial ✅

### 3. Informe de Performance → `GPY2202_Exp2_S6_informe_performance_grupo15.docx`
**Formato:** Microsoft Word nativo (.docx)

**Contenido:**
- Métricas EVM completas (PV, EV, AC, SPI, CPI, EAC, ETC, VAC, TCPI)
- 3 escenarios de recuperación
- Métricas de calidad
- Acciones correctivas
- Formato profesional con colores

**Cómo usarlo:**
- Abrir directamente en Word ✅
- Usar como documento final ✅
- Copiar secciones a plantilla ✅

### 4. Solicitudes de Cambio → `GPY2202_Exp2_S6_solicitudes_cambio_grupo15.docx`
**Formato:** Microsoft Word nativo (.docx)

**Contenido:**
- C001 (Aprobada) con detalles completos
- C004 (Rechazada) con justificación
- Resumen de impactos
- Formato con colores de estado (verde/rojo)

**Cómo usarlo:**
- Abrir directamente en Word ✅
- Documento listo para presentar ✅
- Agregar más solicitudes si necesario ✅

## 🔧 Tecnología Utilizada

### SheetJS (xlsx.js)
- Librería líder de la industria para Excel
- Genera archivos .xlsx 100% compatibles
- Soporta estilos, formatos y fórmulas
- CDN: `https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js`

### docx.js
- Librería oficial para generar documentos Word
- Crea archivos .docx con formato completo
- Soporta estilos, colores, tablas y más
- CDN: `https://unpkg.com/docx@8.5.0/build/index.js`

## ✨ Ventajas vs. Versión Anterior

| Característica | Anterior (CSV/RTF) | Ahora (XLSX/DOCX) |
|----------------|-------------------|-------------------|
| **Formato Excel** | CSV (texto plano) | XLSX (nativo) ✅ |
| **Formato Word** | RTF (básico) | DOCX (nativo) ✅ |
| **Estilos** | ❌ Limitados | ✅ Completos |
| **Colores** | ❌ Básicos | ✅ Semánticos |
| **Compatibilidad** | ⚠️ Requiere importar | ✅ Abre directo |
| **Profesional** | ⚠️ Básico | ✅ Producción |

## 🚀 Cómo Probar

1. **Abre el sitio web:**
   ```bash
   open "Semana 6/web/index.html"
   ```

2. **Espera 2-3 segundos** (primera carga de librerías desde CDN)

3. **Haz clic en cualquier botón de descarga**

4. **Verifica el archivo:**
   - Excel: Doble clic → Se abre en Excel
   - Word: Doble clic → Se abre en Word

5. **¡Listo!** Archivos en formato Office real

## 📝 Código JavaScript (1337 líneas)

El archivo `downloads.js` contiene:

```javascript
// Función 1: Matriz de Riesgos (.xlsx)
function descargarMatrizRiesgos() {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(riesgos);
    ws['!cols'] = [...]; // Anchos de columna
    XLSX.utils.book_append_sheet(wb, ws, "Matriz de Riesgos");
    XLSX.writeFile(wb, "GPY2202_Exp2_S6_matriz_riesgos_grupo15.xlsx");
}

// Función 2-4: Informes Word (.docx)
function descargarInformeMonitoreo() {
    const doc = new Document({
        sections: [{
            children: [
                new Paragraph({ text: "...", heading: HeadingLevel.HEADING_1 }),
                // ... más de 100 párrafos con formato
            ]
        }]
    });
    docx.Packer.toBlob(doc).then(blob => { /* descargar */ });
}
```

## ⚠️ Requisitos

1. **Conexión a Internet** (solo primera vez)
   - Librerías se cargan desde CDN
   - Después funciona offline

2. **Navegador Moderno**
   - Chrome/Edge ✅ (Recomendado)
   - Firefox ✅
   - Safari ✅

3. **JavaScript Habilitado**
   - Las funciones usan JavaScript
   - No funciona con JS deshabilitado

## 🎓 Para el Profesor

Los archivos generados son **documentos Office reales**:

- ✅ Abren directamente en Microsoft Office
- ✅ Formato profesional con estilos
- ✅ No requieren conversión
- ✅ Listos para evaluación

**No son:**
- ❌ CSV que requiere importar
- ❌ RTF con formato básico
- ❌ PDFs que requieren OCR

## 📊 Estadísticas

- **Código JavaScript:** 1,337 líneas
- **Librería SheetJS:** ~500KB (CDN)
- **Librería docx.js:** ~200KB (CDN)
- **Tiempo de carga:** 2-3 segundos (primera vez)
- **Tiempo de descarga:** Instantáneo

---

**Actualizado:** 20 de Abril de 2026  
**Autor:** Sebastian Briceño • Grupo 15  
**Curso:** GPY2202 - Gestión de Proyectos  
**Institución:** DUOC UC

---

## ✅ Checklist de Verificación

Antes de entregar, verifica:

- [ ] Abre el sitio web en Chrome
- [ ] Descarga "Todos los Documentos"
- [ ] Verifica que se descarguen 4 archivos
- [ ] Abre matriz_riesgos.xlsx en Excel → ✅ Funciona
- [ ] Abre informe_monitoreo.docx en Word → ✅ Funciona
- [ ] Abre informe_performance.docx en Word → ✅ Funciona
- [ ] Abre solicitudes_cambio.docx en Word → ✅ Funciona

**Si todo funciona:** ¡Listo para entregar! 🎉
