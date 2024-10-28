module.exports = {
	branches: ["main", { name: "next", prerelease: true }],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/npm",
		[
			"@semantic-release/git",
			{
				assets: ["package.json"],
				message: "bump(version): ${nextRelease.version} [skip ci]",
			},
		],
	],
};
