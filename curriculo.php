<?php

$meu_curriculo = 'imagens/Thiago-Rodrigues-Curriculo.pdf';

if (file_exists($meu_curriculo)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . $meu_curriculo . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($meu_curriculo));

    readfile($meu_curriculo);

    exit;
} else {
    echo 'O arquivo não foi encontrado.';
}
?>