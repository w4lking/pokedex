// utils/translateType.ts
import { useI18n } from 'vue-i18n'

export function translateType(type: string): string {
  const { t, locale } = useI18n()
  return locale.value === 'en' ? type : t(`types.${type.toLowerCase()}`)
}
