const endpoint = {
  dev: 'https://api-dev.amaas.com',
  staging: 'https://api-staging.amaas.com',
  prod: 'https://api.amaas.com'
}

const userPoolConfig = {
  dev: { userPoolId: 'us-west-2_wKa82vECF', clientAppId: '5mrqm1sjmfp80k8foasq83rb9k' },
  staging: { userPoolId: 'ap-southeast-1_De6j7TWIB', clientAppId: '2qk35mhjjpk165vssuqhqoi1lk' },
  prod: {}
}

export {
  endpoint,
  userPoolConfig
}
