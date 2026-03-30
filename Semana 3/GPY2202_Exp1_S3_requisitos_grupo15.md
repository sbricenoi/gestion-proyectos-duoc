# DOCUMENTACIÓN DE REQUISITOS

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

## 1. NECESIDAD DEL NEGOCIO

### Contexto
Konecta, empresa del rubro de telecomunicaciones con presencia en 4 países de América Latina (Chile, Argentina, Brasil y Colombia), cuenta con 2,700 empleados distribuidos de la siguiente manera:
- **Chile**: 1,500 empleados
- **Argentina**: 300 empleados
- **Brasil**: 500 empleados
- **Colombia**: 400 empleados

### Problemática Actual
La intranet corporativa actual presenta las siguientes limitaciones:
1. **Baja tasa de adopción**: Los empleados fuera de Chile (1,200 empleados, 44% del total) no utilizan regularmente la intranet.
2. **Contenido no regionalizado**: La información disponible no es aplicable ni relevante para las sucursales fuera de Chile.
3. **Falta de funcionalidades transaccionales**: No permite realizar gestiones administrativas comunes (vacaciones, liquidaciones, certificados).
4. **Múltiples canales de comunicación**: No existe un canal único para comunicaciones corporativas, generando dispersión de información.
5. **Ineficiencia operativa**: Procesos manuales que podrían ser automatizados mediante autoservicio.

### Necesidad Identificada
Se requiere desarrollar una nueva plataforma de intranet corporativa que:
- Sea relevante y útil para el 100% de los empleados, independiente de su ubicación geográfica.
- Centralice las comunicaciones corporativas en un único canal.
- Automatice transacciones administrativas internas.
- Mejore la eficiencia operativa y la cohesión organizacional.
- Proporcione información regionalizada según el país de cada empleado.

### Justificación del Negocio
- **ROI esperado**: Reducción del 40% en tiempo dedicado a gestiones administrativas.
- **Mejora en comunicación interna**: 100% de empleados informados en tiempo real.
- **Productividad**: Ahorro estimado de 15 horas/mes por empleado en gestiones administrativas.
- **Cultura organizacional**: Fortalecimiento del sentido de pertenencia en todas las regiones.

---

## 2. REQUISITOS FUNCIONALES

### RF-01: Gestión de Usuarios y Autenticación
**Descripción**: El sistema debe proporcionar autenticación segura mediante Single Sign-On (SSO) integrado con Active Directory corporativo.

**Criterios de Aceptación**:
- Los usuarios inician sesión con sus credenciales corporativas sin necesidad de usuario/contraseña adicional.
- El sistema valida roles y permisos según el perfil del usuario.
- Soporte para autenticación multifactor (MFA) opcional.
- Cierre de sesión automático tras 30 minutos de inactividad.

---

### RF-02: Portal de Información Regionalizado
**Descripción**: La intranet debe mostrar contenido corporativo global y contenido específico según el país del empleado.

**Criterios de Aceptación**:
- Los empleados visualizan automáticamente contenido de su país (Chile, Argentina, Brasil o Colombia).
- Sección de noticias corporativas visible para todos.
- Sección de noticias locales filtrada por país.
- Políticas, procedimientos y beneficios específicos por región.
- Calendario de eventos corporativos y regionales.

---

### RF-03: Autoservicio de Recursos Humanos
**Descripción**: El sistema debe permitir a los empleados realizar transacciones de RRHH de forma autónoma.

**Criterios de Aceptación**:
- **Solicitud de vacaciones**: Formulario, flujo de aprobación multinivel, visualización de saldo.
- **Descarga de liquidaciones**: Acceso a liquidaciones de sueldo de los últimos 12 meses en PDF.
- **Solicitud de certificados laborales**: Generación automática de certificados (antigüedad, renta, cotizaciones).
- **Actualización de datos personales**: Modificación de teléfono, dirección de correo secundaria, contacto de emergencia.
- **Consulta de evaluaciones de desempeño**: Acceso a resultados de evaluaciones anteriores.

---

