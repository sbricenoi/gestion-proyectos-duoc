# GUIÓN PARA PRESENTACIÓN EN VIDEO - EDT
## Proyecto: Intranet Corporativa 2.0 - Konecta
### GPY2202 - Semana 3 - Grupo 15

---

## INFORMACIÓN GENERAL
- **Duración**: 3-4 minutos
- **Formato**: Video en Microsoft Teams
- **Presentador**: Sebastian Briceño (Grupo 15)
- **Material de apoyo**: Compartir pantalla mostrando el EDT en la página web

---

## ESTRUCTURA DEL GUIÓN

### 🎬 INTRODUCCIÓN (30 segundos)

**[Cámara encendida, mirada a la cámara, sonrisa profesional]**

"Hola, muy buenos días/tardes. Mi nombre es **Sebastian Briceño** del **Grupo 15**, y hoy les voy a presentar la **Estructura de Desglose de Trabajo** del proyecto **Intranet Corporativa 2.0** para la empresa **Konecta**.

Este proyecto busca desarrollar una plataforma web moderna que mejore la comunicación y acceso a información para **2,700 empleados** distribuidos en **4 países** de América Latina, con un presupuesto de **100 millones de pesos** y una duración de **5 meses**.

Ahora, permítanme compartir mi pantalla para mostrarles cómo hemos estructurado este proyecto."

**[Acción: Compartir pantalla mostrando la página web del EDT]**

---

### 📊 EXPLICACIÓN DE LA EDT (2 minutos 30 segundos)

#### Parte 1: ¿Qué es la EDT y su propósito? (30 segundos)

"La EDT o **Estructura de Desglose de Trabajo** es una herramienta fundamental que descompone jerárquicamente todo el alcance del proyecto en paquetes de trabajo manejables. 

Como pueden ver en pantalla, nuestra EDT está organizada en **3 niveles**:
- **Nivel 1**: 12 paquetes de trabajo principales
- **Nivel 2**: 62 subpaquetes
- **Nivel 3**: 287 actividades detalladas

Esto nos permite planificar, asignar recursos y dar seguimiento efectivo a cada componente del proyecto."

**[Acción: Hacer scroll lentamente por la estructura jerárquica del EDT]**

---

#### Parte 2: Paquetes Principales (1 minuto 30 segundos)

"Permítanme explicarles los **paquetes de trabajo más importantes**:

**1. Gestión del Proyecto** [señalar en pantalla]
Este paquete incluye todas las actividades de dirección: desde el inicio con el acta de constitución, pasando por la planificación con cronogramas y matriz de riesgos, hasta el cierre con lecciones aprendidas. Es transversal a todo el proyecto.

**2. Análisis y Definición de Requisitos** [señalar]
Aquí levantamos y validamos requisitos con stakeholders de los 4 países. Por ejemplo, realizamos entrevistas con directores, talleres con usuarios y documentamos tanto requisitos funcionales como no funcionales.

**3. Diseño y Arquitectura** [señalar]
Incluye el diseño técnico completo: arquitectura de software, diseño de base de datos y, muy importante, el diseño de experiencia de usuario validado con usuarios reales de cada país.

**4. Desarrollo del Software** [señalar]
Lo dividimos estratégicamente en **4 sprints**:
- Sprint 1: Módulos Core como autenticación y SSO
- Sprint 2: Módulos de RRHH para vacaciones y liquidaciones
- Sprint 3: Directorio corporativo y sistema de documentos
- Sprint 4: Integraciones con Active Directory y sistemas legacy

**5. Pruebas y Aseguramiento de Calidad** [señalar]
Un paquete crítico donde ejecutamos pruebas funcionales, de rendimiento con 3,000 usuarios concurrentes, pruebas de seguridad siguiendo OWASP Top 10, y validamos con usuarios finales en las pruebas UAT.

**6. Infraestructura y Despliegue** [señalar]
Configuramos toda la infraestructura en la nube con alta disponibilidad, backups automáticos, monitoreo 24/7 y finalmente ejecutamos el go-live en producción."

**[Acción: Pausar brevemente en cada paquete mientras se menciona]**

---

#### Parte 3: Paquetes Complementarios (30 segundos)

"Los paquetes restantes son igualmente importantes:

**Documentación** incluye manuales técnicos, guías de usuario en español y portugués, y 5 videos tutoriales.

