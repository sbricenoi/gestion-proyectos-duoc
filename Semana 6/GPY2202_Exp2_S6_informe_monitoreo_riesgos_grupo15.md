# INFORME DE MONITOREO DE RIESGOS

---

## INFORMACIÓN DEL PROYECTO

| Campo | Detalle |
|-------|---------|
| **ID del Proyecto** | KONECTA-INT-2024-001 |
| **Nombre del Proyecto** | Desarrollo de Intranet Corporativa 2.0 |
| **Jefe de Proyecto** | Sebastian Briceño |
| **Período de Reporte** | Semana 10 (15-21 de Junio de 2026) |
| **Fase del Proyecto** | Ejecución - Finalización de Sprint 2 |
| **Versión** | 1.0 |
| **Grupo** | 15 |

---

## 1. RESUMEN EJECUTIVO

### Estado General de Riesgos

Este informe presenta el estado actualizado de la gestión de riesgos del proyecto Intranet Corporativa 2.0 al cierre de la Semana 10, correspondiente a la finalización del Sprint 2 de desarrollo.

**Indicadores Clave**:
- **Riesgos Totales Identificados**: 15
- **Riesgos Activos**: 14
- **Riesgos Materializados**: 1 (R01 - Integraciones Legacy)
- **Riesgos Cerrados**: 0
- **Nuevos Riesgos Identificados**: 2 (R16, R17)
- **Exposición al Riesgo**: Media-Alta

### Semáforo de Estado

🔴 **ROJO**: Requiere atención inmediata  
- **R01**: Complejidad de integración con sistemas legacy (MATERIALIZADO)
- **R03**: Requisitos cambiantes (en aumento)

🟡 **AMARILLO**: Monitorear de cerca  
- **R02**: Resistencia al cambio
- **R04**: Problemas de rendimiento
- **R16**: Retraso en entrega de APIs (NUEVO)

🟢 **VERDE**: Bajo control  
- Resto de riesgos según monitoreo estándar

---

## 2. ESTADO DE RIESGOS POR NIVEL

### Distribución Actual vs. Inicial

| Nivel de Riesgo | Cantidad Inicial | Cantidad Actual | Cambio |
|-----------------|------------------|-----------------|--------|
| Crítico (20-25) | 0 | 0 | - |
| Alto (15-19) | 3 | 4 | +1 ⬆️ |
| Medio (10-14) | 4 | 5 | +1 ⬆️ |
| Bajo (5-9) | 6 | 6 | - |
| Muy Bajo (1-4) | 2 | 2 | - |
| **TOTAL** | **15** | **17** | **+2** |

**Análisis**: Se observa un incremento en riesgos altos y medios, principalmente debido a:
1. Materialización parcial de R01 (Integraciones Legacy)
2. Escalamiento de R03 (Requisitos Cambiantes) de Medio → Alto
3. Identificación de 2 nuevos riesgos relacionados con integraciones

---

## 3. RIESGOS MATERIALIZADOS

### R01: Complejidad de Integración con Sistemas Legacy

**Estado**: 🔴 MATERIALIZADO PARCIALMENTE

**Descripción del Evento**:  
Durante la Semana 8, al iniciar la integración con el sistema de RRHH legacy, el equipo técnico descubrió que:
- La API del sistema de RRHH no tiene documentación actualizada
- El sistema utiliza protocolos SOAP obsoletos en lugar de REST
- La base de datos tiene estructura no normalizada con tablas huérfanas
- El proveedor original del sistema (empresa brasileña) cerró operaciones en 2024

**Impacto Real**:
- **Cronograma**: Retraso de 1.5 semanas en Sprint 2 (vs. 2 semanas estimadas)
- **Costo**: $3.5M adicionales en consultor externo (vs. $5M estimados)
- **Alcance**: Se decidió implementar integración simplificada, posponer funcionalidades avanzadas a Fase 2
- **Equipo**: 60% del tiempo del Líder Técnico dedicado a resolver este problema

**Acciones Tomadas**:
1. ✅ Contratado consultor externo especializado en integraciones legacy (iniciado Semana 9)
2. ✅ Realizadas sesiones diarias de pair programming con consultor
3. ✅ Documentada ingeniería inversa de APIs no documentadas
4. ✅ Desarrollado módulo "adapter" para traducir SOAP → REST internamente
5. ⏳ En progreso: Carga manual temporal de datos como Plan B (80% completo)

