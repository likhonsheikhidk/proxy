<?php
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

// Parse the proxies and format the data
$proxies = explode("\n", trim($response));
$proxy_list = array();

foreach ($proxies as $proxy) {
    $details = explode(":", $proxy);
    $entry = array(
        "ip" => $details[0],
        "port" => $details[1]
    );

    // Check if country information is present
    if (isset($details[2])) {
        $country_parts = explode(" ", trim($details[2]), 2);
        $entry["country"] = $country_parts[0];
        
        // Optionally add a flag emoji or link to a flag image
        $entry["flag"] = "https://www.countryflags.io/" . strtolower($country_parts[0]) . "/shiny/64.png";
    }

    $proxy_list[] = $entry;
}

echo json_encode($proxy_list);

// Close cURL session
curl_close($curl);
?>
