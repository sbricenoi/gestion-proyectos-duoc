# Sitio Web del Proyecto - Intranet Corporativa 2.0 Konecta

## 🌐 Descripción

Sitio web interactivo con todos los documentos del proyecto GPY2202 - Semana 3, Grupo 15.

Diseño elegante tipo macOS con los colores corporativos de Duoc UC.

## 📁 Estructura de Archivos

```
web/
├── index.html                  # Página principal con resumen del proyecto
├── acta_constitucion.html      # Acta de Constitución del Proyecto
├── requisitos.html             # Documentación de Requisitos
├── alcance.html                # Enunciado del Alcance del Proyecto
├── matriz_trazabilidad.html    # Matriz de Trazabilidad de Requisitos
├── edt.html                    # Estructura de Desglose de Trabajo (EDT/WBS)
├── gantt.html                  # ⭐ Carta Gantt Interactiva (NEW!)
├── guia_gantt.html             # Guía para Crear la Carta Gantt en ProjectLibre
├── css/
│   ├── style.css               # Estilos generales del sitio (diseño Duoc UC)
│   └── gantt.css               # Estilos específicos para Carta Gantt
├── js/
│   └── gantt.js                # Lógica interactiva de la Carta Gantt
├── convert_md_to_html.py       # Script de conversión MD → HTML
└── README.md                   # Este archivo
```

## 🎨 Diseño

- **Colores**: Amarillo Duoc UC (#FDB913), negro, blanco, grises suaves
- **Tipografía**: SF Pro Display (sistema macOS/iOS)
- **Estilo**: Minimalista, espacioso, elegante
- **Características**:
  - Diseño responsive (móvil, tablet, desktop)
  - Navegación sticky
  - Botón "volver arriba"
  - Tablas con hover effects
  - Cards con animaciones
  - Optimizado para impresión

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
1. Navega a la carpeta `web/`
2. Doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

### Opción 2: Servidor Local (Recomendado)
```bash
cd "Semana 3/web"
python3 -m http.server 8000
```
Luego abre: http://localhost:8000

### Opción 3: Desde Terminal
```bash
open "web/index.html"
```

## 🔄 Actualizar Documentos

Si modificas los archivos Markdown (.md), regenera los HTML:

```bash
cd web
python3 convert_md_to_html.py
```

## 📦 Exportar para Entrega

### Incluir en ZIP de Entrega

Puedes incluir la carpeta `web/` en tu ZIP de entrega para que los profesores puedan ver los documentos en formato web interactivo además de los archivos Markdown/PDF.

```
GPY2202_Exp1_S3_grupo15.zip
├── GPY2202_Exp1_S3_acta_de_constitucion_grupo15.md
├── GPY2202_Exp1_S3_requisitos_grupo15.md
├── GPY2202_Exp1_S3_enunciado_del_alcance_grupo15.md
├── GPY2202_Exp1_S3_matriz_de_trazabilidad_grupo15.md
├── GPY2202_Exp1_S3_EDT_grupo15.md
├── GPY2202_Exp1_S3_Carta_gantt_grupo15.pod
├── GPY2202_Exp1_S3_Carta_gantt_grupo15.pdf
└── web/                        ← Carpeta del sitio web
    ├── index.html
    ├── *.html
    └── css/style.css
```

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móviles (responsive)

## 🖨️ Imprimir

Presiona `Cmd+P` (Mac) o `Ctrl+P` (Windows) en cualquier página para imprimir con formato optimizado.

## ✨ Características Destacadas

1. **Navegación Intuitiva**: Menú sticky siempre visible
2. **Cards Interactivas**: Hover effects y animaciones sutiles
3. **Tablas Elegantes**: Headers amarillos con hover en filas
4. **⭐ Carta Gantt Interactiva**: Cronograma visual completamente funcional con:
   - 45+ tareas organizadas en 10 fases
   - 11 hitos del proyecto marcados
   - Filtros por categoría y ruta crítica
   - Expandir/colapsar fases
   - Progreso visual de cada tarea
   - Scroll horizontal y vertical
   - Exportación a PDF
5. **Diseño Responsive**: Se adapta a todos los tamaños de pantalla
6. **Back to Top**: Botón flotante para volver arriba
7. **Colores Duoc UC**: Identidad visual institucional
8. **Tipografía Sistema**: Fuentes nativas de cada sistema operativo

## Información

Grupo 15  
GPY2202 - Gestión de Proyectos de Software  
Duoc UC - 2026
