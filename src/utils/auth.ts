

export const cleanUpBeforeLogout = async () => {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations()
    for (const registration of registrations) {
      registration.unregister()
    }
  }
  localStorage.clear()
}
