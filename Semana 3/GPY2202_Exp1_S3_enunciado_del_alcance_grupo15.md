# ENUNCIADO DEL ALCANCE DEL PROYECTO

---

## INFORMACIÓN DEL PROYECTO

| Campo | Detalle |
|-------|---------|
| **ID del Proyecto** | KONECTA-INT-2024-001 |
| **Nombre del Proyecto** | Desarrollo de Intranet Corporativa 2.0 |
| **Fecha de Inicio** | 01 de Abril de 2026 |
| **Jefe de Proyecto** | Sebastian Briceño |
| **Responsable del Proyecto** | Dirección de Tecnología e Innovación |

---

## 1. OBJETIVOS ESTRATÉGICOS

Este proyecto se alinea con los siguientes objetivos estratégicos de Konecta:

### Objetivo Estratégico 1: Transformación Digital
Modernizar las plataformas tecnológicas de la empresa para mejorar la eficiencia operativa y la experiencia de los empleados, posicionando a Konecta como líder en innovación digital en el sector de telecomunicaciones.

**Aporte del proyecto**: La intranet 2.0 es un componente clave de la transformación digital interna, digitalizando procesos manuales y centralizando información corporativa.

### Objetivo Estratégico 2: Integración Regional
Fortalecer la cohesión organizacional entre las operaciones de Chile, Argentina, Brasil y Colombia, promoviendo una cultura corporativa unificada con sensibilidad a las particularidades locales.

**Aporte del proyecto**: La intranet proporcionará una plataforma común para todos los países, con contenido regionalizado que respeta las diferencias culturales y operativas.

### Objetivo Estratégico 3: Excelencia Operacional
Optimizar procesos internos para reducir costos operativos, mejorar la productividad y acelerar la toma de decisiones mediante acceso oportuno a información.

**Aporte del proyecto**: Automatización de transacciones de RRHH y centralización de documentos corporativos reducirá tiempos de gestión administrativa en un 40%.

### Objetivo Estratégico 4: Experiencia del Empleado
Mejorar el compromiso y satisfacción de los empleados mediante herramientas modernas, accesibles y fáciles de usar que faciliten su trabajo diario.

**Aporte del proyecto**: Interfaz intuitiva, acceso móvil y autoservicio empoderarán a los empleados y mejorarán su experiencia laboral.

---

## 2. OBJETIVOS DEL PROYECTO

### Objetivo General
Desarrollar e implementar una plataforma de intranet corporativa moderna, accesible y regionalizada que sirva como canal único de comunicación y autoservicio para los 2,700 empleados de Konecta en América Latina.

### Objetivos Específicos Medibles

| ID | Objetivo | Métrica de Éxito | Meta |
|----|----------|------------------|------|
| OP-1 | Incrementar la adopción de la intranet | Tasa de uso activo mensual | 90% de empleados |
| OP-2 | Reducir tiempos de gestión administrativa | Tiempo promedio para transacciones de RRHH | Reducción del 60% |
| OP-3 | Centralizar comunicaciones corporativas | Porcentaje de anuncios publicados en intranet | 100% |
| OP-4 | Mejorar satisfacción de usuarios | NPS (Net Promoter Score) | ≥ 40 puntos |
| OP-5 | Regionalizar información | Contenido específico por país | 100% de países con contenido local |
| OP-6 | Automatizar procesos de RRHH | Transacciones digitales vs manuales | 80% digital |
| OP-7 | Garantizar accesibilidad multiplataforma | Accesos desde dispositivos móviles | ≥ 40% de accesos |

---

## 3. ALCANCE DEL PROYECTO

### Descripción del Alcance
El proyecto incluye el análisis, diseño, desarrollo, implementación y puesta en marcha de una plataforma web de intranet corporativa con las siguientes características:

### 3.1 Funcionalidades Incluidas

#### A. Módulo de Autenticación y Perfiles
- Single Sign-On (SSO) integrado con Active Directory corporativo
- Gestión de roles y permisos (Administrador, Editor de contenido, Gerente, Empleado)
- Perfil de usuario personalizable
- Control de sesiones y auditoría de accesos

