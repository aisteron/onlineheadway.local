<?
function send_cb($to, $phone){


// Subject
$subject = 'New lead onlineheadway';

// Message
$message = '<html>
				<head>
				<title>new lead onlineheadway</title>
				</head>
				<body>
				<div class="wraplogo">
				  <span>
				  <span>Headway</span> 
					<span style="color: gold">✻</span>
				  <span>Online</span>

				  </span>
			    </div>
				<br>
				<p>Срочно перезвонить: <a href="tel:'.$phone.'">'.$phone.'</a></p>';
				
				
  $message .='</body></html>';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
// Additional headers
$headers[] = 'From: cb.form <robot@onlineheadway.com>';



// Mail it
if( mail($to, $subject, $message, implode("\r\n", $headers) ) )
{
	echo '{"success":true}';
}
else 
{
	echo '{"success":false}';
}

}