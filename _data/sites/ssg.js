module.exports = {
	name: "Vitrag Website", // optional, falls back to object key
	description: "Vitrag Website",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	options: {
		frequency: 60 * 24 * 7, // 24 hours
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
		"https://vitraggroup.com/tags/",
		"https://vitraggroup.com/houses-for-sale/balaclava-large-house-coonoor/",
		"https://vitraggroup.com/houses-for-sale/malhar-cottage-tea-garden-coonoor-kotagiri/",
		"https://vitraggroup.com/gated-community/hill-valley-enclave-wellington-municipal-property/",
		"https://vitraggroup.com/gated-community/serenitea-gated-community-ooty-coonoor/",
		"https://vitraggroup.com/plots-for-sale/plot-12-at-creekside/",
		"https://vitraggroup.com/plots-for-sale/plot-52-at-serenitea/",
		"https://vitraggroup.com/plots-for-sale/plot-bettati-g-at-independent-plots/",
		"https://vitraggroup.com/tags/communities-new/",
		"https://vitraggroup.com/archive-of-properties/",
		"https://vitraggroup.com/houses-for-sale/jannat-villa-sua-serenitea-coonoor/",
		"https://vitraggroup.com/our-testimonials/"
	]
};