### RF-04: Sistema de Comunicación Interna
**Descripción**: Canal único para todas las comunicaciones corporativas con segmentación de audiencias.

**Criterios de Aceptación**:
- Publicación de noticias y anuncios con categorización (corporativo, país, área).
- Notificaciones push para anuncios importantes.
- Comentarios y reacciones en publicaciones.
- Encuestas y formularios de feedback.
- Suscripción opcional a categorías de noticias.

---

### RF-05: Directorio Corporativo
**Descripción**: Base de datos searchable de todos los empleados de la organización.

**Criterios de Aceptación**:
- Búsqueda por nombre, apellido, área, cargo, ubicación, habilidades.
- Perfil de empleado con foto, cargo, área, teléfono, correo, ubicación.
- Organigrama interactivo navegable por área.
- Visualización de reporte jerárquico (jefe directo y equipo).

---

### RF-06: Gestión de Contenidos (CMS)
**Descripción**: Panel administrativo para que usuarios autorizados gestionen el contenido de la intranet.

**Criterios de Aceptación**:
- Creación, edición, publicación y eliminación de contenidos.
- Editor WYSIWYG con soporte para texto, imágenes, videos, archivos adjuntos.
- Workflow de aprobación de contenidos antes de publicación.
- Programación de publicaciones futuras.
- Gestión de banners en página principal.
- Control de visibilidad por país o área.

---

### RF-07: Repositorio de Documentos
**Descripción**: Biblioteca centralizada de documentos corporativos organizados por categorías.

**Criterios de Aceptación**:
- Navegación por categorías (políticas, procedimientos, formularios, manuales).
- Búsqueda de documentos por nombre, tags o contenido.
- Control de versiones de documentos.
- Permisos de acceso según roles (público, por área, confidencial).
- Descarga de documentos en formatos originales.

---

### RF-08: Módulo de Soporte Técnico
**Descripción**: Sistema de tickets para solicitudes de soporte de TI y servicios generales.

**Criterios de Aceptación**:
- Creación de tickets con categorías (hardware, software, accesos, otros).
- Seguimiento del estado del ticket (abierto, en proceso, resuelto, cerrado).
- Notificaciones de cambios de estado.
- Base de conocimientos con FAQs.
- Rating de satisfacción al cerrar ticket.

---

### RF-09: Panel de Indicadores (Dashboard)
**Descripción**: Página principal personalizada con información relevante para cada usuario.

**Criterios de Aceptación**:
- Resumen de noticias recientes.
- Tareas pendientes (vacaciones por aprobar, evaluaciones, cursos).
- Accesos rápidos a funciones más usadas.
- Cumpleaños del mes del equipo.
- Indicadores personales (días de vacaciones disponibles, antigüedad).

---

### RF-10: Soporte Multiidioma
**Descripción**: La interfaz debe estar disponible en español y portugués.

**Criterios de Aceptación**:
- Interfaz completa traducida al español y portugués.
- Detección automática del idioma según país (Brasil = portugués, otros = español).
- Opción manual para cambiar idioma.
- Contenidos pueden ser creados en ambos idiomas.

---

### RF-11: Diseño Responsive
**Descripción**: La intranet debe ser accesible y funcional desde cualquier dispositivo.

**Criterios de Aceptación**:
- Diseño adaptativo para desktop, tablet y smartphone.
- Funcionalidades core disponibles en todos los dispositivos.
- Tiempos de carga optimizados para conexiones móviles.
- Touch-friendly en dispositivos móviles.

---

## 3. REQUISITOS NO FUNCIONALES

### RNF-01: Rendimiento
- **Tiempo de carga inicial**: Máximo 3 segundos para página principal.
- **Usuarios concurrentes**: Soportar hasta 2,700 usuarios simultáneos sin degradación.
- **Tiempo de respuesta de transacciones**: Máximo 2 segundos por operación.
- **Búsquedas**: Resultados en menos de 1 segundo.

