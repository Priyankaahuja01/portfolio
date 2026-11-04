"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { unlockCaseStudy, type UnlockState } from "@/app/work/[slug]/unlock-action";

export function PasswordGate({ slug }: { slug: string }) {
  const [state, action, pending] = useActionState<UnlockState, FormData>(
    unlockCaseStudy,
    null,
  );
  const router = useRouter();

  // On success the cookie is set server-side; refresh to re-render unlocked.
  useEffect(() => {
    if (state?.ok) router.refresh();
  }, [state, router]);

  return (
    <div className="mx-auto mt-10 max-w-md rounded-2xl border border-line bg-surface p-8 text-center">
      <div className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          aria-hidden="true"
        >
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      </div>
      <h2 className="font-serif text-xl text-ink">Password-protected</h2>
      <p className="mx-auto mt-2 max-w-xs text-sm text-muted">
        This case study is shared privately as an NDA courtesy. Enter the
        password to read it.
      </p>

      <form action={action} className="mt-6 flex flex-col gap-3">
        <input type="hidden" name="slug" value={slug} />
        <input
          type="password"
          name="password"
          required
          autoComplete="off"
          placeholder="Password"
          aria-label="Password"
          className="w-full rounded-full border border-line bg-bg px-5 py-3 text-sm text-ink outline-none placeholder:text-faint focus:border-accent"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-btn px-6 py-3 text-sm font-medium text-on-btn transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending ? "Unlocking…" : "Unlock case study"}
        </button>
        {state?.error && (
          <p className="text-sm text-accent" role="alert">
            {state.error}
          </p>
        )}
      </form>
    </div>
  );
}
