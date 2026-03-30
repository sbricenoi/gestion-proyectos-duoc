#!/usr/bin/env python3
"""
Script para convertir documentos Markdown a HTML con diseño Duoc UC
"""

import re
from pathlib import Path

def markdown_to_html(md_content):
    """Convierte Markdown a HTML"""
    
    # Reemplazar headers
    html = re.sub(r'^# (.+)$', r'<h1>\1</h1>', md_content, flags=re.MULTILINE)
    html = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    html = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', html, flags=re.MULTILINE)
    
    # Reemplazar tablas Markdown
    def convert_table(match):
        table_text = match.group(0)
        lines = [line.strip() for line in table_text.split('\n') if line.strip()]
        
        if len(lines) < 2:
            return table_text
        
        # Header
        headers = [cell.strip() for cell in lines[0].split('|') if cell.strip()]
        
        # Skip separator line (lines[1])
        # Body rows
        rows = []
        for line in lines[2:]:
            cells = [cell.strip() for cell in line.split('|') if cell.strip()]
            if cells:
                rows.append(cells)
        
        # Generate HTML
        html_table = '<table>\n<thead>\n<tr>\n'
        for header in headers:
            html_table += f'<th>{header}</th>\n'
        html_table += '</tr>\n</thead>\n<tbody>\n'
        
        for row in rows:
            html_table += '<tr>\n'
            for cell in row:
                html_table += f'<td>{cell}</td>\n'
            html_table += '</tr>\n'
        
        html_table += '</tbody>\n</table>'
        return html_table
    
    # Buscar tablas (formato: | col1 | col2 |\n|------|------|\n| val1 | val2 |)
    table_pattern = r'\|.+\|[\r\n]+\|[-:| ]+\|[\r\n]+(?:\|.+\|[\r\n]*)*'
    html = re.sub(table_pattern, convert_table, html, flags=re.MULTILINE)
    
    # Reemplazar listas no ordenadas
    html = re.sub(r'^- (.+)$', r'<li>\1</li>', html, flags=re.MULTILINE)
    html = re.sub(r'^• (.+)$', r'<li>\1</li>', html, flags=re.MULTILINE)
    
    # Envolver grupos de <li> en <ul>
    html = re.sub(r'(<li>.*?</li>[\r\n]*)+', lambda m: '<ul>\n' + m.group(0) + '</ul>\n', html, flags=re.DOTALL)
    
    # Reemplazar listas ordenadas
    html = re.sub(r'^\d+\.\s+(.+)$', r'<li>\1</li>', html, flags=re.MULTILINE)
    
    # Reemplazar negrita y énfasis
    html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)
    html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html)
    
    # Reemplazar líneas horizontales
    html = re.sub(r'^---+$', r'<hr>', html, flags=re.MULTILINE)
    
    # Envolver párrafos
    lines = html.split('\n')
    result = []
    in_list = False
    in_table = False
    
    for line in lines:
        stripped = line.strip()
        
        if stripped.startswith('<table>'):
            in_table = True
            result.append(line)
        elif stripped.startswith('</table>'):
            in_table = False
            result.append(line)
        elif stripped.startswith('<ul>') or stripped.startswith('<ol>'):
            in_list = True
            result.append(line)
        elif stripped.startswith('</ul>') or stripped.startswith('</ol>'):
            in_list = False
            result.append(line)
        elif stripped.startswith('<h') or stripped.startswith('<hr') or stripped.startswith('<li>') or in_list or in_table:
            result.append(line)
        elif stripped and not stripped.startswith('<'):
            result.append(f'<p>{line}</p>')
        else:
            result.append(line)
    
    return '\n'.join(result)

def create_html_page(title, content, filename):
    """Crea una página HTML completa"""
    
    nav_items = [
        ('index.html', '🏠 Inicio'),
        ('acta_constitucion.html', '📋 Acta de Constitución'),
        ('requisitos.html', '📝 Requisitos'),
        ('alcance.html', '🎯 Alcance'),
        ('matriz_trazabilidad.html', '🔗 Matriz'),
        ('edt.html', '📊 EDT'),
        ('gantt.html', '📅 Carta Gantt'),
    ]
    
    nav_html = ''
    for nav_file, nav_label in nav_items:
        active = 'active' if nav_file == filename else ''
        nav_html += f'<a href="{nav_file}" class="nav-link {active}">{nav_label}</a>\n'
    
    html_template = f'''<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Proyecto Konecta - Grupo 15</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <a href="index.html" class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/1280px-Logo_DuocUC.svg.png" alt="Duoc UC" class="logo-img">
                <span class="logo-text">Gestión de Proyectos</span>
            </a>
            <div class="project-info">
                <div class="project-title">GPY2202 - Semana 3</div>
                <div class="project-meta">Grupo 15 • Sebastian Briceño</div>
            </div>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-content">
            {nav_html}
        </div>
    </nav>

    <!-- Main Content -->
    <main class="container">
        <div class="document">
            {content}
        </div>
        
        <div style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
            <a href="index.html" class="btn btn-secondary">← Volver al Inicio</a>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p><strong>Gestión de Proyectos de Software (GPY2202)</strong></p>
            <p>Semana 3: Planificando Requerimientos del Proyecto</p>
            <p>Grupo 15 • Sebastian Briceño • Duoc UC • 2026</p>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <a href="#" class="back-to-top" id="backToTop">↑</a>

    <script>
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {{
            if (window.pageYOffset > 300) {{
                backToTop.classList.add('visible');
            }} else {{
                backToTop.classList.remove('visible');
            }}
        }});

        backToTop.addEventListener('click', (e) => {{
            e.preventDefault();
            window.scrollTo({{ top: 0, behavior: 'smooth' }});
        }});
        
        // Print button functionality
        document.addEventListener('keydown', (e) => {{
            if ((e.ctrlKey || e.metaKey) && e.key === 'p') {{
                window.print();
            }}
        }});
    </script>
</body>
</html>'''
    
    return html_template

def main():
    # Directorio base
    base_dir = Path(__file__).parent.parent
    web_dir = Path(__file__).parent
    
    # Archivos a convertir
    files = [
        ('GPY2202_Exp1_S3_acta_de_constitucion_grupo15.md', 'acta_constitucion.html', 'Acta de Constitución del Proyecto'),
        ('GPY2202_Exp1_S3_requisitos_grupo15.md', 'requisitos.html', 'Documentación de Requisitos'),
        ('GPY2202_Exp1_S3_enunciado_del_alcance_grupo15.md', 'alcance.html', 'Enunciado del Alcance del Proyecto'),
        ('GPY2202_Exp1_S3_matriz_de_trazabilidad_grupo15.md', 'matriz_trazabilidad.html', 'Matriz de Trazabilidad de Requisitos'),
        ('GPY2202_Exp1_S3_EDT_grupo15.md', 'edt.html', 'Estructura de Desglose de Trabajo (EDT/WBS)'),
    ]
    
    for md_file, html_file, title in files:
        md_path = base_dir / md_file
        html_path = web_dir / html_file
        
        print(f"Convirtiendo {md_file}...")
        
        # Leer archivo markdown
        with open(md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # Convertir a HTML
        html_content = markdown_to_html(md_content)
        
        # Crear página completa
        full_page = create_html_page(title, html_content, html_file)
        
        # Guardar
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(full_page)
        
        print(f"✓ Creado {html_file}")
    
    print("\nConversión completada.")

if __name__ == '__main__':
    main()
