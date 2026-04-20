# MATRIZ DE IDENTIFICACIÓN Y EVALUACIÓN CUALITATIVA DE RIESGOS

---

## INFORMACIÓN DEL PROYECTO

| Campo | Detalle |
|-------|---------|
| **ID del Proyecto** | KONECTA-INT-2024-001 |
| **Nombre del Proyecto** | Desarrollo de Intranet Corporativa 2.0 |
| **Jefe de Proyecto** | Sebastian Briceño |
| **Fecha de Análisis** | 20 de Abril de 2026 |
| **Versión** | 1.0 |
| **Grupo** | 15 |

---

## ESCALA DE PROBABILIDAD

| Valor | Nivel | Descripción | Rango de Probabilidad |
|-------|-------|-------------|----------------------|
| 1 | Muy Baja | Muy improbable que ocurra | 0% - 10% |
| 2 | Baja | Podría ocurrir en circunstancias excepcionales | 11% - 30% |
| 3 | Media | Podría ocurrir en algún momento | 31% - 50% |
| 4 | Alta | Probablemente ocurrirá | 51% - 70% |
| 5 | Muy Alta | Casi seguro que ocurrirá | 71% - 100% |

---

## ESCALA DE IMPACTO

| Valor | Nivel | Impacto en Alcance | Impacto en Cronograma | Impacto en Costo | Impacto en Calidad |
|-------|-------|-------------------|----------------------|------------------|-------------------|
| 1 | Muy Bajo | Cambio mínimo | < 1 semana | < $1M | Degradación imperceptible |
| 2 | Bajo | Cambio menor | 1-2 semanas | $1M - $5M | Degradación menor |
| 3 | Medio | Cambio moderado | 2-4 semanas | $5M - $10M | Degradación notable |
| 4 | Alto | Cambio significativo | 4-6 semanas | $10M - $20M | Degradación importante |
| 5 | Muy Alto | Cambio crítico | > 6 semanas | > $20M | Inaceptable |

---

## NIVEL DE RIESGO (Probabilidad × Impacto)

| Nivel | Rango | Color | Acción Requerida |
|-------|-------|-------|------------------|
| **Muy Bajo** | 1-4 | 🟢 Verde | Aceptar y monitorear |
| **Bajo** | 5-9 | 🟡 Amarillo | Monitorear activamente |
| **Medio** | 10-14 | 🟠 Naranja | Desarrollar plan de respuesta |
| **Alto** | 15-19 | 🔴 Rojo | Acción inmediata requerida |
| **Crítico** | 20-25 | ⚫ Negro | Escalamiento ejecutivo |

---

## CATEGORÍAS DE RIESGOS

- **T**: Técnico (tecnología, arquitectura, desarrollo)
- **O**: Organizacional (recursos humanos, cultura, procesos)
- **E**: Externo (mercado, regulaciones, proveedores)
- **G**: Gestión del proyecto (planificación, comunicación, coordinación)

---

## MATRIZ DE RIESGOS IDENTIFICADOS

### RIESGO #1: Complejidad de Integración con Sistemas Legacy

| Campo | Detalle |
|-------|---------|
| **ID** | R01 |
| **Categoría** | Técnico (T) |
| **Descripción** | Las integraciones con Active Directory, sistema de RRHH y sistema de nómina presentan mayor complejidad técnica de la estimada debido a APIs obsoletas, falta de documentación y diferentes estándares en cada sistema. |
| **Causa Raíz** | Los sistemas legacy tienen más de 10 años, fueron desarrollados por proveedores distintos y no fueron diseñados para integrarse entre sí. |
| **Probabilidad** | 4 - Alta (60%) |
| **Impacto** | 4 - Alto |
| **Nivel de Riesgo** | 16 - Alto 🔴 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Iniciar análisis técnico de integración en Semana 2 (anticipado).<br>2) Asignar al desarrollador senior más experimentado.<br>3) Contratar consultor externo especializado en integraciones legacy (1 mes).<br>4) Plan B: Desarrollar interfaces de carga manual temporal si integración falla. |
| **Responsable (Risk Owner)** | Líder Técnico |
| **Fecha de Revisión** | Semanal durante Sprints 3 y 4 |
| **Disparador (Trigger)** | Análisis técnico revela APIs no documentadas o incompatibles |