**Efectividad del Plan de Respuesta**: ⭐⭐⭐⭐ (4/5)  
El plan de mitigación funcionó bien. La contratación anticipada del consultor y el Plan B de carga manual evitaron un retraso mayor.

**Lecciones Aprendidas**:
- Realizar análisis técnico de integraciones **antes** de Sprint 1, no durante
- Incluir pruebas de concepto (PoC) en fase de diseño
- Presupuestar más buffer para integraciones legacy (20% vs. 15%)

**Estado Actual**: EN RESOLUCIÓN  
**Fecha Estimada de Cierre**: Semana 12

---

## 4. RIESGOS QUE CAMBIARON DE NIVEL

### R03: Requisitos Ambiguos o Cambiantes - ESCALADO

**Cambio**: Nivel 16 (Alto) → Nivel 20 (Crítico) ⬆️

**Razón del Escalamiento**:
Durante la Semana 9, el Director de RRHH solicitó 3 cambios mayores en el módulo de autoservicio:
1. Agregar flujo de aprobación multi-nivel para vacaciones (antes era aprobación simple)
2. Cambiar cálculo de días hábiles para Brasil (diferente calendario)
3. Agregar módulo de "banco de horas" que no estaba en requisitos originales

**Impacto Proyectado**:
- **Cronograma**: +2.5 semanas adicionales
- **Costo**: +$7M (fuera de reserva de contingencia original)
- **Riesgo de alcance creep**: Otros stakeholders podrían solicitar cambios similares

**Acciones Tomadas**:
1. ✅ Comité de Control de Cambios convocado (Semana 9)
2. ✅ Análisis de impacto completo realizado y presentado al Sponsor
3. ✅ Decisión: Aprobar cambios 1 y 2, rechazar cambio 3 (Banco de Horas → Fase 2)
4. ✅ Línea base de requisitos re-establecida y firmada por todos los stakeholders
5. ✅ Comunicación formal: "No más cambios sin impacto de cronograma/costo"

**Estado Actual**: CONTROLADO pero en nivel CRÍTICO  
**Próxima Revisión**: Semanal con Sponsor

---

### R04: Problemas de Rendimiento - MEJORADO

**Cambio**: Nivel 12 (Medio) → Nivel 8 (Bajo) ⬇️

**Razón de la Mejora**:
- Pruebas de carga ejecutadas en Semana 9 con resultados positivos
- Simulación de 3,000 usuarios concurrentes: tiempos de respuesta < 2.5 segundos (objetivo: < 3 seg)
- Optimizaciones de base de datos implementadas (índices, consultas)
- Implementado CDN para contenido estático

**Acciones Que Funcionaron**:
1. Arquitectura escalable diseñada correctamente desde inicio
2. Pruebas de carga tempranas (no esperamos al final)
3. Optimizaciones proactivas

**Estado Actual**: BAJO CONTROL  
**Próxima Revisión**: Al finalizar cada Sprint

---

## 5. NUEVOS RIESGOS IDENTIFICADOS

### R16: Retraso en Entrega de APIs del Sistema de Nómina

**Nivel de Riesgo**: 15 - Alto 🔴 (NUEVO)

**Descripción**:  
El equipo de TI de la empresa proveedora del sistema de nómina informó en Semana 10 que las APIs requeridas para descargar liquidaciones de sueldo no estarán disponibles hasta Semana 13 (vs. Semana 11 comprometida inicialmente).

**Causa Raíz**:  
El proveedor tiene múltiples proyectos simultáneos y priorizó otro cliente. Nuestro proyecto no tiene penalidades contractuales por retraso.

**Probabilidad**: 4 - Alta (70%)  
**Impacto**: 4 - Alto  
**Nivel de Riesgo**: 16 - Alto 🔴

**Plan de Respuesta**:
1. **Mitigar**: Reunión urgente con proveedor (VP de TI) para escalar
2. **Mitigar**: Ofrecer soporte técnico de nuestro lado para acelerar desarrollo de APIs
3. **Plan B**: Desarrollar "scraper" temporal que extraiga liquidaciones desde interfaz web del sistema
4. **Transferir**: Incluir cláusula de penalidad en futuras renovaciones de contrato

**Responsable**: Director de TI  
**Fecha de Monitoreo**: Diaria hasta resolución

---

### R17: Falta de Participación de Brasil en Validaciones

**Nivel de Riesgo**: 12 - Medio 🟠 (NUEVO)

**Descripción**:  
Los usuarios piloto de Brasil han cancelado 2 de 3 sesiones de validación programadas por "falta de tiempo". Esto pone en riesgo que funcionalidades específicas para Brasil no sean validadas a tiempo.

