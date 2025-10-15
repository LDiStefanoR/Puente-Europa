import { NextRequest, NextResponse } from 'next/server'

// Expected environment variables (configure in .env.local)
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO

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

    // TODO: Email sending will be configured after deployment
    // For now, just log the form data and return success
    console.log('Contact form submission:', { name, company, email, phone, message })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('contact api error', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


