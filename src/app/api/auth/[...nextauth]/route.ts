import { authConfigOptions } from '@/constants/auth';
import NextAuth from 'next-auth';

const handler = NextAuth(authConfigOptions);

export { handler as GET, handler as POST }
