import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// const NextAuth = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials) {
//         const user = { id: "1", name: "djdjd" };
//         return user;
//       },
//     }),

//   ],

//   secret: process.env.SECRET,
//     pages: {
//       signIn: "/login",
//     },
// };

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const user = { id: "1", name: "djdjd" };
        return user;
      },
    }),
  ],

  // secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
