<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db CognitiveHack_db
		require('./resource/CognitiveHack_db/custom/ComuniCustom.php');
		require('./resource/CognitiveHack_db/Comuni.php');
		require('./resource/CognitiveHack_db/custom/RegionCustom.php');
		require('./resource/CognitiveHack_db/Region.php');
	

$app->run();


?>
