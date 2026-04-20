# SOLICITUD DE CAMBIO #001
## Flujo Multi-Nivel de Aprobación de Vacaciones

---

## INFORMACIÓN GENERAL

| Campo | Detalle |
|-------|---------|
| **ID de Solicitud** | C001 |
| **Proyecto** | Intranet Corporativa 2.0 - Konecta |
| **ID del Proyecto** | KONECTA-INT-2024-001 |
| **Fecha de Solicitud** | 10 de Junio de 2026 |
| **Solicitante** | María González |
| **Cargo del Solicitante** | Directora de Recursos Humanos |
| **Prioridad** | Alta |
| **Estado** | APROBADO ✅ |
| **Fecha de Aprobación** | 15 de Junio de 2026 |
| **Grupo** | 15 |

---

## 1. DESCRIPCIÓN DEL CAMBIO SOLICITADO

### ¿Qué se Solicita Cambiar?

Modificar el **módulo de solicitud de vacaciones** (Entregable E5) para implementar un flujo de aprobación multi-nivel en lugar del flujo simple actual.

**Sistema Actual (Diseñado)**:
- Empleado solicita vacaciones → Jefe directo aprueba/rechaza → Fin

**Sistema Propuesto (Cambio)**:
- Empleado solicita vacaciones → Jefe directo aprueba (nivel 1) → RRHH valida disponibilidad (nivel 2) → Gerencia de Área aprueba presupuesto (nivel 3) → Fin

### Funcionalidades Específicas del Cambio

1. **Nivel 1 - Aprobación del Jefe Directo**:
   - Jefe recibe notificación de solicitud
   - Puede aprobar, rechazar o solicitar más información
   - Debe responder en máximo 3 días hábiles

2. **Nivel 2 - Validación de RRHH**:
   - RRHH verifica saldo disponible de vacaciones
   - Verifica que no haya superposición con vacaciones de compañeros del mismo equipo
   - Puede observar la solicitud si hay conflictos

3. **Nivel 3 - Aprobación de Gerencia**:
   - Solo para solicitudes > 10 días continuos
   - Gerente de Área aprueba considerando impacto operativo
   - Puede proponer fechas alternativas

4. **Notificaciones**:
   - Empleado recibe notificación en cada etapa del flujo
   - Email y notificación push en la intranet
   - Dashboard de seguimiento: "Tu solicitud está en Nivel 2 - RRHH"

5. **Excepciones**:
   - Vacaciones de urgencia (duelo, enfermedad) tienen flujo acelerado
   - Director General puede aprobar directamente cualquier solicitud

---

## 2. JUSTIFICACIÓN DEL CAMBIO

### Problema que Resuelve

**Problema Identificado**:  
Durante la validación con usuarios piloto (Semana 8), el equipo de RRHH identificó que el flujo simple de aprobación no es suficiente para cumplir con las políticas corporativas actuales de Konecta.

**Situaciones Problemáticas con Sistema Actual**:

1. **Superposición de Vacaciones**: En equipos pequeños (5-7 personas), si 3 personas solicitan vacaciones en la misma fecha, el jefe directo las aprueba sin darse cuenta de que el área quedará sin cobertura mínima.

2. **Inconsistencia de Datos**: Empleados solicitan más días de los disponibles porque el jefe directo no tiene visibilidad del saldo real (solo RRHH lo sabe).

3. **Impacto Presupuestario No Evaluado**: En proyectos facturables por hora, vacaciones de personal clave pueden afectar ingresos. La gerencia necesita evaluar el impacto antes de aprobar.

4. **Auditoría y Compliance**: Las normativas laborales de Brasil y Colombia requieren trazabilidad de quién aprobó cada solicitud y en qué fecha. El flujo simple no cumple estos requisitos.

### Beneficios Esperados

1. ✅ **Cumplimiento Normativo**: Cumplir con requerimientos de auditoría en 4 países
2. ✅ **Reducción de Conflictos**: Evitar situaciones donde múltiples empleados del mismo equipo están de vacaciones simultáneamente
3. ✅ **Mejor Control Presupuestario**: Visibilidad gerencial sobre impacto de vacaciones en proyectos
4. ✅ **Trazabilidad**: Historial completo de aprobaciones para auditorías internas/externas
5. ✅ **Satisfacción de RRHH**: Proceso alineado con políticas corporativas actuales

