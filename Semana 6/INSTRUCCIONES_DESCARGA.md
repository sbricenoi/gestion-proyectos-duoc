# 📥 Guía de Descarga de Documentos

## ✨ Nuevas Funcionalidades de Descarga

El sitio web de la Semana 6 ahora incluye **funcionalidad de descarga automática** de documentos en formatos Office, ¡sin necesidad de copiar y pegar manualmente!

## 🎯 ¿Qué puedes descargar?

### 1. **Matriz de Riesgos (Excel .xlsx)** 📊
- **Formato:** Excel nativo (.xlsx) ⭐
- **Contenido:** 15 riesgos completos con todas las columnas
- **Compatible con:** Microsoft Excel, Google Sheets, LibreOffice Calc
- **Uso:** Abrir directamente en Excel, formato 100% compatible
- **Características:** Columnas ajustadas, formato de tabla

### 2. **Informe de Monitoreo de Riesgos (Word .docx)** 📋
- **Formato:** Word nativo (.docx) ⭐
- **Contenido:** Informe completo de monitoreo a Semana 10
- **Compatible con:** Microsoft Word, Google Docs, Pages, LibreOffice Writer
- **Incluye:** Riesgos materializados, nuevos, KRIs, tendencias
- **Características:** Estilos profesionales, colores, negritas, títulos

### 3. **Informe de Performance (Word .docx)** 📈
- **Formato:** Word nativo (.docx) ⭐
- **Contenido:** Análisis completo de EVM con todas las métricas
- **Compatible con:** Microsoft Word, Google Docs, Pages, LibreOffice Writer
- **Incluye:** PV, EV, AC, SPI, CPI, EAC, proyecciones, escenarios
- **Características:** Formato estructurado, colores semánticos, títulos jerárquicos

### 4. **Solicitudes de Cambio (Word .docx)** 🔄
- **Formato:** Word nativo (.docx) ⭐
- **Contenido:** 7 solicitudes documentadas con decisiones
- **Compatible con:** Microsoft Word, Google Docs, Pages, LibreOffice Writer
- **Incluye:** Aprobadas, rechazadas, análisis de impacto
- **Características:** Formato profesional, secciones claras, colores de estado

## 🚀 ¿Cómo Descargar?

### Opción 1: Desde el Sitio Web (Recomendado)

1. **Abre el sitio web:**
   ```
   Semana 6/web/index.html
   ```

2. **Busca la barra flotante** en la esquina inferior derecha de la pantalla:
   ```
   📥 Descargar Documentos
   ```

3. **Elige una opción:**
   - **📦 Descargar Todos** - Descarga los 4 documentos automáticamente
   - **📊 Matriz de Riesgos** - Solo el CSV
   - **📋 Informe Monitoreo** - Solo el RTF de monitoreo
   - **📈 Informe Performance** - Solo el RTF de performance
   - **🔄 Solicitudes Cambio** - Solo el RTF de cambios

4. **Los archivos se descargarán** a tu carpeta de Descargas con nombres estandarizados:
   ```
   GPY2202_Exp2_S6_matriz_riesgos_grupo15.xlsx
   GPY2202_Exp2_S6_informe_monitoreo_riesgos_grupo15.docx
   GPY2202_Exp2_S6_informe_performance_grupo15.docx
   GPY2202_Exp2_S6_solicitudes_cambio_grupo15.docx
   ```

### Opción 2: Desde Páginas Específicas

Cada página tiene su **botón de descarga destacado** para el documento correspondiente:

- **`riesgos.html`** → Descarga Matriz de Riesgos (CSV)
- **`monitoreo.html`** → Descarga Informe de Monitoreo (RTF)
- **`performance.html`** → Descarga Informe de Performance (RTF)
- **`cambios.html`** → Descarga Solicitudes de Cambio (RTF)

## 📝 ¿Cómo Usar los Archivos Descargados?

### Para Excel (.xlsx - Matriz de Riesgos):

1. **Abre el archivo descargado** `GPY2202_Exp2_S6_matriz_riesgos_grupo15.xlsx` en Excel
2. ¡Listo! El archivo ya está en formato Excel nativo con:
   - 15 riesgos completos
   - Columnas ajustadas automáticamente
   - Encabezados en la primera fila
   - Listo para usar o copiar a la plantilla oficial

**Opcional:** Si prefieres usar la plantilla original:
1. Abre la plantilla: `GPY2202_Exp2_S6_plantilla_identificacion_y_evaluacion_cualitativa_de_riesgos.xlsx`
2. Abre el archivo descargado en otra ventana
3. Copia y pega los datos
4. ¡Listo!

