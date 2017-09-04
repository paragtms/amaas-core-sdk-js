const endpoint = {
  dev: 'https://api-dev.amaas.com',
  staging: 'https://api-staging.amaas.com',
  prod: 'https://api.amaas.com'
}

const userPoolConfig = {
  dev: { userPoolId: 'us-west-2_wKa82vECF', clientAppId: '5mrqm1sjmfp80k8foasq83rb9k' },
  staging: { userPoolId: 'ap-southeast-1_k67J4gGnb', clientAppId: '2jvrtlmj6sfdb1o7j65dgkqmgt' },
  prod: {}
}

export {
  endpoint,
  userPoolConfig
}
