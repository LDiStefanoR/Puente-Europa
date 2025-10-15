# Puente Europa - Landing Page

Landing page profesional para agencia de reclutamiento internacional de talento argentino para empresas europeas.

## 🚀 Características

- **Diseño moderno y profesional** con Next.js 14 y Tailwind CSS
- **Formulario de contacto real** con envío de emails vía Nodemailer
- **Protección reCAPTCHA v3** contra spam
- **Responsive** - adaptado a todos los dispositivos
- **Animaciones suaves** con Framer Motion
- **SEO optimizado**

## 📋 Requisitos

- Node.js 18+ (recomendado LTS)
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales
```

## ⚙️ Configuración

Crear archivo `.env.local` con:

```env
# reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_publica
RECAPTCHA_SECRET_KEY=tu_secret_key

# SMTP (Email)
SMTP_HOST=smtp.tu-proveedor.com
SMTP_PORT=587
SMTP_USER=tu_usuario_smtp
SMTP_PASS=tu_password_smtp

# Destino de emails
CONTACT_TO=info@puenteeuropa.com
```

## 🚀 Desarrollo

```bash
# Modo desarrollo
npm run dev

# Abrir http://localhost:3000
```

## 📦 Build & Deploy

```bash
# Build producción
npm run build

# Iniciar servidor producción
npm start
```

### Deploy en Vercel (Recomendado)

1. Push a GitHub
2. Conectar repositorio en [vercel.com](https://vercel.com)
3. Configurar variables de entorno en Vercel
4. Deploy automático ✨

## 🎨 Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **Nodemailer** - Envío de emails
- **Google reCAPTCHA v3** - Anti-spam

## 📧 Contacto

**Puente Europa**  
Email: info@puenteeuropa.com  
Buenos Aires, Argentina

---

Desarrollado con ❤️ para conectar talento argentino con oportunidades europeas
