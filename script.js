//your JS code here. If required.
let output = document.getElementById("output");
function makePromise() {
	return new Promise((reslove,reject)=>{
		setTimeout(()=>{
			reslove("Hello, world!");
		},1000);
	})
}
makePromise().then((data)=>{
	output.innerText = data;
})