function encode()
{
	var plain_text = document.getElementById("inputmessage").value;
	var cypher_text = [];
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
				 'q','r','s','t','u','v','w','x','y','z'];
	var alphabetU=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
				 'Q','R','S','T','U','V','W','X','Y','Z'];
				 
	var x = document.getElementById("rotX");
	
	if(x.value != "#")
	{
		for(var idx=0; idx<plain_text.length; idx++)
		{
			var  uorl = 0;
			
			if(plain_text[idx]== plain_text[idx].toUpperCase())
				uorl=0;
			else uorl=1;
			
			if(uorl==1)
				input = alphabet.indexOf(plain_text[idx]);
			else input=alphabetU.indexOf(plain_text[idx]);
			
			if(input == -1)
			{
				cypher_text.push(plain_text[idx]);
			}
			else
			{
				var coded = (input+parseInt(x.value))%26;
				if(uorl==1) var letter = alphabet[coded];
				else var letter = alphabetU[coded];
				cypher_text.push(letter);
			}		
		}
	}
	document.getElementById("outputmessage").innerHTML = cypher_text.join("");
}

function decode()
{
	var plain_text = document.getElementById("inputmessage").value;
	var decipher_text = [];
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
				 'q','r','s','t','u','v','w','x','y','z'];
	var alphabetU=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
				 'Q','R','S','T','U','V','W','X','Y','Z'];
				 
	var x = document.getElementById("rotX");
	
	if(x.value != "#")
	{
		var deckey = 0;
			
		if(parseInt(x.value)>13)
			deckey=13-(parseInt(x.value)-13)
		else if(parseInt(x.value)<13)
			deckey=13+(13-parseInt(x.value))
		else
			deckey = 13;
		
		for(var idx=0; idx<plain_text.length; idx++)
		{
			var  uorl = 0;
			
			if(plain_text[idx]== plain_text[idx].toUpperCase())
				uorl=0;
			else uorl=1;
			
			if(uorl==1)
				input = alphabet.indexOf(plain_text[idx]);
			else input=alphabetU.indexOf(plain_text[idx]);
			
			if(input == -1)
			{
				decipher_text.push(plain_text[idx]);
			}
			else
			{
				var coded = (input+deckey)%26;
				if(uorl==1) var letter = alphabet[coded];
				else var letter = alphabetU[coded];
				decipher_text.push(letter);
			}		
		}
	}
	document.getElementById("outputmessage").innerHTML = decipher_text.join("");
}