**Gestión del Cambio y Capacitación** asegura que los 2,700 empleados estén capacitados y adoptemos la nueva intranet exitosamente.

Y tenemos paquetes transversales como **Gestión de Calidad** y **Gestión de Riesgos** que operan durante todo el proyecto para garantizar el éxito."

**[Acción: Hacer scroll mostrando estos paquetes]**

---

### 💡 REFLEXIÓN Y EJEMPLO ARGUMENTADO (1 minuto)

"Ahora permítanme compartir una **reflexión importante** sobre por qué esta EDT es fundamental para nuestro proyecto:

**[Reflexión argumentada]**
La EDT no es solo un documento técnico, sino una herramienta estratégica. En mi análisis del proyecto, identifiqué que gestionar 2,700 usuarios en 4 países diferentes presenta riesgos significativos de coordinación. **Sin una EDT bien estructurada, estos riesgos se materializarían en:**

1. **Duplicación de esfuerzos**: Por ejemplo, sin el paquete 2.3 de validación de requisitos con los 4 países, podríamos desarrollar funcionalidades que no aplican a Brasil o Colombia.

2. **Dependencias no gestionadas**: El Sprint 4 de integraciones depende completamente de que el análisis de sistemas legacy (paquete 9.1) esté terminado. La EDT hace estas dependencias explícitas.

**[Ejemplo específico con evidencia]**
Les doy un **ejemplo concreto**: 

El **módulo de liquidaciones de sueldo** que está en el paquete 4.3 (Sprint 2). Este módulo:
- **Requisito identificado**: En el paquete 2.1, entrevistamos al Director de RRHH quien especificó que 400 tickets mensuales de mesa de ayuda son por solicitudes de liquidaciones impresas
- **Diseño validado**: En el paquete 3.3, validamos con 5 usuarios por país que el diseño UI cumple con las expectativas
- **Desarrollo con estándar**: En el Sprint 2, se desarrolla con cobertura del 80% de pruebas unitarias
- **Prueba de seguridad**: En el paquete 5.3, validamos que solo el titular puede acceder a sus liquidaciones, cumpliendo normativas de cada país
- **Integración crítica**: En el paquete 9.4, nos integramos con el sistema de nómina existente

**La evidencia de que esta estructura funciona es que cada paquete tiene criterios de aceptación medibles.** Por ejemplo, el paquete 5 debe tener "cero bugs críticos" antes de pasar a producción. Esto no sería posible sin la organización que nos da la EDT."

**[Acción: Usar manos o cursor para señalar cada punto mientras lo explicas]**

---

### 🎯 REFLEXIÓN FINAL Y CONCLUSIÓN (30 segundos)

"Basándome en mi análisis de este proyecto, **considero que esta EDT es exitosa por tres razones fundamentales respaldadas con evidencia**:

**1. Completitud verificable**: Con 287 actividades detalladas, cumplimos la regla del 100%. No hay "trabajo invisible" - todo está explícito, desde reuniones de seguimiento hasta celebración del equipo.

**2. Trazabilidad real**: Por ejemplo, el objetivo del proyecto de "lograr 100% de adopción" se descompone en paquetes concretos: capacitación (paquete 8.4), documentación en dos idiomas (paquete 7.2) y medición de adopción (paquete 12.5). **Esto permite verificar que cada objetivo tiene actividades que lo respaldan.**

**3. Gestión de riesgos integrada**: El paquete 11 de gestión de riesgos opera continuamente. Por ejemplo, identificamos el riesgo de "resistencia al cambio" y lo mitigamos con el paquete 8 completo de gestión del cambio. **Esta EDT no solo planifica el éxito, planifica cómo prevenir el fracaso.**

En conclusión, esta EDT transforma un proyecto de 100 millones de pesos y 5 meses en 287 actividades ejecutables y medibles."

---

### 🙏 CIERRE (10 segundos)

**[Dejar de compartir pantalla, volver a cámara]**

"Esto ha sido la presentación de nuestra Estructura de Desglose de Trabajo. Muchas gracias por su atención y quedo disponible para cualquier consulta o retroalimentación."

**[Sonrisa, pausa 2 segundos, terminar grabación]**

---

## 📋 CHECKLIST ANTES DE GRABAR

### Preparación Técnica
- [ ] Teams abierto y listo para grabar
- [ ] Página web del EDT abierta en el navegador
- [ ] Audio funcionando correctamente (probar micrófono)
- [ ] Cámara encendida y bien iluminada
- [ ] Cerrar notificaciones y aplicaciones innecesarias
- [ ] Pantalla limpia (cerrar tabs no relacionadas)

