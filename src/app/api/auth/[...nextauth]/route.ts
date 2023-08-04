import NextAuth from 'next-auth';

import { authConfigOptions } from '@/constants/auth';

const handler = NextAuth(authConfigOptions);

export { handler as GET, handler as POST }
