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
     - "Básico comunicación"
     - "Nivel comunicacional básico"
     - "Inglés básico para comunicación"
     - "Muchas ganas de aprender inglés y partir con nivel comunicacional básico"
   - **Razón**: Las ofertas están dirigidas a personas con ganas de aprender, no necesariamente con nivel avanzado.

### 3. **CLASIFICACIÓN URGENTE/NORMAL**
   - **Urgente** (`urgent: true`): Aparece en la sección superior con borde rojo
   - **Normal** (`urgent: false`): Aparece en la sección inferior con borde azul
   - **Criterio**: Usar `urgent: true` solo cuando la oferta requiere llenado inmediato o tiene fecha límite próxima.

### 4. **⚠️ FORMATOS PROBLEMÁTICOS - EVITAR A TODA COSTA**
   - ❌ **NO usar horarios con formato complejo**: `(06:00-15:00 o 15:00-00:00)`
   - ✅ **SÍ usar formatos simples**: `"Disponibilidad para trabajo por turnos mañana y tarde"` o `"Turnos de mañana y tarde"`
   
   - ❌ **NO usar números con comas en strings**: `€135,40` dentro de texto
   - ✅ **SÍ usar números simples o texto**: `€135.40` o `"Aproximadamente 135 euros"`
   
   - **Razón**: Estos formatos pueden causar errores de compilación en Next.js.

### 5. **VARIACIÓN DE LENGUAJE**
   - ⚠️ **IMPORTANTE**: Al cargar múltiples ofertas, variar el lenguaje y las palabras utilizadas
   - ❌ **NO copiar y pegar** el mismo texto para diferentes ofertas
   - ✅ **SÍ usar sinónimos y diferentes formas de expresar lo mismo**
   - **Ejemplo**:
     - Oferta 1: "Buscamos personas con ganas de aprender"
     - Oferta 2: "Estamos en búsqueda de candidatos motivados"
     - Oferta 3: "Necesitamos profesionales con actitud positiva"
   - **Razón**: Evitar que se note que el contenido es copiado, mantener naturalidad.

---

## 📝 EJEMPLO DE OFERTA COMPLETA

```typescript
{
  id: 'job-001',
  title: 'Operario de Producción',
  company: 'Empresa Logística Holandesa',
  location: 'Ámsterdam',
  country: 'Países Bajos',
  salary: '€2,200 - €2,500/mes',
  salaryPerHour: '€14.50/hora',
  contractType: 'Tiempo completo',
  duration: '6 meses (renovable)',
  requirements: [
    'Nacionalidad europea',
    'Antecedentes penales limpios',
    'Nivel comunicacional básico de inglés',
    'Disponibilidad para trabajo por turnos',
    'Buen estado físico'
  ],
  benefits: [
    'Alojamiento disponible',
    'Seguro de salud incluido',
    'Transporte proporcionado',
    'Oportunidades de crecimiento'
  ],
  description: 'Oportunidad para trabajar en un centro de distribución moderno en Ámsterdam. Buscamos personas motivadas con ganas de aprender y crecer profesionalmente en un ambiente internacional.',
  available: true,
  urgent: false
}
```

---

## 🔄 PROCESO DE CARGA

1. **Abrir el archivo**: `lib/jobOffers.ts`
2. **Localizar el array**: `export const jobOffers: JobOffer[] = [...]`
3. **Agregar la nueva oferta**: Al final del array, antes del cierre `]`
4. **Verificar formato**: Asegurarse de que sigue la estructura exacta
5. **Verificar reglas**: 
   - ✅ Nombre genérico de empresa
   - ✅ Nivel de inglés básico/comunicación
   - ✅ Sin formatos problemáticos
   - ✅ Lenguaje variado (si hay múltiples ofertas)
6. **Guardar y verificar**: El servidor debería recargar automáticamente

---

## 📍 UBICACIÓN EN EL CÓDIGO

- **Archivo de ofertas**: `lib/jobOffers.ts`
- **Interfaz TypeScript**: `JobOffer` (definida en el mismo archivo)
- **Componente de visualización**: `components/JobOffersSection.tsx` (resumen en /candidatos)
- **Página completa**: `app/ofertas/page.tsx` (todas las ofertas)

---

## ⚠️ ERRORES COMUNES A EVITAR

1. **Olvidar la coma** después de cada propiedad (excepto la última)
2. **Usar comillas simples** en lugar de comillas dobles (o viceversa) inconsistente
3. **Olvidar cerrar arrays** con `]`
4. **Usar nombres reales de empresas**
5. **Usar niveles de inglés avanzados** (B1, B2, etc.)
6. **Copiar texto idéntico** entre ofertas
7. **Usar formatos complejos** en horarios o números

---

## ✅ CHECKLIST ANTES DE GUARDAR

- [ ] ID único y secuencial
- [ ] Nombre de empresa genérico (no real)
- [ ] Nivel de inglés: básico/comunicación
- [ ] Sin formatos problemáticos (horarios complejos, números con comas)
- [ ] Lenguaje variado (si hay múltiples ofertas)
- [ ] `available: true`
- [ ] `urgent: true` o `false` según corresponda
- [ ] Todas las comas en su lugar
- [ ] Arrays cerrados correctamente
- [ ] Sin errores de sintaxis

---

**Última actualización**: Diciembre 2024