---

### RIESGO #2: Resistencia al Cambio de Usuarios en Sucursales Internacionales

| Campo | Detalle |
|-------|---------|
| **ID** | R02 |
| **Categoría** | Organizacional (O) |
| **Descripción** | Empleados de Argentina, Brasil y Colombia podrían resistirse a adoptar la nueva intranet por desconfianza, preferencia por procesos actuales o percepción de que es "otro proyecto chileno" que no considera sus necesidades. |
| **Causa Raíz** | Historial de proyectos corporativos diseñados solo para Chile sin considerar realidades de otros países. Baja participación de sucursales internacionales en decisiones corporativas. |
| **Probabilidad** | 4 - Alta (65%) |
| **Impacto** | 4 - Alto |
| **Nivel de Riesgo** | 16 - Alto 🔴 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Incluir representantes de cada país en comité de proyecto desde Semana 1.<br>2) Realizar talleres de levantamiento de requisitos presenciales en cada país.<br>3) Designar "embajadores del cambio" (champions) en cada sucursal.<br>4) Contenido regionalizado y relevante para cada país (no solo traducción).<br>5) Comunicación en idioma local (español/portugués) durante todo el proyecto.<br>6) Gamificación y premios por adopción temprana. |
| **Responsable (Risk Owner)** | Director de RRHH |
| **Fecha de Revisión** | Quincenal durante todo el proyecto |
| **Disparador (Trigger)** | Encuestas de clima muestran resistencia o comentarios negativos en focus groups |

---

### RIESGO #3: Requisitos Ambiguos o Cambiantes Durante el Desarrollo

| Campo | Detalle |
|-------|---------|
| **ID** | R03 |
| **Categoría** | Gestión (G) |
| **Descripción** | Los stakeholders (Director General, Dir. TI, Dir. RRHH) podrían tener visiones diferentes sobre funcionalidades clave, o podrían solicitar cambios significativos en requisitos a mitad del desarrollo, causando retrabajo y retrasos. |
| **Causa Raíz** | Falta de claridad inicial sobre prioridades, expectativas no alineadas entre stakeholders, requisitos no validados formalmente antes de desarrollo. |
| **Probabilidad** | 4 - Alta (55%) |
| **Impacto** | 4 - Alto |
| **Nivel de Riesgo** | 16 - Alto 🔴 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Establecer proceso formal de gestión de cambios con comité de control.<br>2) Obtener aprobación firmada de requisitos por todos los stakeholders clave.<br>3) Validaciones iterativas: prototipos y demos al final de cada sprint.<br>4) Establecer línea base de requisitos congelada antes de Sprint 1.<br>5) Todo cambio debe incluir análisis de impacto en cronograma, costo y alcance.<br>6) Reserva de contingencia de 13% ($13M) para cambios aprobados. |
| **Responsable (Risk Owner)** | Jefe de Proyecto |
| **Fecha de Revisión** | Semanal en reunión de seguimiento |
| **Disparador (Trigger)** | Solicitud de cambio recibida o stakeholder expresa insatisfacción con requisito aprobado |

---

### RIESGO #4: Problemas de Rendimiento con Alta Concurrencia

| Campo | Detalle |
|-------|---------|
| **ID** | R04 |
| **Categoría** | Técnico (T) |
| **Descripción** | La intranet podría presentar degradación de rendimiento (tiempos de respuesta > 3 segundos) cuando 2,700+ usuarios la utilicen simultáneamente, especialmente en horarios peak (9:00 AM en cada país). |
| **Causa Raíz** | Subestimación de carga concurrente real, consultas SQL no optimizadas, falta de caché, dimensionamiento insuficiente de infraestructura cloud. |
| **Probabilidad** | 3 - Media (40%) |
| **Impacto** | 4 - Alto |
| **Nivel de Riesgo** | 12 - Medio 🟠 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Diseñar arquitectura escalable con balanceadores de carga desde el inicio.<br>2) Ejecutar pruebas de carga desde Sprint 2 (no esperar al final).<br>3) Simular 3,000 usuarios concurrentes (10% más que escenario real).<br>4) Implementar caché de contenido estático (CDN).<br>5) Optimizar consultas SQL y agregar índices en tablas críticas.<br>6) Monitoreo de rendimiento en tiempo real con alertas automáticas.<br>7) Plan de escalamiento horizontal (agregar servidores) si es necesario. |
| **Responsable (Risk Owner)** | Arquitecto de Software |
| **Fecha de Revisión** | Al finalizar cada Sprint |
| **Disparador (Trigger)** | Pruebas de carga muestran tiempos de respuesta > 3 segundos |

