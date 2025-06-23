const axios = require('axios');

const LOG_API_URL = 'http://20.244.56.144/evaluation-service/logs';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzMDMxMDU3MDc4QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc1MDY2NDA1NywiaWF0IjoxNzUwNjYzMTU3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNTg5NjdlMDQtZDNiZi00ZWUxLTlkNDgtNDM5MGI3Yjk2YWQ5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHJpeWFuc2h1IHJhaiIsInN1YiI6Ijk3OTdlNmMxLTYxYzQtNGYxNS04ZTQwLTAyY2QxYWEwY2Y1ZSJ9LCJlbWFpbCI6IjIzMDMwMzEwNTcwNzhAcGFydWx1bml2ZXJzaXR5LmFjLmluIiwibmFtZSI6InByaXlhbnNodSByYWoiLCJyb2xsTm8iOiIyMzAzMDMxMDU3MDc4IiwiYWNjZXNzQ29kZSI6IlRSemdXTSIsImNsaWVudElEIjoiOTc5N2U2YzEtNjFjNC00ZjE1LThlNDAtMDJjZDFhYTBjZjVlIiwiY2xpZW50U2VjcmV0IjoiZFVSZHZqc2t3V2RhRE5ySyJ9.87EvAfNPc6ftcD9jQgYQKKzxGr-KgD1CuWbNAG2Xpaw';

const validStacks = ['backend'];
const validLevels = ['debug', 'info', 'error'];
const backendPackages = ['controller', 'cron_job', 'handler', 'repository', 'route'];
const frontendPackages = ['api', 'component', 'hook', 'page', 'state', 'style'];
const commonPackages = ['auth', 'config', 'middleware'];

function isValidCombo(stack, pkg) {
  if (commonPackages.includes(pkg)) return true;
  if (stack === 'backend') return backendPackages.includes(pkg);
  if (stack === 'frontend') return frontendPackages.includes(pkg);
  return false;
}

async function Log(stack, level, pkg, message) {
  if (!validStacks.includes(stack)) return console.error('Invalid stack:', stack);
  if (!validLevels.includes(level)) return console.error('Invalid level:', level);
  if (!isValidCombo(stack, pkg)) return console.error(`Invalid package "${pkg}" for stack "${stack}"`);

  const payload = {
    stack: stack,
    level: level,
    package: pkg,
    message: message
  };

  try {
    const response = await axios.post(LOG_API_URL, payload, {
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Log success:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('API Error:', error.response.data);
    } else {
      console.error('Request Error:', error.message);
    }
  }
}

module.exports = Log;
