# 📋 PROMPT PARA CARGAR OFERTAS DE TRABAJO

## 🎯 OBJETIVO
Este documento explica cómo cargar nuevas ofertas de trabajo en la página web, manteniendo el formato y las reglas establecidas.

---

## 📐 ESTRUCTURA DE UNA OFERTA

Cada oferta debe seguir esta estructura exacta:

```typescript
{
  id: 'job-XXX',                    // ID único (job-003, job-004, etc.)
  title: 'Título del Trabajo',      // Ej: "Operario de Producción"
  company: 'Nombre Genérico',       // ⚠️ NO usar nombres reales de empresas
  location: 'Ciudad',               // Ej: "Ámsterdam"
  country: 'País',                  // Ej: "Países Bajos"
  salary: '€X,XXX - €X,XXX/mes',   // Rango salarial mensual
  salaryPerHour: '€XX.XX/hora',     // Opcional: salario por hora
  contractType: 'Tiempo completo',  // Tipo de contrato
  duration: '6 meses (renovable)',  // Duración del contrato
  requirements: [                   // Array de requisitos
    'Requisito 1',
    'Requisito 2',
    // ...
  ],
  benefits: [                       // Array de beneficios
    'Beneficio 1',
    'Beneficio 2',
    // ...
  ],
  description: 'Descripción del trabajo...', // Texto descriptivo
  available: true,                   // Siempre true para ofertas activas
  urgent: false                     // true = urgente (arriba), false = normal (abajo)
}
```

---

## ⚠️ REGLAS IMPORTANTES

### 1. **NO MOSTRAR NOMBRES REALES DE EMPRESAS**
   - ❌ **NO usar**: "Amazon", "IKEA", "Heineken", etc.
   - ✅ **SÍ usar**: "Empresa Logística Holandesa", "Centro de Distribución", "Empresa Manufacturera", "Compañía de Retail", etc.
   - **Razón**: Privacidad y protección de datos de las empresas.

### 2. **NIVEL DE INGLÉS - SIEMPRE BÁSICO/COMUNICACIÓN**
   - ❌ **NO usar**: "B1", "B2", "Intermedio", "Avanzado", "Fluent"
   - ✅ **SÍ usar**: 
     - "Inglés básico comunicación"
     - "Inglés básico (comunicación)"
     - "Inglés básico - comunicación diaria"
     - "Inglés básico para principiantes con ganas de mejorar y aprender"
   - **Razón**: Las ofertas son para personas que están empezando y quieren mejorar.

### 3. **CLASIFICACIÓN URGENTE vs NORMAL**
   - **`urgent: true`** → Se muestra en la sección **"Ofertas Urgentes"** (arriba, fondo rojo/naranja)
   - **`urgent: false`** → Se muestra en la sección **"Más Ofertas Disponibles"** (abajo, fondo blanco)
   - **Criterio**: Si la oferta requiere disponibilidad inmediata o es prioritaria, usar `urgent: true`

### 4. **⚠️ FORMATOS PROBLEMÁTICOS - EVITAR A TODA COSTA**
   - ❌ **NO usar horarios con formato complejo**: `(06:00-15:00 o 15:00-00:00)`
   - ✅ **SÍ usar formatos simples**: `"Disponibilidad para trabajo por turnos mañana y tarde"` o `"Turnos de mañana y tarde"`
   - ❌ **NO usar números con comas en strings**: `€135,40` dentro de texto puede causar problemas
   - ✅ **SÍ usar texto descriptivo**: `"Alojamiento disponible (consultar costos)"` en lugar de precios exactos
   - ❌ **NO usar caracteres especiales complejos**: Evitar combinaciones de guiones, dos puntos y números juntos
   - ✅ **SÍ usar texto claro y descriptivo**: Siempre preferir descripciones en texto plano
   - **Razón**: Estos formatos pueden causar errores de compilación en Next.js y hacer que la página no cargue (pantalla gris/negra)

### 5. **🔄 VARIACIÓN DE LENGUAJE - EVITAR REPETICIÓN ENTRE OFERTAS**
   - ⚠️ **CRÍTICO**: Al cargar múltiples ofertas, verificar que el texto que se pasa contiene una o varias ofertas
   - ❌ **NO usar las mismas palabras/frases** en diferentes ofertas
   - ❌ **NO copiar y pegar** descripciones similares entre ofertas
   - ✅ **SÍ variar el lenguaje**:
     - Usar sinónimos diferentes para cada oferta
     - Cambiar la estructura de las frases
     - Variar las expresiones y términos utilizados
     - Personalizar cada descripción para que sea única
   - **Ejemplos de variación**:
     - ❌ "Trabajo en almacén logístico" (repetido)
     - ✅ Oferta 1: "Trabajo en almacén logístico"
     - ✅ Oferta 2: "Oportunidad en centro de distribución"
     - ✅ Oferta 3: "Posición en instalación de almacenamiento"
   - **Razón**: Cada oferta debe parecer única y profesional, no como copiar y pegar. Evita que se note que son plantillas repetidas.

