   if ('listy' in localStorage) {} else {localStorage.listy=""};
   $("h3.r a").each(function(){
     console.log($(this).attr('href'));
     localStorage.listy += $(this).attr('href') + '\n';
   });

      

   //$.ajax({
   //  url: 'http://box.scraperwiki.com/scraperwiki/<scraper>/exec',
   //  data: {apikey:'<api>',
   //         cmd:'echo '+listy+ '>> urls.txt'
   //        }
   //  type: 'POST',
   //  success: function() {document.location = $("#pnnext").attr('href')}
   //})
   
   //document.location = $("#pnnext").attr('href') // autoadvance
   console.log(localStorage.listy); // display output
   console.log(localStorage.listy.match(/\n/g).length);
   url = $('a#pnnext').attr('href');
   window.location.href='https://www.google.co.uk/'+url;
   //$('a#pnnext').click(); 
