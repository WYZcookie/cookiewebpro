const fallbackUrl = "http://localhost:3000";

export function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!configuredUrl) {
    return new URL(fallbackUrl);
  }

  try {
    return new URL(configuredUrl);
  } catch {
    return new URL(fallbackUrl);
  }
}
