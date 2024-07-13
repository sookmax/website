const URL_PREFIX = "https://assets.sook.dev";

export function generateImageUrls(urls: (string | string[])[]) {
  return urls.map(generateImageUrl);
}

export function generateImageUrl(url: string | string[]) {
  if (typeof url === "string") {
    return `${URL_PREFIX}${url}`;
  } else {
    return url.map((src) => `${URL_PREFIX}${src}`).join(", ");
  }
}
