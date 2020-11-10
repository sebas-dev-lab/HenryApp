passport.use(
	new GoogleStrategy(
		{
			clientID: googleClientID,
			clientSecret: googleClientSecret,
			callbackURL: '/auth/google/redirect'
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const [user, created] = await User.findOrCreate({
					where: {googleId: profile.id},
					defaults: {name: profile.displayName, email: profile.emails[0].value}
				});
				// On error
				if (!user) return done(null, false, {message: 'No pudimos loguearte con esa cuenta'});

				// On success
				return done(null, user);
			} catch (error) {
				done(error);
			}
		}
	)
);