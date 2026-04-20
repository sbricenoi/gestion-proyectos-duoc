# 🌐 Resumen del Sitio Web - Semana 6

## ✨ Creado el 20 de Abril de 2026

---

## 🎯 ¿Qué se creó?

Un **sitio web completo y profesional** para la Semana 6 de Gestión de Proyectos que presenta:

- ✅ Matriz de Riesgos (15 riesgos)
- ✅ Informe de Monitoreo
- ✅ Análisis de Performance (EVM)
- ✅ Gestión de Cambios (7 solicitudes)
- ✅ **NUEVO: Descargas automáticas de documentos**

---

## 📦 Contenido del Sitio Web

### 📄 5 Páginas HTML Completas

#### 1. **index.html** - Página Principal
- Resumen ejecutivo del proyecto
- Dashboard con métricas clave (SPI: 1.07, CPI: 0.83)
- Estado general: AMARILLO
- Tarjetas de navegación a todas las secciones
- Gráficos de progreso animados

#### 2. **riesgos.html** - Matriz de Riesgos
- 15 riesgos identificados y evaluados
- Escalas de probabilidad e impacto
- Clasificación por nivel (4 altos, 4 medios, 6 bajos, 1 muy bajo)
- Planes de respuesta detallados
- Distribución por categoría (Técnico 40%, Organizacional 33%, Gestión 20%, Externo 7%)

#### 3. **monitoreo.html** - Informe de Monitoreo
- R01 materializado con timeline detallado
- 2 riesgos nuevos (R16, R17)
- Gráfico de tendencias interactivo
- Indicadores KRIs con umbrales
- Análisis de efectividad de planes
- Consumo de reserva de contingencia
- Proyección de 3 escenarios

#### 4. **performance.html** - Performance (EVM)
- Todas las métricas: PV, EV, AC, SV, SPI, CPI
- Proyecciones: EAC, ETC, VAC, TCPI
- **2 gráficos interactivos** (Chart.js):
  - Curva de Earned Value
  - Presupuesto por categoría
- Estado de 15 entregables con barras de progreso
- 3 escenarios de recuperación
- Métricas de calidad

#### 5. **cambios.html** - Gestión de Cambios
- 7 solicitudes documentadas
- Análisis completo de cada cambio
- **2 gráficos interactivos**:
  - Distribución por estado (pie chart)
  - Impacto en costo (bar chart)
- Proceso de Control de Cambios (CCB)
- Lecciones aprendidas

### 🎨 1 Archivo CSS Profesional

