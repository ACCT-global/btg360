export async function fetchEmail(): Promise<string> {
  const email = await fetch('/no-cache/profileSystem/getProfile')
    .then<ProfileData>(res => res.json())
    .then<string>(({ Email }) => Email)
    .catch(_ => console.log(`Couldn't fetch logged in use email`))
  return email || ''
}