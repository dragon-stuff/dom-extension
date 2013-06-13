   //localStorage.clear() // wipe data
   window.alert("yay");
   if ('listy' in localStorage) {} else {localStorage.listy=""};
   $("a.l").each(function(){
     console.log($(this).attr('href'));
     localStorage.listy += $(this).attr('href') + '\n';
     console.log(localStorage.listy.length);
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
   console.log(localStorage.listy) // display output
   