---

### RIESGO #5: Falta de Disponibilidad de Stakeholders Clave

| Campo | Detalle |
|-------|---------|
| **ID** | R05 |
| **Categoría** | Organizacional (O) |
| **Descripción** | El Director General, Director de TI o Director de RRHH podrían no estar disponibles para sesiones de validación, toma de decisiones o aprobaciones críticas debido a viajes, reuniones ejecutivas u otras prioridades corporativas. |
| **Causa Raíz** | Stakeholders ejecutivos tienen múltiples responsabilidades y prioridades competitivas. El proyecto no es su única obligación. |
| **Probabilidad** | 3 - Media (45%) |
| **Impacto** | 3 - Medio |
| **Nivel de Riesgo** | 9 - Bajo 🟡 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Agendar todas las sesiones de validación con 3 semanas de anticipación.<br>2) Designar suplentes con poder de decisión para cada stakeholder clave.<br>3) Establecer SLA de respuesta: decisiones críticas en máximo 48 horas.<br>4) Usar mecanismos asincrónicos: prototipos interactivos, videos de demos.<br>5) Reuniones ejecutivas cortas y enfocadas (máximo 30 minutos).<br>6) Enviar material de pre-lectura 2 días antes de cada sesión. |
| **Responsable (Risk Owner)** | Jefe de Proyecto |
| **Fecha de Revisión** | Semanal |
| **Disparador (Trigger)** | Stakeholder cancela o pospone reunión crítica por segunda vez |

---

### RIESGO #6: Vulnerabilidades de Seguridad No Detectadas

| Campo | Detalle |
|-------|---------|
| **ID** | R06 |
| **Categoría** | Técnico (T) |
| **Descripción** | La intranet podría tener vulnerabilidades críticas de seguridad (inyección SQL, XSS, autenticación débil) que expongan datos sensibles de empleados (liquidaciones, datos personales) o permitan accesos no autorizados. |
| **Causa Raíz** | Falta de experiencia del equipo en desarrollo seguro, no seguir estándares de seguridad (OWASP), falta de auditorías de seguridad. |
| **Probabilidad** | 2 - Baja (25%) |
| **Impacto** | 5 - Muy Alto (Crítico) |
| **Nivel de Riesgo** | 10 - Medio 🟠 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Seguir estrictamente OWASP Top 10 durante desarrollo.<br>2) Code review obligatorio con checklist de seguridad antes de cada merge.<br>3) Herramientas automáticas de análisis de seguridad (SonarQube, Snyk).<br>4) Contratar empresa externa para auditoría de seguridad en Semana 14.<br>5) Pruebas de penetración (pen testing) antes de go-live.<br>6) Capacitar al equipo en desarrollo seguro (curso OWASP).<br>7) Encriptación de datos sensibles (liquidaciones, datos personales).<br>8) Implementar autenticación multi-factor (MFA) para administradores. |
| **Responsable (Risk Owner)** | Arquitecto de Software / CISO |
| **Fecha de Revisión** | Quincenal |
| **Disparador (Trigger)** | Herramienta automática detecta vulnerabilidad crítica o auditoría encuentra issues |

---

### RIESGO #7: Rotación de Personal Clave del Proyecto

| Campo | Detalle |
|-------|---------|
| **ID** | R07 |
| **Categoría** | Organizacional (O) |
| **Descripción** | El Arquitecto de Software, Líder Técnico o Diseñador UX/UI podrían renunciar o ser transferidos a otro proyecto durante el desarrollo, causando pérdida de conocimiento, retrasos y necesidad de reentrenar nuevo personal. |
| **Causa Raíz** | Mercado laboral competitivo en tecnología, ofertas atractivas de otras empresas, sobrecarga de trabajo, falta de retención. |
| **Probabilidad** | 3 - Media (35%) |
| **Impacto** | 4 - Alto |
| **Nivel de Riesgo** | 12 - Medio 🟠 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Documentar decisiones técnicas y arquitectónicas en Confluence.<br>2) Sesiones de knowledge sharing semanales en el equipo.<br>3) Pair programming en funcionalidades críticas (2 personas conocen cada módulo).<br>4) Identificar backups internos o externos para roles clave.<br>5) Incentivos de retención: bono por finalización exitosa del proyecto.<br>6) Reuniones 1:1 mensuales con recursos clave para detectar insatisfacción.<br>7) Proceso de handover formal (2 semanas) si alguien sale del proyecto. |
| **Responsable (Risk Owner)** | Director de TI |
| **Fecha de Revisión** | Mensual |
| **Disparador (Trigger)** | Recurso clave manifiesta intención de salir o recibe oferta externa |

