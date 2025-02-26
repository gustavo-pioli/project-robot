export function ParseIdFromURL(url: string): string | null {
  const match = url.match(/\/apps\/(\d+)\//);
  const appId = match ? match[1] : '';

  return appId as string;
}
