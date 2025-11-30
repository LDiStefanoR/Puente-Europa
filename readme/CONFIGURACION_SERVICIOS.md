# ⚙️ CONFIGURACIÓN DE SERVICIOS Y CREDENCIALES

Este documento contiene toda la información de configuración de servicios externos utilizados en el proyecto.

---

## 📧 CONFIGURACIÓN DE EMAIL - IMPROVMX

### Servicio
**ImprovMX** - Servicio de reenvío de correo electrónico  
**URL**: https://app.improvmx.com/  
**Cuenta**: leo.rds.21@gmail.com

### Dominio Configurado
**nlbridgear.com**

### Direcciones de Correo Configuradas

| Email | Estado | Reenvía a | Uso |
|-------|--------|-----------|-----|
| `partners@nlbridgear.com` | ✅ Activo | leo.rds.21@gmail.com | Contacto con socios/partners |
| `talento@nlbridgear.com` | ✅ Activo | leo.rds.21@gmail.com | Contacto de candidatos/talento |
| `general@nlbridgear.com` | ✅ Activo | leo.rds.21@gmail.com | Contacto general/información |

### Email Principal del Sitio
**info@puenteeuropa.com**  
*(Nota: Este email puede estar configurado en otro dominio o servicio)*

---

## 🔐 ACCESO AL SERVICIO

### Cómo acceder a ImprovMX:
1. Ir a: https://app.improvmx.com/
2. Iniciar sesión con: **leo.rds.21@gmail.com**
3. Si no recuerdas la contraseña, usar "Forgot password" con ese email

### Panel de Control
- **Email Forwarding**: Gestionar direcciones de correo
- **Billing & Subscription**: Plan actual (Free)
- **Account Settings**: Configuración de cuenta
- **API Keys**: Claves API (si se necesitan)
- **Guides**: Documentación del servicio

---

## 📝 NOTAS IMPORTANTES

### Plan Actual
- **Plan**: Free (Gratuito)
- **Características**:
  - ✅ Reenvío de emails ilimitado
  - ✅ Múltiples alias por dominio
  - ❌ No permite enviar emails (solo recibir y reenviar)
  - ❌ Sin SMTP para envío

### Plan Premium (Opcional)
- **Costo**: $9/mes
- **Beneficios adicionales**:
  - ✅ Envío de emails vía SMTP
  - ✅ Entrega más rápida
  - ✅ Soporte prioritario
  - ✅ Garantía de 99% uptime

### Limitaciones del Plan Free
- Solo reenvío (no se puede enviar emails desde las direcciones del dominio)
- Para enviar emails desde el dominio, se necesita:
  - Plan Premium de ImprovMX, O
  - Configurar SMTP con otro servicio (Gmail, SendGrid, Mailgun, etc.)

---

## 🔄 CONFIGURACIÓN DE DNS

Para que los emails funcionen, el dominio debe tener configurados los registros MX en el proveedor de dominio.

### Registros MX Necesarios
Los registros MX deben apuntar a los servidores de ImprovMX. Esta configuración se encuentra en el panel de control del proveedor del dominio (donde se compró `nlbridgear.com`).

**Instrucciones desde ImprovMX:**
1. En el panel de ImprovMX, ir a la configuración del dominio
2. Ver los registros MX que se deben agregar
3. Copiar esos registros al panel DNS del proveedor del dominio

---

## 📧 EMAILS UTILIZADOS EN EL PROYECTO

### En el Código
- **ContactSection.tsx**: Muestra `info@puenteeuropa.com`
- **Footer.tsx**: Muestra `info@puenteeuropa.com`
- **README.md**: Documenta `info@puenteeuropa.com`

