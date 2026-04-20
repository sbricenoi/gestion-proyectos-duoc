# SOLICITUD DE CAMBIO #003
## Integración con Microsoft Teams para Video conferencias

---

## INFORMACIÓN GENERAL

| Campo | Detalle |
|-------|---------|
| **ID de Solicitud** | C006 |
| **Proyecto** | Intranet Corporativa 2.0 - Konecta |
| **ID del Proyecto** | KONECTA-INT-2024-001 |
| **Fecha de Solicitud** | 20 de Junio de 2026 |
| **Solicitante** | Patricia Rojas |
| **Cargo del Solicitante** | Directora de Comunicaciones |
| **Prioridad** | Media |
| **Estado** | RECHAZADO ❌ |
| **Fecha de Decisión** | 21 de Junio de 2026 |
| **Grupo** | 15 |

---

## 1. DESCRIPCIÓN DEL CAMBIO SOLICITADO

### ¿Qué se Solicita Cambiar?

Agregar integración con **Microsoft Teams** en el módulo de comunicaciones de la intranet para permitir:

1. **Iniciar reuniones desde la intranet**: Botón "Reunirse ahora" que crea reunión de Teams automáticamente

2. **Calendario integrado**: Ver reuniones de Teams programadas directamente en la intranet

3. **Notificaciones de reuniones**: Recordatorios 15 minutos antes de cada reunión programada

4. **Directorio con presencia**: Ver estado de disponibilidad de colegas (disponible, ocupado, en reunión) desde el directorio corporativo

5. **Chat rápido**: Botón para iniciar chat de Teams directamente desde el perfil de un empleado en el directorio

---

## 2. JUSTIFICACIÓN DEL CAMBIO

### Problema que Resuelve

**Situación Actual**:
- Empleados usan Teams para reuniones, pero deben salir de la intranet para programar/unirse
- No hay visibilidad de si un colega está disponible para conversar
- Información fragmentada: calendario en Outlook, directorio en intranet, reuniones en Teams

**Beneficios Esperados**:
1. ✅ **Experiencia Integrada**: Todo en un solo lugar, sin cambiar entre aplicaciones
2. ✅ **Productividad**: Reducir clics para iniciar reunión (de 5 a 1)
3. ✅ **Visibilidad**: Saber si colega está disponible antes de llamarlo
4. ✅ **Adopción**: Intranet se convierte en hub central de comunicación

### Impacto en Objetivos del Proyecto

- **Objetivo "Canal Único de Comunicación"**: Esta integración refuerza este objetivo ✅
- **Objetivo "Mejora de Eficiencia"**: Reducir tiempo en coordinación de reuniones ✅

---

## 3. ANÁLISIS DE IMPACTO

### 3.1 Impacto en Alcance

**Nuevo Alcance**:
- Integración con Microsoft Graph API (OAuth, permisos)
- Módulo de calendario sincronizado con Teams/Outlook
- Widget de estado de presencia en directorio
- Botones de "Reunirse" y "Chatear" en perfiles
- Notificaciones de reuniones próximas

**Complejidad**: 🟡 **MEDIA** - Teams tiene API bien documentada, pero requiere configuración de Azure AD

---

### 3.2 Impacto en Cronograma

| Actividad | Duración |
|-----------|----------|
| Configuración de Azure AD y permisos | 1 semana |
| Integración con Microsoft Graph API | 2 semanas |
| Desarrollo de módulo de calendario | 1 semana |
| Implementación de presencia y botones | 1 semana |
| Pruebas de integración | 1 semana |
| **TOTAL** | **6 semanas** |

**Impacto en Go-Live**: 🔴 **RETRASO DE 6 SEMANAS** (de 31-Ago a 12-Oct)

---

### 3.3 Impacto en Costo

