import type { APIRoute } from "astro";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "astro:env/server";

function sanitize(s: unknown) {
    if (s === null || s === undefined) return "";
    const str = String(s);
    // Escape HTML special chars to safely use parse_mode=HTML
    return str.replace(/[&<>]/g, (c) => (c === '&' ? '&amp;' : c === '<' ? '&lt;' : '&gt;'));
}

const handlePost: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();

        const name = sanitize(body.name);
        const email = sanitize(body.email);
        const message = sanitize(body.message);

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Champs non remplis" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            return new Response(JSON.stringify({ error: "Not configured" }), { status: 500 });
        }

        // Use sendMessage with HTML parsing; send via POST with JSON payload
        const url = `https://api.telegram.org/bot${encodeURIComponent(TELEGRAM_BOT_TOKEN)}/sendMessage`;
        const payload = {
            chat_id: TELEGRAM_CHAT_ID,
            text: `<b>Message envoyé depuis le Portfolio</b>\n\n<b>De: </b> ${name} (${email})\n\n${message}`,
            parse_mode: "HTML",
        };

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const errText = await res.text();
            console.error("Telegram send failed:", res.status, errText);
            return new Response(JSON.stringify({ error: "Failed to send Telegram message" }), { status: 502, headers: { "Content-Type": "application/json" } });
        }

        return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (err: any) {
        console.error("Contact send error", err?.message || err);
        return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
};

export const POST = handlePost;
