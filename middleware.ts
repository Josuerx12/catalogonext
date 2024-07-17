// import { auth } from "./auth";
// import { NextResponse } from "next/server";

// export default auth(async (req) => {
//   const { nextUrl } = req;
//   const session = req.auth;

//   if (session) {
//     const { user } = session;

//     if (
//       user &&
//       (nextUrl.pathname === "/signIn" || nextUrl.pathname === "/signUp")
//     ) {
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//   }
//   if (
//     !session &&
//     (nextUrl.pathname === "/usuario/posts" ||
//       nextUrl.pathname === "/usuario/perfil")
//   ) {
//     return NextResponse.redirect(new URL("/signIn", req.url));
//   }
// });
