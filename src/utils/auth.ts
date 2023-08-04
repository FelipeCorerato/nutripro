import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import { authConfigOptions } from "@/constants/auth";

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfigOptions);

  if (!session) return redirect('/');
}

export function useLoginIsRequiredClient() {
  const session = useSession();
  const router = useRouter();

  if (!session) router.push('/');
}