### RNF-02: Disponibilidad
- **Uptime**: Disponibilidad del 99.5% (máximo 3.6 horas de downtime mensual).
- **Ventanas de mantenimiento**: Programadas fuera del horario laboral.
- **Respaldo**: Backups automáticos diarios con retención de 30 días.

### RNF-03: Escalabilidad
- **Crecimiento de usuarios**: Arquitectura preparada para soportar hasta 5,000 usuarios.
- **Crecimiento de contenido**: Capacidad de almacenar al menos 500 GB de documentos.
- **Escalamiento horizontal**: Capacidad de agregar servidores según demanda.

### RNF-04: Seguridad
- **Encriptación**: HTTPS/TLS 1.3 para todas las comunicaciones.
- **Autenticación**: Integración con Active Directory/LDAP corporativo.
- **Autorización**: Control de acceso basado en roles (RBAC).
- **Auditoría**: Logs de acceso y transacciones críticas.
- **Protección de datos**: Cumplimiento con leyes de protección de datos de cada país.
- **Prevención de ataques**: Protección contra SQL Injection, XSS, CSRF.

### RNF-05: Usabilidad
- **Curva de aprendizaje**: Usuarios pueden realizar tareas básicas sin capacitación.
- **Navegación intuitiva**: Máximo 3 clics para acceder a cualquier funcionalidad.
- **Accesibilidad**: Cumplimiento WCAG 2.1 nivel AA.
- **Mensajes de error**: Claros y con sugerencias de solución.

### RNF-06: Compatibilidad
- **Navegadores**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.
- **Sistemas operativos**: Windows 10+, macOS 11+, iOS 14+, Android 10+.
- **Resoluciones**: Desde 320px (móvil) hasta 2560px (desktop).

### RNF-07: Mantenibilidad
- **Código documentado**: Comentarios en código y documentación técnica.
- **Arquitectura modular**: Separación clara de capas y componentes.
- **Logs estructurados**: Para facilitar troubleshooting.
- **Monitoreo**: Dashboards de salud del sistema en tiempo real.

---

## 4. REQUISITOS DE CALIDAD

### Calidad del Software
1. **Cobertura de pruebas**: Mínimo 80% de cobertura de código con pruebas automatizadas.
2. **Pruebas de integración**: Validación de todas las integraciones con sistemas legacy.
3. **Pruebas de carga**: Simulación de 3,000 usuarios concurrentes sin fallos.
4. **Pruebas de seguridad**: Auditoría de seguridad y pruebas de penetración sin vulnerabilidades críticas.
5. **Pruebas de usabilidad**: Sesiones con usuarios reales, satisfacción mínima de 4/5.

### Calidad del Proceso
1. **Metodología ágil**: Sprints de 2 semanas con entregas incrementales.
2. **Code reviews**: Revisión por pares del 100% del código antes de merge.
3. **Gestión de cambios**: Proceso formal para cambios de alcance.
4. **Documentación continua**: Actualización de documentación en cada sprint.

### Calidad del Producto
1. **Performance**: Cumplimiento de requisitos no funcionales de rendimiento.
2. **Cero defectos críticos**: En producción después de 2 semanas de estabilización.
3. **Conformidad**: Cumplimiento de estándares de desarrollo de la organización.

---

## 5. CRITERIOS DE ACEPTACIÓN

Los requisitos del proyecto serán aceptados cuando:

1. **Funcionalidad completa**: Todos los 11 requisitos funcionales están implementados y operativos.
2. **Validación de usuarios**: Pruebas de aceptación de usuario (UAT) completadas exitosamente con usuarios de los 4 países.
3. **Cumplimiento de NFRs**: Todos los requisitos no funcionales son validados mediante pruebas técnicas.
4. **Integraciones operativas**: Conexiones con sistemas de RRHH, nómina y directorio activo funcionando.
5. **Sin bugs bloqueantes**: Cero bugs de severidad crítica o alta pendientes.
6. **Documentación completa**: Manuales de usuario, técnicos y de operación entregados.
7. **Capacitación realizada**: Administradores y usuarios clave capacitados.
8. **Aprobación formal**: Sponsor y stakeholders principales firman acta de aceptación.

