// Funciones de descarga para generar archivos Office
// Usando SheetJS (xlsx) para Excel y otras librerías para Word/PowerPoint

// ========================================
// 1. DESCARGAR MATRIZ DE RIESGOS (EXCEL .XLSX)
// ========================================
function descargarMatrizRiesgos() {
    // Verificar que SheetJS esté cargado
    if (typeof XLSX === 'undefined') {
        alert('Error: Librería de Excel no cargada. Por favor recarga la página.');
        return;
    }
    // Crear workbook
    const wb = XLSX.utils.book_new();
    
    // Datos de los riesgos
    const riesgos = [
        ["ID", "Nombre del Riesgo", "Categoría", "Descripción", "Causa Raíz", "Probabilidad", "Impacto", "Nivel de Riesgo", "Estrategia", "Plan de Respuesta", "Responsable", "Trigger"],
        ["R01", "Complejidad de Integración con Sistemas Legacy", "Técnico", "Las integraciones con Active Directory, sistema de RRHH y sistema de nómina presentan mayor complejidad técnica de la estimada", "Sistemas legacy tienen más de 10 años, sin documentación", "4", "4", "16", "Mitigar", "1) Iniciar análisis técnico en Semana 2. 2) Asignar desarrollador senior. 3) Contratar consultor externo. 4) Plan B: carga manual temporal", "Líder Técnico", "Análisis técnico revela APIs no documentadas"],
        ["R02", "Resistencia al Cambio de Usuarios Internacionales", "Organizacional", "Empleados de Argentina, Brasil y Colombia podrían resistirse a adoptar la nueva intranet", "Historial de proyectos diseñados solo para Chile sin considerar otros países", "4", "4", "16", "Mitigar", "1) Incluir representantes de cada país desde Semana 1. 2) Talleres presenciales por país. 3) Embajadores del cambio. 4) Contenido regionalizado. 5) Gamificación", "Director de RRHH", "Encuestas muestran resistencia o comentarios negativos"],
        ["R03", "Requisitos Ambiguos o Cambiantes", "Gestión", "Stakeholders podrían tener visiones diferentes sobre funcionalidades clave o solicitar cambios significativos", "Falta de claridad inicial, expectativas no alineadas, requisitos no validados", "4", "4", "16", "Mitigar", "1) Proceso formal de gestión de cambios. 2) Aprobación firmada de requisitos. 3) Validaciones iterativas con prototipos. 4) Línea base congelada. 5) Reserva de contingencia 13%", "Jefe de Proyecto", "Solicitud de cambio recibida o stakeholder expresa insatisfacción"],
        ["R04", "Problemas de Rendimiento con Alta Concurrencia", "Técnico", "Degradación de rendimiento cuando 2700+ usuarios usen simultáneamente la intranet", "Subestimación de carga, consultas no optimizadas, falta de caché", "3", "4", "12", "Mitigar", "1) Arquitectura escalable con balanceadores. 2) Pruebas de carga desde Sprint 2. 3) Simular 3000 usuarios concurrentes. 4) Caché, CDN. 5) Optimizar SQL. 6) Monitoreo en tiempo real", "Arquitecto de Software", "Pruebas muestran tiempos > 3 segundos"],
        ["R05", "Falta de Disponibilidad de Stakeholders Clave", "Organizacional", "Director General, Dir. TI o Dir. RRHH podrían no estar disponibles para validaciones y decisiones", "Stakeholders tienen múltiples responsabilidades y prioridades competitivas", "3", "3", "9", "Mitigar", "1) Agendar sesiones con 3 semanas anticipación. 2) Designar suplentes con poder de decisión. 3) SLA de respuesta 48 horas. 4) Mecanismos asincrónicos. 5) Reuniones cortas 30 min", "Jefe de Proyecto", "Stakeholder cancela reunión crítica por segunda vez"],
        ["R06", "Vulnerabilidades de Seguridad No Detectadas", "Técnico", "Vulnerabilidades críticas que expongan datos sensibles de empleados o accesos no autorizados", "Falta de experiencia en desarrollo seguro, no seguir OWASP", "2", "5", "10", "Mitigar", "1) Seguir OWASP Top 10. 2) Code review con checklist seguridad. 3) Herramientas automáticas SonarQube. 4) Auditoría externa Semana 14. 5) Pruebas de penetración. 6) Capacitar equipo. 7) Encriptación. 8) MFA", "Arquitecto / CISO", "Herramienta detecta vulnerabilidad o auditoría encuentra issues"],
        ["R07", "Rotación de Personal Clave del Proyecto", "Organizacional", "Arquitecto, Líder Técnico o Diseñador UX podrían renunciar durante el desarrollo", "Mercado competitivo, ofertas atractivas, sobrecarga de trabajo", "3", "4", "12", "Mitigar", "1) Documentar decisiones en Confluence. 2) Knowledge sharing semanal. 3) Pair programming. 4) Identificar backups. 5) Incentivos retención. 6) Reuniones 1:1 mensuales. 7) Handover 2 semanas", "Director de TI", "Recurso manifiesta intención de salir o recibe oferta"],
        ["R08", "Cambios Regulatorios en Protección de Datos", "Externo", "Cambios en leyes de Brasil, Argentina o Colombia podrían requerir modificaciones en seguridad", "Legislaciones en evolución, gobiernos agregan requisitos basados en GDPR", "2", "3", "6", "Aceptar y Monitorear", "1) Arquitectura flexible. 2) Monitoreo mensual de cambios regulatorios. 3) Privacy by design. 4) Módulo de consentimientos configurable. 5) Reserva para ajustes", "Área Legal / JP", "Legal reporta nueva regulación aprobada"],
        ["R09", "Fallas en Infraestructura Cloud Durante Go-Live", "Técnico", "Fallas del proveedor cloud durante go-live podrían impedir disponibilidad", "Dependencia de terceros, problemas de red, ataques DDoS", "1", "5", "5", "Transferir y Mitigar", "1) SLA premium 99.99%. 2) Arquitectura multi-zona. 3) Prueba de failover. 4) Plan de rollback 1 hora. 5) Comunicación proactiva. 6) Soporte 24/7. 7) Go-live fuera de peak", "Ingeniero DevOps", "Alertas de monitoreo indican problemas de disponibilidad"],
        ["R10", "Baja Adopción Post Go-Live", "Organizacional", "Tasa de adopción podría estancarse en 60-70% en lugar de 100%", "Inercia organizacional, falta de motivación, capacitación insuficiente", "3", "4", "12", "Mitigar", "1) Intranet como ÚNICO canal para trámites. 2) Gamificación. 3) Contenido de valor. 4) Capacitación 100%. 5) Soporte extendido. 6) Monitoreo diario. 7) Comunicación de líderes. 8) Early adopters", "Director RRHH / JP", "Adopción < 80% después de 2 semanas"],
        ["R11", "Sobrecostos por Subestimación de Esfuerzo", "Gestión", "Proyecto podría exceder presupuesto de $100M por subestimación", "Estimaciones optimistas, falta de experiencia, alcance creep", "3", "3", "9", "Mitigar", "1) Reserva 13%. 2) Seguimiento semanal proyección EAC. 3) Priorización must-have vs nice-to-have. 4) Control formal de cambios. 5) Escalar a Sponsor si >10%. 6) Reducir alcance si necesario", "Jefe de Proyecto", "CPI < 0.90 por 2 semanas consecutivas"],
        ["R12", "Incompatibilidad con Navegadores Antiguos", "Técnico", "Empleados con navegadores antiguos o Windows 7 no podrán acceder", "Equipos heterogéneos, falta de actualización, presupuesto limitado", "2", "2", "4", "Aceptar y Mitigar", "1) Definir navegadores soportados. 2) Comunicar requisitos antes go-live. 3) Actualizar navegadores corporativos. 4) Mensaje advertencia. 5) Acceso móvil alternativo", "Director de TI", "Pruebas UAT revelan problemas de compatibilidad"],
        ["R13", "Datos Inconsistentes entre Sistemas Legacy", "Técnico", "Sistemas RRHH y nómina con datos inconsistentes del mismo empleado", "Sistemas no sincronizados, actualizaciones manuales, falta data governance", "3", "3", "9", "Mitigar", "1) Limpieza de datos Semanas 2-4. 2) Sistema fuente de verdad. 3) Validación en integraciones. 4) Dashboard de inconsistencias. 5) Reconciliación mensual. 6) Fecha última actualización", "Analista / Dir RRHH", "> 5% registros con inconsistencias"],
        ["R14", "Falta de Contenido Regionalizado al Lanzamiento", "Gestión", "Al go-live, poco contenido relevante para Brasil, Argentina, Colombia", "Falta ownership, priorización desarrollo sobre contenido, falta recursos", "3", "3", "9", "Mitigar", "1) Content Owner por país desde Semana 1. 2) Meta 20 contenidos por país. 3) Capacitar en CMS Semana 17. 4) Revisión semanal. 5) Templates facilitar creación. 6) Contenido curado si necesario. 7) Reconocimiento", "Dir Comunicaciones / JP", "A 2 semanas go-live < 10 contenidos por país"],
        ["R15", "Problemas de Conectividad en Sucursales Remotas", "Externo", "Sucursales rurales Brasil/Colombia con internet lento o inestable", "Infraestructura limitada, dependencia proveedores locales, baja calidad", "2", "2", "4", "Mitigar", "1) Diseño lightweight optimizado. 2) Minimizar imágenes, compresión, lazy loading. 3) Funcionalidad offline PWA. 4) CDN con nodos LATAM. 5) Validar en UAT. 6) Mejorar conectividad si crítico", "Arquitecto / Dir TI", "Usuarios remotos reportan lentitud en UAT"]
    ];

    // Crear worksheet desde los datos
    const ws = XLSX.utils.aoa_to_sheet(riesgos);
    
    // Configurar anchos de columna
    ws['!cols'] = [
        {wch: 5},   // ID
        {wch: 35},  // Nombre
        {wch: 15},  // Categoría
        {wch: 50},  // Descripción
        {wch: 40},  // Causa Raíz
        {wch: 12},  // Probabilidad
        {wch: 10},  // Impacto
        {wch: 12},  // Nivel
        {wch: 15},  // Estrategia
        {wch: 60},  // Plan
        {wch: 20},  // Responsable
        {wch: 40}   // Trigger
    ];
    
    // Agregar worksheet al workbook
    XLSX.utils.book_append_sheet(wb, ws, "Matriz de Riesgos");
    
    // Generar archivo Excel
    XLSX.writeFile(wb, "GPY2202_Exp2_S6_matriz_riesgos_grupo15.xlsx");
}

