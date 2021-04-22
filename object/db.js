var db=[ [],[],[],[],[] ];


class GetData{
	static go(url){
		return new Promise( function (resolve,reject)  {
			let xml=new XMLHttpRequest();
			xml.open('get',url);
			xml.onreadystatechange=()=>{
				if(xml.status==200 && xml.readyState==4){
					resolve( xml.responseText  )
				}
			}

			xml.send();

		})
	}

}

let texts=GetData.go(' https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt ');

var AllObj;

texts.then( (res) =>  {

	AllObj=res.split('\n');
	setTimeout(Extra,500 );

})

var word=" ";
var loopArrey=3;
var loop=0;

function Extra(){
	
	for(let i=0;i<AllObj.length;i++){

		if(i == loopArrey){
			word=AllObj[i];
			db[loop].push(word);
			loop++;
			loopArrey+=4;
		}else{
			word=AllObj[i];
			db[loop].push(word);
			

		}


	}


}