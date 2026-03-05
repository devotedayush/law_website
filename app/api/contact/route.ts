import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        // Validate required fields
        if (!name || !email || !service || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 },
            );
        }

        const leadTag = `Lead from ${service}`;

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'cyinovconsulting@gmail.com',
            subject: `${leadTag} — ${name}`,
            html: `
                <h2>${leadTag}</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || '—'}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return NextResponse.json({ success: true, tag: leadTag });
    } catch {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 },
        );
    }
}