### Preparación Personal
- [ ] Leer el guión completo 2-3 veces en voz alta
- [ ] Cronometrar la práctica (debe estar entre 3-4 minutos)
- [ ] Practicar las transiciones entre secciones
- [ ] Tener agua cerca por si necesitas
- [ ] Ropa profesional visible en cámara

### Durante la Grabación
- [ ] Hablar con claridad y a ritmo moderado
- [ ] Mantener contacto visual con la cámara
- [ ] Sonreír y mantener energía positiva
- [ ] No leer textualmente, usar el guión como guía
- [ ] Hacer pausas breves entre secciones importantes
- [ ] Señalar elementos en pantalla cuando los menciones

---

## 💡 TIPS ADICIONALES

### Para Compartir Pantalla Efectivamente
1. **Antes de compartir**: Asegúrate de tener la página del EDT visible
2. **Al compartir**: Selecciona la ventana específica del navegador (no todo el escritorio)
3. **Durante**: Usa el cursor para señalar elementos mientras hablas
4. **Scroll suave**: No hagas scroll muy rápido, da tiempo de ver
5. **Zoom si es necesario**: Si hay texto pequeño, acerca la vista (Ctrl/Cmd + '+')

### Para Mejor Presentación
- **Tono de voz**: Profesional pero amigable, no monótono
- **Velocidad**: Ni muy rápido ni muy lento, pronuncia claramente
- **Énfasis**: Destaca palabras clave como "2,700 empleados", "4 países", "287 actividades"
- **Reflexiones**: Al explicar tu reflexión, habla en primera persona ("En mi análisis...", "Considero que...")
- **Evidencias**: Usa datos específicos del proyecto (400 tickets mensuales, 80% cobertura de pruebas)
- **Argumentación**: Conecta causa-efecto ("Sin esto... pasaría esto...", "Gracias a esto... logramos...")
- **Ejemplos concretos**: El ejemplo de liquidaciones con todo su ciclo hace tangible la EDT
- **Números específicos**: Los números (287 actividades, 62 subpaquetes, 100M pesos) dan credibilidad

### Si Algo Sale Mal
- **Si te trabas**: Pausa, respira, continúa desde la última frase
- **Si olvidas algo**: No entres en pánico, sigue adelante
- **Si hay ruido externo**: Pausa la grabación, espera, reinicia desde esa sección
- **Puedes grabar por secciones**: Graba cada parte y luego une los videos

---

## ⏱️ DISTRIBUCIÓN DEL TIEMPO

| Sección | Duración | Acumulado |
|---------|----------|-----------|
| Introducción | 30 seg | 0:30 |
| ¿Qué es EDT? | 30 seg | 1:00 |
| Paquetes principales | 1:30 min | 2:30 |
| Paquetes complementarios | 30 seg | 3:00 |
| Reflexión y ejemplo argumentado | 1:00 min | 4:00 |
| Reflexión final y conclusión | 30 seg | 4:30 |
| Cierre | 10 seg | 4:40 |

**Total**: 4 minutos 40 segundos 

**Nota**: Si necesitas reducir tiempo, puedes acortar la sección de "Paquetes principales" a 1 minuto, lo que te dejaría en 4:10 minutos totales.

---

## 🎯 OBJETIVOS DE LA PRESENTACIÓN

✅ Demostrar comprensión clara de qué es una EDT
✅ Mostrar que la EDT está completa y bien estructurada
✅ Explicar con ejemplos concretos cómo funciona
✅ Comunicar de forma profesional y clara
✅ Respetar el límite de tiempo (2-4 minutos)

---

## 📞 INSTRUCCIONES PARA GRABAR EN TEAMS

1. Abre Microsoft Teams
2. Inicia una reunión individual (no necesitas invitar a nadie)
3. Únete a la reunión
4. Activa tu cámara y micrófono
5. Haz clic en "Más opciones" (•••) → "Iniciar grabación"
6. La grabación comenzará después de 3 segundos
7. Presenta siguiendo el guión
8. Al terminar: "Más opciones" → "Detener grabación"
9. La grabación se guardará automáticamente en tu OneDrive/Stream
10. Descarga el video y súbelo según las instrucciones del curso

---

**¡Mucho éxito con tu presentación! 🚀**