---

### RIESGO #8: Cambios Regulatorios en Protección de Datos

| Campo | Detalle |
|-------|---------|
| **ID** | R08 |
| **Categoría** | Externo (E) |
| **Descripción** | Cambios en leyes de protección de datos personales en Brasil (LGPD), Argentina (LPDP) o Colombia durante el proyecto podrían requerir modificaciones en arquitectura de seguridad, encriptación o consentimientos de usuarios. |
| **Causa Raíz** | Legislaciones de privacidad están en evolución constante en América Latina. Gobiernos agregan nuevos requisitos basados en GDPR europeo. |
| **Probabilidad** | 2 - Baja (20%) |
| **Impacto** | 3 - Medio |
| **Nivel de Riesgo** | 6 - Bajo 🟡 |
| **Estrategia** | Aceptar y Monitorear |
| **Plan de Respuesta** | 1) Diseñar arquitectura flexible que permita agregar controles de privacidad.<br>2) Monitoreo mensual de cambios regulatorios en los 4 países (asignar a Legal).<br>3) Implementar desde el inicio mejores prácticas (privacy by design).<br>4) Módulo de consentimientos flexible y configurable por país.<br>5) Reserva de contingencia para ajustes regulatorios si es necesario. |
| **Responsable (Risk Owner)** | Área Legal / Jefe de Proyecto |
| **Fecha de Revisión** | Mensual |
| **Disparador (Trigger)** | Área Legal reporta nueva regulación aprobada o en trámite |

---

### RIESGO #9: Fallas en Infraestructura Cloud Durante Go-Live

| Campo | Detalle |
|-------|---------|
| **ID** | R09 |
| **Categoría** | Técnico (T) |
| **Descripción** | Fallas inesperadas del proveedor cloud (AWS/Azure) durante la ventana de go-live podrían impedir que la intranet esté disponible, causando frustración masiva de usuarios y pérdida de confianza en el sistema. |
| **Causa Raíz** | Dependencia de servicios de terceros (cloud provider), problemas de red, ataques DDoS, mantenimientos no programados. |
| **Probabilidad** | 1 - Muy Baja (5%) |
| **Impacto** | 5 - Muy Alto (Crítico) |
| **Nivel de Riesgo** | 5 - Bajo 🟡 |
| **Estrategia** | Transferir y Mitigar |
| **Plan de Respuesta** | 1) Contratar SLA premium con proveedor cloud (99.99% uptime garantizado).<br>2) Arquitectura multi-zona: si falla un datacenter, otro toma el control.<br>3) Prueba de failover antes de go-live (simular caída de zona).<br>4) Plan de rollback completo: poder volver a intranet antigua en 1 hora.<br>5) Comunicación proactiva: si hay problemas, informar inmediatamente a usuarios.<br>6) Equipo de soporte extendido 24/7 durante primera semana post go-live.<br>7) Validar ventana de go-live fuera de horarios peak (fin de semana). |
| **Responsable (Risk Owner)** | Ingeniero DevOps |
| **Fecha de Revisión** | Semanal durante Semanas 18-19 (pre go-live) |
| **Disparador (Trigger)** | Alertas de monitoreo indican problemas de disponibilidad de infraestructura |

---

### RIESGO #10: Baja Adopción Post Go-Live (No Alcanzar 100% de Usuarios)

