// @jest-environment node

jest.mock('next-auth', () => ({
  getServerSession: jest.fn(),
}));
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));
jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
  useRouter: jest.fn(),
}));

import { loginIsRequiredServer, useLoginIsRequiredClient } from '@/utils/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('loginIsRequiredServer', () => {
  it('should redirect if there is no session', async () => {
    (getServerSession as jest.Mock).mockResolvedValueOnce(null);
    const redirectMock = redirect as unknown as jest.Mock;
    await loginIsRequiredServer();
    expect(redirectMock).toHaveBeenCalledWith('/');
  });

  it('should not redirect if there is a session', async () => {
    (getServerSession as jest.Mock).mockResolvedValueOnce({ user: { name: 'Test' } });
    const redirectMock = redirect as unknown as jest.Mock;
    await loginIsRequiredServer();
    expect(redirectMock).not.toHaveBeenCalled();
  });
});

describe('useLoginIsRequiredClient', () => {
  it('should redirect if there is no session', () => {
    (useSession as jest.Mock).mockReturnValueOnce(null);
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValueOnce({ push: pushMock });
    useLoginIsRequiredClient();
    expect(pushMock).toHaveBeenCalledWith('/');
  });

  it('should not redirect if there is a session', () => {
    (useSession as jest.Mock).mockReturnValueOnce({ user: { name: 'Test' } });
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValueOnce({ push: pushMock });
    useLoginIsRequiredClient();
    expect(pushMock).not.toHaveBeenCalled();
  });
}); 