// ========================================
// 2. DESCARGAR INFORME DE MONITOREO (WORD .DOCX)
// ========================================
function descargarInformeMonitoreo() {
    // Verificar que docx esté cargado
    if (typeof docx === 'undefined') {
        alert('Error: Librería de Word no cargada. Por favor recarga la página.');
        return;
    }
    
    const { Document, Paragraph, TextRun, HeadingLevel, AlignmentType, UnderlineType } = docx;
    
    // Crear documento
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                // Título
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "INFORME DE MONITOREO DE RIESGOS",
                            bold: true,
                    size: 32,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER
                }),
                
                // Metadata
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Proyecto: Intranet Corporativa 2.0 - Konecta",
                            size: 24
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Período: Semana 10 (15-21 Junio 2026)",
                            size: 24
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Jefe de Proyecto: Sebastian Briceño • Grupo 15",
                            size: 24
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({ text: "" }), // Espacio
                
                // Resumen Ejecutivo
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "RESUMEN EJECUTIVO",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Total de Riesgos: ", bold: true }),
                        new TextRun({ text: "15" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Riesgos Activos: ", bold: true }),
                        new TextRun({ text: "14" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Riesgos Materializados: ", bold: true }),
                        new TextRun({ text: "1 (R01)" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Nuevos Riesgos Identificados: ", bold: true }),
                        new TextRun({ text: "2 (R16, R17)" })
                    ]
                }),
                new Paragraph({ text: "" }),
                
                // Riesgo Materializado
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "RIESGOS MATERIALIZADOS",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "R01: Complejidad de Integración con Sistemas Legacy",
                            bold: true,
                            color: "DC2626",
                            size: 26
                        })
                    ]
                }),
                new Paragraph({ text: "ESTADO: MATERIALIZADO en Semana 8" }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [new TextRun({ text: "Impacto Real:", bold: true })]
                }),
                new Paragraph({ text: "• Cronograma: +1.5 semanas de retraso" }),
                new Paragraph({ text: "• Costo: +$3.5M en consultor externo" }),
                new Paragraph({ text: "• Alcance: Funcionalidades avanzadas diferidas a Fase 2" }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Efectividad del Plan: ", bold: true }),
                        new TextRun({ text: "4/5 estrellas ⭐⭐⭐⭐" })
                    ]
                }),
                new Paragraph({
                    text: "El plan de mitigación funcionó bien. La contratación anticipada del consultor y el Plan B evitaron un retraso mayor de 4+ semanas."
                }),
                new Paragraph({ text: "" }),
                
                // Nuevos Riesgos
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "NUEVOS RIESGOS IDENTIFICADOS",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "R16: Retraso en Entrega de APIs del Sistema de Nómina",
                            bold: true,
                            color: "DC2626"
                        })
                    ]
                }),
                new Paragraph({ text: "Nivel: 16 - Alto | Identificado: Semana 10" }),
                new Paragraph({
                    text: "Proveedor informó que APIs no estarán listas hasta Semana 13 (vs. Semana 11 comprometida). Retraso de 2 semanas en módulo de liquidaciones."
                }),
                new Paragraph({ text: "Plan: Reunión urgente con VP proveedor, desarrollar scraper temporal como Plan B." }),
                new Paragraph({ text: "" }),
                
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "R17: Falta de Participación de Brasil en Validaciones",
                            bold: true,
                            color: "F59E0B"
                        })
                    ]
                }),
                new Paragraph({ text: "Nivel: 12 - Medio | Identificado: Semana 10" }),
                new Paragraph({
                    text: "Usuarios piloto cancelaron 2 de 3 sesiones por 'falta de tiempo'. Funcionalidades para Brasil podrían no ser validadas a tiempo."
                }),
                new Paragraph({ text: "Plan: Reprogramar en horario alternativo, escalar a Director General, feedback asincrónico." }),
                new Paragraph({ text: "" }),
                
                // Reserva de Contingencia
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "CONSUMO DE RESERVA DE CONTINGENCIA",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Reserva Original: ", bold: true }),
                        new TextRun({ text: "$13M (13% del presupuesto)" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Consumido: ", bold: true }),
                        new TextRun({ text: "$3.5M (27% de la reserva)" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Disponible: ", bold: true }),
                        new TextRun({ text: "$9.5M (73% de la reserva)" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Proyectado Adicional: ", bold: true }),
                        new TextRun({ text: "$9M (cambios aprobados pendientes)" })
                    ]
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "⚠️ ALERTA: ",
                            bold: true,
                            color: "DC2626"
                        }),
                        new TextRun({
                            text: "Reserva casi agotada. Se proyecta consumo de 96% ($12.5M de $13M)."
                        })
                    ]
                }),
                new Paragraph({ text: "" }),
                
                // Acciones Inmediatas
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "ACCIONES INMEDIATAS",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({ text: "1. 🔴 CRÍTICO: Escalar R16 a VP de proveedor (Meta: Confirmar entrega en Semana 11)" }),
                new Paragraph({ text: "2. 🔴 CRÍTICO: Reunión con Sponsor sobre R03 (Solicitar change freeze desde Semana 12)" }),
                new Paragraph({ text: "3. 🟡 IMPORTANTE: Monitorear R01 diariamente (Decisión Go/No-Go para Plan B en Semana 11)" }),
                new Paragraph({ text: "4. 🟡 IMPORTANTE: Sesiones 1:1 retención con cada miembro del equipo (prevenir R07)" }),
                new Paragraph({ text: "5. 🟢 PREVENCIÓN: Validar fecha definitiva sesiones con Brasil (R17)" }),
                new Paragraph({ text: "" }),
                new Paragraph({ text: "" }),
                
                // Firma
                new Paragraph({
                    children: [
                        new TextRun({ text: "________________________________", size: 20 })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Firma: Sebastian Briceño", bold: true })
                    ]
                }),
                new Paragraph({ text: "Jefe de Proyecto" }),
                new Paragraph({ text: "GPY2202 - Grupo 15" }),
                new Paragraph({ text: "DUOC UC - Abril 2026" })
            ]
        }]
    });
    
    // Generar y descargar
    docx.Packer.toBlob(doc).then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'GPY2202_Exp2_S6_informe_monitoreo_riesgos_grupo15.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
}

