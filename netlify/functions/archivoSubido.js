exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Método no permitido' };
  }
  try {
    const { fileName, fileType, fileSize } = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Archivo recibido con éxito',
        fileName,
        fileType,
        fileSize
      })
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Solicitud inválida', details: err.message })
    };
  }
};
x