import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const options = {
    providers: [
        GitHubProvider({
            profile(profile) {
                console.log("Profile Github:", profile);

                let userRole = "GitHub user";
                if (profile?.email == "ianalfwani1@gmail.com") {
                    userRole = "admin";
                }
                return {
                    ...profile,
                    role: userRole,
                };
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            profile(profile) {
                console.log("Profile Google:", profile);
                
                let userRole = "Google User";
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // First-time login: user is available
            if (user) {
                token.role = user.role; // Save the role to the token
            }

            // Subsequent requests: only token is available
            console.log("Token role:", token.role); // Debugging
            return token;
        },
        async session({ session, token }) {
            // Persist the role in the session object
            if (session?.user) {
                session.user.role = token.role;
            }
            console.log("Session role:", session.user.role); // Debugging
            return session;
        }
    }
};