// ========================================
// 3. DESCARGAR INFORME DE PERFORMANCE (WORD .DOCX)
// ========================================
function descargarInformePerformance() {
    // Verificar que docx esté cargado
    if (typeof docx === 'undefined') {
        alert('Error: Librería de Word no cargada. Por favor recarga la página.');
        return;
    }
    
    const { Document, Paragraph, TextRun, HeadingLevel, AlignmentType } = docx;
    
    // Crear documento
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                // Título
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "INFORME DEL PERFORMANCE DEL TRABAJO",
                            bold: true,
                            size: 32,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER
                }),
                
                // Subtítulo
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Earned Value Management (EVM)",
                            size: 26
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Proyecto: Intranet Corporativa 2.0 - Konecta",
                            size: 24
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Semana 10 (21 de Junio 2026)",
                            size: 24
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Jefe de Proyecto: Sebastian Briceño • Grupo 15",
                            size: 24
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({ text: "" }),
                
                // Resumen Ejecutivo
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "RESUMEN EJECUTIVO",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "SEMÁFORO GENERAL: AMARILLO", bold: true, color: "F59E0B" })
                    ]
                }),
                new Paragraph({
                    text: "El proyecto está adelantado +3% en cronograma pero con sobrecosto del 20%. Se requieren acciones correctivas para controlar el presupuesto manteniendo el buen desempeño en tiempo."
                }),
                new Paragraph({ text: "" }),
                
                // Métricas EVM
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "MÉTRICAS DE EARNED VALUE MANAGEMENT",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "PV (Planned Value): ", bold: true }),
                        new TextRun({ text: "$45M - Valor planificado a gastar" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "EV (Earned Value): ", bold: true, color: "10B981" }),
                        new TextRun({ text: "$48M - Valor del trabajo completado", color: "10B981" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "AC (Actual Cost): ", bold: true, color: "EF4444" }),
                        new TextRun({ text: "$48M - Costo real incurrido", color: "EF4444" })
                    ]
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "SV (Schedule Variance): ", bold: true, color: "10B981" }),
                        new TextRun({ text: "+$3M (adelante en cronograma)", color: "10B981" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "SPI (Schedule Performance Index): ", bold: true, color: "10B981" }),
                        new TextRun({ text: "1.07 (eficiente +7%)", color: "10B981" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "CPI (Cost Performance Index): ", bold: true, color: "EF4444" }),
                        new TextRun({ text: "0.83 (ineficiente -17%)", color: "EF4444" })
                    ]
                }),
                new Paragraph({ text: "" }),
                
                // Proyecciones
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "PROYECCIONES AL FINALIZAR",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "EAC (Estimate at Completion): ", bold: true, color: "EF4444" }),
                        new TextRun({ text: "$115M - Proyección de sobrecosto de $15M (15% sobre presupuesto original)", color: "EF4444" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "ETC (Estimate to Complete): ", bold: true }),
                        new TextRun({ text: "$67M - Costo restante proyectado para completar el trabajo" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "VAC (Variance at Completion): ", bold: true, color: "EF4444" }),
                        new TextRun({ text: "-$15M - Sobrecosto esperado de 15% al finalizar el proyecto", color: "EF4444" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "TCPI (To-Complete Performance Index): ", bold: true }),
                        new TextRun({ text: "0.78 - Eficiencia requerida en el trabajo restante" })
                    ]
                }),
                new Paragraph({ text: "" }),
                
                // Estado de Entregables
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "ESTADO DE ENTREGABLES",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Completados: ", bold: true }),
                        new TextRun({ text: "8 de 15 (53%)" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "En Progreso: ", bold: true }),
                        new TextRun({ text: "2 (Módulo RRHH 93%, Integraciones 65%)" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "No Iniciados: ", bold: true }),
                        new TextRun({ text: "5 entregables" })
                    ]
                }),
                new Paragraph({ text: "" }),
                
                // Escenarios de Recuperación
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "ESCENARIOS DE RECUPERACIÓN",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "ESCENARIO A: Recursos Adicionales", bold: true })
                    ]
                }),
                new Paragraph({ text: "• Go-Live: 31-Ago-2026 (original)" }),
                new Paragraph({ text: "• Costo Final: $126M (+26%)" }),
                new Paragraph({ text: "• Riesgo: ALTO" }),
                new Paragraph({ text: "" }),
                
                new Paragraph({
                    children: [
                        new TextRun({ text: "ESCENARIO B: Retrasar Go-Live", bold: true })
                    ]
                }),
                new Paragraph({ text: "• Go-Live: 14-Sep-2026 (+2 semanas)" }),
                new Paragraph({ text: "• Costo Final: $115M (+15%)" }),
                new Paragraph({ text: "• Riesgo: MEDIO" }),
                new Paragraph({ text: "" }),
                
                new Paragraph({
                    children: [
                        new TextRun({ text: "⭐ ESCENARIO C: Reducir Alcance (RECOMENDADO)", bold: true, color: "10B981" })
                    ]
                }),
                new Paragraph({ text: "• Go-Live: 31-Ago-2026 (original)" }),
                new Paragraph({ text: "• Costo Final: $112M (+12%)" }),
                new Paragraph({ text: "• Alcance: 95% (diferir módulo encuestas)" }),
                new Paragraph({ text: "• Riesgo: BAJO" }),
                new Paragraph({
                    text: "✅ Este escenario balancea costo, cronograma y alcance de forma óptima."
                }),
                new Paragraph({ text: "" }),
                
                // Métricas de Calidad
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "MÉTRICAS DE CALIDAD",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({ text: "✅ Cobertura de Pruebas: 84% (objetivo >= 80%) CUMPLE" }),
                new Paragraph({ text: "✅ Bugs Críticos: 0 (objetivo = 0) CUMPLE" }),
                new Paragraph({ text: "❌ Bugs Altos Pendientes: 8 (objetivo < 5) NO CUMPLE" }),
                new Paragraph({ text: "✅ NPS: +42 (objetivo > 30) EXCELENTE" }),
                new Paragraph({ text: "✅ Satisfacción General: 4.2/5.0 (objetivo >= 4.0) CUMPLE" }),
                new Paragraph({ text: "" }),
                
                // Acciones Correctivas
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "ACCIONES CORRECTIVAS",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({ text: "1. 🔴 CRÍTICO: Reunión con Sponsor (aprobar Escenario C, change freeze)" }),
                new Paragraph({ text: "2. 🔴 CRÍTICO: Sprint corrección bugs (resolver 8 bugs altos)" }),
                new Paragraph({ text: "3. 🔴 CRÍTICO: Escalar R16 a VP proveedor (APIs nómina)" }),
                new Paragraph({ text: "4. 🟡 ALTA: Agregar 2 desarrolladores Sprint 3 (recuperar 1 semana)" }),
                new Paragraph({ text: "5. 🟡 ALTA: Reuniones 1:1 retención equipo (prevenir R07)" }),
                new Paragraph({ text: "6. 🟢 MEDIA: Generar contenido regionalizado (20 items/país)" }),
                new Paragraph({ text: "" }),
                new Paragraph({ text: "" }),
                
                // Firma
                new Paragraph({
                    children: [
                        new TextRun({ text: "________________________________", size: 20 })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Firma: Sebastian Briceño", bold: true })
                    ]
                }),
                new Paragraph({ text: "Jefe de Proyecto" }),
                new Paragraph({ text: "GPY2202 - Grupo 15" }),
                new Paragraph({ text: "DUOC UC - Abril 2026" })
            ]
        }]
    });
    
    // Generar y descargar
    docx.Packer.toBlob(doc).then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'GPY2202_Exp2_S6_informe_performance_grupo15.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
}

