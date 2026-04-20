# Semana 6 - Sitio Web: Gestión de Riesgos y Performance

## 📋 Descripción

Sitio web profesional que presenta la Experiencia 2 de Gestión de Proyectos (Semana 6): análisis completo de gestión de riesgos, monitoreo, Earned Value Management (EVM) y control de cambios del proyecto **Intranet Corporativa 2.0 - Konecta**.

## 🎯 Contenido

### Páginas del Sitio

1. **`index.html`** - Página Principal
   - Resumen ejecutivo del proyecto
   - Métricas clave (SPI: 1.07, CPI: 0.83, EAC: $115M)
   - Estado general: AMARILLO
   - Enlaces a todas las secciones

2. **`riesgos.html`** - Matriz de Riesgos
   - 15 riesgos identificados y evaluados
   - Escalas de probabilidad e impacto
   - 4 riesgos altos activos
   - Planes de respuesta detallados
   - Distribución por categoría

3. **`monitoreo.html`** - Informe de Monitoreo
   - 1 riesgo materializado (R01)
   - 2 riesgos nuevos identificados
   - Análisis de tendencias
   - Indicadores Clave de Riesgos (KRIs)
   - Efectividad de planes
   - Consumo de reserva de contingencia

4. **`performance.html`** - Performance (EVM)
   - Métricas completas de Earned Value Management
   - Gráficos interactivos con Chart.js
   - Proyecciones al finalizar (EAC, ETC, VAC, TCPI)
   - Estado de entregables (8/15 completados)
   - Presupuesto por categoría
   - 3 escenarios de recuperación

5. **`cambios.html`** - Gestión de Cambios
   - 7 solicitudes de cambio recibidas
   - 3 aprobadas, 2 rechazadas, 2 pendientes
   - Análisis detallado de impacto
   - Proceso de Control de Cambios (CCB)
   - Gráficos de distribución

## 🎨 Diseño y Tecnologías

### Stack Tecnológico
- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive y moderno
- **JavaScript** - Interactividad y animaciones
- **Chart.js** - Gráficos interactivos (EVM, tendencias, distribuciones)

### Características del Diseño
- ✅ Diseño **responsive** (móvil, tablet, desktop)
- ✅ **Navegación sticky** entre páginas
- ✅ Colores profesionales con gradientes
- ✅ Tablas y cards con hover effects
- ✅ Barras de progreso animadas
- ✅ Badges de estado con colores semánticos
- ✅ Gráficos interactivos con Chart.js
- ✅ Tipografía limpia y legible

### Paleta de Colores
- **Primary**: #667eea (morado)
- **Secondary**: #764ba2 (morado oscuro)
- **Success**: #10b981 (verde)
- **Warning**: #f59e0b (amarillo)
- **Danger**: #ef4444 (rojo)

## 📊 Datos del Proyecto

### Proyecto: Intranet Corporativa 2.0 - Konecta

**Contexto:**
- **Presupuesto:** $100M CLP
- **Duración:** 22 semanas (5 meses)
- **Usuarios:** 2,700 en 4 países
- **Estado Actual:** Semana 10 (45% del tiempo)

**Métricas Clave (Semana 10):**
- **Avance Real:** 48% (adelante +3%)
- **SPI:** 1.07 (eficiente +7%)
- **CPI:** 0.83 (sobrecosto -17%)
- **EAC Proyectado:** $115M (sobrecosto +15%)
- **Riesgos Altos:** 4 activos
- **Entregables:** 8/15 completados

**Riesgos Críticos:**
- R01: Complejidad Integraciones Legacy (MATERIALIZADO)
- R02: Resistencia al Cambio en Sucursales
- R03: Requisitos Cambiantes (ESCALADO)
- R16: Retraso APIs Sistema de Nómina (NUEVO)

**Cambios de Alcance:**
- 7 solicitudes recibidas
- 3 aprobadas (+$7M, +5 semanas)
- 2 rechazadas (diferidas a Fase 2)
- 2 pendientes de decisión

## 📁 Estructura de Archivos

```
Semana 6/web/
├── index.html           # Página principal
├── riesgos.html         # Matriz de riesgos
├── monitoreo.html       # Monitoreo de riesgos
├── performance.html     # Performance (EVM)
├── cambios.html         # Gestión de cambios
├── css/
│   └── style.css        # Estilos principales
├── js/
│   └── main.js          # JavaScript (placeholder)
└── README.md            # Este archivo
```