#### B. Portal de Información Regionalizado
- Página principal con dashboard personalizado por usuario
- Sección de noticias corporativas
- Sección de noticias y contenido regional por país (Chile, Argentina, Brasil, Colombia)
- Calendario de eventos corporativos y regionales
- Búsqueda global de contenidos
- Etiquetas y categorización de contenidos

#### C. Módulo de Autoservicio de RRHH
- **Solicitud y aprobación de vacaciones**: Formulario, workflow de aprobación, visualización de saldo
- **Descarga de liquidaciones de sueldo**: Últimos 12 meses en formato PDF seguro
- **Solicitud de certificados laborales**: Certificado de antigüedad, certificado de renta, cotizaciones previsionales
- **Actualización de datos personales**: Contacto, dirección, contacto de emergencia
- **Consulta de evaluaciones de desempeño**: Historial de evaluaciones

#### D. Sistema de Comunicación Interna
- Publicación de noticias con editor rich-text (texto, imágenes, videos, archivos)
- Comentarios y reacciones en publicaciones
- Notificaciones push para anuncios importantes
- Encuestas y formularios de feedback
- Suscripción a categorías de interés
- Sistema de megafonía digital para alertas críticas

#### E. Directorio Corporativo
- Búsqueda avanzada de empleados (nombre, área, ubicación, cargo, skills)
- Perfil detallado de empleados (foto, cargo, área, contacto, jefe directo)
- Organigrama interactivo por área
- Visualización de equipo de trabajo y jefe directo

#### F. Repositorio de Documentos
- Biblioteca de documentos organizados por categorías (políticas, procedimientos, formularios, manuales)
- Búsqueda de documentos por nombre, tags o contenido
- Control de versiones
- Permisos de acceso (público, por área, confidencial)
- Descarga de documentos

#### G. Sistema de Gestión de Contenidos (CMS)
- Panel de administración para creación y edición de contenidos
- Workflow de aprobación de contenidos
- Programación de publicaciones
- Gestión de banners de página principal
- Control de visibilidad por país o área
- Estadísticas de visualización de contenidos

#### H. Módulo de Soporte Técnico
- Sistema de tickets para solicitudes de soporte
- Categorización de solicitudes (TI, RRHH, Facilities, otros)
- Seguimiento de estado de tickets
- Base de conocimientos y FAQs
- Rating de satisfacción

#### I. Diseño Responsive y Accesibilidad
- Diseño adaptativo para desktop, tablet y smartphone
- Cumplimiento de estándares WCAG 2.1 nivel AA
- Soporte multiidioma (español y portugués)
- Modo claro y oscuro (opcional)

#### J. Integraciones
- Integración con Active Directory/LDAP para autenticación
- Integración con sistema de RRHH para datos de empleados y vacaciones
- Integración con sistema de nómina para liquidaciones de sueldo
- API REST para futuras integraciones

#### K. Infraestructura y Seguridad
- Despliegue en infraestructura cloud (AWS o Azure)
- Certificado SSL/TLS para conexiones seguras
- Backups automáticos diarios
- Monitoreo de disponibilidad y rendimiento
- Logs de auditoría y seguridad

---

## 4. ENTREGABLES DEL PROYECTO