// ========================================
// 4. DESCARGAR SOLICITUDES DE CAMBIO (WORD .DOCX)
// ========================================
function descargarSolicitudesCambio() {
    // Verificar que docx esté cargado
    if (typeof docx === 'undefined') {
        alert('Error: Librería de Word no cargada. Por favor recarga la página.');
        return;
    }
    
    const { Document, Paragraph, TextRun, HeadingLevel, AlignmentType } = docx;
    
    // Crear documento
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                // Título
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "SOLICITUDES DE CAMBIO",
                            bold: true,
                            size: 32,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER
                }),
                
                // Metadata
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Proyecto: Intranet Corporativa 2.0 - Konecta",
                            size: 24
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Grupo 15",
                            size: 24
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({ text: "" }),
                
                // Resumen
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "RESUMEN DE SOLICITUDES",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Total Solicitudes: ", bold: true }),
                        new TextRun({ text: "7" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Aprobadas: ", bold: true }),
                        new TextRun({ text: "3" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Rechazadas: ", bold: true }),
                        new TextRun({ text: "2" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Pendientes: ", bold: true }),
                        new TextRun({ text: "2" })
                    ]
                }),
                new Paragraph({ text: "" }),
                new Paragraph({ text: "" }),
                
                // C001 - APROBADO
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "SOLICITUD C001 - APROBADA ✅",
                            bold: true,
                            size: 26,
                            color: "10B981"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Título: ", bold: true }),
                        new TextRun({ text: "Flujo Multi-Nivel de Aprobación de Vacaciones" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Solicitante: ", bold: true }),
                        new TextRun({ text: "Dir. RRHH Chile" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Fecha Solicitud: ", bold: true }),
                        new TextRun({ text: "15-Junio-2026" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Fecha Aprobación: ", bold: true }),
                        new TextRun({ text: "17-Junio-2026" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Prioridad: ", bold: true }),
                        new TextRun({ text: "Alta" })
                    ]
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Descripción:", bold: true })
                    ]
                }),
                new Paragraph({
                    text: "Implementar flujo de aprobación con 3 niveles jerárquicos para solicitudes de vacaciones superiores a 10 días. Actualmente solo hay 1 nivel (supervisor directo)."
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Justificación:", bold: true })
                    ]
                }),
                new Paragraph({ text: "• Política corporativa actualizada en Enero 2026 requiere aprobaciones múltiples" }),
                new Paragraph({ text: "• Evitar conflictos de ausencias simultáneas en equipos críticos" }),
                new Paragraph({ text: "• Alineamiento con control presupuestario de RRHH" }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Impacto:", bold: true })
                    ]
                }),
                new Paragraph({ text: "Costo: +$3M | Tiempo: +3.5 semanas | Riesgo: Bajo" }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Decisión: APROBADO", bold: true, color: "10B981" })
                    ]
                }),
                new Paragraph({
                    text: "Fundamento: Requisito regulatorio de negocio. Impacto moderado y manejable. Se aprobó presupuesto adicional de $3M desde reserva de contingencia."
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Aprobaciones:", bold: true })
                    ]
                }),
                new Paragraph({ text: "✅ Sebastian Briceño (Jefe de Proyecto)" }),
                new Paragraph({ text: "✅ Patricia Vega (Directora RRHH - Sponsor)" }),
                new Paragraph({ text: "✅ Luis Morales (Director Financiero)" }),
                new Paragraph({ text: "" }),
                new Paragraph({ text: "" }),
                
                // C004 - RECHAZADO
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "SOLICITUD C004 - RECHAZADA ❌",
                            bold: true,
                            size: 26,
                            color: "EF4444"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Título: ", bold: true }),
                        new TextRun({ text: "Módulo de Banco de Horas" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Solicitante: ", bold: true }),
                        new TextRun({ text: "Dir. RRHH Argentina" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Fecha Solicitud: ", bold: true }),
                        new TextRun({ text: "16-Junio-2026" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Fecha Rechazo: ", bold: true }),
                        new TextRun({ text: "19-Junio-2026" })
                    ]
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Descripción:", bold: true })
                    ]
                }),
                new Paragraph({
                    text: "Implementar módulo de 'banco de horas' para Argentina donde empleados pueden acumular horas extra y canjear por tiempo libre."
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Impacto Proyectado:", bold: true })
                    ]
                }),
                new Paragraph({ text: "• Costo: +$5M (5% del presupuesto)" }),
                new Paragraph({ text: "• Tiempo: +3 semanas (desarrollo complejo)" }),
                new Paragraph({ text: "• Alcance: 20+ pantallas, integración nómina" }),
                new Paragraph({ text: "• Riesgo: Alto - Complejidad regulatoria Argentina" }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Razones del Rechazo:", bold: true })
                    ]
                }),
                new Paragraph({ text: "1. Alcance Nice-to-Have: No es requisito crítico del negocio" }),
                new Paragraph({ text: "2. Alto Costo-Beneficio: Inversión desproporcionada vs. valor" }),
                new Paragraph({ text: "3. Complejidad: Requiere integración profunda con nómina" }),
                new Paragraph({ text: "4. Impacto Cronograma: +3 semanas retrasaría go-live" }),
                new Paragraph({ text: "5. Presupuesto: Consumiría 38% de reserva de contingencia" }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Alternativa Aprobada:", bold: true })
                    ]
                }),
                new Paragraph({
                    text: "Proceso manual en Fase 1, módulo automático diferido a Fase 2 (post-lanzamiento)."
                }),
                new Paragraph({ text: "" }),
                new Paragraph({ text: "" }),
                
                // Impacto Total
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "IMPACTO TOTAL DE CAMBIOS APROBADOS",
                            bold: true,
                            size: 28,
                            color: "1F4788"
                        })
                    ],
                    heading: HeadingLevel.HEADING_2
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Costo Total: ", bold: true }),
                        new TextRun({ text: "+$7M (7% del presupuesto original)" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Cronograma: ", bold: true }),
                        new TextRun({ text: "+5 semanas (si ejecutan secuencialmente)" })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Alcance: ", bold: true }),
                        new TextRun({ text: "+15% funcionalidades adicionales" })
                    ]
                }),
                new Paragraph({ text: "" }),
                new Paragraph({ text: "" }),
                
                // Firma
                new Paragraph({
                    children: [
                        new TextRun({ text: "________________________________", size: 20 })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Firma: Sebastian Briceño", bold: true })
                    ]
                }),
                new Paragraph({ text: "Jefe de Proyecto" }),
                new Paragraph({ text: "GPY2202 - Grupo 15" }),
                new Paragraph({ text: "DUOC UC - Abril 2026" })
            ]
        }]
    });
    
    // Generar y descargar
    docx.Packer.toBlob(doc).then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'GPY2202_Exp2_S6_solicitudes_cambio_grupo15.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
}

// ========================================
// 5. DESCARGAR TODOS LOS DOCUMENTOS
// ========================================
function descargarTodosDocumentos() {
    // Verificar librerías
    if (typeof XLSX === 'undefined' || typeof docx === 'undefined') {
        alert('Error: Librerías no cargadas. Por favor recarga la página.');
        return;
    }
    
    // Mostrar mensaje
    alert('Se descargarán los 4 documentos:\n\n1. Matriz de Riesgos (Excel .xlsx)\n2. Informe de Monitoreo (Word .docx)\n3. Informe de Performance (Word .docx)\n4. Solicitudes de Cambio (Word .docx)\n\nHaz clic en Aceptar para iniciar las descargas.');
    
    // Descargar con delay entre cada uno
    setTimeout(() => descargarMatrizRiesgos(), 200);
    setTimeout(() => descargarInformeMonitoreo(), 1500);
    setTimeout(() => descargarInformePerformance(), 3000);
    setTimeout(() => descargarSolicitudesCambio(), 4500);
}

// Logging para debug
console.log('✅ downloads.js cargado - Funciones de descarga disponibles');
console.log('📦 Formatos: Excel (.xlsx), Word (.docx)');
console.log('📚 Librerías requeridas: SheetJS (XLSX), docx.js');
