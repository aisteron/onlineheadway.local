<?php
function send_form($to,$arr){
  

$goals = [
  [
    'value'=>'free',
    'label'=> 'Свободно общаться с иностранцами'
  ],
  [
    'value'=>'deal',
    'label'=> 'Вести деловую переписку'
  ],
  [
    'value'=>'cert',
    'label'=> 'Получить международные сертификаты'
  ],
  [
    'value'=>'lit',
    'label'=> 'Читать проф. литературу на английском'
  ],
  [
    'value'=>'other',
    'label'=> 'Другие'
  ],
];
$str = '';
foreach($arr['goals'] as $g){
  $found = current(array_filter($goals, function($item) use ($g){
    
    return $g == $item['value'];
  }));
  $str .= $found['label'].', ';
}
$str = substr($str, 0, strlen($str)-2);

$subject = 'New form onlineheadway';

// Message
$message = '<html>
				<head>
				<title>new form onlineheadway</title>
				</head>
				<body>
				<div class="wraplogo">
          <span>Headway</span> <span style="color: gold">✻</span> <span>Online</span>
			  </div>
				<br>
        <h3>Данные клиента:</h3>
        <ul>
          <li>Имя: '.$arr['form']['name'].'</li>
          <li>Телефон: '.$arr['form']['phone'].'</li>
          <li>Эл. почта: '.$arr['form']['email'].'</li>
          <li>Комментарий: '.$arr['form']['comment'].'</li>
        </ul>
        <p>Сфера деятельности компании: '.$arr['sphere'].'</p>
        <p>Временные рамки: '.$arr['period'].'</p>
        <p>Кол-во сотрудников: '.$arr['count'].'</p>
        <p>Цели: '.$str.'</p>';
				
				
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