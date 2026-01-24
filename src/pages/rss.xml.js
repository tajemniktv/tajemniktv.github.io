export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>TajemnikTV RSS</title>
  <link>https://tajemniktv.github.io</link>
  <description>Latest from TajemnikTV</description>
  <item>
    <title>Welcome to the dashboard</title>
    <link>https://tajemniktv.github.io</link>
    <description>This is a placeholder RSS feed.</description>
  </item>
</channel>
</rss>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}