**style.css** (15KB)
- Diseño responsive (móvil, tablet, desktop)
- Gradientes profesionales (#667eea → #764ba2)
- Navegación sticky
- Cards con hover effects
- Tablas interactivas
- Color coding semántico (verde/amarillo/rojo)
- Barras de progreso animadas
- **Barra de descarga flotante**
- Estilos para impresión

### 💻 JavaScript Interactivo

**downloads.js** (12KB)
- `descargarMatrizRiesgos()` - Genera CSV
- `descargarInformeMonitoreo()` - Genera RTF
- `descargarInformePerformance()` - Genera RTF
- `descargarSolicitudesCambio()` - Genera RTF
- `descargarTodosDocumentos()` - Descarga los 4 archivos

**main.js**
- Placeholder para funcionalidades futuras

---

## 📥 Funcionalidad de Descarga (NUEVA)

### ¿Qué hace?

**Genera automáticamente** los documentos en formato Office con solo hacer clic:

1. **📊 Matriz de Riesgos (CSV)**
   - 15 riesgos completos con todas las columnas
   - Compatible con Excel, Google Sheets
   - Formato UTF-8 con BOM
   - Importable directamente

2. **📋 Informe de Monitoreo (RTF)**
   - Informe completo de monitoreo
   - Compatible con Word, Google Docs
   - Formato con colores y negritas
   - Estructura organizada

3. **📈 Informe de Performance (RTF)**
   - Análisis completo de EVM
   - Todas las métricas y proyecciones
   - Compatible con Word, Google Docs
   - Tablas y listas estructuradas

4. **🔄 Solicitudes de Cambio (RTF)**
   - 7 solicitudes documentadas
   - Decisiones y análisis
   - Compatible con Word, Google Docs
   - Formato profesional

### ¿Cómo Funciona?

```javascript
// Tecnologías utilizadas:
- JavaScript Vanilla (sin dependencias)
- Blob API (crear archivos en el navegador)
- CSV Format (datos tabulares)
- RTF Format (documentos formateados)
- Data URLs (descargas sin servidor)
```

### Interfaz de Usuario

**Barra Flotante** en esquina inferior derecha:
- 📥 Icono de descarga
- 5 botones coloridos
- Botón de cierre (X)
- Responsive (se adapta a móvil)
- No interfiere con la lectura

---

## 🎨 Características del Diseño

### Visual
✅ Gradientes profesionales morados  
✅ Tipografía limpia (system fonts)  
✅ Color coding semántico (🟢 🟡 🔴)  
✅ Cards con sombras y hover effects  
✅ Iconos emoji para claridad  

### Interactivo
✅ Navegación sticky entre páginas  
✅ Gráficos interactivos con Chart.js  
✅ Barras de progreso animadas  
✅ Tablas con hover effects  
✅ Botones de descarga flotantes  

### Responsive
✅ Diseño adaptable móvil/tablet/desktop  
✅ Navegación colapsable en móvil  
✅ Grids flexibles  
✅ Imágenes y tablas responsivas  

---

## 📊 Datos del Proyecto Incluidos

### Proyecto: Intranet Corporativa 2.0 - Konecta

**Números Clave:**
- Presupuesto: $100M CLP
- Duración: 22 semanas
- Usuarios: 2,700 en 4 países
- Entregables: 15 totales, 8 completados

**Métricas (Semana 10):**
- Avance: 48% (adelante +3%)
- SPI: 1.07 (eficiente)
- CPI: 0.83 (sobrecosto)
- EAC: $115M proyectado

**Riesgos:**
- Total: 15 identificados
- Altos: 4 (R01, R02, R03, R16)
- Materializados: 1 (R01)
- Nuevos: 2 (R16, R17)

**Cambios:**
- Solicitudes: 7 recibidas
- Aprobadas: 3 (+$7M)
- Rechazadas: 2
- Pendientes: 2

---

## 📁 Estructura de Archivos

```
Semana 6/
├── web/                                    # Sitio web
│   ├── index.html                          # Página principal
│   ├── riesgos.html                        # Matriz de riesgos
│   ├── monitoreo.html                      # Monitoreo
│   ├── performance.html                    # Performance EVM
│   ├── cambios.html                        # Solicitudes cambio
│   ├── css/
│   │   └── style.css                       # Estilos principales
│   ├── js/
│   │   ├── downloads.js                    # ⭐ Funciones de descarga
│   │   └── main.js                         # Utilidades
│   └── README.md                           # Documentación técnica
│
├── Documentos_descargables/                # Plantillas Office originales
│   ├── ...matriz_riesgos.xlsx
│   ├── ...informe_monitoreo.docx
│   ├── ...informe_performance.docx
│   ├── ...solicitud_cambio.docx
│   └── ...presentacion.pptx
│
├── INSTRUCCIONES_DESCARGA.md               # ⭐ Guía de descargas
├── INSTRUCCIONES_COMPLETAR_PLANTILLAS.md   # Guía manual
├── README_SEMANA6.md                       # README general
├── RESUMEN_SITIO_WEB.md                    # Este archivo
└── [Archivos Markdown originales...]
```

---

## 🚀 ¿Cómo Usar?

### Opción 1: Ver el Sitio Web

```bash
# Opción A: Abrir directamente
open "Semana 6/web/index.html"

# Opción B: Desde navegador
# Arrastra index.html al navegador
```

### Opción 2: Descargar Documentos

1. Abre el sitio web
2. Busca la **barra flotante** (esquina inferior derecha)
3. Clic en **"📦 Descargar Todos"**
4. Los 4 archivos se descargarán automáticamente
5. Ábrelos y cópialos a las plantillas originales

### Opción 3: Desplegar en Vercel

```bash
# Desde la raíz del proyecto
bash build.sh
cd ../gestion-proyectos-duoc-deploy
vercel --prod --yes --scope sbricenois-projects
```

Acceso: `https://gestion-proyectos-duoc.vercel.app/semana6/`

---

## 🎯 Ventajas vs. Plantillas Office

| Característica | Plantillas Office | Sitio Web |
|---------------|-------------------|-----------|
| **Tiempo de creación** | 4-6 horas | 2 horas |
| **Interactividad** | ❌ Estático | ✅ Gráficos, hover |
| **Compartir** | 📎 Archivos pesados | 🔗 Link simple |
| **Visualización** | 📄 Por documento | 🌐 Todo integrado |
| **Actualización** | ⚙️ Manual | 🔄 Automático |
| **Accesibilidad** | 💻 Solo con Office | 📱 Cualquier dispositivo |
| **Descargas** | ❌ No | ✅ Automáticas |

---

## 📚 Documentación Adicional

### Para el Usuario:
- 📖 `INSTRUCCIONES_DESCARGA.md` - Guía de descargas
- 📖 `INSTRUCCIONES_COMPLETAR_PLANTILLAS.md` - Guía manual
- 📖 `README_SEMANA6.md` - Información general

### Para el Desarrollador:
- 📖 `web/README.md` - Documentación técnica
- 💻 `js/downloads.js` - Código comentado
- 🎨 `css/style.css` - Estilos documentados

---

## 🎓 Cumplimiento de Requisitos

### ✅ Experiencia 2 - Semana 6

**Identificación y Evaluación de Riesgos:**
- ✅ 15 riesgos identificados
- ✅ Matriz completa con probabilidad e impacto
- ✅ Estrategias de respuesta
- ✅ Planes de acción detallados

**Monitoreo de Riesgos:**
- ✅ Estado actualizado a Semana 10
- ✅ Riesgos materializados documentados
- ✅ Nuevos riesgos identificados
- ✅ Análisis de tendencias
- ✅ Efectividad de planes

**Performance del Trabajo (EVM):**
- ✅ Métricas completas (PV, EV, AC)
- ✅ Índices (SPI, CPI)
- ✅ Proyecciones (EAC, ETC, VAC, TCPI)
- ✅ Gráficos de Earned Value
- ✅ Escenarios de recuperación

**Gestión de Cambios:**
- ✅ 7 solicitudes documentadas
- ✅ Análisis de impacto completo
- ✅ Decisiones fundamentadas
- ✅ Proceso CCB definido

---

## 🏆 Resultado Final

### Lo que tienes ahora:

1. ✅ **Sitio web profesional** (5 páginas HTML)
2. ✅ **Descarga automática** de 4 documentos Office
3. ✅ **Gráficos interactivos** (Chart.js)
4. ✅ **Diseño responsive** (móvil/tablet/desktop)
5. ✅ **Documentación completa** (4 archivos MD)
6. ✅ **Datos reales** del proyecto Konecta
7. ✅ **Deployment ready** (Vercel)

### Tiempo ahorrado:

- ❌ Rellenar plantillas manualmente: **4-6 horas**
- ✅ Usar sitio web + descargas: **30 minutos**
- 💰 **Ahorro: 3.5 - 5.5 horas**

---

## 👤 Créditos

**Creado por:** Sebastian Briceño  
**Grupo:** 15  
**Curso:** GPY2202 - Gestión de Proyectos  
**Institución:** DUOC UC  
**Fecha:** 20 de Abril de 2026  

---

## 🎉 ¡Éxito!

Tienes un sitio web completo, profesional e interactivo con:
- ✨ Visualización impecable de datos
- 📥 Descargas automáticas
- 📊 Gráficos interactivos
- 📱 Diseño responsive
- 🚀 Listo para desplegar

**¡Ahora solo queda presentarlo y obtener una excelente calificación! 🏆**