---

## 📝 EJEMPLO COMPLETO

### Oferta Normal (abajo):
```typescript
{
  id: 'job-003',
  title: 'Operario de Producción',
  company: 'Empresa Logística Holandesa',  // ⚠️ Genérico, no nombre real
  location: 'Ámsterdam',
  country: 'Países Bajos',
  salary: '€2,480 - €2,800/mes',
  salaryPerHour: '€15.50/hora',
  contractType: 'Tiempo completo',
  duration: '6 meses (renovable)',
  requirements: [
    'Pasaporte europeo vigente',
    'Disponibilidad inmediata',
    'Inglés básico comunicación',  // ⚠️ Básico, no B1/B2
    'Experiencia en logística (deseable)',
  ],
  benefits: [
    'Alojamiento incluido',
    'Transporte proporcionado',
    'Seguro médico',
    'Capacitación incluida',
  ],
  description: 'Buscamos operarios para trabajar en almacén logístico. Trabajo en equipo, ambiente internacional, horarios flexibles. Ideal para personas responsables y con ganas de trabajar.',
  available: true,
  urgent: false  // ⚠️ Normal = va abajo
}
```

### Oferta Urgente (arriba):
```typescript
{
  id: 'job-004',
  title: 'Personal de Almacén',
  company: 'Centro de Distribución',  // ⚠️ Genérico, no nombre real
  location: 'Rotterdam',
  country: 'Países Bajos',
  salary: '€2,500 - €2,900/mes',
  salaryPerHour: '€15.75/hora',
  contractType: 'Tiempo completo',
  duration: '6 meses (renovable)',
  requirements: [
    'Pasaporte europeo vigente',
    'Disponibilidad inmediata',
    'Inglés básico - comunicación diaria',  // ⚠️ Básico, no técnico
    'Buena condición física',
  ],
  benefits: [
    'Alojamiento compartido incluido',
    'Bicicleta eléctrica para transporte',
    'Bonos por productividad',
    'Posibilidad de extensión',
  ],
  description: 'Oportunidad en centro de distribución moderno. Trabajo dinámico, equipo multicultural, excelente ambiente laboral. Perfecto para parejas que quieren trabajar juntos.',
  available: true,
  urgent: true  // ⚠️ Urgente = va arriba
}
```

---

## 🎨 CÓMO SE MUESTRAN EN LA PÁGINA

### Sección "Ofertas Urgentes" (arriba):
- Fondo: Gradiente rojo/naranja (`from-red-50 to-orange-50`)
- Badge: "URGENTE" con animación pulsante
- Borde: Rojo (`border-red-400`)
- Header: Fondo rojo (`from-red-500 to-red-600`)

### Sección "Más Ofertas Disponibles" (abajo):
- Fondo: Blanco
- Sin badge
- Borde: Gris claro (hover azul)
- Header: Fondo azul (`from-[#004C97] to-[#003a72]`)

---

## 📋 CHECKLIST ANTES DE CARGAR

Antes de agregar una nueva oferta, verifica:

- [ ] ✅ El `id` es único (job-XXX)
- [ ] ✅ El `company` es genérico (NO nombre real de empresa)
- [ ] ✅ El nivel de inglés dice "básico comunicación" o similar (NO B1/B2)
- [ ] ✅ `urgent` está correcto (true = arriba, false = abajo)
- [ ] ✅ `available` es `true`
- [ ] ✅ Todos los campos están completos
- [ ] ✅ El formato del salario es correcto (€X,XXX - €X,XXX/mes)
- [ ] ✅ Los arrays `requirements` y `benefits` tienen al menos 3-4 items
- [ ] ⚠️ **NO hay horarios con formato complejo** (evitar `06:00-15:00` dentro de strings)
- [ ] ⚠️ **NO hay números con comas en strings** (usar texto descriptivo en su lugar)
- [ ] ⚠️ **Todos los strings usan comillas simples** y están bien cerrados
- [ ] ⚠️ **Lenguaje variado** (si hay múltiples ofertas, verificar que no se repitan palabras/frases)
- [ ] ⚠️ **Cada oferta es única** (no parecen copiar y pegar entre sí)

---

## 🔄 PROCESO DE CARGA

