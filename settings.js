const fs = require('fs');
const chalk = require('chalk');

global.botName = '𝐇𝐎𝐍𝐊𝐀𝐈 𝐀𝐈'; // Nama Bot Kamu
global.ownerNumber = '6281292711174'; // Nomor Kamu
global.ownerName = '𝐙𝐎𝐒𝐘'; // Nama Kamu
global.website = 'https://www.ryzenoffc.my.id'; // Web Kamu
global.wagc = 'https://www.ryzenoffc.my.id'; // Web Kamu

global.packname = botName; // Nama Pack
global.author = ownerName; // Nama Author
global.footer = '© 2024-2025 · 𝑍𝑂𝑆𝑌 𝐷𝐸𝑉';
global.creator = '6281292711174@s.whatsapp.net'; // Nomor Creator
global.premium = ['6281292711174']; // User Premium
global.prefa = '/'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '120363299719848392@newsletter'; // ID Saluran Kamu
global.saluranName = '𝑍𝑂𝑆𝑌 𝐷𝐸𝑉'; // Nama Saluran Kamu
global.sessionName = 'session'; // Nama Folder Sesi Bot Kamu

global.panel = 'https://control.optikservers.com'; // Link Panel Kamu
global.cred = 'ptlc_aXoU83VrtOgFc18EO6H7ZGmlGjUTuq2b06ySgfAVubN'; // API PTLA Kamu
global.apiuser = 'ptlc_aXoU83VrtOgFc18EO6H7ZGmlGjUTuq2b06ySgfAVubN'; // API PTLC Kamu
global.eggs = '15'; // Eggs Number (Recommended)
global.nets = '5'; // Nets Number (Recommended)
global.location = '1'; // Location Number (Recommended)

global.CF_API_KEY = "KGGRRGbLDNT7N-jDi7JUW4hHregvHQvm8o4ORYZ_"; // Apikey CF Kamu
global.CF_ZONE_ID = "b9883610d0c1ecf9c83f002897822971"; // Zone ID CF Kamu
global.CF_DOMAIN = "optikservers.com"; // Nama Domain Kamu di CF

global.typemenu = 'v5'; // Gaya Menu v1-v5
global.typereply = 'v4'; // Gaya Reply v1-v4
global.autoblocknumber = '62'; // Auto Block Number
global.antiforeignnumber = '62'; // Anti Foreign Number
global.welcome = false // Auto Welcome Msg
global.anticall = false // Anti Call
global.autoswview = false // Auto View Status
global.adminevent = false // Admin Event Msg
global.groupevent = false // Group Event Msg
global.notifRegister = false // Notif Register
global.onlyRegister = false // Hanya Pendaftar
global.autoJoinNewsletter = true // Jangan Ubah Jika Ngak Mau Eror

global.payment = {
	dana: "081292711172",
	gopay: "081292711174",
	ovo: "081292711174",
	qris: "https://files.fm/f/92j23g2smh",
	shopeePay: "𝑀𝐴𝐼𝑁𝑇𝐴𝑁𝐸",
	seabank: "𝑀𝐴𝐼𝑁𝑇𝐴𝑁𝐶𝐸"
};

global.limit = {
	free: 20, // Limit User Non-premium
	premium: 1000, // Limit User Premium
	vip: "VIP" // Limit User VIP 👑
};

global.uang = {
	free: 1000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 1000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: "Fitur ini khusus buat admin aja ya, Kak! 🫢",
	botAdmin: "SENKAI harus jadi admin dulu biar bisa jalanin ini! 😭",
	done: "Done Kak! ✨",
	error: "Eh, ada yang salah nih... coba lagi ya, Kak! 😖",
	group: "Eits, fitur ini cuma bisa dipakai di grup~ 🫡",
	limit: "Yah, limit penggunaan kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit, atau upgrade ke premium untuk mendapat limit banyak dan akses ke fitur spesial! ✨",
	nsfw: "Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣",
	owner: "Hanya pemilik yang bisa akses fitur ini, Kak! 👑",
	premium: "Fitur ini cuma buat pengguna premium, Kak! 🌟",
	private: "Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌",
	wait: "Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗"
};

global.imageDonasi = "https://images2.imgbox.com/3d/ca/ZInLpUVo_o.jpeg"; // Url Image Donasi (dana, qris etc..)
global.imageUrl = "https://images2.imgbox.com/3d/ca/ZInLpUVo_o.jpeg"; // Url Image
global.imageBuffer = fs.readFileSync("./media/imageBuffer.png"); // Buffer Image
global.videoBuffer = fs.readFileSync("./media/videoBuffer.mp4"); // Buffer Video
global.audioBuffer = fs.readFileSync("./media/audioBuffer.mp3"); // Buffer Audio

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})