### Riesgo de No Implementar el Cambio

🔴 **ALTO**: 
- El módulo de vacaciones no sería utilizado porque no cumple políticas corporativas
- RRHH seguiría usando procesos manuales (Excel, emails), sin adopción de la intranet
- Incumplimiento de requisitos de auditoría (multas potenciales en Brasil y Colombia)
- ROI del proyecto disminuiría significativamente

---

## 3. ANÁLISIS DE IMPACTO

### 3.1 Impacto en Alcance

| Aspecto | Impacto | Detalle |
|---------|---------|---------|
| **Funcionalidades Nuevas** | +3 funcionalidades | Niveles 2 y 3 de aprobación, dashboard de seguimiento |
| **Módulos Afectados** | 2 módulos | E5 (Autoservicio RRHH), E6 (Notificaciones) |
| **Complejidad Técnica** | Media-Alta | Workflow engine, reglas de negocio complejas, múltiples actores |
| **Integraciones** | 1 nueva | Integración con sistema de proyectos (para validar impacto presupuestario) |

**Alcance Adicional**:
- Diseño UX/UI de flujo multi-nivel (wireframes, prototipos)
- Desarrollo de motor de workflow (estados, transiciones, notificaciones)
- Pruebas de flujos con 3 niveles (casos normales, excepcionales, rechazos)
- Documentación de usuario actualizada con nuevo flujo
- Capacitación adicional para jefes, RRHH y gerentes

---

### 3.2 Impacto en Cronograma

| Actividad | Duración Estimada | Dependencias |
|-----------|-------------------|--------------|
| Análisis de requisitos detallado | 2 días | - |
| Diseño UX/UI de flujo multi-nivel | 3 días | Análisis completado |
| Desarrollo de workflow engine | 5 días | Diseño aprobado |
| Integración con sistema de proyectos | 3 días | Workflow desarrollado |
| Pruebas funcionales del flujo | 2 días | Desarrollo completado |
| Pruebas de integración | 1 día | Pruebas funcionales OK |
| Documentación y capacitación | 2 días | Pruebas completadas |
| **TOTAL** | **18 días (~3.5 semanas)** | |

**Impacto en Hitos**:
- Finalización de Sprint 2: Retrasada de 14-Jun a 21-Jun (+7 días) [YA OCURRIÓ]
- Finalización de Sprint 3: Retrasada de 05-Jul a 12-Jul (+7 días) [PROYECTADO]
- **Go-Live**: Se mantiene 31-Ago (recuperable con acciones correctivas)

**Ruta Crítica Afectada**: ⚠️ SÍ - El módulo de RRHH está en la ruta crítica del proyecto

---

### 3.3 Impacto en Costo

| Concepto | Costo Estimado | Justificación |
|----------|----------------|---------------|
| Horas adicionales de desarrollo (1 desarrollador x 18 días) | $1,800,000 | 18 días x $100k/día |
| Horas de diseñador UX/UI (3 días) | $450,000 | 3 días x $150k/día |
| Horas de Líder Técnico (revisión y arquitectura) | $300,000 | 3 días x $100k/día |
| Horas de Analista de Negocio (validación con RRHH) | $200,000 | 2 días x $100k/día |
| Pruebas adicionales (QA) | $250,000 | 2.5 días x $100k/día |
| **TOTAL** | **$3,000,000** | |

**Fuente de Financiamiento**: Reserva de Contingencia ($13M disponibles)

---

### 3.4 Impacto en Calidad

| Aspecto | Impacto | Análisis |
|---------|---------|----------|
| **Funcionalidad** | 🟢 POSITIVO | Módulo más robusto y completo, cumple políticas corporativas |
| **Usabilidad** | 🟡 NEUTRO | Flujo más complejo, pero necesario. Requiere buena UX para no confundir usuarios |
| **Rendimiento** | 🟢 NEUTRO | No se espera impacto significativo (workflow es asíncrono) |
| **Seguridad** | 🟢 POSITIVO | Mayor trazabilidad, auditoría más robusta |
| **Mantenibilidad** | 🟡 NEUTRO | Código más complejo, pero bien arquitecturado (workflow engine reutilizable) |