1. **Recibir ofertas del usuario** (pueden incluir nombres reales de empresas)
   - ⚠️ **Verificar**: Identificar si el texto contiene una o varias ofertas separadas
   - ⚠️ **Importante**: Si hay múltiples ofertas, tratarlas como entidades independientes
2. **Transformar los datos**:
   - Reemplazar nombre real de empresa → nombre genérico
   - Cambiar nivel de inglés técnico → "básico comunicación"
   - Determinar si es urgente o normal
   - **⚠️ CRÍTICO**: Simplificar horarios complejos (evitar formato `06:00-15:00`)
   - **⚠️ CRÍTICO**: Evitar números con comas en strings (usar texto descriptivo)
   - **⚠️ CRÍTICO**: Variar el lenguaje entre ofertas (no repetir palabras/frases)
3. **Revisar variación de lenguaje** (si hay múltiples ofertas):
   - Comparar descripciones entre ofertas
   - Asegurarse de que no se repitan las mismas frases
   - Usar sinónimos y estructuras diferentes
   - Personalizar cada oferta para que sea única
4. **Agregar al array** en `lib/jobOffers.ts`
5. **Verificar sintaxis**: Asegurarse de que todas las comillas estén cerradas y no haya errores
6. **Verificar** que se muestre correctamente en `http://localhost:3000/ofertas`
7. **Si la página no carga** (pantalla gris/negra):
   - Revisar la consola del navegador (F12) para errores
   - Verificar que no haya formatos problemáticos en la nueva oferta
   - Comentar temporalmente la nueva oferta para aislar el problema

---

## 💡 TIPS

- **Nombres genéricos sugeridos**: 
  - "Empresa Logística Holandesa"
  - "Centro de Distribución"
  - "Empresa Manufacturera"
  - "Compañía de Retail"
  - "Empresa de Almacenamiento"
  - "Centro Logístico"

- **Variaciones de inglés básico**:
  - "Inglés básico comunicación"
  - "Inglés básico (comunicación)"
  - "Inglés básico - comunicación diaria"
  - "Inglés básico para principiantes con ganas de mejorar"

- **Si no estás seguro** si una oferta es urgente, preguntar al usuario o usar `urgent: false` por defecto.

- **Variación de lenguaje entre ofertas**:
  - ✅ Usar diferentes sinónimos: "almacén" / "centro de distribución" / "instalación logística"
  - ✅ Variar estructuras: "Trabajo en..." / "Oportunidad en..." / "Posición en..."
  - ✅ Cambiar expresiones: "Únete a..." / "Forma parte de..." / "Integra el equipo de..."
  - ✅ Personalizar descripciones: cada oferta debe tener su propia voz y estilo
  - ❌ NO repetir: "Trabajo en almacén logístico" en múltiples ofertas
  - ❌ NO copiar: descripciones idénticas o muy similares

- **Formatos seguros para horarios**:
  - ✅ "Disponibilidad para trabajo por turnos mañana y tarde"
  - ✅ "Trabajo en turnos rotativos"
  - ✅ "Horarios flexibles en turnos de mañana o tarde"
  - ❌ "Turnos: 06:00-15:00 y 15:00-00:00" (PROBLEMÁTICO)

- **Formatos seguros para precios/costos**:
  - ✅ "Alojamiento disponible (consultar costos)"
  - ✅ "Seguro médico disponible (consultar costos)"
  - ❌ "Alojamiento: €135,40/semana" (PROBLEMÁTICO - números con comas)

---

## 📍 UBICACIÓN DEL ARCHIVO

Las ofertas se cargan en: `lib/jobOffers.ts`

El archivo se importa en: `app/ofertas/page.tsx`

---

---

## 🐛 ERRORES CONOCIDOS Y SOLUCIONES

### Error: Página no carga (pantalla gris/negra)
**Causa común**: Formatos problemáticos en los strings de la oferta
**Solución**:
1. Revisar si hay horarios con formato `(06:00-15:00 o 15:00-00:00)` → Simplificar a texto descriptivo
2. Revisar si hay números con comas en strings `€135,40` → Usar texto descriptivo
3. Verificar que todas las comillas estén cerradas correctamente
4. Comentar temporalmente la nueva oferta para aislar el problema
5. Reiniciar el servidor de desarrollo si es necesario

### Error: Compilación falla
**Causa común**: Caracteres especiales mal codificados o sintaxis incorrecta
**Solución**:
1. Verificar que todos los strings usen comillas simples consistentemente
2. Asegurarse de que todos los arrays estén bien formados
3. Revisar que no haya comas faltantes o extras

---

**Última actualización**: Diciembre 2024
**Mantener este documento actualizado con cualquier cambio en las reglas**
**⚠️ IMPORTANTE**: Este README es leído por IA, asegurarse de que sea claro y completo

