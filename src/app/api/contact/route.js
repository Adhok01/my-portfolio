import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ── OPTION 1: Log to console (works immediately, no setup needed)
    console.log('📧 New contact form submission:', { name, email, subject, message, timestamp: new Date().toISOString() })

    // ── OPTION 2: Save to MongoDB (uncomment when you add MONGODB_URI to .env.local)
    /*
    const { MongoClient } = await import('mongodb')
    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()
    const db = client.db('portfolio')
    await db.collection('messages').insertOne({
      name, email, subject, message,
      createdAt: new Date(),
      read: false,
    })
    await client.close()
    */

    // ── OPTION 3: Send email via Nodemailer (uncomment + add GMAIL_USER/PASS to .env.local)
    /*
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.default.createTransporter({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    })
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'adhokshajasn04@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message'} — from ${name}`,
      html: `<h2>New message from ${name}</h2><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p>${message}</p>`,
    })
    */

    return NextResponse.json({ success: true, message: 'Message received!' })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
