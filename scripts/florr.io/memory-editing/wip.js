// WOrk in progress, I only used for a video thumbnail not very user friendly atm

(async () => {

	const currentVersionHash = (await (await fetch("https://florr.io")).text()).match(/const\sversionHash\s=\s"(.*)";/)[1];
	const kMaxRaritiesOnGallery = 8;
	const kMaxMOBs = 69;
	const mobGalleryBaseAddress = 18569716;
	const allowedMobs = [
	];

	for (let mobIndex = 1; mobIndex <= kMaxMOBs; mobIndex++) {
		let flags = 0;
		if (allowedMobs.includes(mobIndex)) {
			for (let rarityIndex = 0; rarityIndex < kMaxRaritiesOnGallery; rarityIndex++) {
				flags |= (1 << rarityIndex);
			}
		}
		Module.HEAPU8[(mobGalleryBaseAddress + mobIndex) >> 0] = flags;
	}

	console.log(`Do you ever feel like a plastic bag
Drifting through the wind, wanting to start again?
Do you ever feel, feel so paper thin
Like a house of cards, one blow from cavin' in?
Do you ever feel already buried deep?
Six feet under screams, but no one seems to hear a thing
Do you know that there's still a chance for you?
'Cause there's a spark in you
You just gotta ignite the light
And let it shine
Just own the night
Like the Fourth of July
'Cause baby, you're a firework
Come on, show 'em what you're worth
Make 'em go, "Oh, oh, oh"
As you shoot across the sky
Baby, you're a firework
Come on, let your colors burst
Make 'em go, "Oh, oh, oh"
You're gonna leave 'em all in awe, awe, awe
You don't have to feel like a waste of space
You're original, cannot be replaced
If you only knew what the future holds
After a hurricane comes a rainbow
Maybe a reason why all the doors are closed
So you could open one that leads you to the perfect road
Like a lightning bolt, your heart will glow
And when it's time, you'll know
You just gotta ignite the light
And let it shine
Just own the night
Like the Fourth of July
'Cause baby, you're a firework
Come on, show 'em what you're worth
Make 'em go, "Oh, oh, oh"
As you shoot across the sky
Baby, you're a firework
Come on, let your colors burst
Make 'em go, "Oh, oh, oh"
You're gonna leave 'em all in awe, awe, awe
Boom, boom, boom
Even brighter than the moon, moon, moon
It's always been inside of you, you, you
And now it's time to let it through
'Cause baby, you're a firework
Come on, show 'em what you're worth
Make 'em go, "Oh, oh, oh"
As you shoot across the sky
Baby, you're a firework
Come on, let your colors burst
Make 'em go, "Oh, oh, oh"
You're gonna leave 'em all in awe, awe, awe
Boom, boom, boom
Even brighter than the moon, moon, moon
Boom, boom, boom
Even brighter than the moon, moon, moon
`);

})();