---

## 6. REGLAS DEL NEGOCIO

### RN-01: Permisos y Roles
- **Administrador Global**: Acceso total, gestión de usuarios y configuración.
- **Administrador de Contenido**: Creación y publicación de noticias y documentos.
- **Administrador de RRHH**: Acceso a módulo de RRHH, aprobación de solicitudes.
- **Gerente**: Aprobación de vacaciones y solicitudes de su equipo.
- **Empleado**: Acceso a información, autoservicio, sin permisos de administración.

### RN-02: Solicitud de Vacaciones
- El saldo de vacaciones se calcula automáticamente según antigüedad y días utilizados.
- Las solicitudes requieren aprobación del jefe directo.
- No se pueden solicitar más días de los disponibles en el saldo.
- Las vacaciones deben solicitarse con al menos 15 días de anticipación (excepto emergencias).

### RN-03: Visualización de Contenido
- Los usuarios solo ven contenido de su país, salvo contenido corporativo global.
- El contenido confidencial solo es visible para usuarios con permisos específicos.
- Las noticias tienen fecha de expiración automática (por defecto 90 días).

### RN-04: Liquidaciones de Sueldo
- Solo disponibles para el empleado titular, no para jefes o RRHH.
- Historial limitado a 12 meses.
- Descarga en formato PDF encriptado.

### RN-05: Actualización de Datos Personales
- Campos sensibles (RUT, nombre, cargo) solo modificables por RRHH.
- Cambios en datos de contacto son inmediatos.
- Cambios en datos bancarios requieren validación adicional.

---

## 7. IMPACTOS EN OTRAS ÁREAS

### Área de Recursos Humanos
- **Impacto**: Reducción de carga administrativa en un 40%.
- **Cambios necesarios**: Capacitación en nuevos procesos digitales, redefinición de workflows de aprobaciones.
- **Beneficios**: Más tiempo para actividades estratégicas, mejor trazabilidad de solicitudes.

### Área de Tecnología (TI)
- **Impacto**: Nueva plataforma a mantener, integración con sistemas existentes.
- **Cambios necesarios**: Incorporación de nueva tecnología al stack, documentación de procedimientos de soporte.
- **Beneficios**: Modernización de infraestructura, reducción de solicitudes de soporte manual.

### Área de Comunicaciones Internas
- **Impacto**: Cambio de canal principal de comunicación.
- **Cambios necesarios**: Aprendizaje de herramienta CMS, estrategia de contenido digital.
- **Beneficios**: Mayor alcance y engagement, métricas de efectividad de comunicaciones.

### Área Legal y Compliance
- **Impacto**: Necesidad de validar cumplimiento normativo en 4 países.
- **Cambios necesarios**: Revisión de políticas de privacidad, términos de uso.
- **Beneficios**: Mejor control de acceso a información sensible, trazabilidad de auditoría.

### Gerencias de País
- **Impacto**: Nuevo canal para comunicación con equipos locales.
- **Cambios necesarios**: Designación de administradores de contenido regional.
- **Beneficios**: Mejor llegada a equipos distribuidos, información regionalizada.

---

## 8. IMPACTOS EN OTRAS ENTIDADES

### Empleados (2,700 usuarios)
- **Impacto**: Cambio de herramienta de trabajo diario.
- **Gestión del cambio**: Plan de comunicación, capacitaciones, materiales de apoyo, soporte durante transición.
- **Beneficios**: Mayor autonomía, acceso 24/7, información relevante, ahorro de tiempo.

### Proveedores de Servicios TI
- **Impacto**: Posible cambio de proveedor de hosting.
- **Coordinación**: Migración de infraestructura, transferencia de datos.

### Sistemas Legacy (RRHH, Nómina, ERP)
- **Impacto**: Necesidad de exponer APIs o interfaces de integración.
- **Coordinación**: Definición de contratos de integración, pruebas exhaustivas.

---

## 9. REQUERIMIENTOS DE SOPORTE Y ENTRENAMIENTO

