// Datos del proyecto Konecta - Intranet 2.0
const projectData = {
    startDate: new Date('2026-04-01'),
    endDate: new Date('2026-08-31'),
    weeks: 22,
    
    // Hitos del proyecto
    milestones: [
        { name: 'H1: Inicio del Proyecto', week: 1, date: '05/04/2026' },
        { name: 'H2: Requisitos Aprobados', week: 3, date: '19/04/2026' },
        { name: 'H3: Diseño Completado', week: 4, date: '26/04/2026' },
        { name: 'H4: Sprint 1 Completado', week: 7, date: '17/05/2026' },
        { name: 'H5: Sprint 2 Completado', week: 10, date: '07/06/2026' },
        { name: 'H6: Sprint 3 Completado', week: 12, date: '21/06/2026' },
        { name: 'H7: Integraciones Operativas', week: 13, date: '28/06/2026' },
        { name: 'H8: Pruebas UAT Completadas', week: 15, date: '12/07/2026' },
        { name: 'H9: Capacitación Finalizada', week: 17, date: '26/07/2026' },
        { name: 'H10: Go-Live', week: 19, date: '09/08/2026' },
        { name: 'H11: Cierre del Proyecto', week: 22, date: '31/08/2026' }
    ],
    
    // Tareas del proyecto
    tasks: [
        // 1. Gestión del Proyecto
        { id: 1, name: 'Gestión del Proyecto', start: 1, duration: 22, type: 'phase', category: 'gestion', progress: 100 },
        { id: 11, name: 'Inicio del Proyecto', start: 1, duration: 1, type: 'task', parent: 1, category: 'gestion', progress: 100 },
        { id: 12, name: 'Planificación del Proyecto', start: 2, duration: 2, type: 'task', parent: 1, category: 'gestion', progress: 100 },
        { id: 13, name: 'Ejecución y Control', start: 1, duration: 20, type: 'task', parent: 1, category: 'gestion', progress: 100 },
        { id: 14, name: 'Cierre del Proyecto', start: 22, duration: 1, type: 'task', parent: 1, category: 'gestion', progress: 0 },
        
        // 2. Análisis y Requisitos
        { id: 2, name: 'Análisis y Definición de Requisitos', start: 2, duration: 3, type: 'phase', category: 'analisis', progress: 100 },
        { id: 21, name: 'Levantamiento de Requisitos', start: 2, duration: 1.5, type: 'task', parent: 2, category: 'analisis', progress: 100 },
        { id: 22, name: 'Documentación de Requisitos', start: 3, duration: 1, type: 'task', parent: 2, category: 'analisis', progress: 100 },
        { id: 23, name: 'Validación de Requisitos', start: 4, duration: 0.5, type: 'task', parent: 2, category: 'analisis', progress: 100 },
        
        // 3. Diseño y Arquitectura
        { id: 3, name: 'Diseño y Arquitectura', start: 4, duration: 2, type: 'phase', category: 'diseno', progress: 100 },
        { id: 31, name: 'Diseño de Arquitectura Técnica', start: 4, duration: 1, type: 'task', parent: 3, category: 'diseno', progress: 100 },
        { id: 32, name: 'Diseño UX/UI', start: 4, duration: 2, type: 'task', parent: 3, category: 'diseno', progress: 100 },
        { id: 33, name: 'Diseño de Base de Datos', start: 4, duration: 1, type: 'task', parent: 3, category: 'diseno', progress: 100 },
        
        // 4. Desarrollo
        { id: 4, name: 'Desarrollo del Software', start: 6, duration: 9, type: 'phase', category: 'desarrollo', progress: 80 },
        { id: 41, name: 'Configuración de Ambientes', start: 6, duration: 1, type: 'task', parent: 4, category: 'desarrollo', progress: 100 },
        { id: 42, name: 'Sprint 1 - Módulos Core', start: 7, duration: 2, type: 'task', parent: 4, category: 'desarrollo', progress: 100, critical: true },
        { id: 43, name: 'Sprint 2 - RRHH y Comunicaciones', start: 8, duration: 3, type: 'task', parent: 4, category: 'desarrollo', progress: 100, critical: true },
        { id: 44, name: 'Sprint 3 - Directorio y CMS', start: 11, duration: 2, type: 'task', parent: 4, category: 'desarrollo', progress: 80, critical: true },
        { id: 45, name: 'Sprint 4 - Integraciones', start: 13, duration: 2, type: 'task', parent: 4, category: 'desarrollo', progress: 60, critical: true },
        
        // 5. Pruebas
        { id: 5, name: 'Pruebas y Aseguramiento de Calidad', start: 8, duration: 9, type: 'phase', category: 'pruebas', progress: 70 },
        { id: 51, name: 'Planificación de Pruebas', start: 8, duration: 1, type: 'task', parent: 5, category: 'pruebas', progress: 100 },
        { id: 52, name: 'Pruebas Funcionales', start: 8, duration: 7, type: 'task', parent: 5, category: 'pruebas', progress: 85 },
        { id: 53, name: 'Pruebas No Funcionales', start: 13, duration: 2, type: 'task', parent: 5, category: 'pruebas', progress: 60, critical: true },
        { id: 54, name: 'Auditoría de Seguridad', start: 14, duration: 1, type: 'task', parent: 5, category: 'pruebas', progress: 40, critical: true },
        { id: 55, name: 'Pruebas UAT', start: 15, duration: 2, type: 'task', parent: 5, category: 'pruebas', progress: 30, critical: true },
        
        // 6. Infraestructura
        { id: 6, name: 'Infraestructura y Despliegue', start: 5, duration: 15, type: 'phase', category: 'infra', progress: 60 },
        { id: 61, name: 'Diseño de Infraestructura', start: 5, duration: 1, type: 'task', parent: 6, category: 'infra', progress: 100 },
        { id: 62, name: 'Configuración Cloud', start: 6, duration: 2, type: 'task', parent: 6, category: 'infra', progress: 100 },
        { id: 63, name: 'Pipeline CI/CD', start: 8, duration: 2, type: 'task', parent: 6, category: 'infra', progress: 100 },
        { id: 64, name: 'Preparación Ambiente Producción', start: 18, duration: 1, type: 'task', parent: 6, category: 'infra', progress: 20 },
        { id: 65, name: 'Migración y Go-Live', start: 19, duration: 1, type: 'task', parent: 6, category: 'infra', progress: 0, critical: true },
        
        // 7. Documentación
        { id: 7, name: 'Documentación', start: 15, duration: 3, type: 'phase', category: 'docs', progress: 40 },
        { id: 71, name: 'Documentación Técnica', start: 15, duration: 2, type: 'task', parent: 7, category: 'docs', progress: 50 },
        { id: 72, name: 'Documentación de Usuario', start: 15, duration: 2, type: 'task', parent: 7, category: 'docs', progress: 40 },
        { id: 73, name: 'Videos Tutoriales', start: 17, duration: 1, type: 'task', parent: 7, category: 'docs', progress: 20 },
        
        // 8. Capacitación
        { id: 8, name: 'Gestión del Cambio y Capacitación', start: 16, duration: 4, type: 'phase', category: 'capacitacion', progress: 30 },
        { id: 81, name: 'Plan de Gestión del Cambio', start: 16, duration: 1, type: 'task', parent: 8, category: 'capacitacion', progress: 50 },
        { id: 82, name: 'Comunicación Pre-Lanzamiento', start: 16, duration: 3, type: 'task', parent: 8, category: 'capacitacion', progress: 40 },
        { id: 83, name: 'Capacitación Administradores', start: 17, duration: 1, type: 'task', parent: 8, category: 'capacitacion', progress: 20, critical: true },
        { id: 84, name: 'Capacitación Usuarios Finales', start: 18, duration: 1, type: 'task', parent: 8, category: 'capacitacion', progress: 10, critical: true },
        
        // 9. Integraciones
        { id: 9, name: 'Integraciones con Sistemas Legacy', start: 9, duration: 5, type: 'phase', category: 'integracion', progress: 70 },
        { id: 91, name: 'Análisis de Sistemas Legacy', start: 9, duration: 1, type: 'task', parent: 9, category: 'integracion', progress: 100 },
        { id: 92, name: 'Integración Active Directory', start: 10, duration: 2, type: 'task', parent: 9, category: 'integracion', progress: 90 },
        { id: 93, name: 'Integración Sistema RRHH', start: 10, duration: 2, type: 'task', parent: 9, category: 'integracion', progress: 70 },
        { id: 94, name: 'Integración Sistema Nómina', start: 11, duration: 2, type: 'task', parent: 9, category: 'integracion', progress: 60 },
        { id: 95, name: 'Pruebas de Integración', start: 13, duration: 1, type: 'task', parent: 9, category: 'integracion', progress: 50, critical: true },
        
        // 10. Transición
        { id: 10, name: 'Transición y Entrega', start: 19, duration: 4, type: 'phase', category: 'transicion', progress: 10 },
        { id: 101, name: 'Preparación para Go-Live', start: 19, duration: 1, type: 'task', parent: 10, category: 'transicion', progress: 30, critical: true },
        { id: 102, name: 'Ejecución de Go-Live', start: 19, duration: 1, type: 'task', parent: 10, category: 'transicion', progress: 0, critical: true },
        { id: 103, name: 'Estabilización', start: 20, duration: 2, type: 'task', parent: 10, category: 'transicion', progress: 0 },
        { id: 104, name: 'Transición a Operación', start: 21, duration: 1, type: 'task', parent: 10, category: 'transicion', progress: 0 },
        { id: 105, name: 'Cierre Formal', start: 22, duration: 1, type: 'task', parent: 10, category: 'transicion', progress: 0 }
    ]
};

