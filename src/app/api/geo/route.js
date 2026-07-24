import { NextResponse } from "next/server";

export async function GET(request) {
  const platformCountry =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry");

  if (platformCountry && platformCountry !== "XX") {
    return NextResponse.json({ country_code: platformCountry });
  }

  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : null;
    const isLocalIp =
      !ip ||
      ip === "::1" ||
      ip.startsWith("127.") ||
      ip.startsWith("192.168.") ||
      ip.startsWith("10.");

    const geoRes = await fetch(
      isLocalIp ? "https://ipwho.is/" : `https://ipwho.is/${ip}`,
      { cache: "no-store" },
    );

    if (!geoRes.ok) throw new Error(`Geo lookup failed: ${geoRes.status}`);

    const geoData = await geoRes.json();

    return NextResponse.json({
      country_code:
        geoData.success !== false ? geoData.country_code || null : null,
    });
  } catch (error) {
    console.error("Geo lookup error:", error.message);
    return NextResponse.json({ country_code: null });
  }
}