### Soporte Técnico
1. **Nivel 1 - Mesa de Ayuda**: 
   - Disponibilidad: Lunes a viernes, 8:00 a 20:00 (hora local cada país).
   - Canal: Teléfono, email, chat en línea, sistema de tickets.
   - Tiempo de respuesta: 2 horas para consultas, 4 horas para incidentes.

2. **Nivel 2 - Soporte Especializado**:
   - Equipo técnico para problemas complejos.
   - Disponibilidad: Lunes a viernes, 9:00 a 18:00 (Chile).
   - Tiempo de respuesta: 24 horas.

3. **Nivel 3 - Desarrollo**:
   - Bugs o errores del sistema.
   - Tiempo de respuesta: 48 horas para severidad alta, 5 días para severidad media.

### Materiales de Entrenamiento
1. **Manuales de Usuario**:
   - Manual general de usuario (PDF y online).
   - Guías rápidas por funcionalidad.
   - FAQs.

2. **Videos Tutoriales**:
   - Video de introducción (5 minutos).
   - Videos por módulo: RRHH (10 min), Comunicaciones (5 min), Directorio (3 min).
   - Screencasts para tareas comunes.

3. **Capacitaciones Presenciales/Virtuales**:
   - **Usuarios finales**: Sesión de 1 hora, grupos de 30 personas, en los 4 países.
   - **Administradores**: Taller de 4 horas, gestión de contenidos y configuración.
   - **Soporte TI**: Capacitación técnica de 8 horas, troubleshooting y mantenimiento.

4. **Recursos Online**:
   - Sección de ayuda integrada en la intranet.
   - Base de conocimientos con búsqueda.
   - Chatbot de soporte para consultas frecuentes.

---

## 10. SUPUESTOS RELATIVOS A REQUISITOS

1. Los requisitos aquí documentados están basados en entrevistas con stakeholders clave (RRHH, TI, Gerencias).
2. Los sistemas legacy (RRHH, nómina) cuentan con APIs disponibles o método de integración viable.
3. Los datos de empleados en sistemas actuales están actualizados y con calidad suficiente para migración.
4. La estructura organizacional (áreas, jerarquías) está correctamente reflejada en el directorio activo.
5. Los usuarios cuentan con credenciales corporativas activas en Active Directory.
6. La infraestructura de red en los 4 países soporta aplicaciones web corporativas.
7. Los empleados tienen acceso a dispositivos (PC, tablet o smartphone) para usar la intranet.

---

## 11. RESTRICCIONES RELATIVAS A REQUISITOS

1. **Regulatorias**:
   - Chile: Cumplimiento Ley 19.628 de Protección de Datos Personales.
   - Argentina: Cumplimiento Ley 25.326 de Protección de Datos Personales.
   - Brasil: Cumplimiento LGPD (Lei Geral de Proteção de Dados).
   - Colombia: Cumplimiento Ley 1581 de Protección de Datos Personales.

2. **Tecnológicas**:
   - Debe integrarse con Active Directory existente (no reemplazarlo).
   - Debe usar infraestructura cloud actual de la empresa (AWS o Azure).
   - No puede requerir instalación de software adicional en computadores de usuarios.

3. **Organizacionales**:
   - Los procesos de RRHH definidos no pueden modificarse sustancialmente (ej: flujo de aprobación de vacaciones).
   - La estructura de áreas y cargos debe respetarse según organigrama oficial.

4. **De Proyecto**:
   - Todas las funcionalidades deben estar listas en 5 meses.
   - El costo total no puede exceder $100.000.000.
   - No se puede contratar personal adicional permanente (solo temporal o consultores).

---

## APROBACIONES

| Nombre | Rol | Firma | Fecha |
|--------|-----|-------|-------|
| Sebastian Briceño | Director de RRHH | _____________ | ___/___/2026 |
| Sebastian Briceño | Director de TI | _____________ | ___/___/2026 |
| Sebastian Briceño | Jefe de Proyecto | _____________ | ___/___/2026 |