// Categorías con colores
const categories = {
    gestion: { name: 'Gestión', color: '#FDB913', textColor: '#1a1a1a' },
    analisis: { name: 'Análisis', color: '#3498db', textColor: '#ffffff' },
    diseno: { name: 'Diseño', color: '#9b59b6', textColor: '#ffffff' },
    desarrollo: { name: 'Desarrollo', color: '#2ecc71', textColor: '#ffffff' },
    pruebas: { name: 'Pruebas', color: '#e74c3c', textColor: '#ffffff' },
    infra: { name: 'Infraestructura', color: '#34495e', textColor: '#ffffff' },
    docs: { name: 'Documentación', color: '#16a085', textColor: '#ffffff' },
    capacitacion: { name: 'Capacitación', color: '#f39c12', textColor: '#1a1a1a' },
    integracion: { name: 'Integraciones', color: '#8e44ad', textColor: '#ffffff' },
    transicion: { name: 'Transición', color: '#c0392b', textColor: '#ffffff' }
};

// Función para renderizar el Gantt
function renderGantt() {
    const container = document.getElementById('gantt-container');
    const cellWidth = 60; // Ancho de cada semana
    const rowHeight = 40;
    
    // Crear header con semanas
    let headerHTML = '<div class="gantt-header"><div class="gantt-tasks-header">Tareas</div><div class="gantt-timeline-header">';
    for (let i = 1; i <= projectData.weeks; i++) {
        headerHTML += `<div class="week-cell" style="width: ${cellWidth}px">S${i}</div>`;
    }
    headerHTML += '</div></div>';
    
    // Crear filas de tareas
    let rowsHTML = '<div class="gantt-body">';
    
    // Filtrar y ordenar tareas
    const visibleTasks = projectData.tasks.filter(task => {
        if (task.type === 'phase') return true;
        return !task.parent || document.getElementById(`toggle-${task.parent}`)?.checked !== false;
    });
    
    visibleTasks.forEach(task => {
        const category = categories[task.category];
        const indent = task.parent ? 30 : 0;
        const isCritical = task.critical ? 'critical' : '';
        
        rowsHTML += `
            <div class="gantt-row ${task.type}" data-id="${task.id}">
                <div class="gantt-task-cell" style="padding-left: ${indent}px">
                    ${task.type === 'phase' ? `<input type="checkbox" id="toggle-${task.id}" class="toggle-tasks" checked>` : ''}
                    <span class="task-name" title="${task.name}">${task.name}</span>
                    <span class="task-progress">(${task.progress}%)</span>
                </div>
                <div class="gantt-timeline-cell">
                    <div class="gantt-bar ${isCritical}" 
                         style="
                             left: ${(task.start - 1) * cellWidth}px; 
                             width: ${task.duration * cellWidth}px;
                             background: ${category.color};
                             color: ${category.textColor};
                         "
                         title="${task.name}&#10;Inicio: Semana ${task.start}&#10;Duración: ${task.duration} semanas&#10;Progreso: ${task.progress}%">
                        <div class="bar-progress" style="width: ${task.progress}%"></div>
                        <span class="bar-text">${task.duration}s</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    rowsHTML += '</div>';
    
    // Crear hitos
    let milestonesHTML = '<div class="gantt-milestones">';
    projectData.milestones.forEach(milestone => {
        milestonesHTML += `
            <div class="milestone" 
                 style="left: ${(milestone.week - 1) * cellWidth + cellWidth/2}px"
                 title="${milestone.name}&#10;${milestone.date}">
                <div class="milestone-marker">◆</div>
                <div class="milestone-label">${milestone.name.split(':')[0]}</div>
            </div>
        `;
    });
    milestonesHTML += '</div>';
    
    container.innerHTML = headerHTML + rowsHTML + milestonesHTML;
    
    // Event listeners para toggle
    document.querySelectorAll('.toggle-tasks').forEach(checkbox => {
        checkbox.addEventListener('change', renderGantt);
    });
}

// Función para filtrar por categoría
function filterByCategory(category) {
    const tasks = document.querySelectorAll('.gantt-row');
    tasks.forEach(row => {
        const task = projectData.tasks.find(t => t.id === parseInt(row.dataset.id));
        if (category === 'all' || task.category === category) {
            row.style.display = 'flex';
        } else {
            row.style.display = 'none';
        }
    });
}

// Función para filtrar por ruta crítica
function filterCriticalPath() {
    const tasks = document.querySelectorAll('.gantt-row');
    const showOnlyCritical = document.getElementById('criticalPathFilter').checked;
    
    tasks.forEach(row => {
        const task = projectData.tasks.find(t => t.id === parseInt(row.dataset.id));
        if (!showOnlyCritical || task.critical || task.type === 'phase') {
            row.style.display = 'flex';
        } else {
            row.style.display = 'none';
        }
    });
}

// Función para exportar
function exportGantt() {
    window.print();
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', renderGantt);
