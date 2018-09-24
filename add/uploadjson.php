<?php 

if (file_put_contents("../js/points.json", $_POST['json'])) {
	$response_array['status'] = 'success';
} else {
	$response_array['status'] = 'failed';
}

?>