**Causa Raíz**:  
Sesiones programadas en horario laboral peak (10:00 AM Brasil). Gerente de Brasil priorizó atención a clientes sobre proyecto interno.

**Probabilidad**: 3 - Media (45%)  
**Impacto**: 4 - Alto  
**Nivel de Riesgo**: 12 - Medio 🟠

**Plan de Respuesta**:
1. **Mitigar**: Reprogramar sesiones en horario alternativo (14:00-15:00 Brasil)
2. **Mitigar**: Escalar a Director General para respaldar importancia del proyecto
3. **Mitigar**: Grabar demos y solicitar feedback asincrónico vía formulario online
4. **Plan B**: Validación con usuarios de Chile que hablen portugués como proxy temporal

**Responsable**: Director de RRHH  
**Fecha de Monitoreo**: Semanal

---

## 6. EFECTIVIDAD DE PLANES DE RESPUESTA

### Planes que Están Funcionando Bien ✅

| Riesgo | Estrategia | Efectividad | Evidencia |
|--------|-----------|-------------|-----------|
| R02 - Resistencia al Cambio | Mitigar | ⭐⭐⭐⭐⭐ 5/5 | Encuestas muestran 78% de aceptación positiva. Embajadores en cada país activos. |
| R04 - Problemas de Rendimiento | Mitigar | ⭐⭐⭐⭐⭐ 5/5 | Pruebas de carga exitosas. Riesgo descendió de nivel. |
| R05 - Disponibilidad de Stakeholders | Mitigar | ⭐⭐⭐⭐ 4/5 | Agendamiento anticipado funcionó. Solo 1 cancelación en 10 semanas. |
| R06 - Vulnerabilidades de Seguridad | Mitigar | ⭐⭐⭐⭐ 4/5 | Herramientas automáticas detectaron y corrigieron 12 issues. Sin vulnerabilidades críticas. |

### Planes que Necesitan Ajuste ⚠️

| Riesgo | Estrategia | Efectividad | Acción Correctiva |
|--------|-----------|-------------|-------------------|
| R01 - Integraciones Legacy | Mitigar | ⭐⭐⭐ 3/5 | **Ajuste**: Aumentar buffer de tiempo para integraciones en futuros proyectos. Realizar análisis técnico más profundo en fase de diseño. |
| R03 - Requisitos Cambiantes | Mitigar | ⭐⭐ 2/5 | **Ajuste**: Fortalecer Comité de Control de Cambios. Sponsor debe participar directamente en evaluación de cambios. Establecer "change freeze" 1 mes antes de go-live. |
| R07 - Rotación de Personal | Mitigar | ⭐⭐⭐ 3/5 | **Ajuste**: 1 desarrollador renunció en Semana 9. Proceso de handover tomó 1.5 semanas (vs. 2 semanas planificadas). Incrementar sesiones de knowledge sharing. |

---

## 7. ANÁLISIS DE TENDENCIAS

### Tendencia de Riesgos Altos (Últimas 4 Semanas)

```
Semana 6:  3 riesgos altos ⬛⬛⬛
Semana 7:  3 riesgos altos ⬛⬛⬛
Semana 8:  4 riesgos altos ⬛⬛⬛⬛ ⬆️ (R01 materializado)
Semana 9:  5 riesgos altos ⬛⬛⬛⬛⬛ ⬆️ (R03 escalado)
Semana 10: 4 riesgos altos ⬛⬛⬛⬛ ⬇️ (R04 mejorado)
```

**Interpretación**: Tendencia al alza controlada. La materialización de R01 y escalamiento de R03 incrementaron exposición al riesgo. Sin embargo, las acciones correctivas están funcionando y R04 descendió de nivel.

### Proyección para Próximas 4 Semanas

**Escenario Optimista** 🟢:  
- R01 resuelto en Semana 12 → Nivel desciende a Medio
- R03 estabilizado con línea base congelada → Nivel desciende a Alto
- R16 resuelto con APIs entregadas → Cerrado
- **Resultado**: 2 riesgos altos al final de Sprint 3

**Escenario Realista** 🟡:  
- R01 parcialmente resuelto → Nivel se mantiene Alto
- R03 controlado pero aún crítico → Nivel se mantiene Crítico
- R16 con retraso adicional → Se mantiene Alto
- **Resultado**: 3-4 riesgos altos al final de Sprint 3