| Campo | Detalle |
|-------|---------|
| **ID** | R10 |
| **Categoría** | Organizacional (O) |
| **Descripción** | Después del lanzamiento, la tasa de adopción podría estancarse en 60-70% en lugar del objetivo de 100%, con usuarios prefiriendo métodos antiguos (llamadas, emails) para realizar trámites o acceder a información. |
| **Causa Raíz** | Inercia organizacional, falta de motivación para cambiar, intranet no percibida como útil, capacitación insuficiente, problemas de usabilidad. |
| **Probabilidad** | 3 - Media (40%) |
| **Impacto** | 4 - Alto |
| **Nivel de Riesgo** | 12 - Medio 🟠 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Hacer la intranet el ÚNICO canal para ciertos trámites (ej: solicitar vacaciones).<br>2) Gamificación: puntos, badges por uso, ranking de áreas con mayor adopción.<br>3) Contenido de valor agregado: noticias, eventos, beneficios exclusivos online.<br>4) Capacitación masiva: 100% de empleados capacitados (presencial + grabaciones).<br>5) Soporte extendido primeras 4 semanas: mesa de ayuda disponible 12 horas/día.<br>6) Monitoreo diario de métricas de uso durante primeras 4 semanas.<br>7) Comunicación desde líderes: Director General envía mensaje personal promoviendo uso.<br>8) Identificar "early adopters" y convertirlos en promotores internos. |
| **Responsable (Risk Owner)** | Director de RRHH / Jefe de Proyecto |
| **Fecha de Revisión** | Diaria durante Semanas 19-22 (post go-live) |
| **Disparador (Trigger)** | Métricas muestran adopción < 80% después de 2 semanas de go-live |

---

### RIESGO #11: Sobrecostos por Subestimación de Esfuerzo

| Campo | Detalle |
|-------|---------|
| **ID** | R11 |
| **Categoría** | Gestión (G) |
| **Descripción** | El proyecto podría exceder el presupuesto de $100M debido a subestimación de esfuerzo en desarrollo, necesidad de recursos adicionales, o cambios de alcance no contemplados en la reserva de contingencia. |
| **Causa Raíz** | Estimaciones optimistas, falta de experiencia en proyectos similares, no considerar imprevistos, alcance creep. |
| **Probabilidad** | 3 - Media (35%) |
| **Impacto** | 3 - Medio |
| **Nivel de Riesgo** | 9 - Bajo 🟡 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Reserva de contingencia de 13% ($13M) asignada desde inicio.<br>2) Seguimiento semanal de presupuesto con proyección de costo final (EAC).<br>3) Priorización estricta: funcionalidades must-have vs. nice-to-have.<br>4) Proceso formal de control de cambios: todo cambio incluye impacto de costo.<br>5) Si se proyecta sobrecosto > 10%, escalar a Sponsor para aprobar extensión.<br>6) Plan B: Reducir alcance (nice-to-have) si se agota presupuesto.<br>7) Utilizar metodologías ágiles: entregar valor incremental, ajustar alcance. |
| **Responsable (Risk Owner)** | Jefe de Proyecto |
| **Fecha de Revisión** | Semanal |
| **Disparador (Trigger)** | CPI (Cost Performance Index) < 0.90 por 2 semanas consecutivas |

---

### RIESGO #12: Incompatibilidad con Navegadores o Dispositivos Antiguos

| Campo | Detalle |
|-------|---------|
| **ID** | R12 |
| **Categoría** | Técnico (T) |
| **Descripción** | Algunos empleados podrían usar navegadores antiguos (IE11, Chrome desactualizado) o dispositivos obsoletos (Windows 7) que no sean compatibles con la intranet moderna, impidiendo su acceso. |
| **Causa Raíz** | Equipos informáticos heterogéneos en las sucursales, falta de actualización de sistemas operativos, presupuesto limitado para renovación de equipos. |
| **Probabilidad** | 2 - Baja (25%) |
| **Impacto** | 2 - Bajo |
| **Nivel de Riesgo** | 4 - Muy Bajo 🟢 |
| **Estrategia** | Aceptar y Mitigar |
| **Plan de Respuesta** | 1) Definir navegadores soportados oficialmente (Chrome, Firefox, Safari, Edge - últimas 2 versiones).<br>2) Comunicar requisitos técnicos mínimos antes de go-live.<br>3) Coordinar con TI para actualizar navegadores en equipos corporativos.<br>4) Mensaje de advertencia si usuario accede desde navegador no soportado.<br>5) Proveer acceso alternativo temporal: versión móvil desde smartphones. |
| **Responsable (Risk Owner)** | Director de TI |
| **Fecha de Revisión** | Una vez (Semana 16) |
| **Disparador (Trigger)** | Pruebas UAT revelan problemas de compatibilidad |

