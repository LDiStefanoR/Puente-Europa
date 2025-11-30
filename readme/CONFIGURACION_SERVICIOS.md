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
- **CONTACT_TO**: `info@puenteeuropa.com`

**Nota**: Con el plan Free de ImprovMX no se puede enviar emails. Para enviar emails desde el formulario de contacto, se necesita:
1. Plan Premium de ImprovMX, O
2. Configurar otro servicio SMTP (Gmail, SendGrid, Mailgun, etc.)

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

