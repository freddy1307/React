<?php

header("Content-type: text/html; charset=UTF-8");
echo 'Current PHP Version: ' . phpversion();

try {

$private_file="c:/firma/llave_carlos.key.pem";      // Ruta al archivo key con contraseña
$public_file="c:/firma/cert_carlos.cer.pem";

$cadena_original="||1.0|3|MUOC810214HCHRCR00|Director de Articulación de Procesos|SECRETARÍA DE EDUCACIÓN|Departamento de Control Escolar|23DPR0749T|005|23|SOSE810201HDFRND05|EDGAR|SORIANO|SANCHEZ|2|7.8|2017-01-01T12:05:00||";
//$cadena_original="||1.0|3|GAVA730717HDFRGR05|Director de Articulación de Procesos|SECRETARÍA DE EDUCACIÓN|Departamento de Control Escolar|23DPR0749T|005|23|SOSE810201HDFRND05|EDGAR|SORIANO|SANCHEZ|2|7.8|2017-01-01T12:05:00||";
echo "<br><br> cadena ".$cadena_original;

// Se obtiene la clave privada con la que se va a firmar
$private_key = openssl_get_privatekey(file_get_contents($private_file)); // $clave es la contraseña del archivo .key
$exito = openssl_sign($cadena_original,$Firma,$private_key, OPENSSL_ALGO_SHA256);

openssl_free_key($private_key);

echo "<br><br> firma ".$Firma;
$sello = base64_encode($Firma);      // lo codifica en formato base64

echo "<br><br> Sello ".$sello;
$public_key = openssl_pkey_get_public(file_get_contents($public_file));

$PubData = openssl_pkey_get_details($public_key);

$result = openssl_verify($cadena_original, $Firma, $public_key, "sha256WithRSAEncryption");
echo "<br><br> Resultado ".$result;

} catch (Exception $e) {
    echo var_dump($e->getMessage());
}

// *******************************************************************************
// Comandos para convertir los *.cer y *.key en formato pem en Linux,

// Convertir *.key a *.pem: openssl pkcs8 -inform DER -in llave.key -out llave.key.pem -passin pass:contrasenia
// Convertir *.cer a *.pem: openssl x509 -inform DER -outform PEM -in certificado.cer -pubkey > certificado.cer.pem