**Escenario Pesimista** 🔴:  
- R01 sin resolución → Impacta Sprint 3
- R03 con más cambios solicitados → Nivel Crítico
- R16 con retraso > 3 semanas → Requiere replantear cronograma
- **Resultado**: 5+ riesgos altos, proyecto en riesgo

**Probabilidad de Escenarios**:  
- Optimista: 30%  
- Realista: 55%  
- Pesimista: 15%

---

## 8. INDICADORES CLAVE DE RIESGOS (KRIs)

| Indicador | Valor Actual | Umbral Verde | Umbral Amarillo | Umbral Rojo | Estado |
|-----------|--------------|--------------|-----------------|-------------|--------|
| Cantidad de riesgos altos activos | 4 | ≤ 2 | 3-4 | ≥ 5 | 🟡 |
| Cantidad de riesgos materializados | 1 | 0 | 1-2 | ≥ 3 | 🟡 |
| % de planes de respuesta ejecutados | 85% | ≥ 90% | 70-89% | < 70% | 🟡 |
| Exposición monetaria (suma de impactos) | $52M | < $30M | $30-60M | > $60M | 🟡 |
| Cambios de nivel hacia arriba | 2 | 0 | 1-2 | ≥ 3 | 🟡 |
| Nuevos riesgos identificados por semana | 0.5 | ≤ 1 | 1-2 | ≥ 3 | 🟢 |

**Estado General de KRIs**: 🟡 **AMARILLO - Requiere Atención**

---

## 9. RIESGOS PRÓXIMOS A MATERIALIZARSE (WATCH LIST)

### Próximos 2 Semanas (Semanas 11-12)

| Riesgo | Probabilidad de Materialización | Trigger Activo |
|--------|--------------------------------|----------------|
| **R16** - Retraso APIs Nómina | 70% | ✅ Proveedor ya confirmó retraso |
| **R03** - Requisitos Cambiantes | 50% | ✅ Stakeholders solicitando nuevos cambios |
| **R07** - Rotación de Personal | 35% | ⚠️ 1 desarrollador en proceso de entrevistas externas |

**Acciones Preventivas**:
1. R16: Activar Plan B (scraper) si APIs no están en Semana 11
2. R03: Reunión con Sponsor para establecer "change freeze"
3. R07: Reunión 1:1 con desarrollador, evaluar incentivos de retención

---

## 10. CONSUMO DE RESERVA DE CONTINGENCIA

**Reserva Original**: $13M (13% del presupuesto)  
**Consumido a la Fecha**: $3.5M (27% de la reserva)  
**Disponible**: $9.5M (73% de la reserva)

**Desglose de Consumo**:
- R01 (Integraciones Legacy): $3.5M en consultor externo
- Otros riesgos: $0M

**Proyección de Consumo Adicional**:
- R03 (Cambios aprobados): $7M estimados
- R16 (APIs retrasadas): $2M estimados (desarrollo de Plan B)
- **Total Proyectado**: $12.5M (96% de la reserva)

**Estado**: 🟡 **AMARILLO** - Reserva casi agotada. No hay margen para más imprevistos.

**Recomendación**: Solicitar extensión de reserva de contingencia de $5M adicionales al Sponsor o congelar cambios de alcance.

---

## 11. RECOMENDACIONES PARA EL PRÓXIMO PERÍODO

### Acciones Inmediatas (Próxima Semana)

1. 🔴 **CRÍTICO**: Escalar R16 (APIs de Nómina) a VP de proveedor. Meta: Confirmar entrega en Semana 11.

2. 🔴 **CRÍTICO**: Reunión con Sponsor sobre R03 (Cambios). Solicitar respaldo ejecutivo para establecer "change freeze" a partir de Semana 12.

3. 🟡 **IMPORTANTE**: Monitorear diariamente progreso de R01 (Integraciones). Decisión Go/No-Go para Plan B en Semana 11.

4. 🟡 **IMPORTANTE**: Implementar sesiones de retención con equipo (1:1 con cada miembro) para prevenir R07 (Rotación).

5. 🟢 **PREVENCIÓN**: Validar con Brasil fecha definitiva para sesiones de validación (R17).

### Ajustes al Proceso de Gestión de Riesgos

1. **Aumentar frecuencia de reuniones de riesgos**: De semanal a 2 veces por semana durante fase crítica (Sprints 3 y 4)

2. **Dashboard de riesgos en tiempo real**: Implementar tablero visual en Jira/Confluence accesible para todos los stakeholders

3. **Análisis técnico obligatorio**: Todo futuro proyecto debe incluir análisis técnico de integraciones en fase de diseño, no ejecución