**Evaluación General de Calidad**: ✅ El cambio **mejora** la calidad del sistema a pesar de agregar complejidad

---

### 3.5 Impacto en Riesgos

| Riesgo | Cambio en Nivel | Análisis |
|--------|-----------------|----------|
| **R03 - Requisitos Cambiantes** | ⬆️ Aumenta | Este cambio valida el riesgo. Necesario fortalecer control de cambios. |
| **R10 - Baja Adopción** | ⬇️ Disminuye | Con este cambio, RRHH SÍ usará el módulo (antes lo rechazaban). Mejora adopción. |
| **Nuevo - R18 - Complejidad de Workflow** | 🆕 Nivel Medio (9) | Riesgo nuevo: workflow mal implementado podría bloquear solicitudes. Mitigar con pruebas exhaustivas. |

**Exposición Neta al Riesgo**: 🟡 NEUTRO (un riesgo aumenta, otro disminuye)

---

## 4. ALTERNATIVAS EVALUADAS

### Alternativa 1: Implementar Solo Nivel 2 (RRHH) [NO SELECCIONADA]

**Descripción**: Mantener aprobación simple del jefe + validación de RRHH (sin nivel gerencial)

**Pros**:
- ✅ Menor costo ($1.5M vs. $3M)
- ✅ Menor tiempo (+2 semanas vs. +3.5 semanas)

**Cons**:
- ❌ No resuelve problema de impacto presupuestario en proyectos
- ❌ No cumple requerimientos de auditoría de Colombia (requieren aprobación gerencial documentada)

**Razón de Rechazo**: Solución incompleta, no cumple todos los requerimientos

---

### Alternativa 2: Postergar a Fase 2 [NO SELECCIONADA]

**Descripción**: Lanzar con flujo simple en go-live, implementar multi-nivel en Fase 2 (6 meses después)

**Pros**:
- ✅ No impacta cronograma ni costo de Fase 1
- ✅ Permite validar con usuarios reales antes de invertir en workflow complejo

**Cons**:
- ❌ RRHH no adoptará el módulo en go-live (seguirán con proceso manual)
- ❌ Objetivo de "100% adopción" no se cumplirá
- ❌ Requerimientos de auditoría no se cumplen desde día 1 (riesgo legal)

**Razón de Rechazo**: Impacta objetivos del proyecto (adopción 100%) y tiene riesgo legal

---

### Alternativa 3: Implementar Flujo Multi-Nivel Completo [✅ SELECCIONADA]

**Descripción**: Implementar la propuesta completa con 3 niveles de aprobación

**Pros**:
- ✅ Cumple 100% de políticas corporativas de RRHH
- ✅ Cumple requerimientos de auditoría de 4 países
- ✅ Garantiza adopción del módulo por parte de RRHH
- ✅ Mejor control presupuestario y operativo
- ✅ Workflow engine puede reutilizarse para otros flujos (solicitud de certificados, permisos)

**Cons**:
- ❌ Costo adicional de $3M
- ❌ Retraso de 3.5 semanas (recuperable)
- ❌ Mayor complejidad técnica

**Razón de Selección**: **Máximo valor de negocio**. A pesar del costo y tiempo, es la única alternativa que cumple objetivos del proyecto y requisitos normativos.

---

## 5. RECOMENDACIÓN

### Recomendación del Jefe de Proyecto: ✅ **APROBAR EL CAMBIO**

**Fundamentos de la Recomendación**:

1. **Cumplimiento de Objetivos**: Sin este cambio, el objetivo de "100% adopción" no se cumplirá (RRHH representa 15% de los usuarios).

2. **Retorno de Inversión**: Inversión de $3M para asegurar adopción del 15% de usuarios tiene ROI positivo.

3. **Riesgo Legal Mitigado**: Cumplimiento de normativas de auditoría evita multas potenciales (superiores a $3M).

4. **Escalabilidad**: Workflow engine puede reutilizarse en futuros módulos (solicitud de certificados, permisos, compras), amortizando la inversión.

5. **Factibilidad**: Recuperable dentro del cronograma con acciones correctivas (recursos adicionales en Sprints 3-4).

