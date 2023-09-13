import { config } from "@vue/test-utils"
import translations from "@/translations.js"

const locale = "en"

config.global.mocks = {
  $t: (msg) => translations[locale][msg]
}