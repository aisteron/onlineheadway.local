import { load_mithril, load_toast, qs } from "./libs";
import { Ui } from "./ui";


document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init);

function init() {
	Ui()
	bootstrap()

}

async function bootstrap() {
	await load_toast()
	await load_mithril()


}