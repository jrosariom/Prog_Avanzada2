exports.handler = async (event) => {
  const name = event.queryStringParameters?.name || 'Mundo';
  return {
    statusCode: 200,
    body: JSON.stringify({ mensaje: `¡Hola, ${name}!` })
  };
}
