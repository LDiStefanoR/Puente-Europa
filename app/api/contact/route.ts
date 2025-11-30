import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, phone, message } = body || {}

    if (!name || !company || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Basic server-side validation
    const isEmail = /^\S+@\S+\.\S+$/.test(String(email))
    const isPhone = String(phone).length >= 6
    if (!isEmail || !isPhone) {
      return NextResponse.json({ error: 'Invalid email or phone' }, { status: 400 })
    }

    // Configuración SMTP
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const contactTo = process.env.CONTACT_TO || 'general@nlbridgear.com'

    // Si no hay configuración SMTP, solo loguear (para desarrollo)
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log('⚠️ SMTP no configurado. Datos del formulario:', {
        to: contactTo,
        from: email,
        name,
        company,
        phone,
        message
      })
      // En producción, deberías tener SMTP configurado
      return NextResponse.json({ 
        ok: true, 
        warning: 'SMTP no configurado. Email no enviado, solo registrado en logs.' 
      })
    }

    // Crear transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true para 465, false para otros puertos
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Contenido del email
    const emailSubject = `Nueva consulta de colaboración - ${company}`
    const emailText = `
Nueva consulta recibida desde el formulario de contacto:

Nombre: ${name}
Empresa/Agencia: ${company}
Email: ${email}
Teléfono: ${phone}

Mensaje:
${message || '(Sin mensaje)'}

---
Este email fue enviado desde el formulario de contacto de Puente Europa.
`

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #004C97;">Nueva consulta de colaboración</h2>
        <p>Has recibido una nueva consulta desde el formulario de contacto:</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Empresa/Agencia:</strong> ${company}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
          ${message ? `<p><strong>Mensaje:</strong></p><p style="white-space: pre-wrap;">${message}</p>` : ''}
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          Este email fue enviado desde el formulario de contacto de Puente Europa.
        </p>
      </div>
    `

    // Enviar email
    await transporter.sendMail({
      from: `"Puente Europa" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    })

    console.log('✅ Email enviado exitosamente a:', contactTo)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('❌ Error al enviar email:', err)
    return NextResponse.json({ 
      error: 'Error al enviar el email. Por favor, intenta nuevamente o contacta directamente por WhatsApp.' 
    }, { status: 500 })
  }
}