| ID | Entregable | Descripción | Responsable | Fecha Estimada |
|----|-----------|-------------|-------------|----------------|
| E-01 | Acta de Constitución del Proyecto | Documento formal de inicio del proyecto | Sebastian Briceño | Semana 1 |
| E-02 | Plan de Gestión del Proyecto | Cronograma, presupuesto, plan de riesgos, plan de comunicaciones | Sebastian Briceño | Semana 2 |
| E-03 | Documento de Requisitos | Requisitos funcionales, no funcionales y reglas de negocio | Sebastian Briceño | Semana 3 |
| E-04 | Matriz de Trazabilidad | Trazabilidad de requisitos a entregables | Sebastian Briceño | Semana 3 |
| E-05 | EDT (WBS) | Estructura de desglose de trabajo | Sebastian Briceño | Semana 3 |
| E-06 | Diseño de Arquitectura | Arquitectura técnica, diagrama de componentes, stack tecnológico | Arquitecto de Software | Semana 4 |
| E-07 | Diseños UI/UX | Wireframes, mockups y prototipos interactivos | Diseñador UX/UI | Semana 4 |
| E-08 | Plan de Pruebas | Estrategia, casos de prueba, criterios de aceptación | Líder de QA | Semana 5 |
| E-09 | Código Fuente - Sprint 1 | Módulos de autenticación, perfiles y estructura base | Equipo de Desarrollo | Semana 7 |
| E-10 | Código Fuente - Sprint 2 | Módulos de RRHH y comunicaciones | Equipo de Desarrollo | Semana 10 |
| E-11 | Código Fuente - Sprint 3 | Directorio, documentos y CMS | Equipo de Desarrollo | Semana 12 |
| E-12 | Integraciones Completadas | APIs con sistemas legacy operativas | Equipo de Desarrollo | Semana 13 |
| E-13 | Ambiente de QA | Ambiente de pruebas configurado con datos de prueba | DevOps | Semana 8 |
| E-14 | Informe de Pruebas | Resultados de pruebas funcionales, integración, seguridad y carga | Equipo QA | Semana 14 |
| E-15 | Manual de Usuario | Documentación para usuarios finales | Analista de Negocio | Semana 16 |
| E-16 | Manual Técnico | Documentación técnica y de operación | Arquitecto de Software | Semana 17 |
| E-17 | Videos Tutoriales | 5 videos de capacitación por módulo | Equipo de Capacitación | Semana 17 |
| E-18 | Plan de Capacitación Ejecutado | Capacitaciones realizadas en los 4 países | RRHH | Semana 18 |
| E-19 | Ambiente de Producción | Infraestructura productiva configurada y operativa | DevOps | Semana 18 |
| E-20 | Sistema en Producción | Intranet 2.0 en Go-Live | Equipo de Proyecto | Semana 19 |
| E-21 | Informe de Cierre del Proyecto | Lecciones aprendidas, entrega formal, documentación de cierre | Jefe de Proyecto | Semana 22 |

---

## 5. HITOS DEL PROYECTO

| Hito | Fecha | Descripción |
|------|-------|-------------|
| **H1: Inicio del Proyecto** | 01 Abril 2026 | Kick-off meeting, equipo conformado, acta aprobada |
| **H2: Requisitos Aprobados** | 19 Abril 2026 | Documento de requisitos validado por stakeholders |
| **H3: Diseño Completado** | 26 Abril 2026 | Arquitectura y diseños UI/UX aprobados |
| **H4: Sprint 1 Completado** | 17 Mayo 2026 | Módulos core desarrollados (auth, base) |
| **H5: Sprint 2 Completado** | 07 Junio 2026 | Módulos RRHH y comunicaciones operativos |
| **H6: Sprint 3 Completado** | 21 Junio 2026 | Directorio, documentos y CMS finalizados |
| **H7: Integraciones Operativas** | 28 Junio 2026 | Todas las integraciones validadas |
| **H8: Pruebas UAT Completadas** | 12 Julio 2026 | Usuarios piloto completan pruebas exitosamente |
| **H9: Capacitación Finalizada** | 26 Julio 2026 | 100% de usuarios clave capacitados |
| **H10: Go-Live** | 09 Agosto 2026 | Sistema en producción disponible para todos |
| **H11: Cierre del Proyecto** | 31 Agosto 2026 | Proyecto cerrado administrativamente |

---

## 6. LO QUE NO SE INCLUIRÁ EN EL PROYECTO

Para mantener el alcance controlado y asegurar la entrega en tiempo y forma, los siguientes elementos están **EXCLUIDOS** del alcance:

