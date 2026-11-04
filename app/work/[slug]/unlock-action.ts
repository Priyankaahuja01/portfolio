"use server";

import { cookies } from "next/headers";

export type UnlockState = { ok: boolean; error?: string } | null;

// NDA-courtesy gate for the Jackson Lab study. Not a security boundary —
// the password unlocks the written content; it isn't account protection.
const PASSWORD = process.env.CASE_STUDY_PASSWORD || "Go@123";

export async function unlockCaseStudy(
  _prev: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const slug = String(formData.get("slug") || "");
  const password = String(formData.get("password") || "");

  if (!slug) return { ok: false, error: "Something went wrong. Try again." };
  if (password !== PASSWORD) {
    return { ok: false, error: "That password isn’t right." };
  }

  const store = await cookies();
  store.set(`unlocked-${slug}`, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return { ok: true };
}