---

## 6. DECISIONES REQUERIDAS

### Del Comité de Control de Cambios

- [ ] ¿Aprobar el cambio con impacto de +3.5 semanas y +$3M?
- [ ] ¿Autorizar uso de $3M de la reserva de contingencia?
- [ ] ¿Aprobar recursos adicionales en Sprints 3-4 para recuperar cronograma?

### Del Sponsor

- [ ] ¿Aprobar extensión de cronograma si no es posible recuperar las 3.5 semanas?
- [ ] ¿Aprobar aumento de presupuesto si reserva de contingencia no es suficiente?

---

## 7. PLAN DE IMPLEMENTACIÓN (SI SE APRUEBA)

| Actividad | Semana | Responsable |
|-----------|--------|-------------|
| Kick-off del cambio con equipo | Semana 10 | Jefe de Proyecto |
| Análisis detallado con RRHH | Semana 10 | Analista de Negocio |
| Diseño UX/UI del flujo | Semana 11 | Diseñador UX/UI |
| Desarrollo de workflow engine | Semanas 11-12 | Desarrollador Senior |
| Integración con sistema de proyectos | Semana 12 | Líder Técnico |
| Pruebas funcionales y de integración | Semana 13 | QA |
| Validación con usuarios (RRHH, Gerentes) | Semana 13 | Analista de Negocio |
| Despliegue a ambiente de pruebas | Semana 13 | DevOps |
| **Go-Live del cambio** | **Sprint 3 (Semana 14)** | Jefe de Proyecto |

---

## 8. COMUNICACIÓN DEL CAMBIO

### Stakeholders a Informar

| Stakeholder | Mensaje Clave | Medio |
|-------------|---------------|-------|
| **Sponsor** | Cambio aprobado, impacto en costo y cronograma | Reunión ejecutiva |
| **Director de RRHH** | Su solicitud fue aprobada, implementación en 4 semanas | Email + Reunión |
| **Equipo de Proyecto** | Nuevo alcance, priorizar en Sprint 3 | Reunión de equipo |
| **Usuarios Piloto** | Cambio en flujo de vacaciones, nueva validación requerida | Email informativo |
| **Comité Directivo** | Cambio estratégico para asegurar adopción | Reporte ejecutivo |

---

## 9. CRITERIOS DE ACEPTACIÓN DEL CAMBIO

Para considerar este cambio completo y aceptado, debe cumplir:

1. ✅ **Funcional**: Los 3 niveles de aprobación funcionan correctamente
2. ✅ **Notificaciones**: Empleado recibe notificación en cada etapa del flujo
3. ✅ **Dashboard**: Empleado puede ver estado de su solicitud en tiempo real
4. ✅ **Excepciones**: Flujo de vacaciones de urgencia funciona correctamente
5. ✅ **Integración**: Sistema valida impacto presupuestario en proyectos facturables
6. ✅ **Auditoría**: Historial completo de aprobaciones es visible para RRHH y auditoría
7. ✅ **Rendimiento**: Flujo de aprobación se completa en máximo 5 días hábiles
8. ✅ **Pruebas**: 100% de casos de prueba del nuevo flujo pasan exitosamente
9. ✅ **Validación**: RRHH y gerentes aprueban el nuevo flujo en sesión UAT
10. ✅ **Documentación**: Manual de usuario actualizado con nuevo flujo

---

## 10. APROBACIONES

| Rol | Nombre | Decisión | Firma | Fecha |
|-----|--------|----------|-------|-------|
| **Solicitante** | María González (Dir. RRHH) | - | _____________ | 10-Jun-2026 |
| **Jefe de Proyecto** | Sebastian Briceño | ✅ RECOMIENDA APROBAR | _____________ | 12-Jun-2026 |
| **Director de TI** | Carlos Méndez | ✅ APRUEBA | _____________ | 14-Jun-2026 |
| **Sponsor del Proyecto** | Rodrigo Silva (Dir. General) | ✅ APRUEBA | _____________ | 15-Jun-2026 |

---

**Estado Final**: ✅ **CAMBIO APROBADO**  
**Fecha de Aprobación**: 15 de Junio de 2026  
**Grupo**: 15  
**Versión**: 1.0