### Configuración SMTP (Para Envío)
Actualmente el proyecto está configurado para usar Nodemailer, pero necesita:
- **SMTP_HOST**: Servidor SMTP
- **SMTP_PORT**: Puerto (generalmente 587)
- **SMTP_USER**: Usuario SMTP
- **SMTP_PASS**: Contraseña SMTP
- **CONTACT_TO**: `general@nlbridgear.com` (o el email donde quieras recibir los mensajes)

**Nota**: Con el plan Free de ImprovMX no se puede enviar emails. Para enviar emails desde el formulario de contacto, se necesita:
1. Plan Premium de ImprovMX, O
2. Configurar otro servicio SMTP (Gmail, SendGrid, Mailgun, etc.)

---

## 📧 CONFIGURACIÓN SMTP - GUÍA PASO A PASO

### ⚠️ PROBLEMA ACTUAL
El formulario de contacto **NO está enviando emails** porque falta la configuración SMTP. Actualmente solo registra los datos en los logs del servidor.

### ✅ SOLUCIÓN: Configurar SMTP

Necesitas crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Configuración SMTP
SMTP_HOST=smtp.tu-servicio.com
SMTP_PORT=587
SMTP_USER=tu_usuario
SMTP_PASS=tu_contraseña
CONTACT_TO=general@nlbridgear.com
```

### 🔧 OPCIONES DE SERVICIOS SMTP

#### **Opción 1: Gmail (Recomendado para empezar - GRATIS)**

1. **Habilitar verificación en 2 pasos** en tu cuenta de Gmail
2. **Generar una "App Password"**:
   - Ir a: https://myaccount.google.com/apppasswords
   - Seleccionar "Mail" y "Other (Custom name)"
   - Nombrar: "Puente Europa"
   - Copiar la contraseña generada (16 caracteres)

3. **Configurar en `.env.local`**:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=leo.rds.21@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
CONTACT_TO=general@nlbridgear.com
```

**Ventajas**: Gratis, fácil de configurar  
**Desventajas**: Límite de 500 emails/día, puede ir a spam si envías muchos

---

#### **Opción 2: SendGrid (Profesional - GRATIS hasta 100 emails/día)**

1. **Crear cuenta** en: https://sendgrid.com/
2. **Verificar tu email** y crear una API Key
3. **Configurar en `.env.local`**:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=tu_api_key_de_sendgrid
CONTACT_TO=general@nlbridgear.com
```

**Ventajas**: Profesional, buena entrega, gratis hasta 100/día  
**Desventajas**: Requiere verificación de dominio para más volumen

---

#### **Opción 3: Mailgun (Profesional - GRATIS hasta 5,000 emails/mes)**

1. **Crear cuenta** en: https://www.mailgun.com/
2. **Verificar tu dominio** o usar el dominio de prueba
3. **Obtener credenciales SMTP** del dashboard
4. **Configurar en `.env.local`**:
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@tu-dominio.mailgun.org
SMTP_PASS=tu_password_de_mailgun
CONTACT_TO=general@nlbridgear.com
```

**Ventajas**: Muy profesional, excelente entrega, 5,000 emails/mes gratis  
**Desventajas**: Requiere verificación de dominio

---

#### **Opción 4: ImprovMX Premium ($9/mes)**

Si ya usas ImprovMX y quieres mantener todo en un solo servicio:

1. **Actualizar a plan Premium** en ImprovMX
2. **Obtener credenciales SMTP** del panel
3. **Configurar en `.env.local`**:
```env
SMTP_HOST=smtp.improvmx.com
SMTP_PORT=587
SMTP_USER=tu_usuario_improvmx
SMTP_PASS=tu_password_improvmx
CONTACT_TO=general@nlbridgear.com
```

**Ventajas**: Todo en un solo servicio  
**Desventajas**: Requiere pago mensual

---

### 📝 PASOS PARA CONFIGURAR

1. **Crear archivo `.env.local`** en la raíz del proyecto (mismo nivel que `package.json`)
2. **Agregar las variables** según el servicio que elijas
3. **Reiniciar el servidor de desarrollo** (`npm run dev`)
4. **Probar el formulario** enviando un mensaje de prueba
5. **Verificar que llegue el email** a `general@nlbridgear.com` (que reenvía a `leo.rds.21@gmail.com`)

