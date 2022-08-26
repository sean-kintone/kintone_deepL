<script>
	let targetLanguage = 'JA';
	let sourceLanguage = 'EN';
	let sourceText = '';
	let translatedText = '';

	const tryTranslate = async () => {
		const text = await fetch('/translate', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
        targetLanguage: targetLanguage,
        sourceLanguage: sourceLanguage,
        sourceText: sourceText
      })
		});
    translatedText = await text.text();
	};
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
	</style>
</svelte:head>

<div class="main">
	<div class="grid-container">
		<div class="header"><button on:click={tryTranslate}><h2>Kintone Translator</h2></button></div>
		<div class="left">
			<h5>From:</h5>
			<select bind:value={sourceLanguage}>
				<option value="EN">English</option>
				<option value="JA">日本語</option>
			</select>
			<textarea bind:value={sourceText} />
		</div>
		<div class="right">
			<h5>To:</h5>
			<select bind:value={targetLanguage}>
				<option value="EN">English</option>
				<option value="JA">日本語</option>
			</select>
			<textarea bind:value={translatedText} />
		</div>
		<div class="footer">Footer</div>
	</div>
</div>

<style>
	.main {
		font-family: 'Noto Sans JP';
	}

	.header {
		grid-area: header;
	}
	.left {
		grid-area: left;
		display: flex;
		flex-direction: column;
	}

	textarea {
		min-height: 400px;
	}

	.right {
		grid-area: right;
		display: flex;
		flex-direction: column;
	}

	.footer {
		grid-area: footer;
	}

	.grid-container {
		display: grid;
		grid-template-areas:
			'header header header header'
			'left left right right'
			'footer footer footer footer';
		gap: 10px;
		background-color: #2196f3;
		padding: 10px;
	}

	.grid-container > div {
		background-color: rgba(255, 255, 255, 0.8);
		text-align: center;
		padding: 10px 0;
		font-size: 35px;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0%;
	}
</style>
