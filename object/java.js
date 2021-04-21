$( ()=>{


	setTimeout( ()=>{


	var body=$('body');
	body.append('<div id="holder"></div> ');
	var holder=$('#holder');
	holder.css({ width:'1000px',height:'80px',border:"black solid 3px",background:'orange',marginTop:'20px'
	, marginLeft:'auto',marginRight:"auto"   }); 

	for(let i=0;i<db.length;i++){
		holder.append('<div class="btn btn-sm btn-danger" style="margin-top:20px ;margin-left:14px;" >Create Obj '+db[i][0]+' </div>  ')

	}


	var btns=$('.btn');

	for(let i=0;i<btns.length;i++){

		$(btns[i]).on('click',FirstStep );

	}


	var click=0;
	var loop;

	function FirstStep(){

		if(this==btns[0]){

			loop=db[0];
			click=10;

		}if(this==btns[1]){

			loop=db[1];
			click=11;

		}if(this==btns[2]){

			loop=db[2];
			click=12;

		}if(this==btns[3]){
			
		    loop=db[3];	
		    click=13;

		}if(this==btns[4]){

			loop=db[4];			
 			click=14;
		}


		CreateObj();



	}///end of FirstStep


	class Studenti{
			constructor( Name,Adresa,Telefon,Kurs ){

				this.Name=Name;
				this.Adresa=Adresa;
				this.Telefon=Telefon;
				this.Kurs=Kurs;
				
			}

		}


var studentholder;
var Mar=[50,220,390,560,730];

		function CreateElemnts(){

			for(let i=0;i<db.length;i++){

				body.append('<div class="obj obj-'+i+'"></div>  '); 

			}

		studentholder=$('.obj');	

		for(let i=0;i<studentholder.length;i++){
			$(studentholder[i]).css({ display: "inline-block",border:'1px solid black',height:250,width:'250px',background:'gray',
			marginTop:'30px',marginLeft:"15px",display:'none'	

			})

		}

		}

		CreateElemnts();


var del;
var del1;
var del2;
var del3;
var del4;
var mar1=[30,60,90,120,150];

	function CreateObj(){

		let loop1=0;

		if(click==10){
			var blook=window.getComputedStyle(studentholder[0]).display;
			if(blook=="none"){
			$(studentholder[0]).css({display: "inline-block" })
			var student1=new Studenti( loop[0],loop[1],loop[2],loop[3],loop[4] );
			for(let prop in student1 ){

				$(studentholder[0]).append( '<div class="dec dec-'+loop1+'">'+prop+' :  '+student1[prop]+' </div>  ')
				del=$('.dec-'+loop1+' ');
				del.css({position:'absolute', marginTop:mar1[loop1],marginLeft:'5px',color:'gold' })
				loop1++;
			}//end of for

			del=$('.dec');

			}else{
				$(studentholder[0]).css({display:'none' });
				del.remove();
			}

			

		

		}else if(click==11){

			var blook=window.getComputedStyle(studentholder[1]).display;
			if(blook=="none"){
			$(studentholder[1]).css({display: "inline-block" })
			var student2=new Studenti( loop[0],loop[1],loop[2],loop[3],loop[4] );
			for(let prop in student2 ){

				$(studentholder[1]).append( '<div class="dec1 dec-'+loop1+'">'+prop+' :  '+student2[prop]+' </div>  ')
				del1=$('.dec-'+loop1+' ');
				del1.css({position:'absolute', marginTop:mar1[loop1],marginLeft:'5px',color:'gold' })
				loop1++;
			}//end of for

			del1=$('.dec1');

			}else{
				$(studentholder[1]).css({display:'none' });
				del1.remove();
			}

		}else if(click==12){

			var blook=window.getComputedStyle(studentholder[2]).display;
			if(blook=="none"){
			$(studentholder[2]).css({display: "inline-block" })
			var student3=new Studenti( loop[0],loop[1],loop[2],loop[3],loop[4] );
			for(let prop in student3 ){

				$(studentholder[2]).append( '<div class="dec2 dec-'+loop1+'">'+prop+' :  '+student3[prop]+' </div>  ')
				del2=$('.dec-'+loop1+' ');
				del2.css({position:'absolute', marginTop:mar1[loop1],marginLeft:'5px',color:'gold' })
				loop1++;
			}//end of for

			del2=$('.dec2');

			}else{
				$(studentholder[2]).css({display:'none' });
				del2.remove();
			}

		}else if(click==13){

			var blook=window.getComputedStyle(studentholder[3]).display;
			if(blook=="none"){
			$(studentholder[3]).css({display: "inline-block" })
			var student4=new Studenti( loop[0],loop[1],loop[2],loop[3],loop[4] );
			for(let prop in student4 ){

				$(studentholder[3]).append( '<div class="dec3 dec-'+loop1+'">'+prop+' :  '+student4[prop]+' </div>  ')
				del3=$('.dec-'+loop1+' ');
				del3.css({position:'absolute', marginTop:mar1[loop1],marginLeft:'5px',color:'gold' })
				loop1++;
			}//end of for

			del3=$('.dec3');

			}else{
				$(studentholder[3]).css({display:'none' });
				del3.remove();
			}

		}else if(click==14){

			var blook=window.getComputedStyle(studentholder[4]).display;
			if(blook=="none"){
			$(studentholder[4]).css({display: "inline-block" })
			var student5=new Studenti( loop[0],loop[1],loop[2],loop[3],loop[4] );
			
			for(let prop in student5 ){

				$(studentholder[4]).append( '<div class="dec4 dec-'+loop1+'">'+prop+' :  '+student5[prop]+' </div>  ')
				del4=$('.dec-'+loop1+' ');
				del4.css({position:'absolute', marginTop:mar1[loop1],marginLeft:'5px',color:'gold' })
				loop1++;
			}//end of for

			del4=$('.dec4');

			}else{
				$(studentholder[4]).css({display:'none' });
				del4.remove();
			}

		}///end of if else state
	

	

		


	}//end of main function 








	},2500 );

	



} )


