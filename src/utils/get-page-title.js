import defaultSettings from '@/settings'

const title = defaultSettings.title || 'tzw vue study'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
