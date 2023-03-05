export function createAppConfig() {
  return {
    filename: getEnvVariable("DATABASE_FILENAME"),
  };

  function getEnvVariable(name: string) {
    const variable = process.env[name];
    if (!variable) {
      throw new Error(`Missing environment variable: ${name}`);
    }
    return variable;
  }
}
