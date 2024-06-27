<?php
// Set header to output JSON
header('Content-Type: application/json');

// URL of the proxy list
$url = "https://raw.githubusercontent.com/likhonsheikhbd/proxy/main/https.txt";

// Use cURL to fetch the data
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);

// Execute cURL session
$response = curl_exec($curl);

// Check for errors
if(curl_error($curl)){
    echo json_encode(['error' => curl_error($curl)]);
} else {
    // Convert text data to JSON if necessary or simply return as string
    echo json_encode(['data' => $response]);
}

// Close cURL session
curl_close($curl);
?>
