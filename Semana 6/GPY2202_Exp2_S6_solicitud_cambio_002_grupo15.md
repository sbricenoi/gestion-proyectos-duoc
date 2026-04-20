# SOLICITUD DE CAMBIO #002
## Agregar Módulo de Firma Electrónica en Solicitudes de RRHH

---

## INFORMACIÓN GENERAL

| Campo | Detalle |
|-------|---------|
| **ID de Solicitud** | C005 |
| **Proyecto** | Intranet Corporativa 2.0 - Konecta |
| **ID del Proyecto** | KONECTA-INT-2024-001 |
| **Fecha de Solicitud** | 18 de Junio de 2026 |
| **Solicitante** | José Martínez |
| **Cargo del Solicitante** | Gerente Legal - Brasil |
| **Prioridad** | CRÍTICA |
| **Estado** | PENDIENTE DE DECISIÓN ⏳ |
| **Grupo** | 15 |

---

## 1. DESCRIPCIÓN DEL CAMBIO SOLICITADO

### ¿Qué se Solicita Cambiar?

Agregar funcionalidad de **firma electrónica** en todas las solicitudes que se realizan a través del módulo de autoservicio de RRHH (vacaciones, certificados, permisos).

**Funcionalidades Específicas**:

1. **Firma del Empleado**: Al enviar una solicitud (ej: vacaciones), el empleado debe firmar electrónicamente declarando que la información es verídica.

2. **Firma de Aprobadores**: Cada aprobador (jefe, RRHH, gerencia) debe firmar electrónicamente su aprobación/rechazo.

3. **Certificado Digital**: Utilizar firma electrónica avanzada con certificado digital cumpliendo normativa brasileña (Ley 14.063/2020).

4. **Trazabilidad**: Almacenar hash criptográfico de cada firma con timestamp para auditorías.

5. **Validación**: Permitir verificar autenticidad de firmas en cualquier momento.

---

## 2. JUSTIFICACIÓN DEL CAMBIO

### Problema que Resuelve

**Problema Identificado**:  
El 16 de Junio de 2026, el área Legal de Brasil informó que **el Decreto 11.076/2022 (actualización de Ley 14.063/2020)** establece que:

> "Toda solicitud de ausencia laboral (vacaciones, licencias) debe contar con firma electrónica válida del solicitante y aprobadores, para tener validez legal en caso de litigio laboral."

**Situación Actual del Proyecto**:
- El módulo de RRHH fue diseñado sin firma electrónica
- Las solicitudes se aprueban con solo hacer clic en "Aprobar" (sin firma)
- **Esto NO cumple** con la nueva normativa brasileña

**Consecuencias de No Implementar**:
- 🔴 Incumplimiento legal en Brasil (multas de hasta R$50,000 por cada empleado afectado)
- 🔴 Solicitudes de vacaciones realizadas por empleados de Brasil NO tendrían validez legal
- 🔴 En caso de litigio, Konecta no podría demostrar que empleado solicitó/aprobó vacaciones
- 🔴 Empresa podría ser obligada a cerrar módulo de RRHH en Brasil hasta cumplir normativa

### Beneficios Esperados

1. ✅ **Cumplimiento Legal**: Cumplir con Decreto 11.076/2022 de Brasil
2. ✅ **Validez Jurídica**: Solicitudes tienen valor legal en caso de litigio laboral
3. ✅ **Trazabilidad Reforzada**: Prueba irrefutable de quién firmó y cuándo
4. ✅ **Extensible**: Firma electrónica puede usarse en otros módulos futuros
5. ✅ **Competitividad**: Pocas empresas en América Latina tienen firma electrónica en intranet

---

## 3. ANÁLISIS DE IMPACTO

### 3.1 Impacto en Alcance