| Concepto | Costo |
|----------|-------|
| Licencias adicionales de Teams (si aplica) | $0 (ya cuentan con Teams) |
| Desarrollo de integración | $6M CLP |
| Consultor Microsoft 365 (2 semanas) | $4M CLP |
| Pruebas y QA | $2M CLP |
| **TOTAL** | **$12M CLP** |

**Estado de Presupuesto**: 🔴 **EXCEDE RESERVA DISPONIBLE** ($9.5M disponibles)

---

### 3.4 Impacto en Calidad

| Aspecto | Impacto |
|---------|---------|
| **Funcionalidad** | 🟢 POSITIVO - Experiencia más integrada |
| **Usabilidad** | 🟢 POSITIVO - Menos cambios de contexto entre apps |
| **Rendimiento** | 🟡 RIESGO - Llamadas a API externa pueden ser lentas |
| **Seguridad** | 🟡 RIESGO - Manejo de tokens OAuth, permisos sensibles |
| **Dependencias** | 🔴 RIESGO - Dependencia de disponibilidad de Microsoft |

---

### 3.5 Impacto en Riesgos

| Riesgo | Análisis |
|--------|----------|
| **Nuevo - R21 - Dependencia de Microsoft** | 🆕 Nivel Medio (9) - Si API de Teams falla, funcionalidad no disponible |
| **Nuevo - R22 - Problemas de Permisos** | 🆕 Nivel Bajo (6) - Usuarios podrían no autorizar permisos en Azure AD |
| **R04 - Rendimiento** | ⬆️ Aumenta ligeramente - Llamadas a API externa pueden afectar tiempos de carga |

---

## 4. ALTERNATIVAS EVALUADAS

### Alternativa 1: Integración Completa con Teams [NO RECOMENDADA]

**Pros**:
- ✅ Experiencia de usuario superior
- ✅ Centraliza comunicación en intranet

**Cons**:
- ❌ Costo alto ($12M)
- ❌ Retraso significativo (+6 semanas)
- ❌ Agrega complejidad y dependencia externa

---

### Alternativa 2: Links Directos a Teams (Sin Integración) [RECOMENDADA]

**Descripción**: En lugar de integración, agregar botones que abren Teams en nueva pestaña

**Pros**:
- ✅ Costo mínimo ($500k)
- ✅ Tiempo mínimo (3 días)
- ✅ Sin dependencia de APIs externas
- ✅ Experiencia "suficientemente buena"

**Cons**:
- ❌ No hay calendario integrado
- ❌ No hay presencia en tiempo real
- ❌ Usuario debe cambiar de aplicación

---

### Alternativa 3: Diferir a Fase 2 [SELECCIONADA]

**Descripción**: No implementar ahora, evaluar para Fase 2 (6-12 meses post go-live)

**Pros**:
- ✅ No impacta cronograma ni costo de Fase 1
- ✅ Permite validar si usuarios realmente lo necesitan
- ✅ Tecnología puede evolucionar (Microsoft puede lanzar widgets más fáciles)

**Cons**:
- ❌ Usuarios no tienen esta funcionalidad en go-live
- ❌ Experiencia no tan integrada

---

## 5. RECOMENDACIÓN

### Recomendación del Jefe de Proyecto: ❌ **RECHAZAR CAMBIO**

**Fundamentos del Rechazo**:

1. **Nice-to-Have vs. Must-Have**: Esta funcionalidad es deseable pero **NO crítica** para objetivos del proyecto. Los objetivos se pueden cumplir sin ella.

2. **Costo-Beneficio Negativo**: 
   - Inversión: $12M + 6 semanas
   - Beneficio: Ahorro estimado de 30 segundos por empleado por reunión
   - ROI muy bajo para la inversión requerida

3. **Alternativas Suficientes**: 
   - **Alternativa 2** (links directos) cuesta $500k y toma 3 días
   - Provee 70% del beneficio con 4% del costo

4. **Timing Inadecuado**: Estamos en Semana 10 de 22. Agregar 6 semanas más pone en riesgo go-live.

