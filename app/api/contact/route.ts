import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Expected environment variables (configure in .env.local)
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, phone, message, recaptchaToken } = body || {}

    if (!name || !company || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Basic server-side validation
    const isEmail = /^\S+@\S+\.\S+$/.test(String(email))
    const isPhone = String(phone).length >= 6
    if (!isEmail || !isPhone) {
      return NextResponse.json({ error: 'Invalid email or phone' }, { status: 400 })
    }

    // Verify reCAPTCHA v3 when configured
    const secret = process.env.RECAPTCHA_SECRET_KEY
    if (secret) {
      try {
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ secret, response: recaptchaToken || '' }),
        })
        const verifyJson = await verifyRes.json()
        if (!verifyJson.success || (verifyJson.score !== undefined && verifyJson.score < 0.5)) {
          return NextResponse.json({ error: 'Recaptcha verification failed' }, { status: 400 })
        }
      } catch (e) {
        return NextResponse.json({ error: 'Recaptcha request failed' }, { status: 400 })
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const to = process.env.CONTACT_TO
    if (!to) {
      return NextResponse.json({ error: 'CONTACT_TO not configured' }, { status: 500 })
    }

    const subject = `Nueva solicitud de asesoría - Puente Europa`
    const text = `Nueva consulta de empresa:\n\nNombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message || '-'}\n`

    await transporter.sendMail({
      from: `Puente Europa <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('contact api error', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