### Funcionalidades No Incluidas
1. **Aplicaciones móviles nativas**: Solo web responsive, no apps iOS/Android.
2. **Integración con redes sociales externas**: Sin login con Google/Facebook, sin publicación en redes externas.
3. **Sistema de gestión de proyectos**: No incluye herramientas tipo Jira, Trello o MS Project.
4. **Plataforma de e-learning/LMS**: Cursos online quedan fuera del alcance.
5. **Sistema de gestión documental avanzado**: No incluye workflows complejos de aprobación de documentos.
6. **Herramientas de colaboración avanzadas**: Sin videoconferencias, sin pizarras colaborativas, sin edición simultánea de documentos.
7. **Módulo de nómina**: Solo consulta de liquidaciones, no cálculo de nómina.
8. **Módulo de reclutamiento**: No incluye postulaciones, evaluación de candidatos.
9. **Módulo de evaluación de desempeño**: Solo consulta de evaluaciones pasadas, no realización de nuevas evaluaciones.
10. **Business Intelligence/Reportería avanzada**: Sin dashboards de analítica de negocio, solo métricas básicas de uso de la intranet.
11. **Marketplace interno**: Sin compra/venta entre empleados.
12. **Gamificación**: Sin puntos, badges o rankings.

### Integraciones No Incluidas
1. **Integración con sistemas de evaluación de desempeño**: Solo lectura, no escritura.
2. **Integración con sistemas de capacitación**: Fuera de alcance.
3. **Integración con sistemas de gestión de proyectos**: Fuera de alcance.
4. **Integración con plataformas de comunicación externa** (Slack, Teams, WhatsApp).

### Aspectos Técnicos No Incluidos
1. **Desarrollo de APIs públicas**: Solo APIs privadas para uso interno.
2. **Migración de contenido de intranet antigua**: Se partirá con contenido nuevo, sin migración masiva.
3. **Customización por usuario de la interfaz**: Layout estándar, no personalizable.
4. **Modo offline/Progressive Web App (PWA)**: Requiere conexión a internet.

### Servicios No Incluidos Post-Go-Live
1. **Soporte 24/7**: Soporte en horario laboral (8:00-20:00) de cada país.
2. **Mantenimiento evolutivo post-proyecto**: Nuevas funcionalidades después de go-live requieren nuevo proyecto.
3. **Capacitaciones recurrentes**: Solo capacitación inicial, capacitaciones posteriores a cargo de RRHH.

---

## 7. SUPUESTOS DEL PROYECTO

Los siguientes supuestos se consideran verdaderos para la planificación del proyecto:

1. **Disponibilidad de stakeholders**: Los stakeholders clave estarán disponibles para reuniones de validación según cronograma.
2. **Acceso a sistemas legacy**: Se tendrá acceso a sistemas de RRHH y nómina para análisis e integración.
3. **Infraestructura cloud disponible**: La empresa cuenta con cuenta activa en AWS o Azure con capacidad suficiente.
4. **Equipo completo**: Los recursos asignados al proyecto estarán disponibles a tiempo completo durante los 5 meses.
5. **Datos actualizados**: Los datos de empleados en sistemas actuales están correctos y actualizados.
6. **Conectividad adecuada**: Los 4 países cuentan con conectividad de red estable para acceder a aplicaciones cloud.
7. **Licencias de software**: Se cuenta con presupuesto para adquirir licencias necesarias (BD, herramientas de desarrollo).
8. **Aprobaciones ágiles**: Los flujos de aprobación de entregables no excederán 3 días hábiles.
9. **Sin cambios regulatorios**: No habrá cambios significativos en leyes de protección de datos durante el proyecto.
10. **Cambios de alcance controlados**: Cualquier cambio de alcance será evaluado formalmente y podría afectar tiempo/costo.

---

## 8. RESTRICCIONES DEL PROYECTO

Las siguientes restricciones limitan las opciones del proyecto:

