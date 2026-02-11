import { NextResponse } from 'next/server';

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

        // Auto-tag: build the lead label
        const leadTag = `Lead from ${service}`;

        // Log the lead (replace with your email service integration)
        // e.g., Resend, Nodemailer, SendGrid, etc.
        console.log('──────────────────────────────────');
        console.log(`📩 NEW LEAD: ${leadTag}`);
        console.log(`   Name:    ${name}`);
        console.log(`   Email:   ${email}`);
        console.log(`   Phone:   ${phone || '—'}`);
        console.log(`   Service: ${service}`);
        console.log(`   Message: ${message}`);
        console.log('──────────────────────────────────');

        // ── Email integration placeholder ──
        // To send to info@cyinov.com, wire up your email service here:
        //
        // await resend.emails.send({
        //     from: 'leads@cyinov.com',
        //     to: 'info@cyinov.com',
        //     subject: `${leadTag} — ${name}`,
        //     html: `<p><strong>${leadTag}</strong></p>
        //            <p>Name: ${name}</p>
        //            <p>Email: ${email}</p>
        //            <p>Phone: ${phone || '—'}</p>
        //            <p>Message: ${message}</p>`,
        // });

        return NextResponse.json({ success: true, tag: leadTag });
    } catch {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 },
        );
    }
}
