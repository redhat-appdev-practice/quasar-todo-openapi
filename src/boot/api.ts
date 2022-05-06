import { boot } from 'quasar/wrappers';
import { AllApi, Configuration } from 'src/sdk';

export default boot(({ app }) => {
  const apiConfig = new Configuration();
  apiConfig.basePath = window.api_base ?? 'http://localhost:7080/';
  const api = new AllApi(apiConfig);

  app.provide('api', api);
});
