# MATRIZ DE TRAZABILIDAD DE REQUISITOS

---

## INFORMACIÓN DEL PROYECTO

| Campo | Detalle |
|-------|---------|
| **ID del Proyecto** | KONECTA-INT-2024-001 |
| **Nombre del Proyecto** | Desarrollo de Intranet Corporativa 2.0 |
| **Fecha de Documento** | 27 de Marzo de 2026 |
| **Jefe de Proyecto** | Sebastian Briceño |
| **Versión** | 1.0 |

---

## PROPÓSITO DE LA MATRIZ

Esta matriz de trazabilidad vincula los requisitos del proyecto con sus orígenes, entregables, casos de prueba y stakeholders responsables, asegurando que todos los requisitos sean gestionados, desarrollados, probados y aceptados apropiadamente.

---

## MATRIZ DE TRAZABILIDAD

| ID | Sub-ID | Descripción del Requisito | Versión | Estado Actual | Última Fecha del Estado | Criterios de Aceptación | Stakeholder | Prioridad |
|----|--------|---------------------------|---------|---------------|-------------------------|-------------------------|-------------|-----------|
| REQ-001 | RF-01 | **Gestión de Usuarios y Autenticación**: Sistema de autenticación mediante Single Sign-On (SSO) integrado con Active Directory corporativo | 1.0 | Aprobado | 15-03-2026 | - Los usuarios inician sesión con credenciales corporativas sin usuario/contraseña adicional<br>- Validación de roles y permisos correcta<br>- Soporte MFA opcional<br>- Cierre automático tras 30 min de inactividad | Director de TI | Alta |
| REQ-002 | RF-02 | **Portal de Información Regionalizado**: Visualización automática de contenido corporativo y específico según país del empleado (Chile, Argentina, Brasil, Colombia) | 1.0 | Aprobado | 15-03-2026 | - Detección automática de país del usuario<br>- Visualización de noticias corporativas y regionales<br>- Políticas y beneficios específicos por país<br>- Calendario de eventos corporativos y regionales | Dir. Comunicaciones | Alta |
| REQ-003 | RF-03.1 | **Solicitud de Vacaciones**: Módulo para solicitar vacaciones con workflow de aprobación multinivel | 1.0 | Aprobado | 15-03-2026 | - Formulario de solicitud funcional<br>- Visualización de saldo disponible<br>- Workflow de aprobación operativo<br>- Notificaciones de estado | Director de RRHH | Crítica |
| REQ-004 | RF-03.2 | **Descarga de Liquidaciones**: Acceso a liquidaciones de sueldo de últimos 12 meses en formato PDF | 1.0 | Aprobado | 15-03-2026 | - Descarga de liquidaciones en PDF<br>- Historial de 12 meses<br>- Seguridad: solo acceso al titular<br>- PDF encriptado | Director de RRHH | Crítica |
| REQ-005 | RF-03.3 | **Solicitud de Certificados**: Generación automática de certificados laborales (antigüedad, renta, cotizaciones) | 1.0 | Aprobado | 15-03-2026 | - Generación automática de certificados<br>- Formatos: antigüedad, renta, cotizaciones<br>- Descarga inmediata en PDF<br>- Marca de agua de seguridad | Director de RRHH | Alta |
| REQ-006 | RF-03.4 | **Actualización de Datos Personales**: Empleados pueden actualizar datos de contacto (teléfono, dirección, contacto de emergencia) | 1.0 | Aprobado | 15-03-2026 | - Modificación de teléfono, dirección<br>- Actualización de contacto de emergencia<br>- Cambios se reflejan inmediatamente<br>- Notificación a RRHH de cambios | Director de RRHH | Media |
| REQ-007 | RF-03.5 | **Consulta de Evaluaciones**: Acceso a historial de evaluaciones de desempeño del empleado | 1.0 | Aprobado | 15-03-2026 | - Visualización de evaluaciones pasadas<br>- Historial completo del empleado<br>- Solo acceso del titular<br>- Formato legible (PDF o web) | Director de RRHH | Media |
| REQ-008 | RF-04 | **Sistema de Comunicación Interna**: Canal único para noticias, anuncios, encuestas con segmentación de audiencias | 1.0 | Aprobado | 15-03-2026 | - Publicación de noticias con categorización<br>- Notificaciones push operativas<br>- Comentarios y reacciones<br>- Encuestas funcionales | Dir. Comunicaciones | Alta |
| REQ-009 | RF-05 | **Directorio Corporativo**: Base de datos searchable de 2,700 empleados con perfiles y organigrama | 1.0 | Aprobado | 15-03-2026 | - Búsqueda por nombre, área, ubicación, cargo<br>- Perfil con foto, contacto, jefe directo<br>- Organigrama interactivo<br>- Actualización en tiempo real con AD | Director de TI | Alta |
| REQ-010 | RF-06 | **Gestión de Contenidos (CMS)**: Panel administrativo para gestión de contenidos con workflow de aprobación | 1.0 | Aprobado | 15-03-2026 | - Editor WYSIWYG funcional<br>- Workflow de aprobación operativo<br>- Programación de publicaciones<br>- Control de visibilidad por país/área | Dir. Comunicaciones | Alta |
| REQ-011 | RF-07 | **Repositorio de Documentos**: Biblioteca centralizada de documentos corporativos con búsqueda y control de versiones | 1.0 | Aprobado | 15-03-2026 | - Navegación por categorías<br>- Búsqueda funcional<br>- Control de versiones operativo<br>- Permisos por roles | Área Legal | Media |
| REQ-012 | RF-08 | **Módulo de Soporte Técnico**: Sistema de tickets para solicitudes de soporte con seguimiento de estado | 1.0 | Aprobado | 15-03-2026 | - Creación de tickets funcional<br>- Seguimiento de estado<br>- Notificaciones automáticas<br>- Base de conocimientos | Director de TI | Media |
| REQ-013 | RF-09 | **Dashboard Personalizado**: Página principal con información relevante para cada usuario (noticias, tareas pendientes, accesos rápidos) | 1.0 | Aprobado | 15-03-2026 | - Dashboard personalizado por usuario<br>- Widgets configurables<br>- Información en tiempo real<br>- Accesos rápidos funcionales | Director de TI | Alta |
| REQ-014 | RF-10 | **Soporte Multiidioma**: Interfaz disponible en español y portugués con detección automática según país | 1.0 | Aprobado | 15-03-2026 | - Interfaz completa en español y portugués<br>- Detección automática (Brasil=PT)<br>- Cambio manual de idioma<br>- Contenidos en ambos idiomas | Dir. Comunicaciones | Alta |
| REQ-015 | RF-11 | **Diseño Responsive**: Accesibilidad desde desktop, tablet y smartphone con funcionalidades core disponibles | 1.0 | Aprobado | 15-03-2026 | - Adaptativo en desktop, tablet, móvil<br>- Funcionalidades core en todos los dispositivos<br>- Tiempos de carga optimizados<br>- Touch-friendly | Diseñador UX/UI | Crítica |
| REQ-016 | RNF-01 | **Rendimiento**: Tiempo de carga inicial ≤3 seg, soporte 2,700 usuarios concurrentes, respuesta de transacciones ≤2 seg | 1.0 | Aprobado | 15-03-2026 | - Carga página principal <3 seg<br>- 2,700 usuarios sin degradación<br>- Transacciones <2 seg<br>- Búsquedas <1 seg | Director de TI | Crítica |
| REQ-017 | RNF-02 | **Disponibilidad**: Uptime del 99.5% con backups automáticos diarios | 1.0 | Aprobado | 15-03-2026 | - Disponibilidad del 99.5%<br>- Ventanas de mantenimiento fuera de horario laboral<br>- Backups diarios con retención 30 días | Director de TI | Crítica |
| REQ-018 | RNF-03 | **Escalabilidad**: Arquitectura preparada para 5,000 usuarios y 500 GB de almacenamiento | 1.0 | Aprobado | 15-03-2026 | - Soporta hasta 5,000 usuarios<br>- Almacenamiento de 500 GB<br>- Escalamiento horizontal posible | Director de TI | Alta |
| REQ-019 | RNF-04 | **Seguridad**: HTTPS/TLS 1.3, integración con AD, RBAC, logs de auditoría, cumplimiento normativo 4 países | 1.0 | Aprobado | 15-03-2026 | - Encriptación HTTPS/TLS 1.3<br>- Autenticación con AD<br>- RBAC implementado<br>- Auditoría operativa<br>- Cumplimiento legal | Comité de Seguridad | Crítica |
| REQ-020 | RNF-05 | **Usabilidad**: Navegación intuitiva (máx 3 clics), curva de aprendizaje baja, cumplimiento WCAG 2.1 AA | 1.0 | Aprobado | 15-03-2026 | - Tareas básicas sin capacitación<br>- Máximo 3 clics a funcionalidades<br>- Cumple WCAG 2.1 AA<br>- Mensajes de error claros | Diseñador UX/UI | Alta |
| REQ-021 | RNF-06 | **Compatibilidad**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ en Windows, macOS, iOS, Android | 1.0 | Aprobado | 15-03-2026 | - Funciona en 4 navegadores principales<br>- Compatible con OS mencionados<br>- Resoluciones desde 320px | Director de TI | Alta |
| REQ-022 | RNF-07 | **Mantenibilidad**: Código documentado, arquitectura modular, logs estructurados, monitoreo en tiempo real | 1.0 | Aprobado | 15-03-2026 | - Código comentado<br>- Arquitectura modular<br>- Logs para troubleshooting<br>- Dashboard de monitoreo | Director de TI | Media |
| REQ-023 | INT-01 | **Integración con Active Directory**: Para autenticación SSO y sincronización de datos de empleados | 1.0 | Aprobado | 15-03-2026 | - Autenticación via AD exitosa<br>- Sincronización de usuarios automática<br>- Actualización en tiempo real<br>- Pruebas con 100 usuarios | Director de TI | Crítica |
| REQ-024 | INT-02 | **Integración con Sistema de RRHH**: Para datos de empleados, vacaciones, evaluaciones | 1.0 | En Análisis | 20-03-2026 | - Consulta de saldo de vacaciones<br>- Envío de solicitudes de vacaciones<br>- Consulta de evaluaciones<br>- Sincronización bidireccional | Director de RRHH | Crítica |
| REQ-025 | INT-03 | **Integración con Sistema de Nómina**: Para descarga de liquidaciones de sueldo | 1.0 | En Análisis | 20-03-2026 | - Descarga de liquidaciones exitosa<br>- Historial de 12 meses<br>- Formato PDF correcto<br>- Seguridad validada | Director de RRHH | Crítica |
| REQ-026 | CAL-01 | **Pruebas de Carga**: Simulación de 3,000 usuarios concurrentes sin fallos | 1.0 | Pendiente | - | - Simulación de 3,000 usuarios<br>- Sin errores de sistema<br>- Tiempos de respuesta aceptables<br>- Identificación de cuellos de botella | Líder de QA | Alta |
| REQ-027 | CAL-02 | **Pruebas de Seguridad**: Auditoría de seguridad y pruebas de penetración sin vulnerabilidades críticas | 1.0 | Pendiente | - | - Auditoría completada<br>- Pruebas de penetración realizadas<br>- Sin vulnerabilidades críticas<br>- Reporte de seguridad aprobado | Comité de Seguridad | Crítica |
| REQ-028 | CAL-03 | **Pruebas de Usabilidad**: Sesiones con usuarios reales, satisfacción mínima 4/5 | 1.0 | Pendiente | - | - Sesiones con al menos 20 usuarios<br>- Usuarios de los 4 países<br>- Satisfacción ≥ 4/5<br>- Feedback documentado | Diseñador UX/UI | Alta |
| REQ-029 | CAL-04 | **Pruebas de Integración**: Validación de todas las integraciones con sistemas legacy operativas | 1.0 | Pendiente | - | - Todas las APIs operativas<br>- Datos sincronizados correctamente<br>- Manejo de errores validado<br>- Tiempos de respuesta aceptables | Director de TI | Crítica |
| REQ-030 | DOC-01 | **Documentación Técnica**: Manual técnico, arquitectura, APIs, procedimientos de operación | 1.0 | Pendiente | - | - Manual técnico completo<br>- Documentación de arquitectura<br>- Documentación de APIs<br>- Procedimientos de troubleshooting | Arquitecto SW | Media |
| REQ-031 | DOC-02 | **Documentación de Usuario**: Manual de usuario, guías rápidas, FAQs, videos tutoriales | 1.0 | Pendiente | - | - Manual de usuario en español y portugués<br>- 5 videos tutoriales<br>- Guías rápidas por módulo<br>- FAQs con 30+ preguntas | Analista de Negocio | Media |
| REQ-032 | CAP-01 | **Capacitación de Usuarios Finales**: Capacitación de 2,700 empleados en uso de la intranet | 1.0 | Pendiente | - | - Sesiones en los 4 países<br>- 100% de usuarios clave capacitados<br>- Materiales entregados<br>- Asistencia mínima 80% | Director de RRHH | Alta |
| REQ-033 | CAP-02 | **Capacitación de Administradores**: Capacitación técnica para administradores de contenido y soporte TI | 1.0 | Pendiente | - | - Taller de 4 horas para admins contenido<br>- Taller de 8 horas para soporte TI<br>- Documentación entregada<br>- Evaluación post-capacitación aprobada | Director de TI | Alta |
| REQ-034 | INF-01 | **Infraestructura de Producción**: Ambiente cloud configurado con alta disponibilidad, backups y monitoreo | 1.0 | Pendiente | - | - Infraestructura en AWS o Azure<br>- Alta disponibilidad configurada<br>- Backups automáticos<br>- Monitoreo 24/7 operativo | Director de TI | Crítica |
| REQ-035 | MIG-01 | **Plan de Go-Live**: Estrategia de lanzamiento, migración de datos, plan de rollback | 1.0 | Pendiente | - | - Plan de go-live documentado<br>- Estrategia de migración definida<br>- Plan de rollback probado<br>- Comunicación a usuarios | Jefe de Proyecto | Crítica |

