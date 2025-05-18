exports.handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Método no permitido, usa POST' })
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'JSON inválido', details: err.message })
    };
  }

  const { fileName, fileType, fileSize } = payload;
  if (!fileName || !fileType || typeof fileSize !== 'number') {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: 'Datos incompletos',
        details: 'Se requieren fileName, fileType y fileSize.'
      })
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: 'Archivo recibido con éxito',
      fileName,
      fileType,
      fileSize
    })
  };
};  
