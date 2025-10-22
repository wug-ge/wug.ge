<template>
  <section class="prose prose-invert max-w-xl mx-auto mt-8">
    <h3 class="text-xl font-semibold mb-4">Analytics (Matomo)</h3>
    <p>
      This website uses <a href="https://matomo.org/" target="_blank" rel="noopener" class="text-blue-400 underline">Matomo</a>, an open-source analytics platform, to understand how visitors use the site and to improve user experience.
    </p>
    <p>
      Matomo is <strong>self-hosted</strong> on our own server within the European Union. All analytics data remain under our full control and are not shared with third parties.
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

    <p class="mt-4">
      If you wish to opt out of analytics tracking, you can do so below:
    </p>

    <!-- Matomo opt-out iframe (optional) -->
    <div class="mt-4">
      <iframe
        src="https://matomo.com/matomo/index.php?module=CoreAdminHome&action=optOut&language=en"
        class="w-full h-52 border-0 rounded-lg shadow-sm"
      ></iframe>
    </div>
  </section>
</template>