---

### RIESGO #13: Datos Inconsistentes entre Sistemas Legacy

| Campo | Detalle |
|-------|---------|
| **ID** | R13 |
| **Categoría** | Técnico (T) |
| **Descripción** | Los sistemas de RRHH y nómina podrían tener datos inconsistentes del mismo empleado (ej: nombre diferente, cargo diferente, saldo de vacaciones diferente), causando confusión y desconfianza en la intranet. |
| **Causa Raíz** | Sistemas legacy no sincronizados, actualizaciones manuales, falta de proceso de data governance, datos históricos migrados con errores. |
| **Probabilidad** | 3 - Media (40%) |
| **Impacto** | 3 - Medio |
| **Nivel de Riesgo** | 9 - Bajo 🟡 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Proyecto de limpieza de datos antes de integraciones (Semanas 2-4).<br>2) Definir "sistema fuente de verdad" para cada dato (RRHH para cargo, Nómina para sueldo).<br>3) Reglas de validación en integraciones: alertar si datos inconsistentes.<br>4) Dashboard para administradores: reportar inconsistencias detectadas.<br>5) Proceso de reconciliación mensual entre sistemas.<br>6) Mostrar fecha de última actualización en cada dato de la intranet. |
| **Responsable (Risk Owner)** | Analista de Negocio / Director de RRHH |
| **Fecha de Revisión** | Semanal durante Semanas 9-13 (integraciones) |
| **Disparador (Trigger)** | Más de 5% de registros con inconsistencias detectadas |

---

### RIESGO #14: Falta de Contenido Regionalizado al Momento del Lanzamiento

| Campo | Detalle |
|-------|---------|
| **ID** | R14 |
| **Categoría** | Gestión (G) |
| **Descripción** | Al momento del go-live, la intranet podría tener poco o ningún contenido relevante para Brasil, Argentina o Colombia, siendo percibida como "portal chileno", replicando el problema actual. |
| **Causa Raíz** | Falta de ownership de contenido en cada país, priorización de desarrollo técnico sobre generación de contenido, falta de recursos dedicados a creación de contenido. |
| **Probabilidad** | 3 - Media (45%) |
| **Impacto** | 3 - Medio |
| **Nivel de Riesgo** | 9 - Bajo 🟡 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Designar "Content Owner" en cada país desde Semana 1.<br>2) Meta mínima: 20 contenidos por país antes de go-live.<br>3) Capacitar Content Owners en uso del CMS (Semana 17).<br>4) Revisar semanalmente avance de creación de contenido por país.<br>5) Template de contenidos: facilitar la creación (formatos pre-definidos).<br>6) Contenido inicial curado por equipo de proyecto si países no generan.<br>7) Incentivo: reconocimiento público al país con mejor contenido generado. |
| **Responsable (Risk Owner)** | Director de Comunicaciones / Jefe de Proyecto |
| **Fecha de Revisión** | Semanal durante Semanas 17-18 |
| **Disparador (Trigger)** | A 2 semanas de go-live, menos de 10 contenidos por país |

---

### RIESGO #15: Problemas de Conectividad en Sucursales Remotas

| Campo | Detalle |
|-------|---------|
| **ID** | R15 |
| **Categoría** | Externo (E) |
| **Descripción** | Sucursales en zonas rurales de Brasil o Colombia podrían tener conexión a internet lenta o inestable, dificultando el uso de la intranet y afectando la experiencia de usuario. |
| **Causa Raíz** | Infraestructura de telecomunicaciones limitada en ciertas regiones, dependencia de proveedores locales con baja calidad de servicio. |
| **Probabilidad** | 2 - Baja (20%) |
| **Impacto** | 2 - Bajo |
| **Nivel de Riesgo** | 4 - Muy Bajo 🟢 |
| **Estrategia** | Mitigar |
| **Plan de Respuesta** | 1) Diseño "lightweight": intranet optimizada para conexiones lentas.<br>2) Minimizar imágenes pesadas, usar compresión, lazy loading.<br>3) Funcionalidad offline para consultas básicas (PWA - Progressive Web App).<br>4) CDN (Content Delivery Network) con nodos en América Latina.<br>5) Validar conectividad en sucursales problemáticas durante UAT.<br>6) Coordinar con proveedores locales para mejorar conectividad si es crítico. |
| **Responsable (Risk Owner)** | Arquitecto de Software / Director de TI |
| **Fecha de Revisión** | Una vez (Semana 15 - UAT) |
| **Disparador (Trigger)** | Usuarios de sucursales remotas reportan lentitud extrema en UAT |

