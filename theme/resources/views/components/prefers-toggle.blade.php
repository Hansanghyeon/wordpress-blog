<button
  type="button"
  class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none"
  role="switch"
  aria-checked="false"
  x-data="{ on: $store.darkMode.value }"
  :aria-checked="on.toString()"
  @click="$store.darkMode.toggle(); on=$store.darkMode.value">
    <span class="sr-only">prefers-color-scheme toggle</span>
    <span
      aria-hidden="true"
      class="pointer-events-none absolute h-full w-full rounded-md"></span>
    <span
      aria-hidden="true"
      class="pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out bg-gray-200" x-state:on="Enabled" x-state:off="Not Enabled"
      :class="{ 'bg-yellow-300': on, 'bg-sky-400': !(on) }"></span>
    <span
      aria-hidden="true"
      class="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out translate-x-0" x-state:on="Enabled" x-state:off="Not Enabled"
      :class="{ 'translate-x-5': on, 'translate-x-0': !(on) }"></span>
  </button>