4. **Penalidades contractuales**: Negociar SLAs con penalidades para proveedores externos

### Escalamiento a Sponsor

**Temas a Escalar**:
1. Reserva de contingencia casi agotada ($9.5M disponibles vs. $12.5M proyectados)
2. Impacto acumulado de cambios de alcance en cronograma (+4 semanas proyectadas)
3. Necesidad de respaldo ejecutivo para congelar cambios

**Decisiones Requeridas del Sponsor**:
- ¿Aprobar extensión de reserva de contingencia?
- ¿Aprobar extensión de cronograma en 2 semanas? (alternativa: reducir alcance)
- ¿Respaldar "change freeze" oficial?

---

## 12. CONCLUSIONES

### Fortalezas del Proyecto

✅ **Gestión Proactiva**: La identificación temprana de R01 y R16 permitió acciones preventivas antes de crisis mayores.

✅ **Planes de Respuesta Efectivos**: 80% de los planes de mitigación están funcionando según lo esperado.

✅ **Comunicación Transparente**: Stakeholders están informados del estado real de riesgos sin suavizar problemas.

✅ **Cultura de Riesgos**: Equipo está sensibilizado y reporta proactivamente señales de alerta temprana.

### Áreas de Mejora

⚠️ **Control de Cambios Débil**: R03 escapó de control inicial. Necesario fortalecer Comité de Control de Cambios.

⚠️ **Análisis Técnico Anticipado**: R01 y R16 pudieron prevenirse con análisis más profundo en fase de diseño.

⚠️ **Contingencia Agotándose**: Reserva de $13M casi consumida. Necesario gestionar expectativas sobre cambios adicionales.

### Estado General del Proyecto en Términos de Riesgos

🟡 **AMARILLO - Requiere Atención Gerencial**

El proyecto está en una fase crítica con:
- 4 riesgos altos activos
- 1 riesgo materializado en resolución
- 2 nuevos riesgos identificados
- Reserva de contingencia al 73%

Sin embargo, con las acciones correctivas en marcha y el apoyo del Sponsor, el proyecto puede estabilizarse en las próximas 2-3 semanas.

---

## 13. PRÓXIMAS ACCIONES

| # | Acción | Responsable | Fecha Límite | Prioridad |
|---|--------|-------------|--------------|-----------|
| 1 | Reunión de escalamiento con Sponsor (R03, Contingencia) | Jefe de Proyecto | 22-Jun-2026 | 🔴 Crítica |
| 2 | Escalar R16 a VP de proveedor de nómina | Director de TI | 21-Jun-2026 | 🔴 Crítica |
| 3 | Decisión Go/No-Go para Plan B de integraciones (R01) | Líder Técnico | 24-Jun-2026 | 🔴 Crítica |
| 4 | Reuniones 1:1 de retención con equipo | Jefe de Proyecto | 28-Jun-2026 | 🟡 Alta |
| 5 | Confirmar sesiones de validación con Brasil | Director de RRHH | 23-Jun-2026 | 🟡 Alta |
| 6 | Actualizar matriz de riesgos con R16 y R17 | Jefe de Proyecto | 22-Jun-2026 | 🟢 Media |
| 7 | Implementar dashboard de riesgos en Jira | Líder Técnico | 30-Jun-2026 | 🟢 Media |

---

## 14. ANEXOS

### Anexo A: Matriz de Riesgos Actualizada
Ver documento: `GPY2202_Exp2_S6_matriz_riesgos_grupo15.md`

### Anexo B: Logs de Reuniones de Riesgos
- Semana 6: 03-Jun-2026
- Semana 7: 10-Jun-2026
- Semana 8: 17-Jun-2026 (Materialización de R01)
- Semana 9: 24-Jun-2026 (Escalamiento de R03)
- Semana 10: 01-Jul-2026

### Anexo C: Análisis de Impacto de Cambios (R03)
Ver documento: `Solicitud_de_Cambio_001.md`

---

## APROBACIONES

| Nombre | Rol | Firma | Fecha |
|--------|-----|-------|-------|
| Sebastian Briceño | Jefe de Proyecto | _____________ | ___/___/2026 |
| Sebastian Briceño | Director de TI | _____________ | ___/___/2026 |
| Sebastian Briceño | Sponsor del Proyecto | _____________ | ___/___/2026 |

---

**Próximo Informe Programado**: 28 de Junio de 2026 (Semana 11)  
**Responsable**: Jefe de Proyecto - Sebastian Briceño  
**Grupo**: 15  
**Versión**: 1.0