**Nuevo Alcance**:
- Integración con proveedor de firma electrónica (ej: DocuSign, Adobe Sign, Certisign Brasil)
- Módulo de gestión de certificados digitales
- Interfaz de firma (modal al aprobar/solicitar)
- Almacenamiento seguro de firmas y hashes
- Módulo de validación de firmas

**Complejidad**: 🔴 **ALTA** - Requiere integración con proveedor externo, cumplimiento normativo, criptografía

---

### 3.2 Impacto en Cronograma

| Actividad | Duración |
|-----------|----------|
| Selección de proveedor de firma electrónica | 1 semana |
| Integración técnica con proveedor | 2 semanas |
| Desarrollo de módulo de gestión de certificados | 1 semana |
| Pruebas de firma (funcionales + legales) | 1 semana |
| Validación con área Legal de Brasil | 0.5 semanas |
| **TOTAL** | **5.5 semanas** |

**Impacto en Go-Live**: ⚠️ **RETRASO DE 5.5 SEMANAS** (de 31-Ago a 05-Oct)

---

### 3.3 Impacto en Costo

| Concepto | Costo |
|----------|-------|
| Licencia de firma electrónica (500 empleados Brasil x $50 USD/año) | $25,000 USD (~$12.5M CLP) |
| Integración técnica (desarrollo + pruebas) | $8M CLP |
| Consultoría legal (validación normativa) | $3M CLP |
| Certificados digitales para empleados | $5M CLP |
| **TOTAL** | **$28.5M CLP** |

**Estado de Presupuesto**: 🔴 **EXCEDE RESERVA DISPONIBLE**  
- Reserva de contingencia disponible: $9.5M
- Costo del cambio: $28.5M
- **Déficit: $19M** (requiere aprobación de presupuesto adicional)

---

### 3.4 Impacto en Riesgos

| Riesgo | Análisis |
|--------|----------|
| **R08 - Cambios Regulatorios** | 🔴 MATERIALIZADO - Este cambio es consecuencia directa de este riesgo |
| **Nuevo - R19 - Dependencia de Proveedor Externo** | 🆕 Nivel Alto (16) - Si proveedor falla, módulo RRHH no funciona en Brasil |
| **Nuevo - R20 - Complejidad Normativa** | 🆕 Nivel Medio (12) - Interpretación incorrecta de ley podría causar incumplimiento |

---

## 4. ALTERNATIVAS EVALUADAS

### Alternativa 1: Implementar Firma Electrónica Completa [RECOMENDADA CON CONDICIONES]

**Pros**:
- ✅ Cumplimiento legal 100%
- ✅ Solución robusta y escalable

**Cons**:
- ❌ Costo muy alto ($28.5M)
- ❌ Retraso significativo (+5.5 semanas)
- ❌ Complejidad técnica alta

---

### Alternativa 2: Firma Electrónica Solo para Brasil (Reducir Alcance)

**Descripción**: Implementar firma solo para empleados de Brasil (500 de 2,700)

**Pros**:
- ✅ Costo reducido ($15M vs. $28.5M)
- ✅ Tiempo reducido (4 semanas vs. 5.5 semanas)
- ✅ Cumple requisito legal donde es obligatorio

**Cons**:
- ❌ Solución parcial (no todos los países)
- ❌ Experiencia de usuario inconsistente entre países

---

### Alternativa 3: Firma Simplificada (Sin Certificado Digital)

**Descripción**: Implementar firma electrónica simple (clic + acepto términos) sin certificado digital

**Pros**:
- ✅ Bajo costo ($3M)
- ✅ Rápido (2 semanas)

**Cons**:
- ❌ NO cumple Decreto 11.076/2022 (requiere firma avanzada con certificado)
- ❌ Sin validez legal
- ❌ No resuelve el problema

---

### Alternativa 4: Postergar Go-Live en Brasil

**Descripción**: Lanzar intranet en Chile, Argentina y Colombia en 31-Ago. Lanzamiento en Brasil en 05-Oct (con firma electrónica lista)

