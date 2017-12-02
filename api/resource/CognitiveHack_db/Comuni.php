<?php
	require_once './db/dbCognitiveHack_dbManager.php';
	
/*
 * SCHEMA DB Comuni
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


$app->post('/comunis',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'nome'	=> isset($body->nome)?$body->nome:'',
		
	);

	$obj = makeQuery("INSERT INTO comuni (_id, nome )  VALUES ( null, :nome   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/comunis/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM comuni WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/comunis/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM comuni WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/comunis',	function () use ($app){
	makeQuery("SELECT * FROM comuni");
});


//CRUD - EDIT

$app->post('/comunis/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'nome'	    => isset($body->nome)?$body->nome:''
	);

	$obj = makeQuery("UPDATE comuni SET  nome = :nome   WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>