5. **Reserva de Contingencia Agotada**: Solo quedan $9.5M y ya hay cambios aprobados por $10M.

---

## 6. DECISIÓN Y PLAN ALTERNATIVO

### Decisión: ❌ RECHAZAR Integración Completa

### Plan Alternativo Aprobado:

✅ **Implementar Links Directos a Teams** (Alternativa 2)

| Funcionalidad | Implementación |
|---------------|----------------|
| Botón "Reunirse en Teams" | Link directo: `https://teams.microsoft.com/l/meeting/new` |
| Botón "Chatear en Teams" | Link directo: `https://teams.microsoft.com/l/chat/0/0?users=email@konecta.com` |
| Ver calendario | Link a Outlook/Teams calendar |
| Estado de presencia | NO implementado (diferido a Fase 2) |

**Costo**: $500,000 CLP (dentro de presupuesto de Sprint 3)  
**Tiempo**: 3 días (no impacta cronograma)  
**Fecha de Implementación**: Sprint 3 (Semana 13)

---

## 7. DIFERIMIENTO A FASE 2

Esta funcionalidad se agrega a la lista de **Mejoras para Fase 2** (post go-live):

**Fecha Estimada para Fase 2**: Q1 2027 (6 meses post go-live)

**Condición para Implementar en Fase 2**:
- Si métricas de uso muestran que > 60% de usuarios usan links directos a Teams desde intranet
- Y encuestas post-go-live indican demanda alta por integración más profunda
- **Entonces** se evaluará presupuesto para integración completa

---

## 8. COMUNICACIÓN DE LA DECISIÓN

### A la Solicitante (Directora de Comunicaciones)

**Mensaje**:  
_"Patricia, gracias por tu solicitud de integración con Teams. Entendemos el valor, pero dado el estado actual del proyecto (presupuesto y cronograma comprometidos), hemos decidido implementar una solución más liviana: links directos a Teams. Esta solución provee 70% del beneficio con impacto mínimo. La integración completa será evaluada para Fase 2 según demanda de usuarios."_

**Compensación Ofrecida**:
- Implementación prioritaria de links directos en Sprint 3
- Compromiso de evaluar integración completa en Fase 2
- Inclusión de Patricia en comité de priorización de Fase 2

---

## 9. LECCIONES APRENDIDAS

**Para Futuros Proyectos**:

1. 🔴 **Requisitos No Funcionales**: Integraciones con sistemas externos (Teams, Salesforce, etc.) deben identificarse en fase de **Análisis de Requisitos**, no en **Ejecución**.

2. 🟡 **Change Freeze**: Establecer "change freeze" 2 meses antes de go-live (en este proyecto sería Semana 14).

3. 🟢 **Priorización MoSCoW**: Clasificar requisitos en Must-Have, Should-Have, Could-Have, Won't-Have desde inicio.

---

## 10. APROBACIONES

| Rol | Nombre | Decisión | Fecha |
|-----|--------|----------|-------|
| **Solicitante** | Patricia Rojas (Dir. Comunicaciones) | - | 20-Jun-2026 |
| **Jefe de Proyecto** | Sebastian Briceño | ❌ RECHAZA INTEGRACIÓN / ✅ APRUEBA LINKS DIRECTOS | 21-Jun-2026 |
| **Director de TI** | Carlos Méndez | ✅ APRUEBA DECISIÓN | 21-Jun-2026 |
| **Sponsor del Proyecto** | Rodrigo Silva | ✅ APRUEBA DECISIÓN | 21-Jun-2026 |

---

**Estado Final**: ❌ **CAMBIO RECHAZADO**  
✅ **Plan Alternativo Aprobado** (Links Directos)  
**Grupo**: 15  
**Versión**: 1.0

---

**NOTA**: La solicitante fue informada de la decisión y aceptó el plan alternativo. Se compromete evaluación para Fase 2.