### 🚀 CONFIGURACIÓN EN VERCEL (Producción)

Si el sitio está en Vercel, también necesitas agregar estas variables en:
1. Panel de Vercel → Tu proyecto → Settings → Environment Variables
2. Agregar cada variable (`SMTP_HOST`, `SMTP_PORT`, etc.)
3. Hacer un nuevo deploy

### 🔍 VERIFICAR QUE FUNCIONA

1. Enviar un mensaje desde el formulario de contacto
2. Revisar los logs del servidor (debería decir "✅ Email enviado exitosamente")
3. Verificar que llegue el email a `leo.rds.21@gmail.com`
4. Si hay error, revisar los logs para ver el mensaje específico

---

## 🆕 AGREGAR NUEVAS DIRECCIONES DE CORREO

### Pasos para agregar un nuevo alias:
1. Acceder a https://app.improvmx.com/
2. Seleccionar el dominio `nlbridgear.com`
3. En la sección de "Email Forwarding", buscar el campo para agregar alias
4. Ingresar el nuevo alias (ej: `contacto@nlbridgear.com`)
5. Configurar el reenvío a `leo.rds.21@gmail.com`
6. Guardar

### Alias Actuales:
- ✅ `partners@nlbridgear.com` - Contacto con socios/partners
- ✅ `talento@nlbridgear.com` - Contacto de candidatos/talento
- ✅ `general@nlbridgear.com` - Contacto general/información

### Otros Alias Útiles (si se necesitan en el futuro):
- `info@nlbridgear.com` - Información general
- `contacto@nlbridgear.com` - Contacto general
- `soporte@nlbridgear.com` - Soporte técnico
- `ventas@nlbridgear.com` - Ventas/comercial

---

## 🔍 VERIFICACIÓN DE EMAILS

### Cómo verificar que un email funciona:
1. En ImprovMX, cada alias tiene un botón "TEST"
2. Click en "TEST" envía un email de prueba
3. Verificar que llega a `leo.rds.21@gmail.com`

### Desde el Sitio Web:
- El formulario de contacto de empresas envía a `general@nlbridgear.com`
- Este email está configurado en ImprovMX y reenvía a `leo.rds.21@gmail.com`
- El email `info@puenteeuropa.com` se muestra en el sitio pero puede estar en otro servicio

---

## 📋 CHECKLIST DE CONFIGURACIÓN

- [x] Dominio `nlbridgear.com` configurado en ImprovMX
- [x] `partners@nlbridgear.com` activo y funcionando
- [x] `talento@nlbridgear.com` activo y funcionando
- [x] `general@nlbridgear.com` activo y funcionando
- [ ] `info@puenteeuropa.com` verificado (puede estar en otro servicio)
- [ ] Registros MX configurados en el proveedor del dominio
- [ ] SMTP configurado para envío de emails (si se necesita)

---

## 🔗 ENLACES ÚTILES

- **Panel de ImprovMX**: https://app.improvmx.com/
- **Documentación ImprovMX**: Disponible en el panel → "Guides"
- **Soporte ImprovMX**: Disponible en el panel → "Contact"

---

## 🔄 ÚLTIMA ACTUALIZACIÓN

**Fecha**: Diciembre 2024  
**Servicio**: ImprovMX  
**Dominio**: nlbridgear.com  
**Cuenta**: leo.rds.21@gmail.com

---

## ⚠️ IMPORTANTE

**Mantener este documento actualizado** cuando:
- Se agreguen nuevos alias de correo
- Se cambie de plan (Free → Premium)
- Se configure otro servicio de email
- Se actualicen credenciales de acceso

**No compartir este documento públicamente** - Contiene información sensible de configuración.

