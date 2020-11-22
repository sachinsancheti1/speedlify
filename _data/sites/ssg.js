module.exports = {
	name: "Vitrag Website", // optional, falls back to object key
	description: "Vitrag Website",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://vitraggroup.com/",
		"https://vitraggroup.com/houses-for-sale/",
		"https://vitraggroup.com/gated-community/",
		"https://vitraggroup.com/plots-for-sale/",
		"https://vitraggroup.com/about/",
		"https://vitraggroup.com/tags/"
	]
};