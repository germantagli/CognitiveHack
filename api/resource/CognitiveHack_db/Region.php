<?php
	require_once './db/dbCognitiveHack_dbManager.php';
	
/*
 * SCHEMA DB Region
 * 
	{
		nome: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		RegCom: {
			type: Schema.ObjectId,
			ref : "Region"
		},
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/regions',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'nome'	=> isset($body->nome)?$body->nome:'',
		
		'RegCom' => isset($body->RegCom)?$body->RegCom:'',
	);

	$obj = makeQuery("INSERT INTO region (_id, nome , RegCom )  VALUES ( null, :nome , :RegCom   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/regions/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM region WHERE _id = :id LIMIT 1", $params);

});

//CRUD - FIND BY RegCom

$app->get('/regions/findByRegCom/:key',	function ($key) use ($app){	

	$params = array (
		'key'	=> $key,
	);
	makeQuery("SELECT * FROM region WHERE RegCom = :key", $params);
	
});
	
//CRUD - GET ONE
	
$app->get('/regions/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM region WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/regions',	function () use ($app){
	makeQuery("SELECT * FROM region");
});


//CRUD - EDIT

$app->post('/regions/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'nome'	    => isset($body->nome)?$body->nome:'',
		'RegCom'      => isset($body->RegCom)?$body->RegCom:'' 
	);

	$obj = makeQuery("UPDATE region SET  nome = :nome  , RegCom=:RegCom  WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>