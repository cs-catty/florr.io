(async () => {

	const currentVersionHash = (await (await fetch("https://florr.io")).text()).match(/const\sversionHash\s=\s"(.*)";/)[1];
	const kMaxRaritiesOnGallery = 8;
	const kMaxMOBs = 69;
	const mobGalleryBaseAddress = 18569716;

	for (let mobIndex = 1; mobIndex <= kMaxMOBs; mobIndex++) {
		let flags = 0;
		for (let rarityIndex = 0; rarityIndex < kMaxRaritiesOnGallery; rarityIndex++) {
			flags |= (1 << rarityIndex);
		}
		Module.HEAPU8[(mobGalleryBaseAddress + mobIndex) >> 0] = flags;
	}

	console.log("Successfully modified the memory.");

})();