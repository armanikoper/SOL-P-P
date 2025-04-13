async function pingSolana() {
  try {
    const res = await fetch("https://sol.hnano.workers.dev");
    const text = await res.text();
    console.log(`[${new Date().toISOString()}] پاسخ از ورکر: ${text}`);
  } catch (e) {
    console.error("خطا در ارسال درخواست:", e);
  }
}

// اجرای اولیه
pingSolana();

// اجرای تکرارشونده هر 14 ثانیه
setInterval(pingSolana, 14_000);
Deno.serve(() => new Response("پروژه فعال است"));
