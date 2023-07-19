const url = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  contentful: {
    space_id: process.env.CONTENTFUL_SPACE_ID || '',
    cda_token: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    cpa_token: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  },
  emailjs: {
    service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    public_key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  },
  meta: {
    title: 'Unleash the Scanning Beast | Scan-o-saurus',
    description: `Conquer Bulk Scanning with Lightning Speed. Digitize documents and books stress-free in minutes. Call us & start scanning like a Dino! ${url
      .replace('https://', '')
      .replace('http://', '')}`,
    url,
    image:
      'http://images.ctfassets.net/3f9imsc9uoz1/121QgOcX15Ju6xK1ynzKkF/4f4f102af486030b6a4f256e98390403/logo.png',
  },
  icon: {
    light:
      'http://images.ctfassets.net/3f9imsc9uoz1/121QgOcX15Ju6xK1ynzKkF/4f4f102af486030b6a4f256e98390403/logo.png',
    dark: 'http://images.ctfassets.net/3f9imsc9uoz1/121QgOcX15Ju6xK1ynzKkF/4f4f102af486030b6a4f256e98390403/logo.png',
    width: 66,
    height: 64,
  },
};