## 🚀 Despliegue

El sitio está configurado para desplegarse automáticamente en **Vercel**:

1. El script `build.sh` copia todos los archivos a `public/semana6/`
2. Vercel sirve el contenido desde el directorio `public/`
3. Acceso en producción: `https://gestion-proyectos-duoc.vercel.app/semana6/`

### Build Local

```bash
# Desde la raíz del proyecto
bash build.sh

# El sitio estará disponible en public/semana6/
```

## 📚 Relación con Documentos Markdown

Este sitio web es una **versión visual e interactiva** de los documentos Markdown generados:

- `GPY2202_Exp2_S6_matriz_riesgos_grupo15.md` → `riesgos.html`
- `GPY2202_Exp2_S6_informe_monitoreo_riesgos_grupo15.md` → `monitoreo.html`
- `GPY2202_Exp2_S6_informe_performance_grupo15.md` → `performance.html`
- `GPY2202_Exp2_S6_solicitud_cambio_001-003_grupo15.md` → `cambios.html`

## 📥 Funcionalidades de Descarga

### ¡NUEVO! Descarga Automática de Documentos

El sitio web ahora incluye **botones de descarga** que generan automáticamente los documentos en formato Office:

- **📊 Matriz de Riesgos** - Descarga CSV compatible con Excel
- **📋 Informe de Monitoreo** - Descarga RTF compatible con Word
- **📈 Informe de Performance** - Descarga RTF compatible con Word
- **🔄 Solicitudes de Cambio** - Descarga RTF compatible con Word
- **📦 Descargar Todos** - Obtén los 4 documentos de una vez

### ¿Cómo Funciona?

1. **Barra Flotante**: En la esquina inferior derecha de cada página
2. **JavaScript Puro**: Sin dependencias externas, funciona offline
3. **Formatos Compatibles**: CSV para Excel, RTF para Word
4. **Nombres Estandarizados**: `GPY2202_Exp2_S6_[documento]_grupo15.[ext]`

### Archivos Generados:

```
GPY2202_Exp2_S6_matriz_riesgos_grupo15.csv
GPY2202_Exp2_S6_informe_monitoreo_riesgos_grupo15.rtf
GPY2202_Exp2_S6_informe_performance_grupo15.rtf
GPY2202_Exp2_S6_solicitudes_cambio_grupo15.rtf
```

### Ventajas:

✅ **Rápido** - Genera documentos en segundos  
✅ **Automático** - Sin copiar y pegar manual  
✅ **Estructurado** - Contenido organizado y formateado  
✅ **Compatible** - Importable directo a plantillas Office  
✅ **Sin Servidor** - Todo se ejecuta en el navegador  

📖 **Guía completa:** Ver `INSTRUCCIONES_DESCARGA.md` en la carpeta de Semana 6

## 🎓 Evaluación

Este sitio web cubre todos los requisitos de la **Experiencia 2 - Semana 6**:

✅ **Identificación y Evaluación de Riesgos**
- 15 riesgos documentados con probabilidad e impacto
- Escalas definidas y matriz completa
- Estrategias de respuesta para cada riesgo

✅ **Monitoreo de Riesgos**
- Estado actualizado a Semana 10
- Riesgos materializados, nuevos y escalados
- Indicadores KRIs y tendencias
- Efectividad de planes de respuesta

✅ **Análisis de Performance (EVM)**
- Métricas completas: PV, EV, AC, SPI, CPI, EAC, ETC, VAC, TCPI
- Gráficos de Earned Value
- Proyecciones y escenarios de recuperación

✅ **Gestión de Cambios**
- 7 solicitudes documentadas con análisis de impacto
- Proceso CCB definido
- Decisiones fundamentadas (aprobar, rechazar, diferir)

## 👤 Autor

**Sebastian Briceño**  
Grupo 15 - GPY2202  
DUOC UC - Gestión de Proyectos  
Abril 2026

---

**Nota:** Este sitio web fue creado como alternativa rápida y visual a las plantillas de Office, aprovechando las fortalezas de HTML/CSS/JavaScript para presentar información compleja de forma clara e interactiva.
