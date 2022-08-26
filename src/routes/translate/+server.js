/** @type {import('./$types').RequestHandler} */
export async function POST(data) {

  const source = await data.request.json();
  let basicUrl = 'https://api-free.deepl.com/v2/translate?'
  let token = import.meta.env.VITE_DEEPL_TOKEN

  let fullURL = basicUrl + 'auth_key=' + token + '&text=' + source.sourceText + '&source_lang=' + source.sourceLanguage + '&target_lang=' + source.targetLanguage;
  let response = await fetch(fullURL);
  const responseData = await response.json();

  return new Response(responseData.translations[0].text);
}