### Para Word (.docx - Informes y Solicitudes):

1. **Abre el archivo descargado** directamente en Microsoft Word
2. ¡Listo! El archivo ya está en formato Word nativo (.docx) con:
   - Títulos con estilos profesionales
   - Colores semánticos (verde, amarillo, rojo)
   - Negritas y formato estructurado
   - Secciones claramente definidas
   - Listo para usar o personalizar

**Opcional:** Si prefieres usar las plantillas originales:
1. Abre la plantilla oficial correspondiente (.docx)
2. Abre el archivo descargado en otra ventana
3. Copia las secciones que necesites
4. Ajusta logos o elementos visuales según la plantilla
5. ¡Listo!

**Nota:** Los archivos descargados son documentos **reales** de Office (.xlsx y .docx), no formatos intermedios. Puedes usarlos directamente o como base para las plantillas oficiales.

## 🎨 Ventajas de esta Solución

✅ **Formatos Reales** - Excel (.xlsx) y Word (.docx) nativos, no CSV ni RTF  
✅ **Rápido** - Genera los 4 documentos en segundos  
✅ **Automático** - Sin copiar y pegar manual  
✅ **Profesional** - Formato estructurado con estilos y colores  
✅ **Compatible** - Abre directamente en Microsoft Office  
✅ **Sin Servidor** - Todo se genera en tu navegador  
✅ **Moderno** - Usa librerías JavaScript estándar de la industria

## 🔧 Tecnología Utilizada

- **SheetJS (xlsx.js)** - Generación de archivos Excel (.xlsx) reales
- **docx.js** - Generación de archivos Word (.docx) reales
- **Blob API** - Para crear archivos en el navegador
- **JavaScript ES6+** - Código moderno y eficiente
- **CDN Delivery** - Librerías cargadas desde CDN (no requiere instalación)

## ⚠️ Notas Importantes

1. **Archivos Office Reales:**
   - Los archivos son .xlsx y .docx **nativos**
   - Se abren directamente en Microsoft Office
   - Tienen formato profesional con estilos
   - NO son CSV ni RTF (son formatos completos de Office)

2. **Requiere Conexión a Internet:**
   - Las librerías se cargan desde CDN
   - La primera vez puede tardar 2-3 segundos
   - Una vez cargadas, las descargas son instantáneas

3. **Navegadores Soportados:**
   - ✅ Chrome/Edge (Recomendado)
   - ✅ Firefox
   - ✅ Safari
   - ✅ Opera

4. **Ubicación de Descargas:**
   - Los archivos se guardan en tu carpeta de Descargas predeterminada
   - Algunos navegadores pueden pedir confirmación
   - Puedes cambiar la ubicación en configuración del navegador

## 🎓 Alternativa Manual (Si no funciona)

Si por alguna razón las descargas automáticas no funcionan, puedes usar los archivos Markdown originales:

```
Semana 6/
├── GPY2202_Exp2_S6_matriz_riesgos_grupo15.md
├── GPY2202_Exp2_S6_informe_monitoreo_riesgos_grupo15.md
├── GPY2202_Exp2_S6_informe_performance_grupo15.md
├── GPY2202_Exp2_S6_solicitud_cambio_001-003_grupo15.md
└── DATOS_PARA_EXCEL_matriz_riesgos.csv
```

O sigue las instrucciones originales en: `INSTRUCCIONES_COMPLETAR_PLANTILLAS.md`

## 💡 Tips y Recomendaciones

1. **Descarga "Todos los Documentos"** primero para tener todo de una vez
2. **Abre los archivos** para verificar que se descargaron correctamente
3. **Guarda copias** de los archivos descargados antes de editarlos
4. **Usa las plantillas originales** como base y copia el contenido
5. **Revisa el formato** después de copiar a las plantillas Word/Excel

## 🚀 ¡Manos a la Obra!

1. Abre `Semana 6/web/index.html` en tu navegador
2. Haz clic en **"📦 Descargar Todos"**
3. Espera a que se descarguen los 4 archivos
4. Abre las plantillas originales en `Documentos_descargables/`
5. Copia el contenido de los archivos descargados
6. ¡Listo! Tus documentos están completos

---

**¿Problemas o dudas?**
Revisa la consola del navegador (F12 → Console) para mensajes de debug.

**Creado por:** Sebastian Briceño • Grupo 15  
**DUOC UC** - Gestión de Proyectos - Abril 2026
