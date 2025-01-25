<?php
include './cb.php';
include './form.php';

$action = $_POST['action'];
$to = 'timotheus@list.ru'; // test mode
//$to = 'timotheus@list.ru, hwschool@mail.ru'; // prod mode

$data = json_decode($_POST['data'],true);

$action == 'cb'
  ? send_cb($to,$data['phone'])
  : send_form($to,$data);
