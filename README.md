# 2024-1-S2-Grupo11-FarmaSearch
Repositorio de la skill de Alexa FarmaSearch

Es necesario incorporar en "index.js" una API_KEY compatible con la api Places de Google para probar la funcionalidad de la skill.
La forma de acceder a la skill para testeo es subiendo los archivos a la consola de developer de amazon Alexa, donde recibe el detalle de los intents (modelo de conversación) de 'es-US.json', y la funcionalidad desde el index.

Una vez instalado todo, se puede interactuar con el modelo de Alexa diciendo: "Alexa abre grupo once". Esto inicia la skill y Alexa debería responder con "FarmaSearch esperando respuesta". A partir de aquí se puede ofrecer cualquier frase de la siguiente forma:

- "dónde están las farmacias más cercanas a {ubicacion}"
- "busca farmacias cerca de {ubicacion}"
- "encuentra las farmacias más cercanas a {ubicacion}"

Donde {ubicación} corresponde al lugar respecto al cual se quiere obtener la información de farmacias.

Esta skill cuenta con una funcionalidad de filtro, donde se puede solicitar farmacias que estén abiertas exclusivamente, o farmacias de ciertas cadenas que estén abiertas.
Aquí están las posibles interacciones considerando estos filtros:

- "encuentra las farmacias abiertas más cercanas a {ubicacion}"
- "busca farmacias abiertas cerca de {ubicacion}"
- "dónde están las farmacias abiertas más cercanas a {ubicacion}"
- "encuentra las farmacias doctor simi más cercanas a {ubicacion}"
- "busca farmacias doctor simi cerca de {ubicacion}"
- "dónde están las farmacias doctor simi más cercanas a {ubicacion}"
- "dónde están las farmacias ahumada más cercanas a {ubicacion}"
- "busca farmacias ahumada cerca de {ubicacion}"
- "encuentra las farmacias ahumada más cercanas a {ubicacion}"
- "encuentra las farmacias cruz verde más cercanas a {ubicacion}"
- "busca farmacias cruz verde cerca de {ubicacion}"
- "dónde están las farmacias cruz verde más cercanas a {ubicacion}"
- "dónde están las farmacias más cercanas a {ubicacion}"
- "busca farmacias salcobrand cerca de {ubicacion}"
- "encuentra las farmacias salcobrand más cercanas a {ubicacion}"

La skill debe retornar una cantidad NUM_RESULTS (modificable en "index.js") de resultados de farmacias en torno a la ubicación proporcionada.