---

## RESUMEN EJECUTIVO DE RIESGOS

### Distribución por Nivel de Riesgo

| Nivel | Cantidad | IDs |
|-------|----------|-----|
| **Crítico** (20-25) | 0 | - |
| **Alto** (15-19) | 3 | R01, R02, R03 |
| **Medio** (10-14) | 4 | R04, R06, R07, R10 |
| **Bajo** (5-9) | 6 | R05, R08, R11, R13, R14 |
| **Muy Bajo** (1-4) | 2 | R12, R15 |
| **TOTAL** | **15** | |

---

### Distribución por Categoría

| Categoría | Cantidad | Porcentaje |
|-----------|----------|------------|
| Técnico (T) | 6 | 40% |
| Organizacional (O) | 5 | 33% |
| Gestión (G) | 3 | 20% |
| Externo (E) | 2 | 13% |

---

### Top 5 Riesgos Críticos (Requieren Atención Inmediata)

1. **R01 - Complejidad de Integración con Sistemas Legacy** (Nivel 16 - Alto 🔴)
2. **R02 - Resistencia al Cambio en Sucursales Internacionales** (Nivel 16 - Alto 🔴)
3. **R03 - Requisitos Ambiguos o Cambiantes** (Nivel 16 - Alto 🔴)
4. **R04 - Problemas de Rendimiento** (Nivel 12 - Medio 🟠)
5. **R07 - Rotación de Personal Clave** (Nivel 12 - Medio 🟠)

---

## PLAN DE MONITOREO DE RIESGOS

### Frecuencia de Revisión

| Tipo de Riesgo | Frecuencia de Revisión |
|----------------|------------------------|
| Críticos y Altos (≥ 15) | **Semanal** en reunión de seguimiento |
| Medios (10-14) | **Quincenal** |
| Bajos y Muy Bajos (≤ 9) | **Mensual** |

### Indicadores de Exposición al Riesgo

- **Cantidad de riesgos materializados**: 0 (objetivo)
- **Cantidad de riesgos altos activos**: 3 (monitorear estrechamente)
- **Exposición monetaria**: $47M (suma de impactos potenciales de riesgos altos)

### Próxima Revisión Programada

**Fecha**: 27 de Abril de 2026  
**Responsable**: Jefe de Proyecto  
**Participantes**: Equipo de proyecto, Stakeholders clave

---

## CONCLUSIONES Y RECOMENDACIONES

1. **Enfoque en Riesgos Altos**: Los 3 riesgos con nivel alto (integraciones, resistencia al cambio, requisitos cambiantes) requieren atención inmediata y ejecución rigurosa de sus planes de respuesta.

2. **Gestión del Cambio es Crítica**: El 33% de los riesgos son organizacionales. Un plan robusto de gestión del cambio y comunicación es fundamental para el éxito.

3. **Integraciones Legacy**: Iniciar análisis técnico de integraciones en Semana 2 (anticipado) y considerar consultor externo es altamente recomendado.

4. **Reserva de Contingencia Bien Dimensionada**: Con 13% ($13M), la reserva puede cubrir materialización de 1-2 riesgos medios. Monitorear uso semanalmente.

5. **Cultura de Gestión de Riesgos**: Establecer reuniones semanales de 15 minutos dedicadas exclusivamente a revisar matriz de riesgos.

---

## APROBACIONES

| Nombre | Rol | Firma | Fecha |
|--------|-----|-------|-------|
| Sebastian Briceño | Jefe de Proyecto | _____________ | ___/___/2026 |
| Sebastian Briceño | Director de TI | _____________ | ___/___/2026 |
| Sebastian Briceño | Sponsor del Proyecto | _____________ | ___/___/2026 |

---

**Documento generado por**: Grupo 15  
**Versión**: 1.0  
**Última actualización**: 20 de Abril de 2026