### Restricciones de Tiempo
- **Plazo fijo**: 5 meses (22 semanas) desde inicio hasta go-live.
- **Fecha límite de go-live**: 09 de Agosto de 2026 (no negociable).
- **Ventanas de mantenimiento**: Despliegues solo en horarios fuera de horario laboral (después de 20:00 hrs).

### Restricciones de Presupuesto
- **Presupuesto fijo**: $100.000.000 CLP sin extensión.
- **Sin contrataciones permanentes**: Solo personal temporal o consultores.
- **Reutilización de infraestructura**: Debe usar infraestructura cloud existente.

### Restricciones Tecnológicas
- **Stack tecnológico**: Debe alinearse con estándares tecnológicos de TI de Konecta.
- **Navegadores soportados**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.
- **Integración con AD**: Obligatorio uso de Active Directory corporativo para autenticación.
- **Hosting en la nube**: No se permiten servidores on-premise.

### Restricciones Regulatorias
- **Cumplimiento normativo**: Debe cumplir leyes de protección de datos de 4 países.
  - Chile: Ley 19.628
  - Argentina: Ley 25.326
  - Brasil: LGPD
  - Colombia: Ley 1581
- **Auditoría de seguridad**: Requerida antes de go-live.

### Restricciones de Recursos Humanos
- **Equipo limitado**: Máximo 12 personas en el equipo de proyecto.
- **Disponibilidad de usuarios para UAT**: Solo 2 semanas para pruebas de usuario.
- **Capacitaciones en horario laboral**: Las capacitaciones no pueden exceder 2 horas por sesión.

### Restricciones Organizacionales
- **Procesos de RRHH establecidos**: No se pueden modificar workflows de aprobación existentes.
- **Estructura organizacional fija**: Áreas y cargos deben reflejar organigrama oficial.
- **Aprobación de Director General**: Cambios mayores requieren aprobación del sponsor.

---

## 9. RIESGOS DEL PROYECTO

Los principales riesgos identificados en esta etapa son:

| ID | Riesgo | Probabilidad | Impacto | Estrategia |
|----|--------|--------------|---------|------------|
| R-01 | Retrasos en integraciones con sistemas legacy | Media | Alto | Análisis técnico temprano, plan B con carga manual temporal |
| R-02 | Cambios frecuentes en requisitos | Alta | Alto | Gestión formal de cambios, baseline de requisitos |
| R-03 | Resistencia al cambio de usuarios | Media | Medio | Plan de gestión del cambio, comunicación constante |
| R-04 | Indisponibilidad de stakeholders clave | Media | Medio | Suplentes designados, anticipación de reuniones |
| R-05 | Problemas de rendimiento con 2,700 usuarios | Media | Alto | Pruebas de carga tempranas, arquitectura escalable |
| R-06 | Vulnerabilidades de seguridad | Baja | Crítico | Auditorías continuas, pruebas de penetración |
| R-07 | Datos de mala calidad en sistemas legacy | Media | Medio | Validación temprana, limpieza de datos |
| R-08 | Sobrecarga del equipo de desarrollo | Media | Medio | Planificación realista, gestión de workload |
| R-09 | Retrasos en aprobaciones | Media | Medio | SLA de aprobaciones, escalamiento definido |
| R-10 | Incompatibilidad tecnológica | Baja | Alto | Pruebas de concepto en etapa temprana |

**Nota**: Un plan detallado de gestión de riesgos será desarrollado en la fase de planificación.

---

## APROBACIONES

Este documento define el alcance del proyecto y sirve como baseline para la gestión de cambios.

| Nombre | Rol | Firma | Fecha |
|--------|-----|-------|-------|
| Sebastian Briceño | Director General (Sponsor) | _____________ | ___/___/2026 |
| Sebastian Briceño | Director de TI | _____________ | ___/___/2026 |
| Sebastian Briceño | Director de RRHH | _____________ | ___/___/2026 |
| Sebastian Briceño | Jefe de Proyecto | _____________ | ___/___/2026 |

