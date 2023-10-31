import { trap } from "async-helpers";
import { app, admin } from "firebase-helpers";
import { createEnvironment } from "environment-helpers";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

const env = createEnvironment(z => z.object({
  SESSION_SECRET: z.string()
}));

const storage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secure: env().NODE_ENV === "production",
    secrets: [env().SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

const createUserSession = async (id: string, location:string) => {
  const token = await admin.getSessionToken(id);
  const session = await storage.getSession();
  
  session.set("token", token);

  return redirect(location, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

const getUserSession = async (request: Request) => {
  const cookieSession = await storage.getSession(request.headers.get("Cookie"));
  const token = cookieSession.get("token");

  if (!token) return null;

  const verified = await trap(admin.auth.verifySessionCookie(token, true));

  if (!verified.success) {
    return null;
  }

  return verified.data;
}

// @TODO
// - Perhaps "/login" should be a parameter?
const destroySession = async (request: Request) => {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const newCookie = await storage.destroySession(session);

  return redirect("/login", { headers: { "Set-Cookie": newCookie } });
}

const signOut = async (request: Request) => {
  await app.signOut();
  return destroySession(request);
}

export { signOut, getUserSession, createUserSession };