**Pros**:
- ✅ No retrasa go-live en 3 países (1,700 empleados)
- ✅ Da tiempo para implementar firma correctamente

**Cons**:
- ❌ Brasil queda excluido del lanzamiento inicial
- ❌ Objetivo de "100% de empleados" no se cumple el 31-Ago
- ❌ Complejidad operativa de go-live en 2 fases

---

## 5. RECOMENDACIÓN

### Recomendación del Jefe de Proyecto: ⚠️ **APROBAR CON CONDICIONES**

**Recomendación Específica**: Implementar **Alternativa 4** (Postergar Go-Live en Brasil)

**Justificación**:

1. **Urgencia Legal**: Es un requerimiento legal, no opcional. No cumplirlo expone a Konecta a multas significativas.

2. **Costo-Beneficio**: El costo de $28.5M es alto, pero las multas por incumplimiento en Brasil podrían ser mayores (R$50k x 500 empleados = R$25M = $25M CLP).

3. **Go-Live Escalonado**: Lanzar en 3 países primero (75% de empleados) y Brasil después minimiza impacto en cronograma general.

4. **Presupuesto Adicional Requerido**: Se necesita aprobación del Sponsor para $19M adicionales (más allá de contingencia).

---

## 6. DECISIONES REQUERIDAS

### Del Sponsor (URGENTE)

- [ ] ¿Aprobar presupuesto adicional de $19M para firma electrónica?
- [ ] ¿Aceptar go-live escalonado (3 países en 31-Ago, Brasil en 05-Oct)?

### Del Área Legal

- [ ] Confirmar interpretación del Decreto 11.076/2022
- [ ] Validar que solución propuesta cumple normativa
- [ ] Aprobar proveedor de firma electrónica seleccionado

### Del Área de Finanzas

- [ ] ¿De dónde saldrán los $19M adicionales? (¿presupuesto de 2027? ¿reasignación?)

---

## 7. PLAN DE CONTINGENCIA (SI NO SE APRUEBA)

Si el Sponsor rechaza el cambio por costo:

**Opción A**: No lanzar módulo de RRHH en Brasil (mantener proceso manual)
- Impacto: Objetivo de 100% adopción no se cumple
- Riesgo: Usuarios de Brasil insatisfechos

**Opción B**: Lanzar sin firma y esperar inspección laboral
- Impacto: ALTO riesgo legal
- No recomendado

**Opción C**: Negociar con proveedor licencias gratuitas de prueba por 6 meses
- Impacto: Solución temporal
- Requiere renegociación en 6 meses

---

## 8. URGENCIA

🔴 **CRÍTICA - DECISIÓN REQUERIDA EN 48 HORAS**

**Razón**: 
- Estamos en Semana 10 (Sprint 2 finalizando)
- Si se aprueba, debe iniciarse en Semana 11 (Sprint 3)
- Retrasar decisión comprometería go-live incluso en escenario de 2 fases

---

## 9. APROBACIONES

| Rol | Nombre | Decisión | Fecha |
|-----|--------|----------|-------|
| **Solicitante** | José Martínez (Legal Brasil) | - | 18-Jun-2026 |
| **Jefe de Proyecto** | Sebastian Briceño | ⚠️ RECOMIENDA APROBAR CON CONDICIONES | 19-Jun-2026 |
| **Director de TI** | Carlos Méndez | ⏳ PENDIENTE | - |
| **Área Legal Corporativa** | ⏳ PENDIENTE | - |
| **Sponsor del Proyecto** | ⏳ PENDIENTE | - |

---

**Estado**: ⏳ **PENDIENTE DE DECISIÓN**  
**Deadline para Decisión**: 21 de Junio de 2026  
**Grupo**: 15  
**Versión**: 1.0

---

**NOTA CRÍTICA**: Esta solicitud tiene carácter URGENTE por implicaciones legales. Se requiere decisión ejecutiva inmediata.
