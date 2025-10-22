import { cookies } from 'next/headers'; // For Server Components
import { getCookie } from 'cookies-next'; // For Client Components

export async function getToken(): Promise<string | null> {
  // Server-side (Next.js Server Components / SSR)
  if (typeof window === 'undefined') {
    console.log('i run from server');
    const cookieStore = await cookies();
    return cookieStore.get('auth_token')?.value || null;
  }
  // Client-side (Browser)
  else {
    return getCookie('auth_token')?.toString() || null;
  }
}
