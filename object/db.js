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

	AllObj=res;
	setTimeout(Extra,100 );

})


var NewObj=[];

var lat=" ";
function Extra(){
	
	var xx = AllObj.split('');
	var fake=xx[13];
	let loop1=xx.length;
	let loop=loop1-5;

	for(let i=0;i<xx.length;i++){

		if( xx[i] == fake || xx[i]==" " ){
			NewObj.push(lat);
			lat=" ";
		}else{
			  lat += xx[i] ;
			  
		}

		if(loop==5){
			NewObj.push(lat);
			lat=" ";
			

		}

	}

	NewObj.push(lat);

	var folow=0;
	


		for(let i=0;i<NewObj.length;i++){
			

			if( i==1 ){
				let word = NewObj[folow-1]+NewObj[i];
				db[0].push(word);

			}if( i==4 ){
				let word = NewObj[folow-2] + NewObj[folow-1]  + NewObj[i];
				db[0].push(word);
			}if( i==6 ){
				let word = NewObj[folow-1]  + NewObj[i];
				db[0].push(word);
			}if( i==7 ){
				let word = NewObj[i];
				db[0].push(word);
			}if( i==9 ){
				let word = NewObj[folow-1]+NewObj[i];
				db[1].push(word);
			}if( i==12 ){
				let word = NewObj[folow-2] + NewObj[folow-1]  + NewObj[i];
				db[1].push(word);
			}if( i==14 ){
				let word =NewObj[folow-1]  + NewObj[i];
				db[1].push(word);	
			}if( i==15 ){
				let word = NewObj[i];
				db[1].push(word);	
			}if( i==17 ){
				let word = NewObj[folow-1]+NewObj[i];
				db[2].push(word);	
			}if( i==20 ){
				let word = NewObj[folow-2] + NewObj[folow-1]  + NewObj[i];
				db[2].push(word);	
			}if( i==22 ){
				let word = NewObj[folow-1]+NewObj[i];
				db[2].push(word);		
			}if( i==23 ){
				let word =NewObj[i];
				db[2].push(word);	
			}if( i==25 ){
				let word = NewObj[folow-1]+NewObj[i];
				db[3].push(word);	
			}if( i==29 ){
				let word =NewObj[folow-3] + NewObj[folow-2] + NewObj[folow-1]  + NewObj[i];
				db[3].push(word);	
			}if( i==31 ){
				let word =NewObj[folow-1]  + NewObj[i];
				db[3].push(word);	
			}if( i==32 ){
				let word =NewObj[i];
				db[3].push(word);	
			}if( i==34 ){
				let word =NewObj[folow-1]  + NewObj[i];
				db[4].push(word);	
			}if( i==38 ){
				let word =NewObj[folow-3] + NewObj[folow-2] + NewObj[folow-1]  + NewObj[i];
				db[4].push(word);	
			}if( i==40 ){
				let word =NewObj[folow-1]  + NewObj[i];
				db[4].push(word);	
			}if( i==41 ){
				let word =NewObj[i];
				db[4].push(word);	
			}


			folow++;
		}

	

}