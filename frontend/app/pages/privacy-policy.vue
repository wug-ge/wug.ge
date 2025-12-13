<template>
  <div>
    <section class="prose prose-invert max-w-xl mx-auto mt-8">
      <h3 class="text-xl font-semibold mb-4">Analytics </h3>
      <h4 class="font-semibold">Matomo</h4>
      <p>
        This website uses <a href="https://matomo.org/" target="_blank" rel="noopener"
          class="text-blue-400 underline">Matomo</a>, an open-source analytics platform, to understand how visitors use
        the site and to improve user experience.
      </p>
      <p>
        Matomo is <strong>self-hosted</strong> on our own server within the European Union. All analytics data remain
        under our full control and are not shared with third parties.
      </p>

      <p>Matomo may collect anonymized information such as:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Pages visited and time spent on each page</li>
        <li>Browser type and device information</li>
        <li>Referring website</li>
        <li>Approximate geographic region (based on anonymized IP)</li>
      </ul>

      <p class="mt-4">We have configured Matomo to respect your privacy:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>IP addresses are anonymized (last 2 bytes removed)</li>
        <li>No tracking cookies are used (cookieless tracking mode)</li>
        <li>No data is shared with external services</li>
      </ul>

      <!--<p class="mt-4">
      If you wish to opt out of analytics tracking, you can do so below:
    </p>-->

      <!-- Matomo opt-out iframe (optional) -->
      <!-- <div class="mt-4"> -->
      <!-- <iframe -->
      <!-- src="https://matomo.com/matomo/index.php?module=CoreAdminHome&action=optOut&language=en" -->
      <!-- class="w-full h-52 border-0 rounded-lg shadow-sm" -->
      <!-- ></iframe> -->
      <!-- </div> -->
    </section>

    <section class="prose prose-invert max-w-xl mx-auto mt-8">
      <h4 class="font-semibold">PostHog</h4>

      We use PostHog Cloud EU, a product analytics service hosted in the EU, to collect information about how visitors
      use
      our website. This may include interaction data, device/browser information, and anonymous identifiers. We only
      collect analytics data after users have given consent via our cookie consent banner.

      <ul class="list-disc list-inside space-y-1">
        <li>The legal basis for processing is user consent (Art. 6(1)(a) GDPR). Users may withdraw consent at any time.
        </li>
        <li>PostHog acts as our data processor. Data is stored within the EU and is retained for X months. Users can
          request deletion of their data at any time.</li>
        <li>You have the right to access, correct, or delete your personal data, or to complain to the Estonian Data
          Protection Inspectorate. (Contact: privacy@wug.ge)</li>
      </ul>
    </section>
  </div>
</template>