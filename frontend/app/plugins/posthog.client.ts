import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'

type ConsentPayload = {
  // common shape: { categories: { necessary: true, analytics: false, ... } }
  categories?: Record<string, boolean>
  // some configs use "services"
  services?: Record<string, boolean>
  // some store directly as { analytics: true }
  [k: string]: any
}

function hasAnalyticsConsent(raw: string | undefined, analyticsKey = 'analytics') {
  if (!raw) return false

  try {
    const parsed: ConsentPayload = JSON.parse(raw)

    if (typeof parsed[analyticsKey] === 'boolean') return parsed[analyticsKey]
    if (parsed.categories && typeof parsed.categories[analyticsKey] === 'boolean') return parsed.categories[analyticsKey]
    if (parsed.services && typeof parsed.services[analyticsKey] === 'boolean') return parsed.services[analyticsKey]

    return false
  } catch {
    // if it’s not JSON, treat as no consent
    return false
  }
}

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  // IMPORTANT: set this to the cookie name you configured in nuxt-cookie-consent
  const CONSENT_COOKIE_NAME = 'cookie_consent' // <-- adjust if your config uses a different name
  const consentRaw = useCookie<string | undefined>(CONSENT_COOKIE_NAME)

  let inited = false

  const init = () => {
    if (inited) return
    inited = true

    posthog.init(runtimeConfig.public.posthogPublicKey, {
      api_host: runtimeConfig.public.posthogHost,
      defaults: runtimeConfig.public.posthogDefaults,

      person_profiles: 'identified_only',
      capture_pageview: false,          // avoid firing before you decide
      respect_dnt: true,
      disable_session_recording: true,

      loaded: (ph) => {
        if (import.meta.env.MODE === 'development') ph.debug()
        ph.capture('$pageview')
      }
    })
  }

  const shutdown = () => {
    // user withdrew consent
    posthog.opt_out_capturing()
    posthog.reset()
    inited = false
  }

  // init if already consented
  if (hasAnalyticsConsent(consentRaw.value)) init()

  // react to consent changes
  watch(
    () => consentRaw.value,
    (val, oldVal) => {
      const now = hasAnalyticsConsent(val)
      const before = hasAnalyticsConsent(oldVal)

      if (now && !before) init()
      if (!now && before) shutdown()
    }
  )

  return {
    provide: {
      posthog
    }
  }
})