---

## LEYENDA DE ESTADOS

| Estado | Descripción |
|--------|-------------|
| **Aprobado** | Requisito validado y aprobado por stakeholders |
| **En Análisis** | Requisito en proceso de análisis técnico o de negocio |
| **Pendiente** | Requisito identificado pero aún no trabajado |
| **En Desarrollo** | Requisito en fase de implementación |
| **En Pruebas** | Requisito implementado, en fase de testing |
| **Completado** | Requisito implementado, probado y aceptado |
| **Cancelado** | Requisito descartado por cambio de alcance |

---

## LEYENDA DE PRIORIDADES

| Prioridad | Descripción |
|-----------|-------------|
| **Crítica** | Requisito indispensable sin el cual el sistema no puede funcionar. Bloquea go-live. |
| **Alta** | Requisito muy importante para el éxito del proyecto. Debe estar en go-live. |
| **Media** | Requisito importante pero puede postergarse a fase 2 si es necesario. |
| **Baja** | Requisito deseable, nice-to-have, puede postergarse sin impacto crítico. |

---

## TRAZABILIDAD A ENTREGABLES

| ID Requisito | Entregable Asociado | Responsable | Sprint / Fase |
|--------------|---------------------|-------------|---------------|
| REQ-001 | E-09: Código Fuente - Sprint 1 | Equipo Desarrollo | Sprint 1 (Semana 7) |
| REQ-002 | E-09: Código Fuente - Sprint 1 | Equipo Desarrollo | Sprint 1 (Semana 7) |
| REQ-003 | E-10: Código Fuente - Sprint 2 | Equipo Desarrollo | Sprint 2 (Semana 10) |
| REQ-004 | E-10: Código Fuente - Sprint 2 | Equipo Desarrollo | Sprint 2 (Semana 10) |
| REQ-005 | E-10: Código Fuente - Sprint 2 | Equipo Desarrollo | Sprint 2 (Semana 10) |
| REQ-006 | E-10: Código Fuente - Sprint 2 | Equipo Desarrollo | Sprint 2 (Semana 10) |
| REQ-007 | E-10: Código Fuente - Sprint 2 | Equipo Desarrollo | Sprint 2 (Semana 10) |
| REQ-008 | E-10: Código Fuente - Sprint 2 | Equipo Desarrollo | Sprint 2 (Semana 10) |
| REQ-009 | E-11: Código Fuente - Sprint 3 | Equipo Desarrollo | Sprint 3 (Semana 12) |
| REQ-010 | E-11: Código Fuente - Sprint 3 | Equipo Desarrollo | Sprint 3 (Semana 12) |
| REQ-011 | E-11: Código Fuente - Sprint 3 | Equipo Desarrollo | Sprint 3 (Semana 12) |
| REQ-012 | E-11: Código Fuente - Sprint 3 | Equipo Desarrollo | Sprint 3 (Semana 12) |
| REQ-013 | E-09: Código Fuente - Sprint 1 | Equipo Desarrollo | Sprint 1 (Semana 7) |
| REQ-014 | E-09: Código Fuente - Sprint 1 | Equipo Desarrollo | Sprint 1 (Semana 7) |
| REQ-015 | E-07: Diseños UI/UX | Diseñador UX/UI | Diseño (Semana 4) |
| REQ-016 a REQ-022 | E-06: Diseño de Arquitectura | Arquitecto SW | Diseño (Semana 4) |
| REQ-023 | E-12: Integraciones Completadas | Equipo Desarrollo | Integraciones (Semana 13) |
| REQ-024 | E-12: Integraciones Completadas | Equipo Desarrollo | Integraciones (Semana 13) |
| REQ-025 | E-12: Integraciones Completadas | Equipo Desarrollo | Integraciones (Semana 13) |
| REQ-026 | E-14: Informe de Pruebas | Equipo QA | Pruebas (Semana 14) |
| REQ-027 | E-14: Informe de Pruebas | Consultor Seguridad | Pruebas (Semana 14) |
| REQ-028 | E-14: Informe de Pruebas | Equipo QA | UAT (Semana 15) |
| REQ-029 | E-14: Informe de Pruebas | Equipo QA | Pruebas (Semana 14) |
| REQ-030 | E-16: Manual Técnico | Arquitecto SW | Documentación (Semana 17) |
| REQ-031 | E-15: Manual de Usuario, E-17: Videos | Analista de Negocio | Documentación (Semana 16-17) |
| REQ-032 | E-18: Plan de Capacitación Ejecutado | RRHH | Capacitación (Semana 18) |
| REQ-033 | E-18: Plan de Capacitación Ejecutado | TI | Capacitación (Semana 18) |
| REQ-034 | E-19: Ambiente de Producción | DevOps | Infraestructura (Semana 18) |
| REQ-035 | E-20: Sistema en Producción | Jefe de Proyecto | Go-Live (Semana 19) |

---

## APROBACIONES

| Nombre | Rol | Firma | Fecha |
|--------|-----|-------|-------|
| Sebastian Briceño | Jefe de Proyecto | _____________ | ___/___/2026 |
| Sebastian Briceño | Director de TI | _____________ | ___/___/2026 |
| Sebastian Briceño | Director de RRHH | _____________ | ___/___/2026 |

